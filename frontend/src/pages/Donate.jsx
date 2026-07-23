import { useState } from "react"
import { Heart, Building2, Phone, CheckCircle, AlertCircle } from "lucide-react"
import Footer from "../components/Footer"

export default function Donate() {
  const [mpesaForm, setMpesaForm] = useState({ name: "", phone: "", amount: "" })
  const [bankForm, setBankForm] = useState({ name: "", email: "", amount: "" })
  const [mpesaStatus, setMpesaStatus] = useState(null)
  const [bankStatus, setBankStatus] = useState(null)
  const [mpesaLoading, setMpesaLoading] = useState(false)
  const [bankLoading, setBankLoading] = useState(false)

  const handleMpesa = async (e) => {
    e.preventDefault()
    setMpesaLoading(true)
    setMpesaStatus(null)
    try {
      const res = await fetch("https://maisha-mosaic-backend.onrender.com/api/donate/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mpesaForm)
      })
      const data = await res.json()
      if (data.success) {
        setMpesaStatus({ type: "success", message: data.message })
        setMpesaForm({ name: "", phone: "", amount: "" })
      } else {
        setMpesaStatus({ type: "error", message: data.error || "Something went wrong" })
      }
    } catch {
      setMpesaStatus({ type: "error", message: "Cannot connect to server. Please try again." })
    } finally {
      setMpesaLoading(false)
    }
  }

  const handleBank = async (e) => {
    e.preventDefault()
    setBankLoading(true)
    setBankStatus(null)
    try {
      const res = await fetch("https://maisha-mosaic-backend.onrender.com/api/donate/bank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bankForm)
      })
      const data = await res.json()
      if (data.success) {
        setBankStatus({ type: "success", message: data.message })
        setBankForm({ name: "", email: "", amount: "" })
      } else {
        setBankStatus({ type: "error", message: data.error || "Something went wrong" })
      }
    } catch {
      setBankStatus({ type: "error", message: "Cannot connect to server. Please try again." })
    } finally {
      setBankLoading(false)
    }
  }


  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Support Our Work</p>
          <h1 className="text-4xl font-bold text-white mb-3">Make a Donation</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Your donation funds free group therapy, psychiatric consultations, and community outreach programs for individuals who cannot afford mental health care in Garissa, Kenya.
          </p>
        </div>
      </div>

     

      {/* Donation Forms */}
      <div className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">DONATE NOW</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-2 gap-8">

            {/* M-Pesa */}
            <div className="bg-white border border-gray-200 rounded p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">M-Pesa</h3>
                  <p className="text-gray-400 text-xs">Fast and secure mobile payment</p>
                </div>
              </div>

              {mpesaStatus && (
                <div className={`flex items-start gap-2 p-3 rounded mb-5 text-sm ${mpesaStatus.type === "success" ? "bg-green-50 border border-green-100 text-green-700" : "bg-red-50 border border-red-100 text-red-600"}`}>
                  {mpesaStatus.type === "success" ? <CheckCircle size={15} className="shrink-0 mt-0.5" /> : <AlertCircle size={15} className="shrink-0 mt-0.5" />}
                  {mpesaStatus.message}
                </div>
              )}

              <form onSubmit={handleMpesa} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input type="text" required placeholder="Your full name" value={mpesaForm.name}
                    onChange={e => setMpesaForm({ ...mpesaForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" required placeholder="07XXXXXXXX" value={mpesaForm.phone}
                    onChange={e => setMpesaForm({ ...mpesaForm, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Amount (KES)</label>

                  <input type="number" required placeholder="Or enter amount" value={mpesaForm.amount}
                    onChange={e => setMpesaForm({ ...mpesaForm, amount: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <button type="submit" disabled={mpesaLoading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded text-sm transition-colors">
                  {mpesaLoading ? "Processing..." : "Donate via M-Pesa"}
                </button>
              </form>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white border border-gray-200 rounded p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center text-white">
                  <Building2 size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Bank Transfer</h3>
                  <p className="text-gray-400 text-xs">Direct bank deposit or transfer</p>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-gray-50 border border-gray-100 rounded p-4 mb-6">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">Bank Details</p>
                <div className="space-y-2">
                  {[
                    { label: "Bank", value: "Absa Bank Kenya" },
                    { label: "Account Name", value: "Nimo Yakub Bashir" },
                    { label: "Account Number", value: "2050969323" },
                    { label: "Branch", value: "Garissa Branch" },
                    { label: "Swift Code", value: "BARCKEGX" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between text-xs">
                      <span className="text-gray-400">{d.label}</span>
                      <span className="font-semibold text-gray-700">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {bankStatus && (
                <div className={`flex items-start gap-2 p-3 rounded mb-5 text-sm ${bankStatus.type === "success" ? "bg-green-50 border border-green-100 text-green-700" : "bg-red-50 border border-red-100 text-red-600"}`}>
                  {bankStatus.type === "success" ? <CheckCircle size={15} className="shrink-0 mt-0.5" /> : <AlertCircle size={15} className="shrink-0 mt-0.5" />}
                  {bankStatus.message}
                </div>
              )}

              <form onSubmit={handleBank} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input type="text" required placeholder="Your full name" value={bankForm.name}
                    onChange={e => setBankForm({ ...bankForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input type="email" required placeholder="your@email.com" value={bankForm.email}
                    onChange={e => setBankForm({ ...bankForm, email: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Amount (KES)</label>

                  <input type="number" required placeholder="Or enter amount" value={bankForm.amount}
                    onChange={e => setBankForm({ ...bankForm, amount: e.target.value })}
                    className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors" />
                </div>
                <button type="submit" disabled={bankLoading}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded text-sm transition-colors">
                  {bankLoading ? "Processing..." : "Confirm Bank Donation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  )
}