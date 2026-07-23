import { Link } from "react-router-dom"
import { ArrowRight, Users, Heart, Clock, MapPin, CheckCircle, Mail, Phone } from "lucide-react"
import Footer from "../components/Footer"

export default function Volunteer() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Get Involved</p>
          <h1 className="text-4xl font-bold text-white mb-3">Volunteer With Us</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Join our team of dedicated volunteers and help us bring mental health support, awareness, and hope to communities across Garissa, Kenya.
          </p>
        </div>
      </div>

      {/* Why Volunteer */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">WHY VOLUNTEER WITH US</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Make a Real Impact", desc: "Your time and skills directly help individuals struggling with mental health challenges in Garissa County." },
              { icon: Users, title: "Join a Dedicated Team", desc: "Work alongside passionate mental health advocates, professionals, and community members who care deeply about change." },
              { icon: Clock, title: "Flexible Commitment", desc: "We offer flexible volunteering options that fit your schedule — from a few hours a week to full-time engagement." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border border-gray-200 rounded p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center text-white mb-4">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Volunteer Roles */}
      <div className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">VOLUNTEER ROLES</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Community Outreach Volunteer",
                desc: "Visit schools, mosques, churches, and community gatherings to spread mental health awareness and distribute educational materials.",
                requirements: ["Good communication skills", "Passion for community work", "Available on weekends"],
              },
              {
                title: "Group Therapy Support Volunteer",
                desc: "Assist our therapists during group therapy sessions by helping participants feel welcome, comfortable, and supported.",
                requirements: ["Empathetic and non-judgmental", "Ability to maintain confidentiality", "Consistent availability"],
              },
              {
                title: "Administrative & Events Volunteer",
                desc: "Help organise events, manage records, handle communications, and support the day-to-day running of the foundation.",
                requirements: ["Organised and detail-oriented", "Basic computer skills", "Reliable and punctual"],
              },
              {
                title: "Social Media & Awareness Volunteer",
                desc: "Help us spread our message online by creating content, managing social media pages, and raising awareness about mental health.",
                requirements: ["Social media knowledge", "Creative mindset", "Good writing skills"],
              },
            ].map((role) => (
              <div key={role.title} className="bg-white border border-gray-200 rounded p-6 hover:border-blue-200 transition-all">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{role.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{role.desc}</p>
                <ul className="space-y-1.5">
                  {role.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircle size={12} className="text-blue-700 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">HOW TO APPLY</h2>
          <div className="w-full h-px bg-blue-700 mb-1" />
          <div className="w-16 h-0.5 bg-blue-700 mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Reach out via email or phone to express your interest in volunteering with Maisha Mosaic Foundation." },
              { step: "02", title: "Brief Interview", desc: "We'll have a short conversation to understand your skills, interests, and availability to find the best role for you." },
              { step: "03", title: "Get Started", desc: "Once confirmed, you'll receive an orientation and be matched with a role where you can make the most impact." },
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

      {/* CTA */}
      <div className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center ">
          <h2 className="text-2xl font-bold text-black mb-3">Ready to Make a Difference?</h2>
          <p className="text-black-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Contact us today and take the first step toward becoming a Maisha Mosaic volunteer. Every hand we add strengthens our mission.
          </p>
          </div>
      </div>
       
      <Footer />
    </div>
  )
}