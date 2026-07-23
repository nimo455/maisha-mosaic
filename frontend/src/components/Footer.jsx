import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-[1200px] mx-auto px-10 py-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-extrabold mb-2">Maisha Mosaic Foundation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming mental health care in Garissa, Kenya through education, 
              outreach, and compassionate support.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors text-sm">Donate</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-lg mb-3">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/counselling" className="text-gray-300 hover:text-white transition-colors text-sm">Counselling</Link>
              </li>
              <li>
                <Link to="/coaching" className="text-gray-300 hover:text-white transition-colors text-sm">Coaching</Link>
              </li>
              <li>
                <Link to="/community-outreach" className="text-gray-300 hover:text-white transition-colors text-sm">Community Outreach</Link>
              </li>
              <li>
                <Link to="/spread-the-word" className="text-gray-300 hover:text-white transition-colors text-sm">Spread the Word</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-3">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300 flex items-start gap-3">
                <span className="text-blue-400 shrink-0">📍</span>
                <span>Garissa, Kenya</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <span className="text-blue-400 shrink-0">📞</span>
                <span>+254 722 471 635</span>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <span className="text-blue-400 shrink-0">✉️</span>
                <a href="mailto:maishamosaic047@gmail.com" className="hover:text-white transition-colors">
                  maishamosaic047@gmail.com
                </a>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <span className="text-blue-400 shrink-0">🕐</span>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Maisha Mosaic Foundation. All rights reserved.
          </p>
          </div>
        </div>
     
      
    </footer>
  )
}