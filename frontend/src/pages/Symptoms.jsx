import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import heroImage from "../assets/hero-image.jpg"

const symptoms = {
  mood: [
    { id: "sad", label: "😢 Feeling sad", tags: ["depression", "grief"] },
    { id: "empty", label: "😶 Feeling empty", tags: ["depression"] },
    { id: "hopeless", label: "😞 Feeling hopeless", tags: ["depression", "crisis"] },
    { id: "anxious", label: "😰 Feeling anxious", tags: ["anxiety"] },
    { id: "irritable", label: "😤 Easily irritated", tags: ["anxiety", "stress", "depression"] },
    { id: "numb", label: "😑 Emotionally numb", tags: ["trauma", "depression"] },
    { id: "fear", label: "😨 Constant fear", tags: ["anxiety", "trauma"] },
    { id: "guilt", label: "😔 Excessive guilt", tags: ["depression", "trauma"] },
  ],
  sleep: [
    { id: "insomnia", label: "🌙 Can't sleep", tags: ["anxiety", "depression", "stress"] },
    { id: "oversleep", label: "😴 Sleeping too much", tags: ["depression"] },
    { id: "fatigue", label: "🪫 Always tired", tags: ["depression", "stress"] },
    { id: "nightmares", label: "😱 Nightmares", tags: ["trauma", "anxiety"] },
    { id: "noenergy", label: "⚡ No energy", tags: ["depression", "stress"] },
    { id: "restless", label: "🛌 Restless sleep", tags: ["anxiety", "stress"] },
  ],
  thoughts: [
    { id: "worthless", label: "💔 Feeling worthless", tags: ["depression", "crisis"] },
    { id: "racing", label: "🧠 Racing thoughts", tags: ["anxiety", "stress"] },
    { id: "concentrate", label: "🌀 Can't concentrate", tags: ["anxiety", "depression", "stress"] },
    { id: "negative", label: "🗣️ Negative self-talk", tags: ["depression", "anxiety"] },
    { id: "harm", label: "⚠️ Thoughts of self-harm", tags: ["crisis", "depression"] },
    { id: "suicidal", label: "🆘 Suicidal thoughts", tags: ["crisis", "depression"] },
    { id: "memory", label: "❓ Memory problems", tags: ["stress", "trauma"] },
    { id: "flashbacks", label: "🔁 Flashbacks", tags: ["trauma"] },
  ],
  body: [
    { id: "headache", label: "🤕 Frequent headaches", tags: ["stress", "anxiety"] },
    { id: "heartrace", label: "💓 Heart racing", tags: ["anxiety", "stress"] },
    { id: "appetite", label: "🍽️ Loss of appetite", tags: ["depression", "anxiety", "stress"] },
    { id: "overeating", label: "🍔 Overeating", tags: ["depression", "stress"] },
    { id: "pain", label: "😣 Unexplained body pain", tags: ["depression", "stress", "trauma"] },
    { id: "breathe", label: "😮‍💨 Difficulty breathing", tags: ["anxiety", "stress"] },
  ],
  behaviour: [
    { id: "isolate", label: "🚪 Withdrawing from others", tags: ["depression", "anxiety", "trauma"] },
    { id: "noenjoy", label: "🎭 Lost interest in things", tags: ["depression"] },
    { id: "substances", label: "🍶 Using alcohol/substances", tags: ["depression", "trauma", "crisis", "addiction"] },
    { id: "addiction", label: "🔄 Addiction", tags: ["addiction", "depression", "crisis"] },
    { id: "avoid", label: "🏃 Avoiding situations", tags: ["anxiety", "trauma"] },
    { id: "aggression", label: "🔥 Aggression/outbursts", tags: ["stress", "trauma"] },
    { id: "cry", label: "😭 Crying frequently", tags: ["depression", "grief"] },
  ],
}

const sectionColors = {
  mood:      { bg: "bg-indigo-50", label: "text-indigo-700", border: "border-indigo-300" },
  sleep:     { bg: "bg-indigo-50", label: "text-indigo-700", border: "border-indigo-300" },
  thoughts:  { bg: "bg-indigo-50", label: "text-indigo-700", border: "border-indigo-300" },
  body:      { bg: "bg-indigo-50", label: "text-indigo-700", border: "border-indigo-300" },
  behaviour: { bg: "bg-indigo-50", label: "text-indigo-700", border: "border-indigo-300" },
}

const sectionLabels = {
  mood:      "😊 Mood & Emotions",
  sleep:     "🌙 Sleep & Energy",
  thoughts:  "🧠 Thoughts & Mind",
  body:      "💪 Body & Physical",
  behaviour: "🤝 Behaviour & Social",
}

const conditions = {
  depression: {
    label: "Depression",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    bar: "bg-blue-600",
    desc: "You may be experiencing symptoms commonly associated with depression.",
    support: "Talk to someone you trust or reach out to a mental health professional."
  },
  anxiety: {
    label: "Anxiety",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    bar: "bg-purple-600",
    desc: "Your responses suggest patterns often seen in anxiety.",
    support: "Deep breathing, grounding exercises, and talking to a therapist can help."
  },
  stress: {
    label: "Stress",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    bar: "bg-amber-600",
    desc: "You're showing signs of significant stress.",
    support: "Consider taking breaks, setting boundaries, and practicing self-care."
  },
  trauma: {
    label: "Trauma-Related",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    bar: "bg-red-600",
    desc: "Your responses may indicate you're dealing with the effects of trauma.",
    support: "Trauma-focused therapy can be very helpful."
  },
  grief: {
    label: "Grief & Loss",
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    bar: "bg-indigo-600",
    desc: "You may be experiencing grief.",
    support: "Give yourself permission to grieve. Support groups and counselling can help."
  },
  crisis: {
    label: "Urgent Support Needed",
    color: "bg-red-100 border-red-400",
    badge: "bg-red-200 text-red-800",
    bar: "bg-red-700",
    desc: "Some of your responses suggest you may be in crisis.",
    support: "You are not alone. Please reach out to a crisis line right now."
  },
  addiction: {
    label: "Substance Use / Addiction",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    bar: "bg-orange-600",
    desc: "Your responses suggest you may be struggling with substance use.",
    support: "Recovery is possible. Reach out to addiction support services."
  }
}

export default function Symptoms() {
  const [selected, setSelected] = useState(new Set())
  const [applied, setApplied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory')
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory))
      } catch (e) {
        setChatHistory([])
      }
    }
  }, [])

  const toggle = (id) => {
    setApplied(false)
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const clearAll = () => {
    setSelected(new Set())
    setApplied(false)
  }

  // ✅ FIXED — navigates to /chat with symptoms
  const handleApply = () => {
    if (selected.size === 0) return
    setLoading(true)

    const selectedArray = Array.from(selected)

    // Check if any crisis symptoms selected
    const crisisIds = ["harm", "suicidal", "substances", "addiction"]
    const hasCrisis = selectedArray.some(id => crisisIds.includes(id))

    setTimeout(() => {
      setLoading(false)
      navigate(`/chat?symptoms=${encodeURIComponent(selectedArray.join(","))}&crisis=${hasCrisis}`)
    }, 1200)
  }

  const scores = {}
  selected.forEach((id) => {
    const all = Object.values(symptoms).flat()
    const sym = all.find((s) => s.id === id)
    if (sym) sym.tags.forEach((t) => { scores[t] = (scores[t] || 0) + 1 })
  })
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date
    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`
    return date.toLocaleDateString()
  }

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history?')) {
      localStorage.removeItem('chatHistory')
      setChatHistory([])
      setShowHistory(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="Symptoms" className="w-full h-[300px] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center px-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
              How Are You Feeling? 💭
            </h1>
            <p className="text-black-300 text-lg max-w-lg">
              Select everything you have been feeling lately and tap Apply to chat with our AI support.
            </p>
          </div>
        </div>
      </div>

      {/* Chat History Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <h2 className="text-xl font-bold text-gray-900">Chat History</h2>
              </div>
              <div className="flex items-center gap-2">
                {chatHistory.length > 0 && (
                  <button onClick={clearHistory} className="text-sm text-red-500 hover:text-red-700 px-3 py-1 rounded-full hover:bg-red-50 transition-colors">
                    Clear All
                  </button>
                )}
                <button onClick={() => setShowHistory(false)} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {chatHistory.length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-5xl mb-4 block">🗨️</span>
                  <p className="text-gray-500 text-lg">No chat history yet</p>
                  <p className="text-gray-400 text-sm mt-1">Start a conversation to see it here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {chatHistory.map((chat, index) => (
                    <Link
                      key={index}
                      to="/chat"
                      state={{ selected: chat.symptoms || [] }}
                      className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 transition-all border border-gray-100 hover:border-blue-200 cursor-pointer"
                      onClick={() => setShowHistory(false)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-gray-900">
                              {chat.symptoms && chat.symptoms.length > 0
                                ? `${chat.symptoms.length} symptoms discussed`
                                : 'Chat session'}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-400">{formatDate(chat.timestamp)}</span>
                          </div>
                          {chat.symptoms && chat.symptoms.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {chat.symptoms.slice(0, 4).map((symptomId) => {
                                const allSymptoms = Object.values(symptoms).flat()
                                const symptom = allSymptoms.find(s => s.id === symptomId)
                                return symptom ? (
                                  <span key={symptomId} className="text-xs bg-white px-2 py-0.5 rounded-full border border-gray-200">
                                    {symptom.label}
                                  </span>
                                ) : null
                              })}
                              {chat.symptoms.length > 4 && (
                                <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-gray-200">
                                  +{chat.symptoms.length - 4} more
                                </span>
                              )}
                            </div>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-blue-600 font-medium">View conversation →</span>
                          </div>
                        </div>
                        <span className="text-2xl ml-4">💬</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <p className="text-xs text-gray-400 text-center">
                Your conversations are private and stored only on your device
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[860px] mx-auto px-6 py-12">

        <div className="flex items-center justify-between mb-8">
          <p className="text-black-500 text-sm">
            {selected.size > 0
              ? `✅ ${selected.size} symptom${selected.size !== 1 ? "s" : ""} selected`
              : "Categories"}
          </p>
          <div className="flex items-center gap-3">
            {selected.size > 0 && (
              <button onClick={clearAll} className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                Clear all
              </button>
            )}
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Chat History"
            >
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {chatHistory.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {chatHistory.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Symptom sections */}
        {Object.entries(symptoms).map(([cat, items]) => {
          const col = sectionColors[cat]
          return (
            <div key={cat} className={`${col.bg} rounded-2xl p-6 mb-6 border ${col.border}`}>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${col.label}`}>
                {sectionLabels[cat]}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => toggle(s.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer ${
                      selected.has(s.id)
                        ? "bg-blue-700 border-blue-700 text-white shadow-md scale-105"
                        : "bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700 hover:scale-105"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )
        })}

        {selected.size > 0 && <div className="h-28" />}
      </div>

      {/* Apply button */}
      {selected.size > 0 && (
        <button
          onClick={handleApply}
          disabled={loading}
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 ${
            loading ? "cursor-not-allowed opacity-70" : "hover:-translate-y-0.5"
          }`}
        >
          {loading ? "Analyzing..." : "Apply"}
        </button>
      )}
    </div>
  )
}
