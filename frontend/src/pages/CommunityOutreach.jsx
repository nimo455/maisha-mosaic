import { Link } from "react-router-dom"
import { Megaphone, MapPin, Users, CheckCircle, BookOpen, ArrowRight } from "lucide-react"
import Footer from "../components/Footer"

export default function CommunityOutreach() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl font-bold text-white mb-3">Community Outreach</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            We bring mental health awareness, education, and support directly to communities, schools, and public spaces across Garissa County.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* About + What we teach */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">ABOUT THIS SERVICE</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              At Maisha Mosaic Foundation, we believe that mental health support should come to the people — not the other way around. Our community outreach program takes our services directly into the heart of Garissa communities.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Through outreach, we meet people where they are — physically, emotionally, and culturally. We conduct awareness campaigns, mental health screenings, educational workshops, and connect community members with the support they need.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our outreach team consists of trained mental health advocates, community health workers, and volunteers who are passionate about making a difference in Garissa.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">WHAT WE TEACH</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <ul className="space-y-3">
              {[
                "How to recognise signs of depression, anxiety, and trauma",
                "Understanding mental health conditions and reducing stigma",
                "How to support a friend or family member who is struggling",
                "When, where, and how to seek professional help",
                "Building emotional resilience and healthy coping skills",
                "Breaking generational cycles of unaddressed mental health struggles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-blue-700 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">OUR OUTREACH PROGRAMS</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Youth Wellness Program", desc: "We reach out to young people in Garissa who feel misunderstood, judged, or lost — creating safe spaces where they can be heard, supported, and guided toward healing and a better future." },
              { title: "Family Support Workshops", desc: "We engage families to help them understand and support loved ones dealing with mental health challenges — reducing stigma at home." },
              { title: "Public Awareness Campaigns", desc: "Through community events and radio appearances, we spread the message that mental health matters and that free professional help is available in Garissa." },
            ].map((p) => (
              <div key={p.title} className="border border-gray-200 rounded-lg p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {[
            { value: "5,000+", label: "People Reached" },
            { value: "20+", label: "Villages Covered" },
            { value: "100+", label: "Volunteers" },
          ].map((s) => (
            <div key={s.label} className="bg-blue-700 text-white rounded-lg p-5 text-center">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-blue-200 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Invite Us to Your Community</h2>
          <p className="text-black-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Want us to visit your school, mosque, church, or community? Get in touch and we will organise a session for you — completely free.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 text-sm rounded no-underline hover:bg-blue-50 transition-colors">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      
      <Footer />
    </div>
  )
}