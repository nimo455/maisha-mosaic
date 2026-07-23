import { Link } from "react-router-dom"
import { Share2, MessageCircle, Globe, Send, CheckCircle, Heart, Users, Mail, Phone } from "lucide-react"
import Footer from "../components/Footer"

export default function SpreadTheWord() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Get Involved</p>
          <h1 className="text-4xl font-bold text-white mb-3">Spread the Word</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Help us break the silence around mental health. Share our mission with your community and help someone who needs support find us.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">WHY IT MATTERS</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Break the Stigma", desc: "Every conversation about mental health helps reduce the shame and silence that prevents people from seeking help." },
              { icon: Users, title: "Reach More People", desc: "Many people in Garissa don't know that free mental health support exists. Your share could change someone's life." },
              { icon: Share2, title: "Create Real Change", desc: "Awareness is the first step toward healing. When communities talk openly about mental health, everyone benefits." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border border-gray-200 rounded p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center text-white mb-4">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* How to share */}
      <div className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">HOW TO SHARE</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Globe,
                platform: "Facebook",
                desc: "Share our page and posts on Facebook to reach friends and family in your network.",
                action: "Share on Facebook",
                href: "https://facebook.com",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: Send,
                platform: "X (Twitter)",
                desc: "Tweet about mental health awareness and tag us to help spread our message further.",
                action: "Share on X",
                href: "https://twitter.com",
                color: "text-gray-800",
                bg: "bg-gray-50",
                border: "border-gray-200",
              },
              {
                icon: Share2,
                platform: "Instagram",
                desc: "Share our posts and stories on Instagram to raise awareness in your community.",
                action: "Share on Instagram",
                href: "https://instagram.com",
                color: "text-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-100",
              },
              {
                icon: MessageCircle,
                platform: "WhatsApp",
                desc: "Send our message directly to friends, family, and community groups on WhatsApp.",
                action: "Share on WhatsApp",
                href: "https://wa.me/?text=Check out Maisha Mosaic Foundation — free mental health support in Garissa, Kenya. https://maisha-mosaic.vercel.app",
                color: "text-green-600",
                bg: "bg-green-50",
                border: "border-green-100",
              },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.platform} className={`bg-white border ${s.border} rounded p-6 flex items-start gap-4`}>
                  <div className={`w-10 h-10 ${s.bg} border ${s.border} rounded flex items-center justify-center ${s.color} shrink-0`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.platform}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                    <a href={s.href} target="_blank" rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold no-underline ${s.color}`}>
                      {s.action} →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

     

      {/* Other ways */}
      <div className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">OTHER WAYS TO HELP</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Talk openly about mental health with friends and family",
              "Refer someone struggling to our free services",
              "Invite us to speak at your school, mosque, or community event",
              "Print and distribute our awareness materials in your area",
              "Wear a mental health awareness ribbon or sticker",
              "Support a friend or loved one in seeking help",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded">
                <CheckCircle size={15} className="text-blue-700 shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  )
}