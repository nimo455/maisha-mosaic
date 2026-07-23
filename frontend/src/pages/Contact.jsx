import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import Footer from "../components/Footer"

export default function Contact() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch("https://maisha-mosaic-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: "success", message: "Your message has been received. We will get back to you soon." })
        setForm({ email: "", phone: "", message: "" })
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." })
      }
    } catch {
      setStatus({ type: "error", message: "Cannot connect to server. Please try again later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero — same layout, no image, no emoji */}
      <div className="bg-blue-800 h-[280px] flex flex-col justify-center px-16">
        <h1 className="text-5xl font-extrabold text-white mb-3">Contact Us</h1>
        <p className="text-blue-100 max-w-md text-base leading-relaxed">
          We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* 3 Info Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: Mail,
              title: "Email Address",
              sub: "Send us an email anytime",
              lines: ["maishamosaic047@gmail.com"],
            },
            {
              icon: Phone,
              title: "Phone Number",
              sub: "Call us anytime",
              lines: ["+254 722 471 635", "+254 794 631 638"],
            },
            {
              icon: MapPin,
              title: "Location",
              sub: "Pay us a visit",
              lines: ["Garissa, Kenya"],
            },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{card.title}</p>
                    <p className="text-gray-400 text-xs">{card.sub}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-gray-700 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Send us a Message</h2>
          <p className="text-gray-400 text-sm mb-6">Fill in the form below and we will respond shortly.</p>

          {status && (
            <div className={`flex items-start gap-2 p-4 rounded mb-6 text-sm ${status.type === "success" ? "bg-green-50 border border-green-100 text-green-700" : "bg-red-50 border border-red-100 text-red-600"}`}>
              {status.type === "success"
                ? <CheckCircle size={15} className="shrink-0 mt-0.5" />
                : <AlertCircle size={15} className="shrink-0 mt-0.5" />}
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email Address *</label>
                <input type="email" required placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                <input type="tel" required placeholder="+254 700 000 000"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
              <textarea required rows={6} placeholder="Write your message here..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors resize-none bg-gray-50" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-sm transition-colors">
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <iframe
            title="Garissa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63797.98850903451!2d39.6266!3d-0.4532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1820a7e2e3bfffff%3A0x3a739edb10a81eaf!2sGarissa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000"
            width="100%" height="300"
            style={{ border: 0 }} allowFullScreen="" loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}