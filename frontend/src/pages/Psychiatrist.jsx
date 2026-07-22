import heroImage from "../assets/card1.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Psychiatrist() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img src={heroImage} alt="Psychiatrist" className="w-full h-[320px]" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black-200 text-lg font-bold tracking-[0.2em] uppercase mb-3">Our Services</span>
          <h1 className="text-5xl font-extrabold text-black">Psychiatrist Consultations</h1>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Professional Care</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Expert Mental Health Support</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our psychiatrist consultation service connects individuals with qualified mental health professionals who can provide accurate diagnosis, evidence-based treatment plans, and medication management where necessary.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that accessing psychiatric care in Garissa and the wider North Eastern Kenya region can be challenging. Maisha Mosaic Foundation is committed to closing this gap by bringing professional psychiatric services directly to our community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All consultations are confidential, respectful, and conducted in a comfortable, private environment. Our psychiatrists are experienced in treating a wide range of conditions including depression, anxiety disorders, bipolar disorder, PTSD, schizophrenia, and substance use disorders.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-extrabold mb-6">Consultation Details</h3>
            {[
              { icon: "📅", label: "Availability", value: "Monday to Friday" },
              { icon: "⏰", label: "Hours", value: "8:00 AM — 4:00 PM" },
              { icon: "📍", label: "Location", value: "Maisha Mosaic Centre, Garissa" },
              { icon: "⏱️", label: "Session Length", value: "45 — 60 minutes" },
              { icon: "💰", label: "Cost", value: "Subsidised / Free for qualifying individuals" },
              { icon: "📞", label: "Booking", value: "+254 722 471 635" },
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

       
        

        {/* Process */}
        <div className="bg-blue-50 rounded-2xl p-10 mb-16 border border-blue-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book Appointment", desc: "Call or visit us to schedule your consultation. We will match you with the right psychiatrist." },
              { step: "2", title: "Initial Assessment", desc: "Your psychiatrist will conduct a thorough assessment of your mental health history and current challenges." },
              { step: "3", title: "Diagnosis & Plan", desc: "You will receive a clear diagnosis and a personalised treatment plan tailored to your needs." },
              { step: "4", title: "Ongoing Support", desc: "Regular follow-up sessions ensure you are progressing and receiving the right level of care." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

       <div className="text-center py-12">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Book a Consultation Today</h2>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
    You deserve professional support. Our team is ready to walk alongside you on your journey to mental wellness.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    <Link 
      to="/contact" 
      className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
    >
      Book Now
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
