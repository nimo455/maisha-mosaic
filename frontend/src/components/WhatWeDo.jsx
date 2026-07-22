import React from "react"

function WhatWeDo() {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Education",
      description: "We deliver mental health education programs that empower individuals to understand their emotions, break the silence around mental health, and take meaningful steps toward healing and recovery.",
      stat: 80,
      statLabel: "Programs running",
      color: "bg-blue-700",
      barColor: "bg-blue-400",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
      border: "border-blue-100",
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Health",
      description: "We promote mental wellness by providing access to professional psychiatric care, counseling services, and therapeutic support — helping individuals reclaim their wellbeing and live healthier, more fulfilling lives.",
      stat: 65,
      statLabel: "Health initiatives",
      color: "bg-green-600",
      barColor: "bg-green-400",
      lightBg: "bg-green-50",
      textColor: "text-green-700",
      border: "border-green-100",
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Community Development",
      description: "We build resilient communities by working alongside local leaders, volunteers, and partner organisations to create safe, supportive environments where every individual feels valued, heard, and empowered to grow.",
      stat: 90,
      statLabel: "Community partners",
      color: "bg-purple-700",
      barColor: "bg-purple-400",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
      border: "border-purple-100",
    },
  ]

  return (
    <section className="py-10">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Our Focus</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What We Do</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">We work across three key areas to create lasting change in communities across Garissa, Kenya.</p>
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className={`bg-white border ${s.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>

              {/* Card top bar */}
              <div className={`${s.color} px-6 py-5 flex items-center gap-4`}>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  {s.icon}
                </div>
                <h3 className="text-white font-extrabold text-lg">{s.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>

                {/* Progress bar graph */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold ${s.textColor}`}>{s.statLabel}</span>
                    <span className={`text-xs font-extrabold ${s.textColor}`}>{s.stat}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${s.barColor} rounded-full transition-all duration-700`}
                      style={{ width: `${s.stat}%` }}
                    />
                  </div>

                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1 mt-4 h-10">
                    {[40, 55, 45, 70, 60, 80, s.stat].map((val, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${i === 6 ? s.barColor : "bg-gray-100"} rounded-t-sm transition-all`}
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-[10px] mt-1 text-right">Last 7 months</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatWeDo