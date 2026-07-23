import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Activity, MessageCircle, Users, BookOpen, Heart, Megaphone, GraduationCap, Phone, Mail, MapPin, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import community from "../assets/community.jpg"
import group from "../assets/group.jpg"
import counseling from "../assets/counseling.jpg"
import Footer from "./Footer"

const slides = [
  { image: card1, title: "Building Stronger Communities", desc: "Bridging the gap between individuals and their communities through understanding and compassion." },
  { image: card2, title: "Transforming Lives Through Care", desc: "Professional psychiatric care, group therapy, and counseling — free for every community member." },
  { image: card3, title: "Breaking the Silence", desc: "We challenge stigma, raise awareness, and ensure no one faces their mental health journey alone." },
  { image: card4, title: "Join Us in Making a Difference", desc: "Volunteer, donate, or spread the word — every action changes a life in our community." },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="relative h-[480px] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{s.title}</h1>
            <p className="text-blue-100 text-base mb-8 max-w-lg leading-relaxed">{s.desc}</p>
            <div className="flex gap-3">
              <Link to="/learn-more" className="bg-white text-blue-800 font-semibold px-6 py-2.5 text-sm rounded no-underline hover:bg-blue-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => setCurrent(c => (c + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all ${i === current ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"}`} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
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
    <div className="bg-white" style={{ fontFamily: "Arial, sans-serif" }}>

      <HeroSlider />

      {/* Quick Links Bar */}
      <div className="bg-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: Activity, label: "Check Symptoms", sub: "AI mental health check", href: "/symptoms" },
              { icon: MessageCircle, label: "Talk to Amani", sub: "Our AI companion", href: "/chat" },
              { icon: Heart, label: "Donate", sub: "Support our work", href: "/donate" },
              { icon: Users, label: "Volunteer", sub: "Join our team", href: "/volunteer" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Link key={item.label} to={item.href}
                  className={`flex items-center gap-3 py-5 px-6 text-white hover:bg-blue-800 transition-colors no-underline ${i < 3 ? "border-r border-blue-600" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-blue-200 text-xs">{item.sub}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">WHO WE ARE</h2>
              <div className="w-full h-px bg-blue-700 mb-1" />
              <div className="w-16 h-0.5 bg-blue-700 mb-6" />
              <h3 className="text-lg font-semibold text-gray-700 mb-4">ABOUT MAISHA MOSAIC FOUNDATION</h3>
              <div className="w-full h-px bg-blue-700 mb-1" />
              <div className="w-16 h-0.5 bg-blue-700 mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Maisha Mosaic Foundation is a community-driven non-profit organisation rooted in Garissa, Kenya. We were born from a simple but powerful observation — that too many young people in our community were being misunderstood, judged, and left behind.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Instead of asking why they were struggling, society was pushing them further away. We created Maisha Mosaic to change that — to create a space where youth are heard without judgment, where the gap between them and their communities is bridged with understanding, and where every young person has the support they need to heal and rebuild their life.
              </p>
              <Link to="/about-us" className="inline-flex items-center gap-1 bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded no-underline hover:bg-blue-800 transition-colors">
                Read More <ArrowRight size={14} />
              </Link>
            </div>

            <div>
              <img src={community} alt="Community" className="w-full h-56 object-cover mb-4 rounded" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: stats.lives_impacted.toLocaleString() + "+", label: "Lives Impacted" },
                  { value: stats.education_programs + "+", label: "Education Programs" },
                  { value: stats.health_initiatives + "+", label: "Health Initiatives" },
                  { value: stats.community_partners + "+", label: "Community Partners" },
                ].map((s) => (
                  <div key={s.label} className="bg-blue-700 text-white rounded p-4 text-center">
                    <p className="text-2xl font-bold">{s.value}</p>
                    <p className="text-blue-200 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">OUR SERVICES</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-3" />
          <p className="text-gray-500 text-sm mb-10 max-w-2xl">
            We work to ensure every individual has access to quality mental health care — all free or subsidised for community members in Garissa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Users, title: "Group Therapy", href: "/group-therapy", schedule: "Wed & Sat · 10AM–12PM" },
              { icon: GraduationCap, title: "Psychiatrist Consultations", href: "/psychiatrist", schedule: "Mon–Fri · 8AM–4PM" },
              { icon: Megaphone, title: "Community Outreach", href: "/community-outreach", schedule: "Garissa County" },
              { icon: BookOpen, title: "Coaching on Stigmatization", href: "/coaching", schedule: "By appointment" },
            ].map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.title} to={s.href} className="bg-white border border-gray-200 rounded p-6 text-center hover:shadow-md hover:border-blue-300 transition-all no-underline group block">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mx-auto mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-blue-600 text-xs">{s.schedule}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">WHAT WE DO</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Mental Health Education",
                desc: "We deliver education programs that empower individuals to understand their emotions, break the silence around mental health, and take meaningful steps toward healing and recovery.",
                points: ["Recognise signs of depression and anxiety", "Break stigma and stereotypes", "Know when and where to seek help"],
              },
              {
                icon: Heart,
                title: "Health & Wellness",
                desc: "We promote mental wellness by providing access to professional psychiatric care, counseling services, and therapeutic support — helping individuals reclaim their wellbeing.",
                points: ["Free group therapy sessions", "Subsidised psychiatric care", "Ongoing counseling support"],
              },
              {
                icon: Users,
                title: "Community Development",
                desc: "We build resilient communities by working alongside local leaders, volunteers, and partner organisations to create safe, supportive environments for everyone.",
                points: ["Community outreach programs", "Family support workshops", "Public awareness campaigns"],
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center text-white shrink-0">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle size={13} className="text-blue-700 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-3">
          {[group, counseling, card4].map((img, i) => (
            <div key={i} className="relative h-48 overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved */}
      <div className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">GET INVOLVED</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Volunteer", desc: "Join our team of mental health advocates and help us reach more people across Garissa County through outreach, education, and community support.", href: "/volunteer" },
              { icon: Heart, title: "Donate", desc: "Fund free group therapy, psychiatric consultations, and community outreach for individuals who cannot afford mental health care.", href: "/donate" },
              { icon: Megaphone, title: "Spread the Word", desc: "Help break stigma around mental health by sharing our mission. Every share reaches someone who needs support but doesn't know where to turn.", href: "/spread-the-word" },
            ].map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="bg-white border border-gray-200 rounded p-6 hover:shadow-sm hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center text-white mb-4">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <Link to={c.href} className="inline-flex items-center gap-1 text-blue-700 text-xs font-semibold no-underline hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}