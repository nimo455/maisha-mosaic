import { useState } from "react"
import heroImage from "../assets/hero-image.jpg"
import Footer from "../components/Footer"

 function Donate() {
  const [mpesa, setMpesa] = useState({ phone: "", name: "", amount: "" })
  const [bank, setBank] = useState({ name: "", email: "", amount: "" })
  const [mpesaDone, setMpesaDone] = useState(false)
  const [bankDone, setBankDone] = useState(false)
  const [mpesaLoading, setMpesaLoading] = useState(false)
  const [bankLoading, setBankLoading] = useState(false)

  const handleMpesa = (e) => setMpesa({ ...mpesa, [e.target.name]: e.target.value })
  const handleBank = (e) => setBank({ ...bank, [e.target.name]: e.target.value })

  const submitMpesa = async (e) => {
  e.preventDefault()
  setMpesaLoading(true)
  try {
    const res = await fetch("https://maisha-mosaic-backend.onrender.com/api/donate/mpesa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mpesa),
    })
    const data = await res.json()
    if (data.success) {
      setMpesaDone(true)
    } else {
      alert(data.error || "Something went wrong")
    }
  } catch (err) {
    alert("Could not connect to server. Please try again.")
  } finally {
    setMpesaLoading(false)
  }
}

 const submitBank = async (e) => {
  e.preventDefault()
  setBankLoading(true)
  try {
    const res = await fetch("https://maisha-mosaic-backend.onrender.com/api/donate/bank", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bank),
    })
    const data = await res.json()
    if (data.success) {
      setBankDone(true)
    } else {
      alert(data.error || "Something went wrong")
    }
  } catch (err) {
    alert("Could not connect to server. Please try again.")
  } finally {
    setBankLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="Donate" className="w-full h-[280px] object-cover" />
        
        <div className="absolute inset-0 flex flex-col justify-center px-16">
          <h1 className="text-5xl font-extrabold text-black mb-3">Make a Donation 💙</h1>
          <p className="text-black-100 text-lg max-w-lg">
            Your generosity helps us build stronger, healthier communities across Kenya.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Support Us</span>
          <h2 className="text-3xl font-extrabold text-blac-900 mt-2">Choose How to Donate</h2>
          <p className="text-black-400 mt-3 text-sm">Every contribution, big or small, makes a real difference.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* ── LEFT — M-Pesa ── */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            {/* Card header */}
            <div className="bg-green-600 px-8 py-6 text-white">
              <div className="flex items-center gap-3 mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
                <h3 className="text-xl font-extrabold">M-Pesa</h3>
              </div>
              <p className="text-green-100 text-sm">Fast and easy mobile payment</p>
            </div>

            <div className="p-8 flex flex-col flex-1">
              {mpesaDone ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-2">Request Sent!</h4>
                  <p className="text-gray-400 text-sm mb-2">Check your phone for the M-Pesa STK push to complete your donation of</p>
                  <p className="text-2xl font-extrabold text-green-600 mb-6">KSh {Number(mpesa.amount).toLocaleString()}</p>
                  <button
                    onClick={() => { setMpesaDone(false); setMpesa({ phone: "", name: "", amount: "" }) }}
                    className="border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-400 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Donate Again
                  </button>
                </div>
              ) : (
                <form onSubmit={submitMpesa} className="flex flex-col justify-between flex-1 gap-6">
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-xs text-green-700 flex gap-2 mb-2">
                    <span>ℹ️</span>
                    <span>You will receive an M-Pesa STK push on your phone to complete the payment.</span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Amount (KSh) *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">KSh</span>
                      <input
                        type="number"
                        name="amount"
                        value={mpesa.amount}
                        onChange={handleMpesa}
                        required
                        min="1"
                        placeholder="0.00"
                        className="w-full border border-gray-200 focus:border-green-500 rounded-xl pl-14 pr-4 py-3 text-lg font-bold text-gray-900 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">M-Pesa Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={mpesa.phone}
                      onChange={handleMpesa}
                      required
                      placeholder="+254 700 000 000"
                      className="w-full border border-gray-200 focus:border-green-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={mpesa.name}
                      onChange={handleMpesa}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 focus:border-green-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={mpesaLoading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {mpesaLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending STK Push...
                      </>
                    ) : "Donate via M-Pesa 📱"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT — Bank Transfer ── */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="bg-blue-700 px-8 py-6 text-white">
              <div className="flex items-center gap-3 mb-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="22" x2="21" y2="22" />
                  <line x1="6" y1="18" x2="6" y2="11" />
                  <line x1="10" y1="18" x2="10" y2="11" />
                  <line x1="14" y1="18" x2="14" y2="11" />
                  <line x1="18" y1="18" x2="18" y2="11" />
                  <polygon points="12 2 2 7 22 7" />
                </svg>
                <h3 className="text-xl font-extrabold">Bank Transfer</h3>
              </div>
              <p className="text-blue-100 text-sm">Direct bank deposit</p>
            </div>

            <div className="p-8">
              {/* Bank details */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">Bank Account Details</p>
                {[
                  ["Bank", "Equity Bank"],
                  ["Account Name", "Maisha Mosaic Foundation"],
                  ["Account No.", "1234567890"],
                  ["Branch", "Garissa Branch"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm py-2 border-b border-blue-100 last:border-0">
                    <span className="text-blue-500">{k}</span>
                    <span className="font-bold text-blue-900">{v}</span>
                  </div>
                ))}
              </div>

              {bankDone ? (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-2">Details Submitted!</h4>
                  <p className="text-gray-400 text-sm mb-6">Thank you! We will confirm your bank transfer of <strong className="text-blue-700">KSh {Number(bank.amount).toLocaleString()}</strong> once received.</p>
                  <button
                    onClick={() => { setBankDone(false); setBank({ name: "", email: "", amount: "" }) }}
                    className="border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-gray-400 font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submitBank} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Amount (KSh) *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">KSh</span>
                      <input
                        type="number"
                        name="amount"
                        value={bank.amount}
                        onChange={handleBank}
                        required
                        min="1"
                        placeholder="0.00"
                        className="w-full border border-gray-200 focus:border-blue-500 rounded-xl pl-14 pr-4 py-3 text-lg font-bold text-gray-900 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={bank.name}
                      onChange={handleBank}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={bank.email}
                      onChange={handleBank}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    ℹ️ After submitting, please make the transfer using the bank details above and use your name as the reference.
                  </p>

                  <button
                    type="submit"
                    disabled={bankLoading}
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {bankLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : "Submit Bank Donation 🏦"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <p className="text-center text-black-400 text-xs mt-10">
          🔒 Your payment is secure. Maisha Mosaic Foundation will never share your details.
        </p>

      </div>
      <Footer />
    </div>
  )
}

export default Donate