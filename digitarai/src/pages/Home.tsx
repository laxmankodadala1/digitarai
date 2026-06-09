import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, ShieldCheck, Mail, ArrowUpRight, Zap, RefreshCw, BarChart2, Star } from "lucide-react";
import InteractiveChart from "../components/InteractiveChart";
import SeoHead from "../components/SeoHead";

// =========================================================================
// ADJUSTABLE HOME SECTIONS (Toggle true/false to instantly add or remove sections)
// =========================================================================
const SECTION_TOGGLES = {
  hero: true,               // Hero section with Website Traffic Increasing Graph
  whyUs: true,              // Why Choose Us features
  aboutPreview: true,       // Beautiful human-centric About Us preview & values
  servicesGrid: true,       // Expert service suite cards grid
  industries: true,         // Vertical blueprints list
  testimonials: true,       // Customer success reviews
  ctaAction: true,          // Call to action banner at bottom
};

export default function Home() {
  const testimonials = [
    {
      name: "Anonymous",
      role: "VP of Growth",
      quote: "DigitarAI totally transformed our lead flow. Within 3 months, our organic traffic increased by over 200%, dropping our customer acquisition cost significantly. The AI SEO pipeline is standard-setting.",
      rating: 5,
    },
    {
      name: "Anonymous",
      role: "CMO",
      quote: "Using their PPC Precision campaigns, we achieved an immediate 4.5x consistent ROAS. Their dynamic inventory feed optimizer eliminated thousands of dollars of ad waste during our peak product seasons.",
      rating: 5,
    },
    {
      name: "Anonymous",
      role: "CEO",
      quote: "Before DigitarAI, our brand was vulnerable to competitor search displacement. They set up unified defenses, protected our rankings, and secured #1 spots for high-commercial software search phrases.",
      rating: 5,
    },
  ];

  const industries = [
    { name: "SaaS & Tech Platforms", metric: "34% CAC Reduction" },
    { name: "Global Ecommerce Brands", metric: "4.5x Avg. ROAS" },
    { name: "Healthcare & Private Clinics", metric: "68% Patient Increase" },
    { name: "Real Estate Brokerages", metric: "180% More Bookings" },
    { name: "Education & EdTech Academies", metric: "41% Lower Enrollment Cost" },
    { name: "Advanced Manufacturing & B2B", metric: "2x Lead Speed" },
    { name: "Fintech & Financial Institutions", metric: "Protected Reputation" },
    { name: "Ventures & Rapid Startups", metric: "0 to 50K Monthly Views" },
    { name: "Global Enterprise Networks", metric: "Core Speed 99th Percentile" },
  ];

  return (
    <div className="font-sans relative">
      <SeoHead
        title="Advanced AI-Powered Digital Marketing Services company | DigitarAI"
        description="Transform your enterprise traffic, qualified B2B leads, and digital marketing ROI using DigitarAI. DigitarAI is AI-Powered Digital Marketing Services company"
        keywords="DigitarAI, AI marketing, digital marketing services, SEO, SMM, PPC, search engine optimization, AI SEO, geo, aeo, increase traffic, generate leads, grow traffic, digital marketing company, best and top digital marketing company in the world, social media services, google ads, search engine ranking, orm"
        breadcrumbs={[{ name: "Home", url: "/" }]}
      />

      {/* BACKGROUND GRADIENT SYSTEM */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2FE]/40 via-white to-white pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      {SECTION_TOGGLES.hero && (
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden z-10" id="hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold leading-none select-none">
                  <Sparkles className="w-3.5 h-3.5 fill-blue-200" /> Advanced AI digital marketing
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.05]">
                  Advanced AI Digital Marketing Solutions <br />
                  <span className="gradient-text">That Drive Real Growth</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Grow your organic traffic, qualified inbound leads, advertising revenue, and global brand authority with DigitarAI.
                </p>

                {/* CTA Group */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/15 flex items-center gap-2 group"
                  >
                    Book Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="#about-preview"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm font-semibold px-7 py-3.5 rounded-xl transition flex items-center gap-2"
                  >
                    Learn Our Values
                  </Link>
                </div>

                {/* Small credentials list */}
                <div className="pt-6 border-t border-slate-150 grid grid-cols-2 sm:grid-cols-2 gap-4 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Done-For-You Execution
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> No Binding Constraints
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Detailed Performance Tracker
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Fully Encrypted API Proxy
                  </div>
                </div>
              </div>

              {/* Hero Visual: Website Traffic and Keywords Increasing Graph */}
              <div className="lg:col-span-6 w-full" id="audit-dashboard">
                <InteractiveChart initialTrack="traffic" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. WHY DIGITAR-AI */}
      {SECTION_TOGGLES.whyUs && (
        <section className="py-20 bg-slate-50 border-y border-slate-100 relative z-10" id="why-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest block font-mono">Why Choose DigitarAI</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Data-Driven Growth Engineered For Real Commercial Revenue
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Unlike legacy agencies relying on manual guesswork, we combine data science, cloud crawler logic, and seasoned marketing playbook operators to drive customer acquisitions securely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 font-display">AI-Powered Optimization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We run automated continuous audit processes to verify page rankings and instantly deploy code adjustments on sitemaps, keeping your business positioned high.
                </p>
              </div>

              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 font-display">Data-Backed Growth</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our ad bidding plans utilize predictive mathematical algorithms targeting buyers directly, completely cutting ad waste and multiplying return percentages.
                </p>
              </div>

              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 border border-violet-100">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 font-display">Full-Service Integration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From technical Search Engine Optimization up to reputation monitoring, localized map listings, and strategic inbound funnels—we drive direct integrations seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. ABOUT US PREVIEW SECTION (ADJUSTABLE & HUMANIZED) */}
      {SECTION_TOGGLES.aboutPreview && (
        <section className="py-20 bg-white relative z-10" id="about-preview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Area */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">OUR FOUNDING ETHOS</span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                  We Build Long-Term Search Systems For Active Humans, Not Crawl Bots
                </h2>
                
                <p className="text-slate-600 text-sm leading-relaxed text-slate-650">
                  Let's be completely transparent: search engine algorithms have evolved significantly. Google now acts to actively flag and suppress low-effort bulk AI writing, meaning traditional shortcuts are a recipe for search ranking penalties.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed text-slate-650">
                  At DigitarAI, we treat SEO, SMM, and paid PPC budgets with supreme craftsmanship. Our core mission is humanizing your brand value to establish real inbound traffic, qualified lead pipelines, and lasting customer loyalty:
                </p>

                {/* Bullets */}
                <div className="space-y-3 font-medium text-slate-800 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>High-Value Content Creation:</strong> We research real-world inquiries and write highly scannable guides that convert incoming visitors into actual sales leads.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Prone-Free Technical Audits:</strong> We clean sitemap files, restructure tracking indexes, and optimize code performance vectors so search engine crawlers explore your site efficiently.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Transparent Account Tracking:</strong> You have a simple performance dashboard. All changes are completely transparent, linking marketing dollars to conversion milestones.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-750 group"
                  >
                    Discover Our Core Values Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Graphical support block */}
              <div className="lg:col-span-6 bg-[#FAFBFD] border border-slate-200/50 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/20 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest block uppercase">OUR TEAM MOTTO</span>
                  <h3 className="text-lg font-bold text-slate-950 font-display">We Function as a High-Density Growth Extension</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We bypass generic support tickets. You collaborate directly with our founding strategic operators to audit and elevate your acquisition routes. We handle sitemaps, ad bidding structures, and brand sentiment defense from start to finish.
                  </p>
                  
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">Operational Retainer Index Score:</span>
                    <span className="text-emerald-500 font-extrabold font-mono text-sm">98.4% Outpatient Success</span>
                  </div>
                </div>

                <div className="border-t border-slate-150 pt-6 mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
                  <span className="bg-white border border-slate-200/50 px-3 py-1.5 rounded-xl text-[11px] shadow-sm">
                    ✨ No Robotic Bulk Spam
                  </span>
                  <span className="bg-white border border-slate-200/50 px-3 py-1.5 rounded-xl text-[11px] shadow-sm">
                    🛠️ Manual Craftsmanship
                  </span>
                  <span className="bg-white border border-slate-200/50 px-3 py-1.5 rounded-xl text-[11px] shadow-sm">
                    🔒 Enterprise-Grade Proxies
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. CORE SERVICES OVERVIEW GRID CARDS */}
      {SECTION_TOGGLES.servicesGrid && (
        <section className="py-20 bg-slate-50 border-y border-slate-100 relative z-10" id="services-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">Expertise Areas</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  Our Humanized Service Suite
                </h2>
                <p className="text-slate-600 text-sm">
                  Transform brand metrics using six dedicated optimization vectors mapped specifically to your distribution target.
                </p>
              </div>
              <Link
                to="/services"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0 group"
              >
                Learn More About Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Continuous Audits</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">SEO / Advanced AI SEO</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Maintain peak ranks and sitemap indexability. Includes technical core performance metrics checks, schema markups, and competitor gap displacement.
                  </p>
                </div>
                <Link to="/services/seo" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore SEO Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Audience Acquisition</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">SMM (Social Media Marketing) Intelligence</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Build massive authority on channels like LinkedIn, YouTube, and Instagram via data-driven creative scheduling and community building.
                  </p>
                </div>
                <Link to="/services/smm" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore SMM Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Maximizing ROAS</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Precision PPC (Pay Per Click)</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Optimize advertising campaigns through negative term pruning budgets and micro-bidding schedules, protecting campaign return ratios.
                  </p>
                </div>
                <Link to="/services/ppc" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore PPC Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 4 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Brand Integrity</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">ORM & Reputation Protection</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Repel hostile reviews, suppressor negative content parameters, monitor brand sentiments continuously to protect your incoming buyers context.
                  </p>
                </div>
                <Link to="/services/orm" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore Reputation Services <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 5 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Intellectual Assets</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Content Marketing</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Draft heavy-relevancy search guides based on parsed user inquiries to generate recurring inbound sales-qualified leads naturally.
                  </p>
                </div>
                <Link to="/services/content-marketing" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore Content Strategy <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 6 */}
              <div className="border border-slate-200/50 bg-white rounded-3xl p-6 hover:border-slate-350 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-600 font-mono font-bold block mb-3">Direct Inbound</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Smart Lead Generation</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    Automate incoming prospect discovery routes, scoring systems, and multi-step qualification questionnaires mapped straight to corporate CRMs.
                  </p>
                </div>
                <Link to="/services/lead-generation" className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Explore Lead Funnels <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. INDUSTRIES WE SERVE */}
      {SECTION_TOGGLES.industries && (
        <section className="py-20 bg-white relative z-10" id="industries">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Target Sectors</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950">
                Custom Marketing Blueprints for Core Verticals
              </h2>
              <p className="text-sm text-slate-605">
                We operate optimized growth processes tuned to meet strict constraints inside nine primary business models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl p-5 hover:bg-slate-50 transition flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 font-display">{ind.name}</h4>
                    <p className="text-[10px] text-slate-400">Standard optimization target achieved</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg shrink-0 border border-blue-100">
                    {ind.metric}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/solutions" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
                Read Detailed Solutions Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 6. CLIENT TESTIMONIALS */}
      {SECTION_TOGGLES.testimonials && (
        <section className="py-20 bg-[#F8FAFC] border-y border-slate-100 relative z-10" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Success Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950">
                Highly Endorsed by Rapid Growth Companies
              </h2>
              <p className="text-sm text-slate-600">
                Read how enterprise executives trust DigitarAI with driving traffic indices and lead flow pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    {/* Star Rating icons representation */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed mb-6 font-sans">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-slate-50 pt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-blue-600 font-display">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-display">{test.name}</h4>
                      <p className="text-[10px] text-slate-400 font-sans">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. CALL TO ACTION */}
      {SECTION_TOGGLES.ctaAction && (
        <section className="py-20 bg-blue-600 text-white relative z-10 overflow-hidden" id="cta-action">
          {/* Glow vector shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/40 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Ready to Accelerate Growth with Pure Search Craftsmanship?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Contact our strategic audit desk today for a detailed performance scan. We identify your competitor direct-search vulnerabilities and construct a unified roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-50 text-blue-600 text-sm font-bold px-8 py-4 rounded-xl transition shadow-xl"
              >
                Request Free Performance Audit Only
              </Link>
              <Link
                to="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-8 py-4 rounded-xl transition border border-blue-500"
              >
                Direct Consultation Booking
              </Link>
            </div>
            <p className="text-[10px] text-blue-250 font-mono">
              * 100% Secure. Confidential data assessment strictly complying with TLS encryption guidelines.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
