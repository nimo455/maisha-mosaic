import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    dropdown: [
      { label: "Group Therapy", href: "/group-therapy" },
      { label: "Psychiatrist Consultations", href: "/psychiatrist" },
      { label: "Community Outreach", href: "/community-outreach" },
      { label: "Coaching on Stigmatization", href: "/coaching" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

function Dropdown({ items, open, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white border border-blue-100 rounded-xl shadow-lg min-w-[220px] overflow-hidden z-50 transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 rotate-45 w-3 h-3 bg-white border-t border-l border-blue-100 rounded-tl" />
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="flex items-center gap-2 px-[18px] py-[11px] text-[#1a3a6b] text-sm font-medium border-b border-blue-50 last:border-b-0 hover:bg-blue-50 hover:text-blue-700 hover:pl-6 transition-all duration-150 no-underline"
        >
          <span className="w-[5px] h-[5px] rounded-full bg-blue-700 opacity-50 shrink-0" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ link }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    if (!link.dropdown) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const baseClass = "flex items-center gap-1 px-4 py-2.5 rounded-md text-[15px] font-bold text-blue-700 hover:bg-blue-50 transition-all duration-150 cursor-pointer whitespace-nowrap bg-transparent border-none";

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    if (link.dropdown) setOpen(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (link.dropdown) setOpen(false);
      setHovered(false);
    }, 300);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link.dropdown ? (
        <button className={baseClass} onClick={() => setOpen((v) => !v)}>
          {link.label}
          <svg className={`w-[10px] h-[7px] transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : (
        <Link to={link.href} className={baseClass}>{link.label}</Link>
      )}
      <span className={`block h-[2.5px] bg-blue-700 rounded mx-4 -mt-1 transition-all duration-200 ${hovered ? "opacity-100" : "opacity-0"}`} />
      {link.dropdown && (
        <Dropdown
          items={link.dropdown}
          open={open}
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      <header className="bg-white border-b border-blue-100 sticky top-0 z-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="max-w-[1160px] mx-auto px-10 h-[88px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline shrink-0">
            <svg width="70" height="65" viewBox="0 0 54 58" fill="none">
              <g stroke="#284378ff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 44 C15 38 13 30 14 20 C15 12 18 8 20 6" />
                <path d="M14 22 C8 18 4 14 6 8 C8 4 14 4 18 10 C16 14 14 18 14 22Z" />
                <path d="M15 30 C10 27 7 22 9 17 C11 14 16 15 17 22 C16 25 15 28 15 30Z" />
                <path d="M17 18 C14 14 13 10 15 7 C17 5 20 7 19 13 C18 15 17 17 17 18Z" />
                <path d="M14 22 C15 17 17 13 20 6" strokeWidth="1" opacity="0.7" />
                <path d="M15 30 C16 25 17 20 20 6" strokeWidth="1" opacity="0.6" />
              </g>
              <text x="14" y="52" fontSize="57" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fill="#1450c8" letterSpacing="-1">M</text>
            </svg>
            <div className="flex flex-col leading-tight gap-0.5">
              <span className="text-[15px] font-extrabold tracking-[0.18em] uppercase text-[#1450c8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>MAISHA MOSAIC</span>
              <span className="text-[12px] font-semibold tracking-[0.25em] text-[#000000] opacity-80" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV.map((link) => <NavItem key={link.label} link={link} />)}
          </nav>

          {/* Donate */}
          <Link to="/donate" className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-6 py-3 rounded-full no-underline shrink-0 transition-all duration-200 hover:-translate-y-0.5">
            Donate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden bg-transparent border-none cursor-pointer p-1.5" aria-label="Toggle menu">
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
              {menuOpen ? (
                <><line x1="2" y1="2" x2="24" y2="18" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" /><line x1="24" y1="2" x2="2" y2="18" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" /></>
              ) : (
                <><line x1="2" y1="3" x2="24" y2="3" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" /><line x1="2" y1="10" x2="24" y2="10" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" /><line x1="2" y1="17" x2="24" y2="17" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" /></>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${menuOpen ? "max-h-[600px] border-t border-blue-100" : "max-h-0"}`}>
          {NAV.map((link) => (
            <div key={link.label} className="border-b border-blue-50">
              <div onClick={() => link.dropdown && setOpenMobile(openMobile === link.label ? null : link.label)} className="flex justify-between items-center px-5 py-[14px] cursor-pointer text-[15px] font-bold text-[#1a3560]">
                {link.href && !link.dropdown ? <Link to={link.href} className="no-underline text-inherit">{link.label}</Link> : <span>{link.label}</span>}
                {link.dropdown && <span className={`text-[11px] inline-block transition-transform duration-200 ${openMobile === link.label ? "rotate-180" : "rotate-0"}`}>▼</span>}
              </div>
              {link.dropdown && openMobile === link.label && (
                <div className="bg-blue-50 pl-4">
                  {link.dropdown.map((d) => (
                    <Link key={d.label} to={d.href} className="block px-5 py-2.5 text-blue-700 text-sm no-underline border-b border-blue-100 last:border-b-0 hover:bg-blue-100 transition-colors">{d.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-5">
            <Link to="/donate" className="flex items-center justify-center gap-2 bg-blue-700 text-white text-[15px] font-bold py-3 px-5 rounded-full no-underline hover:bg-blue-800 transition-colors">Donate ♥</Link>
          </div>
        </div>
      </header>
    </>
  );
}