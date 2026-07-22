import React, { useState, useEffect } from "react"

function StatsSection() {
  const [stats, setStats] = useState({
    lives_impacted: 10000,
    education_programs: 50,
    health_initiatives: 30,
    community_partners: 100
  })

  useEffect(() => {
    fetch("https://maisha-mosaic-backend.onrender.com/api/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
  }, [])

  return (
    <section className="py-16 w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
          <div>
            <span className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase">Overview</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-1">Our Impact</h2>
          </div>
          <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-700 text-xs font-semibold">Live · Garissa, Kenya</span>
          </div>
        </div>

        {/* Top 4 metric cards - Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-7xl mx-auto">
          {[
            { label: "Lives Impacted", value: stats.lives_impacted.toLocaleString() + "+", change: "AI chat sessions", icon: "💙" },
            { label: "Education Programs", value: stats.education_programs + "+", change: "Contact messages", icon: "📚" },
            { label: "Health Initiatives", value: stats.health_initiatives + "+", change: "Donations received", icon: "🏥" },
            { label: "Community Partners", value: stats.community_partners + "+", change: "Partnered", icon: "🤝" },
          ].map((m) => (
            <div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{m.icon}</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-600">
                  {m.change}
                </span>
              </div>
              <p className="text-2xl font-extrabold text-gray-900">{m.value}</p>
              <p className="text-gray-400 text-xs mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Services — 2 column big cards - Full Width */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-extrabold text-gray-900 text-xl">Our Services</h3>
              <p className="text-gray-400 text-sm mt-1">All services are free or subsidised for community members</p>
            </div>
            <span className="text-xs bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full border border-blue-100">
              4 Active Services
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "👥", name: "Group Therapy", schedule: "Wed & Sat · 10AM–12PM", status: "Active", statusBg: "bg-blue-50", statusText: "text-blue-700", color: "bg-blue-500", lightBg: "bg-blue-50", pct: 85, desc: "Safe guided group sessions for healing and recovery together" },
              { icon: "🏥", name: "Psychiatrist Consultations", schedule: "Mon–Fri · 8AM–4PM", status: "Active", statusBg: "bg-green-50", statusText: "text-green-700", color: "bg-green-500", lightBg: "bg-green-50", pct: 70, desc: "Professional one-on-one psychiatric care and mental health support" },
              { icon: "📢", name: "Community Outreach", schedule: "Garissa County · Ongoing", status: "Ongoing", statusBg: "bg-purple-50", statusText: "text-purple-700", color: "bg-purple-500", lightBg: "bg-purple-50", pct: 60, desc: "Taking mental health awareness and support directly to communities" },
              { icon: "🎓", name: "Coaching on Stigmatization", schedule: "By appointment", status: "Available", statusBg: "bg-amber-50", statusText: "text-amber-700", color: "bg-amber-500", lightBg: "bg-amber-50", pct: 50, desc: "Workshops and coaching to break mental health stigma and stereotypes" },
            ].map((s) => (
              <div key={s.name} className={`${s.lightBg} rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-base">{s.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.schedule}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${s.statusBg} ${s.statusText} shrink-0`}>
                    {s.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2.5 bg-white rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                  </div>
                  <span className={`text-xs font-extrabold ${s.statusText}`}>{s.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default StatsSection