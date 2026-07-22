import { useState } from "react"
import heroImage from "../assets/hero-image.jpg"
import Footer from "../components/Footer"

const SHARE_URL = "https://maishamosaic.org"
const SHARE_TEXT = "Maisha Mosaic Foundation is doing incredible work in mental health, education, and community development in Garissa, Kenya. Join us in making a difference!"

export default function SpreadTheWord() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SHARE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="Spread the Word" className="w-full h-[300px] object-cover" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black-200 text-sm font-bold tracking-[0.2em] uppercase mb-2">Get Involved</span>
          <h1 className="text-5xl font-extrabold text-black">Spread the Word 📢</h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-10 py-16">

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Intro & Share Message */}
          <div>
            {/* Intro */}
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Help Us Reach More People</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                You don't need money to make a difference. Simply sharing our mission
                with your friends, family, and network can help us reach someone who needs us.
                Every share matters.
              </p>
            </div>

            {/* Share message */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">Share This Message</p>
              <p className="text-gray-700 text-base leading-relaxed italic mb-3">
                "{SHARE_TEXT}"
              </p>
              <p className="text-blue-600 text-sm font-semibold break-all">{SHARE_URL}</p>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <div className="space-y-4">

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 px-5 rounded-2xl no-underline border border-gray-100 hover:border-[#1877F2] hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-[#1877F2] transition-colors">Share on Facebook</span>
                <span className="ml-auto text-gray-300 group-hover:text-[#1877F2]">→</span>
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 px-5 rounded-2xl no-underline border border-gray-100 hover:border-black hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-black transition-colors">Share on Twitter / X</span>
                <span className="ml-auto text-gray-300 group-hover:text-black">→</span>
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 px-5 rounded-2xl no-underline border border-gray-100 hover:border-pink-400 hover:bg-pink-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">Share on Instagram</span>
                <span className="ml-auto text-gray-300 group-hover:text-pink-400">→</span>
              </a>

              
              {/* Copy Link */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center gap-4 py-4 px-5 rounded-2xl border border-gray-100 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {copied ? "Link Copied! ✓" : "Copy Link"}
                </span>
                <span className="ml-auto text-gray-300">→</span>
              </button>

            </div>
          </div>

        </div>

        {/* Why it matters - Full width below columns */}
        <div className="border-t border-gray-100 pt-12 mt-12">
          <h3 className="text-xl font-extrabold text-gray-900 mb-8 text-center">Why Your Share Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🧠", title: "Break the Stigma", desc: "Sharing openly about mental health normalises the conversation and encourages others to seek help without shame." },
              { icon: "🌍", title: "Reach More People", desc: "Every share puts our mission in front of someone who may desperately need the services we offer." },
              { icon: "💙", title: "Show You Care", desc: "Sharing is a simple act that shows your community that mental health matters and that help is available." },
            ].map((w) => (
              <div key={w.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-2xl shrink-0">{w.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{w.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div><br /><br />
      <Footer />
    </div>
  )
}