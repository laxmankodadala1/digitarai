import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Network } from "lucide-react";
import SeoHead from "../components/SeoHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: "Advanced SEO / AI SEO",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const payload = {
      access_key: "13af0e81-5f90-4e63-b3cc-c2f1ab553821",
      subject: `New DigitaRai Lead: ${formData.company}`,
      from_name: "DigitaRai Strategic Form",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceNeeded: formData.serviceNeeded,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceNeeded: "Advanced SEO / AI SEO",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 9000);
      } else {
        setErrorMsg("Transmission failed. Please check your network context or email us directly.");
      }
    } catch (error) {
      setErrorMsg("An edge network anomaly occurred. Please try submitting again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="Contact our Strategic Audit Desk"
        description="Book a detailed domain crawl checking session and receive customized PPC competitor reports. Complete our validation form for instant setup."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb visual element */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Contact & Support</span>
        </nav>

        {/* Top Header Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Validated Inquiries Gateway</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
            Secure Your <span className="gradient-text">Growth Audit Session</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill the security-cleared validation questionnaire below. Our search intelligence engineers compile your competitors keyword gaps within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Form Info */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 lg:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 font-display mb-6">Strategic Application Form</h3>

            {errorMsg && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-4 text-xs font-medium mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3 text-emerald-800">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base font-display">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Excellent. We have registered your corporate details. A DigitarAI technical analyst has initiated a deep sitemap crawl check matching keyword gaps for your listed website domain. Expect a custom performance report soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Elena Rhee"
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E.g. rhee@cloudcorp.com"
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g. +1 (555) 0192"
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800"
                  />
                </div>

                {/* Company name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Corporate Entity</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="E.g. CloudCorp Tech"
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800"
                  />
                </div>

                {/* Dropdown service needed */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block font-mono">Service Needed</label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800 font-medium"
                  >
                    <option value="Advanced SEO / AI SEO">Advanced SEO / AI SEO</option>
                    <option value="SMM Intelligence">SMM Intelligence</option>
                    <option value="Precision PPC">Precision PPC</option>
                    <option value="ORM & Reputation">ORM & Reputation Protection</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Smart Lead Generation">Smart Lead Generation</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Brief project context</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide your current website url and summarize primary ranking goals..."
                    className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 outline-none focus:bg-white focus:border-blue-500 transition text-slate-800 resize-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition shadow-md w-full inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>Securing Transmission...</>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Submit Secure Application Form
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

            <div className="mt-6 border-t border-slate-100 pt-4 flex items-start gap-2 text-[10px] text-slate-400 leading-normal">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>By submit, you authorizations DigitarAI systems to check public domain technical scores using our edge proxy servers. No raw private client parameters will be stored.</span>
            </div>

          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Coordinates card */}
            <div className="bg-slate-900 text-slate-300 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl border border-slate-850 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-550/10 rounded-full blur-3xl" />
              <div>
                <span className="text-[9px] font-bold text-blue-400 tracking-widest block uppercase font-mono mb-1">Company Coordinates</span>
                <h3 className="text-base font-bold text-white font-display">Communication Channels</h3>
              </div>

              <div className="space-y-4 text-xs font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono">ENCRYPTED EMAIL</p>
                    <p className="text-white">digitaraisolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono">SUPPORT DESK LINE</p>
                    <p className="text-white">update soon</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono">HYDERABAD HEADQUARTERS</p>
                    <p className="text-white">Hyderabad, Telangana, India.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono">SUPPORT SLA HOURS</p>
                    <p className="text-white">24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network node summary card */}
            <div className="border border-slate-100 rounded-2xl p-5 bg-white flex items-center gap-3 shadow-inner">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Network className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-slate-900 font-display">Fast Response SLA</h5>
                <p className="text-[10px] text-slate-500 leading-snug">Average time to initial crawl results dispatch today: <span className="font-bold text-blue-600 font-mono">3.4 hr</span></p>
              </div>
            </div>

          </div>

        </div>

        {/* GOOGLE MAP SECTION */}
        <section className="py-6" id="google-map-visual">
          <div className="text-center md:text-left space-y-2 mb-6">
            <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Physical Locations Map</span>
            <h3 className="text-lg font-bold font-display text-slate-950">Hyderabad Corporate Headquarters & Server Gateways</h3>
          </div>
          <div className="bg-[#0B132B] border border-slate-800 rounded-3xl p-6 min-h-[300px] text-white relative flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="20" cy="40" r="1" fill="#FFFFFF" />
                <circle cx="45" cy="50" r="1.5" fill="#3B82F6" />
                <circle cx="50" cy="55" r="2.5" fill="#10B981" />
                <circle cx="75" cy="30" r="1" fill="#FFFFFF" />
                <path d="M45,50 L50,55 M50,55 L75,30" stroke="#1E3A8A" strokeWidth="0.25" strokeDasharray="1 1" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full gap-8">
              <div>
                <span className="text-[10px] font-mono select-none text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit block mb-2">● LIVE GPS MAP CONNECTED</span>
                <p className="text-xs text-slate-300 max-w-sm">
                  Hyderabad, Telangana, India.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-12 border-t border-slate-850">
                <div>
                  <p className="text-slate-500 text-[9px]">COORDINATES</p>
                  <p className="text-emerald-400 font-bold">17.3850° N, 78.4867° E</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px]">CENTRAL NETWORK</p>
                  <p className="text-white">ASIA-SOUTH1-A</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px]">PING LATENCY</p>
                  <p className="text-emerald-400 font-bold">14ms average</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px]">SLA LEVEL</p>
                  <p className="text-white">Tier 4 Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
