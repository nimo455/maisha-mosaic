import { useState } from "react"
import heroImage from "../assets/hero-image.jpg"
import Footer from "../components/Footer"

export default function Contact() {

  const [form, setForm] = useState({ email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (data.success) {
      setSubmitted(true)
      setForm({ email: "", phone: "", message: "" })
    } else {
      alert(data.error || "Something went wrong")
    }
  } catch (err) {
    alert("Could not connect to server. Please try again.")
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative">
        <img
          src={heroImage}
          alt="Contact Us"
          className="w-full h-[300px] object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-25">
          <h1 className="text-5xl font-extrabold text-black">Contact Us 💬</h1>

          <p className="text-lg max-w-lg">
            We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        {/* ── Info Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Email Card */}
          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Email Address</h3>
                <p className="text-gray-400 text-sm">Send us an email anytime</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-5">
              <a
                href="mailto:maishamosaic047@gmail.com"
                className="text-gray-700 text-sm font-medium no-underline hover:text-blue-700 transition-colors"
              >
                maishamosaic047@gmail.com
              </a>
             
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Phone Number</h3>
                <p className="text-gray-400 text-sm">Call us anytime</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-5">
              <div>
                <a href="tel:+254722471635" className="block text-gray-700 text-sm font-medium no-underline hover:text-blue-700 transition-colors">
                  +254 722 471 635
                </a>
                <a href="tel:+254794631638" className="block text-gray-700 text-sm font-medium no-underline hover:text-blue-700 transition-colors mt-1">
                  +254 794 631 638
                </a>
              </div>
              
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Location</h3>
                <p className="text-gray-400 text-sm">Pay us a visit</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-5">
              <p className="text-gray-700 text-sm font-medium">
                Garissa, Kenya
              </p>
              
            </div>
          </div>

        </div>

        {/* ── Contact Form ── */}
        <div className="bg-gray-50 rounded-1xl border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send us a Message</h2>
          <p className="text-gray-400 text-sm mb-8">Fill in the form below and we will respond shortly.</p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm mb-6">Thank you for reaching out. We will get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+254 700 000 000"
                    className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 bg-white rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-300 transition-colors resize-none"
               />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : "Send Message →"}
              </button>
            </form>
          )}
        </div>

        {/* ── Map — Garissa Kenya ── */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            title="Maisha Mosaic Foundation — Garissa Kenya"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63788.08441533591!2d39.6366985!3d-0.4532478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182050ce7e13f5b5%3A0x7f5e7568b9e81e1!2sGarissa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
      <Footer/>
    </div>
  )
}

