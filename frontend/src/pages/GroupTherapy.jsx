import { Link } from "react-router-dom"
import { Users, Clock, MapPin, CheckCircle, Heart, ArrowRight } from "lucide-react"
import Footer from "../components/Footer"

export default function GroupTherapy() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl font-bold text-white mb-3">Group Therapy</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            A safe, guided space where individuals come together to share, heal, and support one another through their mental health journeys.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* About + Who */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">WHAT IS GROUP THERAPY</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Group therapy is a form of psychotherapy where a small group of people meet regularly to discuss their challenges, share experiences, and support one another under the guidance of a trained therapist.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              At Maisha Mosaic Foundation, our group therapy sessions provide a safe, confidential, and non-judgmental environment where participants can openly express themselves and receive both professional guidance and peer support.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sessions are conducted in Swahili and English to ensure everyone feels comfortable and understood.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">WHO CAN JOIN</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <ul className="space-y-3">
              {[
                "Anyone struggling with depression, anxiety, or trauma",
                "Individuals dealing with grief and loss",
                "People experiencing stress or burnout",
                "Those recovering from substance use or addiction",
                "Anyone who feels lonely, misunderstood, or lost",
                "Community members seeking peer support and connection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-blue-700 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">BENEFITS OF GROUP THERAPY</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "You Are Not Alone", desc: "Hearing others share similar struggles helps you realise that your experiences are not unique — and that healing is possible." },
              { title: "Peer Support", desc: "Group members offer each other encouragement, understanding, and accountability in a deeply human and meaningful way." },
              { title: "Professional Guidance", desc: "A certified therapist facilitates every session, ensuring discussions are safe, structured, and therapeutically effective." },
              { title: "Build Social Skills", desc: "Group therapy helps you practise communication, empathy, and healthy relationships in a safe setting." },
              { title: "Reduce Isolation", desc: "Regular sessions create a sense of community and belonging — especially important for those who feel cut off from others." },
              { title: "Practical Coping Tools", desc: "Each session includes practical strategies and exercises you can apply to your daily life immediately." },
            ].map((b) => (
              <div key={b.title} className="border border-gray-200 rounded-lg p-5 hover:border-blue-200 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>


        {/* How to Join */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">HOW TO JOIN</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Call, WhatsApp, or email us to express your interest in joining a group therapy session." },
              { step: "02", title: "Brief Assessment", desc: "We will have a short conversation to understand your needs and match you with the right group." },
              { step: "03", title: "Attend Your Session", desc: "Show up at Maisha Mosaic Centre on Wednesday or Saturday at 10:00 AM. No prior experience needed." },
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
      </div>

       {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Schedule", lines: ["Every Wednesday & Saturday", "10:00 AM – 12:00 PM"] },
              { icon: MapPin, title: "Location", lines: ["Maisha Mosaic Centre", "Garissa, Kenya"] },
              { icon: Heart, title: "Cost", lines: ["Completely Free", "Open to all community members"] },
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
          <h2 className="text-2xl font-bold text-black mb-3">Ready to Join a Session?</h2>
          <p className="text-black-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Take the first step toward healing. Contact us today to find out more about our group therapy sessions in Garissa.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 text-sm rounded no-underline hover:bg-blue-50 transition-colors">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="h-1 bg-gray-200" />
      <Footer />
    </div>
  )
}