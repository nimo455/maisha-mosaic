import { useState, useEffect, useRef } from "react"
import { useSearchParams, useNavigate, Link } from "react-router-dom"


const SYSTEM_PROMPT = `You are Amani, a warm, friendly and deeply empathetic mental health companion for Maisha Mosaic Foundation in Garissa, Kenya. You speak like a caring, trusted friend — never clinical, never robotic. You have unlimited patience and can have a long, flowing, natural conversation.

YOUR PERSONALITY:
- Warm, gentle, empathetic and patient
- Use simple everyday language — never clinical or cold
- Short responses — 2-5 sentences max per message
- Ask ONE question at a time to keep the conversation flowing
- Use the user's name if they share it
- Use gentle affirmations like "I hear you", "That makes sense", "Thank you for sharing that"
- Use emojis sparingly but warmly: 💙 🌱 🤝 ✨

CONVERSATION FLOW:
1. FIRST: Acknowledge their emotions warmly and ask them to share more
2. LISTEN: When they respond, acknowledge their feelings genuinely before asking anything else
3. BUILD CONNECTION: Ask follow-up questions one at a time
4. ONLY after several exchanges, gently transition to sharing insights and recommendations

MAISHA MOSAIC SERVICES:
- Group Therapy: Wed & Sat 10AM-12PM, FREE, Garissa Centre
- Psychiatrist Consultations: Mon-Fri 8AM-4PM, subsidised/free
- Community Outreach: Schools, mosques, families across Garissa, FREE
- Coaching on Stigmatization: Workshops and 1-on-1, FREE

BOOKING: Call/WhatsApp +254 700 123 456 | Email maishamosaic047@gmail.com | Walk-in: Maisha Mosaic Centre, Garissa

RULES:
- Never give medical diagnoses
- Keep responses short and conversational
- Always respond directly to what the user just said
- If they share something painful, acknowledge it with empathy before anything else
- Ask ONE follow-up question at a time
- After several exchanges, naturally weave in helpful suggestions
- If crisis symptoms (self-harm, suicidal), immediately provide +254 700 123 456
- Always end with a question OR an encouraging statement
- The conversation can go on as long as the user needs
- Remember everything shared and refer back to it naturally`

const QUICK_REPLIES = [
  "I've been feeling really down lately",
  "I'm struggling with anxiety",
  "I can't sleep properly",
  "I just need someone to talk to",
  "I'm not sure what I'm feeling",
]

const QUICK_REPLIES_AFTER = [
  "Tell me more about what I can do",
  "What services can help me?",
  "How do I book an appointment?",
  "I want to talk more about this",
]

export default function Chat() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const symptoms = searchParams.get("symptoms") || ""
  const isCrisis = searchParams.get("crisis") === "true"

  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(false)
  const [quickReplies, setQuickReplies] = useState(QUICK_REPLIES)
  const [messageCount, setMessageCount] = useState(0)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const sessionId = useRef(Date.now().toString())

  useEffect(() => {
    const symptomList = symptoms ? symptoms.split(",").map(s => s.trim()) : []

    setTimeout(() => {
      if (isCrisis) {
        setMessages([{
          role: "assistant",
          content: "Hey, I'm Amani 💙 I can see you're going through something really difficult right now. You were brave to reach out — that matters.\n\nBefore anything else, please know you're not alone. If you're in immediate danger, please call us right now: +254 700 123 456.\n\nCan you tell me a little about what's happening for you right now?",
          time: new Date()
        }])
        setShowQuickReplies(false)
      } else if (symptomList.length > 0) {
        const emotionText = symptomList.slice(0, 3).join(", ")
        const extra = symptomList.length > 3 ? ` and ${symptomList.length - 3} more` : ""
        setMessages([{
          role: "assistant",
          content: "Hey there 🌱 I'm Amani, your mental health companion from Maisha Mosaic Foundation.\n\nI can see you've logged some emotions — " + emotionText + extra + ". I'm really glad you reached out.\n\nCan you tell me more about how you're feeling? Take your time — this is a safe space and I'm here to listen 💙",
          time: new Date()
        }])
        setShowQuickReplies(false)
      } else {
        setMessages([{
          role: "assistant",
          content: "Hey there 💙 I'm Amani, your mental health companion from Maisha Mosaic Foundation.\n\nThis is a safe, judgment-free space — you can share anything with me.\n\nHow are you feeling today?",
          time: new Date()
        }])
        setShowQuickReplies(true)
      }
    }, 600)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return

    const userMsg = { role: "user", content: text, time: new Date() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setShowQuickReplies(false)
    setLoading(true)
    setMessageCount(prev => prev + 1)
 // Track session on first message only
    if (messages.length === 0) {
      fetch("http://localhost:5000/api/chat/session", { method: "POST" }).catch(() => {})
    }
    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content
      }))

      const systemWithSymptoms = SYSTEM_PROMPT +
        (symptoms ? "\n\nThe user has selected these symptoms: " + symptoms.split(",").join(", ") + ". Keep this context in mind throughout the conversation." : "")

      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          system: systemWithSymptoms
        })
      })

      const data = await res.json()
      let reply = ""

      if (data.reply) {
        reply = data.reply.trim()
      } else {
        console.error("API error:", data)
        reply = "I'm having a little trouble connecting right now. Please try again in a moment 💙"
      }

      const updatedMessages = [...newMessages, { role: "assistant", content: reply, time: new Date() }]
      setMessages(updatedMessages)

      // Save to localStorage for chat history
      const symptomList = symptoms ? symptoms.split(",").map(s => s.trim()) : []
      const existing = JSON.parse(localStorage.getItem("chatHistory") || "[]")
      const sessionIndex = existing.findIndex(s => s.sessionId === sessionId.current)
      if (sessionIndex >= 0) {
        existing[sessionIndex].messages = updatedMessages
        existing[sessionIndex].symptoms = symptomList
      } else {
        existing.unshift({
          sessionId: sessionId.current,
          timestamp: Date.now(),
          symptoms: symptomList,
          messages: updatedMessages
        })
      }
      localStorage.setItem("chatHistory", JSON.stringify(existing.slice(0, 20)))

      if (messageCount >= 2) {
        setQuickReplies(QUICK_REPLIES_AFTER)
        setTimeout(() => setShowQuickReplies(true), 500)
      }

    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm having trouble connecting right now 💙 If you need immediate support, please call us at +254 700 123 456.",
        time: new Date()
      }])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  const formatTime = (date) => {
    if (!date) return ""
    return new Date(date).toLocaleTimeString("en-KE", { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex flex-col h-screen bg-[#f0f4f8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div className={`${isCrisis ? "bg-red-600" : "bg-white"} px-5 py-4 flex items-center gap-3 border-b border-gray-100 shadow-sm`}>
        <button
          onClick={() => navigate(-1)}
          className={`${isCrisis ? "text-white/80 hover:text-white" : "text-gray-400 hover:text-gray-600"} bg-transparent border-none cursor-pointer p-1`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>

        <div className="relative">
          <div className={`w-10 h-10 rounded-full ${isCrisis ? "bg-white/20" : "bg-blue-700"} flex items-center justify-center text-lg`}>
            🌱
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </div>

        <div className="flex-1">
          <p className={`font-bold text-sm ${isCrisis ? "text-white" : "text-gray-900"}`}>Amani</p>
          <p className={`text-xs ${isCrisis ? "text-white/70" : "text-green-500"}`}>
            {isCrisis ? "Crisis Support" : "● Online · Maisha Mosaic Foundation"}
          </p>
        </div>

        {isCrisis && (
          <a href="tel:+254700123456" className="bg-white text-red-600 font-bold text-xs px-3 py-2 rounded-full no-underline">
            📞 Call Now
          </a>
        )}
      </div>

      {/* Crisis banner */}
      {isCrisis && (
        <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-center gap-2">
          <span className="text-red-500">⚠️</span>
          <p className="text-red-700 text-xs font-medium">
            Immediate danger? Call <strong>+254 700 123 456</strong> or go to your nearest hospital.
          </p>
        </div>
      )}

      {/* Symptoms pills */}
      {symptoms && (
        <div className="bg-white border-b border-gray-100 px-5 py-2.5 flex flex-wrap gap-1.5 items-center">
          <span className="text-xs text-gray-400 font-medium">Feeling:</span>
          {symptoms.split(",").slice(0, 5).map((s) => (
            <span key={s} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full font-medium">
              {s.trim()}
            </span>
          ))}
          {symptoms.split(",").length > 5 && (
            <span className="text-xs text-gray-400">+{symptoms.split(",").length - 5} more</span>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        <div className="flex justify-center">
          <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">Today</span>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-sm shrink-0 mb-1">
                🌱
              </div>
            )}
            <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-700 text-white rounded-br-none"
                  : "bg-white text-gray-800 shadow-sm rounded-bl-none"
              }`}>
                {msg.content}
              </div>
              <span className="text-[10px] text-gray-400 px-1">{formatTime(msg.time)}</span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex items-end gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-sm shrink-0">🌱</div>
            <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      {showQuickReplies && !loading && (
        <div className="px-4 pb-2">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="shrink-0 bg-white border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer shadow-sm whitespace-nowrap"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Message Amani..."
            disabled={loading}
            className="flex-1 bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 bg-blue-700 hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>

      {/*Emergency Resources */}
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-1xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
               <span className="text-1xl">🆘</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-800">Need immediate support?</p>
              <p className="text-xs text-amber-700 mt-0.5">
                If you're in crisis, please reach out to a professional right away.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href="tel:+254700123456" className="text-lg font-medium bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-amber-200 text-amber-800 transition-colors">
                  📞 Call Helpline
                </a>
                 <Link to="/contact" className="text-lg font-medium bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-amber-200 text-amber-800 transition-colors">
                  📧 Contact Us
                </Link>
                <Link to="/psychiatrist" className="text-lg font-medium bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-amber-200 text-amber-800 transition-colors">
                  🤝 Book a Session
                </Link>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}
