import { Link } from "react-router-dom"

export default function GetInvolved() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-700 text-xs font-bold tracking-[0.2em] uppercase">Get Involved</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">You Can Make a Difference</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">Every action, big or small, helps us reach more people across Garissa with mental health support.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: "🧠", label: "Check Symptoms", desc: "AI-powered mental health check", href: "/symptoms" },
            { icon: "💬", label: "Talk to Amani", desc: "Chat with our AI companion", href: "/chat" },
           
          ].map((a) => (
            <Link key={a.label} to={a.href} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:bg-blue-50 hover:border-blue-100 hover:-translate-y-1 transition-all no-underline group">
              <span className="text-3xl block mb-3">{a.icon}</span>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">{a.label}</p>
              <p className="text-gray-400 text-xs mt-1">{a.desc}</p>
            </Link>
          ))}
        </div>

        {/* Bottom 3 cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "🤝",
              title: "Volunteer",
              desc: "Join our team of mental health advocates and help us reach more people across Garissa County through outreach, education, and community support.",
              href: "/volunteer",
              color: "text-blue-700",
              bg: "bg-blue-50",
              border: "border-blue-100",
            },
            {
              icon: "💙",
              title: "Donate",
              desc: "Your donation funds free group therapy, psychiatric consultations, and community outreach for individuals who cannot afford mental health care.",
              href: "/donate",
              color: "text-red-500",
              bg: "bg-red-50",
              border: "border-red-100",
            },
            {
              icon: "📢",
              title: "Spread the Word",
              desc: "Help break the stigma around mental health by sharing our mission with your community. Every share reaches someone who needs support.",
              href: "/spread-the-word",
              color: "text-green-700",
              bg: "bg-green-50",
              border: "border-green-100",
            },
          ].map((c) => (
            <div key={c.title} className={`${c.bg} border ${c.border} rounded-2xl p-6 hover:-translate-y-1 transition-all`}>
              <span className="text-3xl block mb-3">{c.icon}</span>
              <h3 className={`font-bold text-base mb-2 ${c.color}`}>{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
              <Link to={c.href} className={`${c.color} text-xs font-bold no-underline hover:underline`}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}