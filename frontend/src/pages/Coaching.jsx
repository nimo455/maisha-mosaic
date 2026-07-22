import heroImage from "../assets/card4.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Coaching() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img src={heroImage} alt="Coaching" className="w-full h-[320px] object-cover" />
       
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black-200 text-lg font-bold tracking-[0.2em] uppercase mb-3">Our Services</span>
          <h1 className="text-3xl font-extrabold text-black">Coaching on Stigmatization & Stereotypes</h1>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        <div className="gap-16 items-center mb-20">
          <div>
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Breaking Barriers</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Challenging Stigma & Stereotypes Together</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stigma and stereotypes are among the greatest barriers to mental health care in our communities. Fear of judgment, cultural misconceptions, and deeply ingrained stereotypes prevent thousands of people from seeking the help they desperately need.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Maisha Mosaic Foundation, our coaching program directly tackles these barriers through structured educational sessions, open conversations, and community engagement. We work with individuals, families, schools, and organisations to shift mindsets and create cultures of understanding and acceptance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our coaches are trained mental health advocates with lived experience and professional expertise. They guide participants through evidence-based conversations that challenge myths, replace stereotypes with facts, and build empathy for those living with mental health challenges.
            </p>
          </div>
        </div>

        {/* What we address */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Topics</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">What We Address</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🧠",
                title: "Mental Health Stigma",
                desc: "Many people in our community associate mental illness with weakness, spiritual failure, or family shame. Our coaching replaces these harmful beliefs with understanding, compassion, and facts about mental health.",
              },
              {
                icon: "👤",
                title: "Gender Stereotypes",
                desc: "Men are often taught that seeking help is a sign of weakness. Women face different pressures. We challenge these stereotypes and create space for everyone to seek and receive support without judgment.",
              },
              {
                icon: "🌍",
                title: "Cultural & Religious Misconceptions",
                desc: "We work sensitively within cultural and religious contexts to show that seeking mental health support is compatible with — and supported by — values of compassion and community care.",
              },
              {
                icon: "📢",
                title: "Language & Labels",
                desc: "The words we use about mental health matter. We coach individuals and communities on using respectful, accurate language that empowers rather than marginalises those living with mental health challenges.",
              },
            ].map((t) => (
              <div key={t.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-blue-50 rounded-3xl p-10 mb-16 border border-blue-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">What Participants Gain</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Deeper understanding of mental health conditions",
              "Tools to challenge their own biases and assumptions",
              "Language to speak about mental health respectfully",
              "Ability to support friends and family seeking help",
              "Confidence to speak out against stigma in their community",
              "Connection to mental health resources and services",
              "Empathy and compassion for those struggling",
              "A transformed perspective on strength and vulnerability",
            ].map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-blue-700 font-bold shrink-0">✓</span> {b}
              </div>
            ))}
          </div>
        </div>

        {/* Invite Us Section - No Card */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Invite Us to Your Community</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We are available to conduct coaching sessions at schools, workplaces, religious institutions, 
            and community events across Garissa County and beyond.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Invite Us
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