import { Link } from "react-router-dom"
import { Stethoscope, Clock, MapPin, CheckCircle, Heart, ArrowRight } from "lucide-react"
import Footer from "../components/Footer"

export default function Psychiatrist() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl font-bold text-white mb-3">Psychiatrist Consultations</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Professional one-on-one mental health assessments and treatment with qualified psychiatrists — free or subsidised for all community members.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

       
        {/* About + Who */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">ABOUT THIS SERVICE</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our psychiatrist consultation service provides individuals with access to qualified mental health professionals for assessment, diagnosis, and personalised treatment plans.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Whether you are experiencing severe depression, anxiety disorders, psychosis, or any other mental health condition, our psychiatrists are here to listen, assess, and guide you toward the right treatment.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              All consultations are strictly confidential. We understand the sensitivity of mental health and ensure every patient is treated with dignity and respect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">CONDITIONS WE TREAT</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <ul className="space-y-3">
              {[
                "Depression and persistent low mood",
                "Anxiety disorders and panic attacks",
                "Post-traumatic stress disorder (PTSD)",
                "Bipolar disorder",
                "Schizophrenia and psychotic disorders",
                "Obsessive-compulsive disorder (OCD)",
                "Substance use and addiction",
                "Sleep disorders related to mental health",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-blue-700 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">THE CONSULTATION PROCESS</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book Appointment", desc: "Contact us by phone, WhatsApp, or walk in to book your consultation." },
              { step: "02", title: "Initial Assessment", desc: "Your psychiatrist will conduct a thorough assessment of your mental health history and current symptoms." },
              { step: "03", title: "Diagnosis", desc: "Based on the assessment, a professional diagnosis is made and shared with you clearly and sensitively." },
              { step: "04", title: "Treatment Plan", desc: "A personalised treatment plan is created, which may include therapy, medication, or referrals." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="text-3xl font-bold text-blue-100 shrink-0 w-10">{s.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Clock, title: "Schedule", lines: ["Monday – Friday", "8:00 AM – 4:00 PM"] },
              { icon: MapPin, title: "Location", lines: ["Maisha Mosaic Centre", "Garissa, Kenya"] },
              { icon: Heart, title: "Cost", lines: ["Free or Subsidised", "Based on individual need"] },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white shrink-0">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{card.title}</p>
                    {card.lines.map((l, i) => <p key={i} className="text-gray-500 text-sm">{l}</p>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
       

     
      {/* CTA */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Book a Consultation Today</h2>
          <p className="text-black-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            You do not have to face this alone. Our psychiatrists are here to help — professionally, confidentially, and with compassion.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 text-sm rounded no-underline hover:bg-blue-50 transition-colors">
            Book Appointment <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      
      <Footer />
    </div>
  )
}