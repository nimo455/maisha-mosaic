import { Link } from "react-router-dom"
import heroImage from "../assets/hero-image.jpg"
import WhatWeDo from "./WhatWeDo"
import StatsSection from "./StatsSection"
import GetInvolved from "./GetInvolved"
import Footer from "./Footer"

function Home() {
  return (
    <div>
     
      
      {/* Hero */}
      <div className="relative">
        <img
          src={heroImage}
          alt="Home"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-16 text-black">
          <h1 className="text-5xl font-extrabold mb-4 max-w-xl leading-tight">
            Building Stronger Communities
          </h1>
          <p className="text-gray-900 max-w-md mb-8 text-lg">
            Dedicated to improving lives through sustainable initiatives in mental health, 
            education, and community development across Kenya.
          </p>
          <Link
            to="/learn-more"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full no-underline transition-all hover:-translate-y-0.5"
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* White space below hero */}
      <div className="bg-white py-12 px-16 flex flex-col items-center gap-4">
        <Link
          to="/symptoms"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
        >
           Symptoms →
        </Link>
        <WhatWeDo />
       <StatsSection/>
       <GetInvolved/>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Home