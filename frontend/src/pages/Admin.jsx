import { useState, useEffect } from "react"
import { LayoutDashboard, Heart, MessageSquare, Users, TrendingUp, Trash2, Eye, EyeOff, RefreshCw, LogOut, Mail, Phone, Calendar, DollarSign } from "lucide-react"

const API = "https://maisha-mosaic.onrender.com"
const ADMIN_PASSWORD = "maisha2024"

function StatCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className={`w-10 h-10 rounded-md ${bg} ${color} flex items-center justify-center mb-4`}>
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-gray-400 text-xs mt-1">{label}</p>
    </div>
  )
}

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")
  const [tab, setTab] = useState("overview")
  const [donations, setDonations] = useState([])
  const [contacts, setContacts] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthed(true)
      setError("")
      fetchAll()
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  const fetchAll = async () => {
    setLoading(true)
    try {
      const [d, c, s] = await Promise.all([
        fetch(`${API}/api/donations`).then(r => r.json()),
        fetch(`${API}/api/contact`).then(r => r.json()),
        fetch(`${API}/api/stats`).then(r => r.json()),
      ])
      setDonations(Array.isArray(d) ? d : [])
      setContacts(Array.isArray(c) ? c : [])
      setStats(s)
    } catch {
      console.error("Failed to fetch")
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id) => {
    if (!confirm("Delete this message?")) return
    await fetch(`${API}/api/contact/${id}`, { method: "DELETE" })
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  const totalAmount = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0)
  const mpesaCount = donations.filter(d => d.method === "mpesa").length
  const bankCount = donations.filter(d => d.method === "bank").length

  const formatDate = (str) => {
    if (!str) return "—"
    return new Date(str).toLocaleDateString("en-KE", { day: "numeric", month: "short", year: "numeric" })
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-sm shadow-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <LayoutDashboard size={24} strokeWidth={1.5} />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Maisha Mosaic Foundation</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="Enter admin password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors pr-10"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 bg-transparent border-none cursor-pointer p-0">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-sm transition-colors">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center text-white">
              <LayoutDashboard size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Maisha Mosaic Foundation</p>
              <p className="text-xs text-gray-400">Admin Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchAll}
              className="flex items-center gap-1.5 text-gray-500 hover:text-blue-700 text-xs font-medium bg-transparent border-none cursor-pointer">
              <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button onClick={() => { setAuthed(false); setPassword("") }}
              className="flex items-center gap-1.5 text-red-500 hover:text-red-700 text-xs font-medium bg-transparent border-none cursor-pointer">
              <LogOut size={13} />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1 mb-8 w-fit shadow-sm">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "donations", label: `Donations (${donations.length})`, icon: Heart },
            { id: "messages", label: `Messages (${contacts.length})`, icon: MessageSquare },
          ].map(t => {
            const Icon = t.icon
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors border-none cursor-pointer ${tab === t.id ? "bg-blue-700 text-white shadow-sm" : "text-gray-500 hover:text-gray-700 bg-transparent"}`}>
                <Icon size={14} strokeWidth={1.5} />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={Heart} label="Total Donations" value={donations.length} color="text-blue-700" bg="bg-blue-50" />
              <StatCard icon={DollarSign} label="Amount Raised (KES)" value={totalAmount.toLocaleString()} color="text-emerald-700" bg="bg-emerald-50" />
              <StatCard icon={MessageSquare} label="Contact Messages" value={contacts.length} color="text-violet-700" bg="bg-violet-50" />
              <StatCard icon={Users} label="Lives Impacted" value={stats ? stats.lives_impacted.toLocaleString() + "+" : "—"} color="text-amber-700" bg="bg-amber-50" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Donation Methods */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-5">Donation Methods</h3>
                <div className="space-y-4">
                  {[
                    { label: "M-Pesa", count: mpesaCount, color: "bg-emerald-500" },
                    { label: "Bank Transfer", count: bankCount, color: "bg-blue-600" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.count} donation{item.count !== 1 ? "s" : ""}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full transition-all`}
                          style={{ width: donations.length > 0 ? `${(item.count / donations.length) * 100}%` : "0%" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Raised</span>
                    <span className="font-bold text-gray-900">KES {totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Recent Donations */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 text-sm mb-5">Recent Donations</h3>
                <div className="space-y-4">
                  {donations.slice(0, 5).map((d) => (
                    <div key={d.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${d.method === "mpesa" ? "bg-emerald-500" : "bg-blue-600"}`}>
                          {d.name?.charAt(0)?.toUpperCase() || "?"}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{d.name}</p>
                          <p className="text-xs text-gray-400">{d.method === "mpesa" ? "M-Pesa" : "Bank"} · {formatDate(d.created_at)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">KES {Number(d.amount).toLocaleString()}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${d.status === "completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                          {d.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  {donations.length === 0 && <p className="text-gray-400 text-sm text-center py-4">No donations yet</p>}
                </div>
              </div>

            </div>

            {/* Recent Messages */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 text-sm mb-5">Recent Messages</h3>
              <div className="space-y-3">
                {contacts.slice(0, 3).map((c) => (
                  <div key={c.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 shrink-0">
                      <Mail size={14} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-gray-900">{c.email}</p>
                        <span className="text-gray-300">·</span>
                        <p className="text-xs text-gray-400">{formatDate(c.created_at)}</p>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{c.message}</p>
                    </div>
                  </div>
                ))}
                {contacts.length === 0 && <p className="text-gray-400 text-sm text-center py-4">No messages yet</p>}
              </div>
            </div>
          </div>
        )}

        {/* Donations */}
        {tab === "donations" && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">All Donations</h3>
              <p className="text-sm text-gray-400">Total: <span className="font-bold text-gray-700">KES {totalAmount.toLocaleString()}</span></p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {["Name", "Method", "Amount (KES)", "Contact", "Reference", "Status", "Date"].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {donations.map((d) => (
                    <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${d.method === "mpesa" ? "bg-emerald-500" : "bg-blue-600"}`}>
                            {d.name?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{d.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${d.method === "mpesa" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>
                          {d.method === "mpesa" ? "M-Pesa" : "Bank"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-bold text-gray-900">{Number(d.amount).toLocaleString()}</td>
                      <td className="px-5 py-4 text-sm text-gray-500">{d.phone || d.email || "—"}</td>
                      <td className="px-5 py-4 text-xs text-gray-400 font-mono">{d.reference}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${d.status === "completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                          {d.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-gray-400 whitespace-nowrap">{formatDate(d.created_at)}</td>
                    </tr>
                  ))}
                  {donations.length === 0 && (
                    <tr><td colSpan={7} className="px-5 py-12 text-center text-gray-400 text-sm">No donations yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages */}
        {tab === "messages" && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Contact Messages</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {contacts.map((c) => (
                <div key={c.id} className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 shrink-0">
                        <Mail size={15} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <p className="text-sm font-semibold text-gray-900">{c.email}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Phone size={11} />
                            {c.phone}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={11} />
                            {formatDate(c.created_at)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.message}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a href={`mailto:${c.email}`}
                        className="text-xs text-blue-700 font-medium border border-blue-200 px-3 py-1.5 rounded-md no-underline hover:bg-blue-50 transition-colors">
                        Reply
                      </a>
                      <button onClick={() => deleteContact(c.id)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md bg-transparent border-none cursor-pointer transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {contacts.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-400 text-sm">No messages yet</div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}