import React from 'react'
import heroImage from "../assets/hero-image.jpg"
import hero1 from "../assets/group.jpg"
import hero2 from "../assets/community.jpg"
import hero3 from "../assets/counseling.jpg"
import Footer from "../components/Footer"

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="About Us" className="w-full h-[330px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-16 text-black">
          <h1 className="text-5xl font-extrabold mb-4 max-w-xl leading-tight">Building Stronger Communities</h1>
          <p className="text-gray-900 max-w-md mb-8 text-lg">
            Dedicated to improving lives through sustainable initiatives in mental health, education, and community development across Kenya.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-gray-50 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Images */}
          <div className="relative h-[620px]">
            <img src={hero2} alt="Group" className="w-full h-[500px] object-cover rounded-tr-[300px]" />
            <div className="absolute bottom-[0px] left-8 bg-blue-900 text-white p-6 py-5 px-20 object-cover">
              <p className="text-7lg font-black leading-tight">UNDERSTAND.</p>
              <p className="text-lg font-black leading-tight">EMPOWER.</p>
              <p className="text-yellow-400 text-lg font-bold italic mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Transform Lives ♡
              </p>
            </div>
            <img src={hero1} alt="" className="absolute right-0 bottom-[-0px] w-80 h-80 rounded-full border-5 border-white" />
            <img src={hero3} alt="" className="absolute left-80 -bottom-50 w-62 h-62 object-cover rounded-full border-8 border-white shadow-xl" />
          </div>

          {/* RIGHT — Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-2">About Us</h2>
            <div className="flex items-center gap-1 mb-6">
              <div className="h-1 w-10 bg-yellow-400 rounded-full" />
              <div className="h-1 w-3 bg-yellow-400 rounded-full" />
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-blue-900">Maisha Mosaic Foundation</strong> is a community-driven non-profit organisation rooted in Garissa, Kenya. We were born from a simple but powerful observation — that too many young people in our community were being misunderstood, judged, and left behind. Instead of asking why they were struggling, society was pushing them further away. We created Maisha Mosaic to change that — to create a space where the youth are heard without judgment, where the gap between them and their communities is bridged with understanding, and where every young person has the support they need to heal and rebuild their life.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-blue-900">Our Mission</strong> is to walk alongside individuals on their journey toward healing, self-discovery, and empowerment, providing the guidance, support, and resources they need to reclaim their lives and reach their full potential.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-blue-900">Our Vision</strong> is to create a society where people are not defined by their struggles, circumstances, or past mistakes, but by their strength, resilience, and ability to grow. Through awareness, counseling, mentorship, advocacy, and community support, we work to break down stigmatization and stereotypes, encourage self-confidence and self-advocacy, and inspire hope in those who may feel forgotten or alone.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-blue-900">Our Mental Health Education Programs</strong> teach communities how to recognize signs of depression, anxiety and trauma, reduce stigma, support loved ones struggling with mental health, and know when and where to seek help.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-5">
              <strong className="text-blue-900">Our Commitment</strong> is to help individuals transform pain into purpose, challenges into opportunities, and obstacles into stepping stones toward a healthier, stronger, and more meaningful life.
            </p>

            {/* Encouraging words */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-4">
              <p className="text-blue-900 text-base font-semibold leading-relaxed italic">
                "You are not your struggles. You are not your past. You are not what others say about you. You are capable of healing, growing, and becoming everything you were meant to be — and we are here to walk that journey with you. 💙"
              </p>
              <p className="text-blue-400 text-xs font-bold mt-3 uppercase tracking-wider">— Maisha Mosaic Foundation</p>
            </div>
          </div>

        </div>
      </div>

      {/* Values */}
      <div className="max-w-[1160px] mx-auto px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "💚", title: "UNDERSTAND", desc: "We listen, we learn, and we see beyond the surface.", bg: "bg-green-50", color: "text-green-700" },
            { icon: "🤝", title: "SUPPORT", desc: "We provide care, resources, and guidance to every individual.", bg: "bg-blue-50", color: "text-blue-700" },
            { icon: "⭐", title: "EMPOWER", desc: "We equip people with skills, confidence, and self-belief.", bg: "bg-yellow-50", color: "text-yellow-700" },
            { icon: "🔮", title: "TRANSFORM", desc: "We believe in second chances, new beginnings, and brighter futures.", bg: "bg-purple-50", color: "text-purple-700" },
          ].map((v) => (
            <div key={v.title} className={`${v.bg} rounded-2xl p-6 text-center`}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className={`font-extrabold text-xs tracking-widest uppercase mb-2 ${v.color}`}>{v.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-10 bg-blue-900 rounded-2xl px-10 py-8 text-center">
          <p className="text-white text-lg font-semibold leading-relaxed max-w-3xl mx-auto">
           "Every journey to healing begins with a single step. You have already taken that step by being here — and we are proud of you for it. 💙"
          </p>
        </div>
      </div><br />

      <Footer />
    </div>
  )
}

export default AboutUs