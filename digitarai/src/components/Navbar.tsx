import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page switch
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const activeClass = (path: string) => {
    if (path === "/") {
      return location.pathname === "/"
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600 transition";
    }
    return location.pathname.startsWith(path)
      ? "text-blue-600 font-semibold"
      : "text-slate-600 hover:text-blue-600 transition";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                {/* Arrowhead */}
                <path d="M 22 18 L 82 18 L 82 78" />
                <path d="M 22 18 Q 62 42 82 78" />
                {/* Shaft */}
                <path d="M 46 54 L 18 82" />
                <path d="M 32 68 L 60 40" />
                <path d="M 18 82 L 32 68" />
              </svg>
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                Digitar<span className="text-blue-600">AI</span>
              </span>
            </div>
          </Link>

          {/* Nav Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className={activeClass("/")}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group/nav">
              <Link to="/services" className={`flex items-center gap-1 ${activeClass("/services")}`}>
                Services <ChevronDown className="w-4 h-4 text-slate-400 group-hover/nav:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 pointer-events-none opacity-0 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100 transition-all duration-200">
                <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-4 grid gap-1">
                  <Link to="/services/seo" className="p-2 hover:bg-slate-50 rounded-xl flex flex-col transition">
                    <span className="font-semibold text-xs text-slate-800">Advanced SEO / AI SEO</span>
                    <span className="text-[10px] text-slate-500">Autonomous search performance indexing</span>
                  </Link>
                  <Link to="/services/smm" className="p-2 hover:bg-slate-50 rounded-xl flex flex-col transition">
                    <span className="font-semibold text-xs text-slate-800">SMM Intelligence</span>
                    <span className="text-[10px] text-slate-500">Intelligent profile creation & social scaling</span>
                  </Link>
                  <Link to="/services/ppc" className="p-2 hover:bg-slate-50 rounded-xl flex flex-col transition">
                    <span className="font-semibold text-xs text-slate-800">Precision PPC Campaigns</span>
                    <span className="text-[10px] text-slate-500">Automated remarketing & ad buying</span>
                  </Link>
                  <Link to="/services/orm" className="p-2 hover:bg-slate-50 rounded-xl flex flex-col transition">
                    <span className="font-semibold text-xs text-slate-800">ORM & Brand Protection</span>
                    <span className="text-[10px] text-slate-500">Reputation metrics & content defense</span>
                  </Link>
                  <div className="border-t border-slate-100 my-1 pt-1 flex justify-between px-2 text-[10px]">
                    <Link to="/services" className="text-blue-600 hover:underline">View All Services</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/solutions" className={activeClass("/solutions")}>Solutions</Link>
            <Link to="/how-we-help" className={activeClass("/how-we-help")}>Our Process</Link>
            <Link to="/about-us" className={activeClass("/about-us")}>About Us</Link>
            <Link to="/blogs" className={activeClass("/blogs")}>Blogs</Link>
            <Link to="/contact" className={activeClass("/contact")}>Contact</Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/10 hover:shadow-blue-600/25 flex items-center gap-1.5"
            >
              Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 absolute top-full left-0 w-full p-6 shadow-xl z-50 flex flex-col gap-4">
          <Link to="/" className={`py-2 text-base ${activeClass("/")}`}>Home</Link>
          <div className="border-b border-slate-50 py-1">
            <Link to="/services" className={`py-1 text-base block font-bold ${activeClass("/services")}`}>Services Catalog</Link>
            <div className="pl-4 grid gap-1.5 mt-2 border-l border-slate-100 text-sm">
              <Link to="/services/seo" className="text-slate-500 hover:text-blue-600">AI SEO Search Optimization</Link>
              <Link to="/services/smm" className="text-slate-500 hover:text-blue-600">SMM Strategy & Growth</Link>
              <Link to="/services/ppc" className="text-slate-500 hover:text-blue-600">Precision PPC Campaigns</Link>
              <Link to="/services/orm" className="text-slate-500 hover:text-blue-600">ORM / Brand Protection</Link>
              <Link to="/services/content-marketing" className="text-slate-500 hover:text-blue-600">AI Content Marketing</Link>
              <Link to="/services/lead-generation" className="text-slate-500 hover:text-blue-600">Smart Lead Generation</Link>
            </div>
          </div>
          <Link to="/solutions" className={`py-2 text-base ${activeClass("/solutions")}`}>Solutions Overview</Link>
          <Link to="/how-we-help" className={`py-2 text-base ${activeClass("/how-we-help")}`}>How We Help (Audit & Scaling)</Link>
          <Link to="/about-us" className={`py-2 text-base ${activeClass("/about-us")}`}>About Us</Link>
          <Link to="/blogs" className={`py-2 text-base ${activeClass("/blogs")}`}>Blogs & AI Marketing Trends</Link>
          <button className="bg-slate-50 p-0 text-left">
            <Link to="/contact" className={`py-2 text-base block ${activeClass("/contact")}`}>Contact & Map</Link>
          </button>
          
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-semibold py-3 rounded-xl transition shadow-md mt-2 flex items-center justify-center gap-2"
          >
            Get Free Consultation Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
