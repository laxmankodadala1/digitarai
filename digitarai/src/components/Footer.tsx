import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 8000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 font-sans relative overflow-hidden">
      {/* Decorative dark grid line */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-900 pb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-5">
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
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Digitar<span className="text-blue-500">AI</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
              DigitarAI is a top-tier, enterprise-grade AI Digital Marketing solutions developer. We transform enterprise growth through deep optimization algorithms and automated ad campaigns.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://dev.digitarai.pages.dev/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center border border-slate-800 transition text-slate-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://dev.digitarai.pages.dev/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-500 hover:text-white flex items-center justify-center border border-slate-800 transition text-slate-400"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dev.digitarai.pages.dev/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 hover:text-white flex items-center justify-center border border-slate-800 transition text-slate-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/how-we-help" className="hover:text-blue-400 transition">Our Process</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-400 transition">Insights & Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Audit Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Services & Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-4">Focus Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services/seo" className="hover:text-blue-400 transition">Advanced AI SEO</Link></li>
              <li><Link to="/services/smm" className="hover:text-blue-400 transition">SMM Intelligence</Link></li>
              <li><Link to="/services/ppc" className="hover:text-blue-400 transition">Precision PPC Campaigns</Link></li>
              <li><Link to="/services/orm" className="hover:text-blue-400 transition">ORM & Reputation Protect</Link></li>
              <li><Link to="/services/content-marketing" className="hover:text-blue-400 transition">AI Content Marketing</Link></li>
              <li><Link to="/services/lead-generation" className="hover:text-blue-400 transition">Smart Lead Generation</Link></li>
            </ul>
          </div>


      {/* Column 4: Contact Us */}
        <div>
          <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-4">
            Contact Us
          </h4>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Have questions about scaling your traffic? Get in touch with our digital marketing experts today.
          </p>
          <a
            href="https://dev.digitarai.pages.dev/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/10"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

        {/* Copyright & Bottom policies list */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 DigitarAI. All Rights Reserved. Advanced AI Digital Marketing Corporation.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition underline decoration-dotted">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition underline decoration-dotted">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
