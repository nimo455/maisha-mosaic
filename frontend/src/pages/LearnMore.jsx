import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function LearnMore() {
  return ( 
    <div>

{/* Hero */}
<div className="bg-blue-800 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Maisha Mosaic Foundation</p>
    <h1 className="text-4xl font-bold text-white mb-3">Learn More</h1>
    <div className="w-12 h-0.5 bg-blue-400 mb-5" />
    <p className="text-blue-100 text-sm max-w-lg leading-relaxed">
      Understand who we are, what we do, and how we are changing lives across Garissa, Kenya.
    </p>
  </div>
</div>

      {/* Page Content */}
      <div className="max-w-[1160px] mx-auto px-10 py-24">
        <h2 className="text-3xl font-extrabold text-black-700 mb-6">
         Maisha Mosaic Foundation
        </h2>
        <p className="text-gray-900 text-lg leading-relaxed">
        At Maisha Mosaic Foundation, we believe that thriving communities are built when every individual has access to support, opportunity, and hope. Our mission is to create lasting positive change by addressing some of the most pressing challenges facing communities across Kenya, particularly in the areas of mental health, education, and community development.
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
          We recognize that many individuals and families face barriers that limit their ability to achieve their full potential. Mental health challenges, limited access to educational resources, social inequality, and economic hardships can have a significant impact on personal well-being and community growth. Maisha Mosaic Foundation was established to help bridge these gaps by providing support, resources, and opportunities that empower people to build better futures for themselves and their communities.
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
          Through mental health awareness campaigns, accessible counseling services, support groups, educational empowerment programs, and community-driven development initiatives, we work to promote emotional well-being, resilience, and social inclusion. We are committed to reducing the stigma surrounding mental health and creating safe spaces where individuals can seek help, share their experiences, and receive the support they need.
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
         Our mental health education programs teach communities how to recognize signs of depression, anxiety and trauma, reduce stigma, support loved ones struggling with mental health, and know when and where to seek help
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
          Community engagement is at the heart of everything we do. We work closely with local leaders, volunteers, mental health professionals, educators, and partner organizations to identify community needs and develop practical, sustainable solutions. By encouraging collaboration and active participation, we help communities become stronger, more resilient, and better equipped to address their own challenges.
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
          Our vision extends beyond providing immediate support. We strive to create long-term impact by empowering individuals, strengthening families, and fostering communities where everyone has the opportunity to thrive. Through compassion, integrity, collaboration, and service, we are building a future where mental well-being, education, and community development are accessible to all.
        </p>
        <p className="text-gray-900 text-lg leading-relaxed mt-4">
          Join us on this journey to create a mosaic of hope, resilience, and opportunity for communities across Kenya. Together, we can build stronger communities and a brighter future for all.
        </p>

      </div>
      <Footer />
    </div>
    
  )
}

export default LearnMore