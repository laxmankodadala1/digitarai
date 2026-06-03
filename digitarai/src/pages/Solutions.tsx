import { useState } from "react";
import { solutionsData } from "../data";
import { Sparkles, Brain, AlertOctagon, Target, CheckCircle, ArrowRight, Cpu, ShoppingBag, Rocket, Globe, MapPin, HeartPulse, GraduationCap, Building2 } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { Link } from "react-router-dom";

export default function Solutions() {
  const [selectedSlug, setSelectedSlug] = useState<string>("saas");

  const currentSolution = solutionsData.find((s) => s.slug === selectedSlug) || solutionsData[0];

  const getSolutionIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "Rocket":
        return <Rocket className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "MapPin":
        return <MapPin className={className} />;
      case "HeartPulse":
        return <HeartPulse className={className} />;
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Building2":
        return <Building2 className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="Custom Growth Solutions for Primary Verticals"
        description="Verify how DigitarAI tackles high customer acquisition costs, organic site speed drops, and ranking limits for technology, ecommerce, healthcare, and enterprise sectors."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb visual element */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Solutions</span>
        </nav>

        {/* Top Header Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Custom Industry Playbooks</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
            Tailormade <span className="gradient-text">Vertical Strategies</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Stop deploying generic templates. DigitarAI analyzes the exact performance bottlenecks inside your industry sector, creating self-correcting keyword indexation campaigns and bidding pipelines.
          </p>
        </div>

        {/* Selector layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Select Button list */}
          <div className="lg:col-span-4 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block px-3 mb-2 font-mono">Select Business Sector</span>
            {solutionsData.map((sol) => (
              <button
                key={sol.slug}
                onClick={() => setSelectedSlug(sol.slug)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                  selectedSlug === sol.slug
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {getSolutionIcon(sol.icon, `w-4.5 h-4.5 ${selectedSlug === sol.slug ? "text-white" : "text-blue-600"}`)}
                  <span>{sol.industry}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            ))}
          </div>

          {/* Solution detail block (Challenges, AI Analysis, Strategy, Expected Results) */}
          <div className="lg:col-span-8 bg-white border border-slate-200/65 rounded-3xl p-6 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Header branding */}
            <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 font-mono block mb-1">Corporate Playbook Overview</span>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  {currentSolution.title}
                </h2>
              </div>
              <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shrink-0 flex items-center gap-2">
                {getSolutionIcon(currentSolution.icon, "w-4 h-4 text-blue-600")}
                <span>Target: {currentSolution.industry}</span>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="space-y-8">
              
              {/* Challenges */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <AlertOctagon className="w-4 h-4 text-amber-500" /> Sector Demands & Obstacles
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  {currentSolution.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Analysis */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                  <Brain className="w-4.5 h-4.5 text-blue-600" /> Proprietary Machine Intelligence Analysis
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed italic pl-1">
                  &ldquo;{currentSolution.aiAnalysis}&rdquo;
                </p>
              </div>

              {/* Marketing Strategy */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Target className="w-4 h-4 text-blue-600" /> Applied Execution Tactics
                </h4>
                <div className="grid gap-2 text-xs">
                  {currentSolution.strategy.map((strat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 hover:bg-slate-50 rounded-xl transition">
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold font-mono px-2 py-0.5 rounded leading-none mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-slate-600 font-medium">{strat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Results */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Project Milestones & Proven Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentSolution.results.map((res, idx) => (
                    <div key={idx} className="bg-emerald-50/30 border border-emerald-150 p-4 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-800">
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA hook */}
            <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
              <p>Maximize your index metrics securely today with DigitarAI.</p>
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl transition">
                Receive Free Strategy Outline
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
