import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import { ArrowLeft, CheckCircle2, Search, Users, Target, Shield, FileText, UserCheck, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import SeoHead from "../components/SeoHead";
import InteractiveChart from "../components/InteractiveChart";

export default function Services() {
  const { serviceSlug } = useParams();

  // If there is a route parameter, render the custom dedicated sub-page for that service.
  if (serviceSlug) {
    const service = servicesData.find((s) => s.slug === serviceSlug);

    // If an invalid service is inputted, redirect to standard main list
    if (!service) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center font-sans">
          <h2 className="text-xl font-bold">Service Catalog Route Not Detected</h2>
          <p className="text-slate-500 mb-4">The selected service track is being calibrated.</p>
          <Link to="/services" className="text-blue-600 hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Go back to Services index
          </Link>
        </div>
      );
    }

    // Assign Lucide Icons dynamically based on lookup string
    const renderIcon = (iconName: string, className = "w-10 h-10 text-blue-600") => {
      switch (iconName) {
        case "Search":
          return <Search className={className} />;
        case "Users":
          return <Users className={className} />;
        case "Target":
          return <Target className={className} />;
        case "ShieldAlert":
        case "Shield":
          return <Shield className={className} />;
        case "FileText":
          return <FileText className={className} />;
        case "UserCheck":
          return <UserCheck className={className} />;
        default:
          return <Sparkles className={className} />;
      }
    };

    return (
      <div className="font-sans py-12 lg:py-20 relative">
        {/* Schema markup inject standard */}
        <SeoHead
          title={`${service.name} Solutions & Optimizations`}
          description={service.shortDesc}
          faqSchema={service.faqs}
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${service.slug}` },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Visual */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{service.name}</span>
          </nav>

          {/* Go Back button */}
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-bold mb-8 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Complete Services Catalog
          </Link>

          {/* Core Page Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-100 pb-16">
            <div className="lg:col-span-7 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {renderIcon(service.icon, "w-8 h-8 text-blue-600")}
              </div>
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider block font-mono">Specialized Solutions Suite</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Unique bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {service.details.map((detail, keyIdx) => (
                  <div key={keyIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Inquiry Widget */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <span className="text-[10px] text-blue-600 tracking-widest uppercase font-mono font-bold block mb-1">Interactive Action Panel</span>
              <h4 className="text-base font-bold text-slate-900 mb-3 font-display">Ready to secure {service.name} ranks?</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Receive an immediate SEO crawler score audit and customized ROI forecast based on your live sitemaps.
              </p>

              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center block py-3 rounded-xl transition shadow-md shadow-blue-600/10"
                >
                  Book Free Consultation Audit
                </Link>
                <Link
                  to="/how-we-help"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-center text-slate-700 block py-3 rounded-xl transition"
                >
                  Review Our Workflow Timeline
                </Link>
              </div>
            </div>
          </div>

          {/* Subservices Breakdown Grid (Required lists for SEO, SMM, PPC, etc.) */}
          {service.subservices && service.subservices.length > 0 && (
            <div className="py-16 space-y-12">
              <div className="max-w-3xl">
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block mb-2">Technical Areas</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                  Detailed Operational Architecture of {service.name}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  We deploy systematic sub-methods aligning code structures, dynamic citation listings, and targeted demographic bidding options securely.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.subservices.map((sub, sidx) => (
                  <div key={sidx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-display mb-2">{sub.title}</h3>
                      <p className="text-xs text-slate-500 mb-5 leading-relaxed">{sub.description}</p>
                    </div>

                    {sub.bullets && sub.bullets.length > 0 && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2 font-mono">Service Focus Items:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sub.bullets.map((b, bidx) => (
                            <div key={bidx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Timeline representation list for single service */}
          {service.process && service.process.length > 0 && (
            <div className="py-16 bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100 mb-16">
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono block">Delivery Cycle</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">Our 5-Step {service.name} Execution Process</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {service.process.map((p, pidx) => (
                  <div key={pidx} className="bg-white border border-slate-100 rounded-xl p-4 relative shadow-sm">
                    <span className="text-xl font-bold text-blue-100 font-mono absolute top-2 right-3">0{pidx + 1}</span>
                    <h5 className="font-bold text-xs text-slate-900 mb-1 font-display">Step {pidx + 1}</h5>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="py-12 border-t border-slate-100">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                  <HelpCircle className="w-6 h-6 text-blue-600 mx-auto" />
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">Service Clarifications & FAQs</h3>
                </div>
                <div className="grid gap-6">
                  {service.faqs.map((faq, fidx) => (
                    <div key={fidx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                      <h4 className="text-xs font-bold text-slate-900 font-display flex items-start gap-2">
                        <span className="text-blue-600">Q:</span> {faq.question}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-2 pl-4 border-l border-blue-100">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // If no params slug, render the dynamic Services master list overview catalog page.
  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="Enterprise Marketing & SEO Custom Services Catalog"
        description="Comprehensive analysis of DigitarAI technical marketing categories including SEO, SMM, and PPC setups designed for massive commercial growths."
        keywords="digitarai, ai seo, seo services, smm services, website ranking, ppc, search engine optimization, orm services, ads, geo, social media, advanced seo"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Dynamic Capabilities Map</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-none">
            Digital Optimization & <span className="gradient-text">Growth Services</span>
          </h1>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Select one of our core strategic channels below to explore on-page optimization tactics, technical crawl reports, and negative key blocking matrices tailored for your brand.
          </p>
        </div>

        {/* Big high impact list mapping all services */}
        <div className="space-y-12">
          {servicesData.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 lg:p-10 shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] text-blue-600 font-bold font-mono tracking-widest uppercase">Service 0{idx + 1}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">{s.name} Setup Page</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">{s.shortDesc}</p>
                
                {/* Bullets mapping */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {s.details.map((bullet, bidx) => (
                    <span key={bidx} className="bg-slate-50 text-[10px] text-slate-600 font-medium px-3 py-1 rounded-full border border-slate-100">
                      • {bullet}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interaction button block */}
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to={`/services/${s.slug}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-4 rounded-xl transition shadow-md w-full sm:w-auto inline-flex items-center justify-center gap-2 group"
                >
                  View Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
