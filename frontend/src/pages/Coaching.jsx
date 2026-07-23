import { Link } from "react-router-dom"
import { GraduationCap, Clock, MapPin, CheckCircle, Users, ArrowRight } from "lucide-react"
import Footer from "../components/Footer"

export default function Coaching() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl font-bold text-white mb-3">Coaching on Stigmatization</h1>
          <div className="w-12 h-0.5 bg-blue-400 mb-5" />
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Breaking the silence around mental health stigma through personal coaching, group workshops, and community education across Garissa, Kenya.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* About + Topics */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">ABOUT THIS SERVICE</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Stigma is one of the biggest barriers preventing people from seeking mental health support. At Maisha Mosaic Foundation, we directly address this through targeted coaching and education programs.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our coaching sessions help individuals, families, schools, and organisations understand mental health better, challenge harmful beliefs, and create environments where seeking help is encouraged — not judged.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sessions are available in Swahili, English, and Somali to ensure everyone in Garissa can access and benefit from this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">TOPICS WE COVER</h2>
            <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-6" />
            <ul className="space-y-3">
              {[
                "What mental health stigma is and where it comes from",
                "How stigma affects individuals and communities",
                "Breaking cultural and religious misconceptions about mental health",
                "How to talk about mental health openly and supportively",
                "Supporting a friend or family member without judgment",
                "Creating stigma-free environments in schools and workplaces",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-blue-700 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who it is for */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">WHO IS THIS FOR</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Individuals", desc: "Anyone who has experienced stigma, self-stigma, or wants to better understand mental health for themselves and those around them." },
              { title: "Families", desc: "Families who want to better support a loved one dealing with mental health challenges without shame or misunderstanding." },
              { title: "Communities", desc:"Local communities, religious institutions, and neighbourhood groups who want to understand mental health better and create environments where seeking help is encouraged and celebrated."},
            ].map((w) => (
              <div key={w.title} className="border border-gray-200 rounded-lg p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">EXPECTED OUTCOMES</h2>
          <div className="w-full h-px bg-blue-700 mb-1" /><div className="w-16 h-0.5 bg-blue-700 mb-10" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Increased awareness and understanding of mental health",
              "Reduced fear and shame around seeking help",
              "More open conversations about mental health in families and communities",
              "Stronger support networks for those struggling with mental health",
              "Greater empathy and compassion within communities",
              "Reduction in discrimination against those with mental health conditions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <CheckCircle size={14} className="text-blue-700 shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Request a Coaching Session</h2>
          <p className="text-black-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Ready to break the stigma in your community, school, or workplace? Contact us to arrange a free coaching session in Garissa.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 text-sm rounded no-underline hover:bg-blue-50 transition-colors">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      
      <Footer />
    </div>
  )
}