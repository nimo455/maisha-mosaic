import heroImage from "../assets/card2.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function GroupTherapy() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="Group Therapy" className="w-full h-[320px] object-cover" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black-200 text-lg font-bold tracking-[0.2em] uppercase mb-3">Our Services</span>
          <h1 className="text-5xl font-extrabold text-black">Group Therapy</h1>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">What Is It</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Healing Together</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Group therapy at Maisha Mosaic Foundation brings together individuals who are experiencing similar emotional and mental health challenges in a safe, supportive, and confidential environment. Led by trained and certified therapists, our sessions create a space where every voice is heard and every story matters.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Research consistently shows that sharing experiences with others who understand what you are going through can be one of the most powerful forms of healing. In group therapy, you discover that you are not alone, that others have walked similar paths, and that recovery and growth are possible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our group therapy sessions are open to anyone in the community struggling with anxiety, depression, trauma, grief, addiction, or any other mental health challenge. No prior therapy experience is required — just the courage to show up.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-extrabold mb-6">Session Details</h3>
            {[
              { icon: "📅", label: "Schedule", value: "Every Wednesday & Saturday" },
              { icon: "⏰", label: "Time", value: "10:00 AM — 12:00 PM" },
              { icon: "📍", label: "Location", value: "Maisha Mosaic Centre, Garissa" },
              { icon: "👥", label: "Group Size", value: "6 — 12 participants" },
              { icon: "💰", label: "Cost", value: "Free of charge" },
              { icon: "🗣️", label: "Language", value: "Swahili & English" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4 py-3 border-b border-blue-600 last:border-0">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-wider">{s.label}</p>
                  <p className="font-semibold text-sm">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">The Process</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">What to Expect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Welcome & Introductions", desc: "Each session begins in a warm, welcoming space. The therapist introduces the topic and participants are invited to share at their own comfort level. There is no pressure to speak." },
              { step: "02", title: "Guided Discussion", desc: "A trained therapist facilitates an open, structured conversation around a mental health theme. Participants share their experiences, insights, and coping strategies." },
              { step: "03", title: "Reflection & Tools", desc: "Each session closes with practical tools, coping techniques, and affirmations that participants can carry into their daily lives between sessions." },
            ].map((s) => (
              <div key={s.step} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="text-4xl font-extrabold text-blue-200 mb-4">{s.step}</div>
                <h3 className="font-bold text-black-900 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 rounded-2xl p-10 mb-16 border border-blue-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Benefits of Group Therapy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Realise you are not alone in your struggles",
              "Build meaningful connections with others",
              "Learn coping skills from peers and therapists",
              "Gain different perspectives on your challenges",
              "Develop communication and social skills",
              "Experience a sense of belonging and community",
              "Build confidence and self-esteem over time",
              "Safe, confidential and non-judgmental space",
            ].map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-blue-700 font-bold shrink-0">✓</span> {b}
              </div>
            ))}
          </div>
        </div>

       {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Join a Session?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
             Taking the first step is the hardest part. Reach out to us and we will guide you through the process — with care, compassion, and no judgment.
         </p>
       <div className="flex flex-wrap gap-4 justify-center">
        <Link 
          to="/contact" 
            className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
            </Link>
               <Link 
                to="/donate" 
              className="border-2 border-blue-700 text-blue-700 font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-700 hover:text-white transition-all"
               >
               Support This Program
            </Link>
         </div>
        </div>
      </div>
      <Footer />
    </div>  
  )
}
