import heroImage from "../assets/volunteer.jpg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"


export default function Volunteer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative">
        <img src={heroImage} alt="Volunteer" className="w-full h-[320px]" />
       
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-32">
          <span className="text-black-200 text-sm font-bold tracking-[0.2em] uppercase mb-3">Get Involved</span>
          <h1 className="text-5xl font-extrabold text-black">Volunteer With Us</h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-10 py-16">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">Make a Difference</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Join Our Team of Volunteers</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Maisha Mosaic Foundation, volunteers are the heartbeat of our work. 
            Whether you have professional skills or simply a passion for helping others, 
            there's a place for you in our community.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Why Volunteer */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Why Volunteer With Us?</h3>
            <div className="space-y-6">
              {[
                { 
                  icon: "🤝", 
                  title: "Make a Tangible Impact", 
                  desc: "Your time and skills directly benefit individuals and families in need of mental health support in Garissa." 
                },
                { 
                  icon: "📚", 
                  title: "Gain Valuable Experience", 
                  desc: "Develop new skills, gain hands-on experience in mental health and community development, and build your CV." 
                },
                { 
                  icon: "🌍", 
                  title: "Join a Supportive Community", 
                  desc: "Connect with like-minded individuals who share your passion for mental health advocacy and community service." 
                },
                { 
                  icon: "💙", 
                  title: "Be Part of the Solution", 
                  desc: "Help break the stigma around mental health in your community and be part of creating lasting change." 
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Volunteer Roles */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Volunteer Opportunities</h3>
            <div className="space-y-6">
              {[
                { 
                  icon: "👨‍🏫", 
                  title: "Community Health Worker", 
                  desc: "Visit schools, mosques, and community centers to conduct mental health awareness sessions and screenings." 
                },
                { 
                  icon: "📞", 
                  title: "Helpline Support", 
                  desc: "Provide compassionate listening and basic mental health support to callers on our helpline." 
                },
                { 
                  icon: "📢", 
                  title: "Awareness Campaigner", 
                  desc: "Help organize and run community events, workshops, and awareness campaigns across Garissa County." 
                },
                { 
                  icon: "✍️", 
                  title: "Administrative & Communications", 
                  desc: "Support our team with social media, content creation, data entry, and day-to-day operations." 
                },
              ].map((role) => (
                <div key={role.title} className="flex items-start gap-5 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-3xl shrink-0">{role.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{role.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Requirements - Two Column */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 my-16">
          <h3 className="text-xl font-extrabold text-gray-900 text-center mb-6">Who Can Volunteer?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "No prior experience required — we provide training",
              "Must be 18 years or older (or 16+ with parental consent)",
              "Committed to our mission and values",
              "Able to dedicate at least 5 hours per week",
              "Passionate about mental health advocacy",
              "Good communication and interpersonal skills",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                <span className="text-blue-700 font-bold shrink-0">✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA - No Card */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our team of dedicated volunteers and help us bring mental health support 
            to every corner of Garissa County.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-700 text-white font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-blue-700 text-blue-700 font-bold px-10 py-4 rounded-full no-underline hover:bg-blue-700 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
        <Footer />
    </div>
  )
}