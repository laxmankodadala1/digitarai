import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BrainCircuit, Lightbulb, Code2, LineChart, Cpu, Sparkles, CheckCircle2, Milestone, ArrowRight } from "lucide-react";
import SeoHead from "../components/SeoHead";

interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  icon: any;
  duration: string;
  deliverables: string[];
  description: string;
}

export default function HowWeHelp() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps: WorkflowStep[] = [
    {
      step: 1,
      title: "Business Audit",
      subtitle: "Full-Scale Site Crawling",
      icon: Search,
      duration: "Days 1 - 3",
      deliverables: ["Full crawl logs indexation check", "Competitor keywords displacement metrics", "Core Web Vitals diagnostic"],
      description: "We execute deep visual and code audits, diagnosing indexing vulnerabilities, missing schemas, and layout shift faults using custom crawling agents.",
    },
    {
      step: 2,
      title: "AI Analysis",
      subtitle: "Gap and Intent Parsing",
      icon: BrainCircuit,
      duration: "Days 4 - 6",
      deliverables: ["Keyword gap clusters list", "Backlink reputation mapping", "Traffic drop pattern analysis"],
      description: "Our machine intelligence loops parse high-volume query matrices, matching actual buyer searches to high-commercial semantic nodes.",
    },
    {
      step: 3,
      title: "Strategy Development",
      subtitle: "Custom Keyword Allocation",
      icon: Lightbulb,
      duration: "Days 7 - 10",
      deliverables: ["6-Month SEO Campaign roadmap", "PPC ad negative block directory", "SMM voice content outlines"],
      description: "Instead of copying standard templates, we create unique bidding guidelines and content lists focused purely on maximizing customer capture.",
    },
    {
      step: 4,
      title: "Implementation",
      subtitle: "Code Adjustments and Setup",
      icon: Code2,
      duration: "Weeks 2 - 3",
      deliverables: ["JSON-LD Schemas injection", "PPC auto-bidding algorithms config", "Tracking pixel verification"],
      description: "We deploy secure meta integrations, rebuild server-level sitemaps, inject custom HTML schemas, and configure ad spending thresholds directly.",
    },
    {
      step: 5,
      title: "Optimization",
      subtitle: "Position and Conversion Checks",
      icon: LineChart,
      duration: "Ongoing (Bi-Hourly)",
      deliverables: ["Crawl check status dashboards", "Negative broad-phrase search logs", "A/B creative split reviews"],
      description: "Our systems run continuous performance checks, shifting bid parameters and publishing instant page adjustments to maintain page rank.",
    },
    {
      step: 6,
      title: "Scaling",
      subtitle: "Volume Displacement",
      icon: Cpu,
      duration: "Months 2+",
      deliverables: ["Programmatic lander deployment", "Global translation SEO", "Omnichannel ad expansions"],
      description: "We secure your search domain authority and multiply campaign budgets to capture broader regional map packs and search volumes securely.",
    },
  ];

  const currentStep = workflowSteps.find((s) => s.step === activeStep) || workflowSteps[0];

  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="Our Complete AI Marketing Audit to Scaling Process"
        description="Verify how DigitarAI runs initial audits, parses user intent gaps, injects code, and optimizes campaigns dynamically."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Process", url: "/how-we-help" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb visual element */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Our Process</span>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">6-Step Operational Timeline</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
            Our Transparent <span className="gradient-text">Growth Blueprint</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See exactly how we audit your active domain index, construct proprietary semantic models, and translate technical optimizations into measurable client acquisition funnels.
          </p>
        </div>

        {/* Workflow graphic & details block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Timeline Visual Map (Left side) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Interactive Stage selector</span>
            
            <div className="relative border-l border-slate-200 pl-6 space-y-8 ml-3">
              {workflowSteps.map((ws) => {
                const IconComponent = ws.icon;
                const isSelected = activeStep === ws.step;

                return (
                  <div
                    key={ws.step}
                    onClick={() => setActiveStep(ws.step)}
                    className="relative cursor-pointer group"
                  >
                    {/* Circle timeline dot marker */}
                    <div
                      className={`absolute -left-[35px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-white text-slate-400 border-slate-200 group-hover:border-blue-500 group-hover:text-blue-500"
                      }`}
                    >
                      {ws.step}
                    </div>

                    <div
                      className={`p-4 rounded-xl border transition ${
                        isSelected
                          ? "bg-white border-blue-200 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-slate-50"
                      }`}
                    >
                      <h4 className="font-bold text-xs text-slate-900 font-display flex items-center gap-2">
                        <span>{ws.title}</span>
                        <span className="text-[10px] font-mono font-medium text-slate-400">({ws.duration})</span>
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{ws.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step details block (Right side) */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 lg:p-10 shadow-xl relative overflow-hidden">
            
            {/* Glow decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    <currentStep.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest font-mono">Process Step 0{currentStep.step}</span>
                    <h3 className="text-xl font-bold font-display text-white">{currentStep.title}</h3>
                  </div>
                </div>
                <span className="text-emerald-400 text-xs font-mono bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/20">
                  {currentStep.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              {/* Key Deliverables list */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Concrete Deliverables List:</span>
                <div className="grid gap-2">
                  {currentStep.deliverables.map((del, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-850 p-3 rounded-xl flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Consultation helper */}
              <div className="border-t border-slate-800 pt-6 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400">Want custom parameters?</span>
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
                >
                  Request Fast Audit Run <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
