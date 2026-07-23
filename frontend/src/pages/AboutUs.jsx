import { Link } from "react-router-dom"
import { Users, BookOpen, Heart, Activity, Target, Eye } from "lucide-react"
import card7 from "../assets/card7.jpg"
import group from "../assets/group.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpg"
import Footer from "../components/Footer"

export default function AboutUs() {
  return (
    <div className="bg-white">

      {/* Section 1 — OVERVIEW with light blue bg + 3 cards like NCK */}
      <div className="bg-blue-800 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-3 tracking-wide">ABOUT US</h1>
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="h-px w-16 bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="h-px w-16 bg-white/50" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Who We Are",
                desc: "Maisha Mosaic Foundation is a community-driven non-profit organisation rooted in Garissa, Kenya. We were born from a simple but powerful observation — that too many young people were being misunderstood, judged, and left behind.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To walk alongside individuals on their journey toward healing, self-discovery, and empowerment — providing the guidance, support, and resources they need to reclaim their lives and reach their full potential.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "A society where people are not defined by their struggles or past mistakes, but by their strength, resilience, and ability to grow — where every individual feels seen, heard, valued, and empowered.",
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-8 text-left shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-5">
                    <Icon size={40} className="text-blue-700" strokeWidth={1.2} />
                  </div>
                  <h3 className="text-blue-700 font-bold text-lg text-center mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Section 2 — Why Maisha Mosaic? — Blue panel left + images right like NCK */}
      <div className="py-0">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">Why Maisha Mosaic Foundation?</h2>
          <div className="flex justify-center mb-10">
            <div className="h-0.5 w-12 bg-blue-700" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Blue panel */}
          <div className="md:w-1/2 bg-blue-500 p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Our Story at a Glance</h3>
            <p className="text-blue-50 text-sm leading-relaxed mb-4">
              We were born from a simple but powerful observation — that too many young people in Garissa were being misunderstood, judged, and left behind. Instead of asking why they were struggling, society was pushing them further away.
            </p>
            <p className="text-blue-50 text-sm leading-relaxed mb-4">
              We created Maisha Mosaic to change that — to create a space where the youth are heard without judgment, where the gap between them and their communities is bridged with understanding.
            </p>
            <p className="text-blue-50 text-sm leading-relaxed mb-4">
              Through awareness, counseling, mentorship, advocacy, and community support, we work to break down stigmatization and stereotypes, encourage self-confidence, and inspire hope in those who may feel forgotten or alone.
            </p>
            <p className="text-blue-50 text-sm leading-relaxed">
              At Maisha Mosaic Foundation, we are committed to helping individuals transform pain into purpose, challenges into opportunities, and obstacles into stepping stones toward a healthier, stronger, and more meaningful life.
            </p>
          </div>

          {/* Image grid */}
          <div className="md:w-1/2 grid grid-cols-2">
            <img src={card7} alt="Community" className="w-full h-56 object-cover" />
            <img src={group} alt="Counseling" className="w-full h-56 object-cover" />
            <img src={card5} alt="Group" className="w-full h-56 object-cover" />
            <img src={card6} alt="Volunteer" className="w-full h-56 object-cover" />
          </div>
        </div>
      </div>

      {/* Section 3 — OUR FUNCTIONS like NCK grid */}
      <div className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-2 tracking-wide">OUR FUNCTIONS</h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="h-px w-16 bg-blue-700" />
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="h-px w-16 bg-blue-700" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-blue-200">
            {[
              { icon: BookOpen, desc: "To deliver mental health education programs that empower individuals to understand their emotions and take meaningful steps toward healing." },
              { icon: Heart, desc: "To promote mental wellness by providing access to professional psychiatric care, counseling, and therapeutic support for all community members." },
              { icon: Users, desc: "To build resilient communities by working alongside local leaders, volunteers, and partner organisations across Garissa County." },
              { icon: Activity, desc: "To conduct community outreach, bringing mental health awareness and support directly into schools, mosques, churches, and public spaces." },
              { icon: Target, desc: "To break the stigma around mental health by providing coaching, workshops, and education that challenge harmful beliefs and stereotypes." },
              { icon: Eye, desc: "To create safe, supportive environments where every individual — especially the youth — feels valued, heard, and empowered to grow." },
              { icon: BookOpen, desc: "To train and support community mental health advocates, volunteers, and professionals who can extend our reach across Garissa." },
              { icon: Heart, desc: "To mobilise resources and partnerships that enable us to provide free or subsidised mental health care to those who need it most." },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="border border-blue-200 p-6 text-center hover:bg-blue-50 transition-colors">
                  <div className="flex justify-center mb-4">
                    <Icon size={36} className="text-blue-700" strokeWidth={1.2} />
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Section 4 — OUR CORE VALUES — light blue bg + images in center like NCK */}
      <div className="py-14 bg-blue-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-blue-900 tracking-wide">OUR CORE VALUES</h2>
            <p className="text-gray-500 text-sm mt-2">That Make Us Who We Are</p>
            <div className="flex justify-center mt-3">
              <div className="h-0.5 w-12 bg-blue-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 items-start">
            {/* Left values */}
            <div className="space-y-8 pr-6">
              {[
                { title: "COMPASSION", desc: "We approach every individual with genuine empathy, kindness, and a deep commitment to their wellbeing and healing journey." },
                { title: "INTEGRITY", desc: "We operate with honesty, transparency, and accountability in everything we do — building trust within our community." },
                { title: "RESPECT", desc: "We honour the dignity, culture, and lived experience of every person we serve, without judgment or discrimination." },
                { title: "INCLUSIVITY", desc: "We welcome everyone regardless of their background, gender, religion, or circumstances into our safe spaces." },
              ].map((v, i) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-700 shrink-0 mt-1.5" />
                  <div className="border-b border-gray-200 pb-4 flex-1">
                    <h3 className="font-extrabold text-blue-900 text-sm mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center images */}
            <div className="grid grid-cols-2 gap-2 px-2">
              <img src={card7} alt="" className="w-full h-40 object-cover rounded" />
              <img src={group} alt="" className="w-full h-40 object-cover rounded" />
              <img src={card5} alt="" className="w-full h-40 object-cover rounded col-span-2" />
            </div>

            {/* Right values */}
            <div className="space-y-8 pl-6">
              {[
                { title: "EMPOWERMENT", desc: "We equip individuals with the tools, confidence, and support they need to take charge of their own healing and growth." },
                { title: "COMMUNITY", desc: "We believe lasting change happens when communities come together with understanding, empathy, and shared purpose." },
                { title: "EXCELLENCE", desc: "We are committed to delivering the highest quality of mental health support, education, and advocacy in everything we do." },
                { title: "HOPE", desc: "We believe in the potential of every person to heal, grow, and build a better future — no matter where they are starting from." },
              ].map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="flex-1 border-b border-gray-200 pb-4 text-right">
                    <h3 className="font-extrabold text-blue-900 text-sm mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-700 shrink-0 mt-1.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  )
}