import heroImage from "../assets/card3.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function CommunityOutreach() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img src={heroImage} alt="Community Outreach" className="w-full h-[320px] object-cover" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black text-lg font-bold tracking-[0.2em] uppercase mb-3">Our Services</span>
          <h1 className="text-5xl font-extrabold text-black">Community Outreach</h1>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-10 py-16">

        <div className="gap-16 items-center mb-20">
          <div>
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Reaching Out</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Taking Mental Health to the Community</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Maisha Mosaic Foundation, we believe that mental health support should come to the people — not the other way around. Our community outreach program takes our services directly into schools, mosques, churches, markets, and neighbourhoods across Garissa County.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Through outreach, we meet people where they are — physically, emotionally, and culturally. We conduct awareness campaigns, mental health screenings, educational workshops, and connect community members with the support they need.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our outreach team consists of trained mental health advocates, community health workers, and volunteers who are passionate about making a difference. Together we are building a community that understands, supports, and prioritises mental wellbeing.
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "50+", label: "Community Sessions Held", icon: "📚" },
            { number: "5,000+", label: "People Reached", icon: "👥" },
            { number: "20+", label: "Villages Covered", icon: "🏘️" },
            { number: "100+", label: "Volunteers", icon: "🤝" },
          ].map((s) => (
            <div key={s.label} className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-extrabold text-blue-700 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.number}</div>
              <p className="text-gray-500 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Programs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Our Outreach Programs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Community Education Program", desc: "We visit schools, colleges, and community centers to educate on mental health awareness, substance abuse prevention, stress management, and how to seek help." },
              { icon: "👨‍👩‍👧", title: "Family Support Workshops", desc: "We engage families to help them understand and support loved ones dealing with mental health challenges and substance abuse — reducing stigma at home." },
              { icon: "📢", title: "Public Awareness Campaigns", desc: "Through community events, radio appearances, and social media, we spread the message that mental health matters, substance abuse is preventable, and help is available." },
            ].map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved Section - No Card */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get Involved in Our Outreach</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you want to volunteer, invite us to your school or community, or support our outreach financially — 
            we would love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </Link>
            <Link 
              to="/donate" 
              className="border-2 border-blue-700 text-blue-700 font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-700 hover:text-white transition-all"
            >
              Support Outreach
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}