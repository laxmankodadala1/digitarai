import React, { useState } from "react";
import { Sparkles, RefreshCw, Layers, Database, Lock, Search, Cpu, CheckCircle2, AlertCircle } from "lucide-react";

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<"auditor" | "keywords" | "automation">("auditor");
  const [analyzedUrl, setAnalyzedUrl] = useState("https://mybusiness.com");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  // Keyword explorer simulation
  const [keywordQuery, setKeywordQuery] = useState("");
  const [detectedKeywords, setDetectedKeywords] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const triggerAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!analyzedUrl) return;
    setIsAuditing(true);
    setAuditResult(null);

    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        performanceScore: 88,
        seoIndexability: "EXCELLENT",
        loadTime: "1.42s",
        warnings: [
          "Omitted schema: FAQ Markup on dynamic product routes.",
          "Missing ALT attributes on 4 secondary catalog images.",
        ],
        opportunities: [
          "Target competitor gaps for terms: 'enterprise growth automation' (+450% search interest)",
          "Accelerate Time-To-Interactive (TTI) by lazy-loading third-party chat dependencies",
        ],
        recommendations: [
          "Deploy DigitarAI technical crawler for continuous sitemap indexing check.",
          "Automate schema metadata tags generation on content templates.",
        ],
      });
    }, 1500);
  };

  const triggerKeywordSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywordQuery) return;
    setIsSearching(true);
    setDetectedKeywords([]);

    setTimeout(() => {
      setIsSearching(false);
      setDetectedKeywords([
        { term: `${keywordQuery} tools`, volume: "12,400/mo", intent: "Commercial", cpc: "$3.45", difficulty: "Medium (34/100)" },
        { term: `best ${keywordQuery} services`, volume: "4,600/mo", intent: "Transactional", cpc: "$6.20", difficulty: "High (52/100)" },
        { term: "autonomous AI SEO strategy", volume: "1,250/mo", intent: "Informational", cpc: "$12.40", difficulty: "Low (12/100)" },
        { term: `${keywordQuery} analytics templates`, volume: "3,800/mo", intent: "Commercial", cpc: "$1.95", difficulty: "Low (18/100)" },
      ]);
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative text-white font-sans overflow-hidden">
      {/* Decorative high-contrast blue glow */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Control panel header */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4.5 h-4.5 fill-blue-400/20" /> DigitarAI Platform Workspace (v4.2)
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white font-display">
            Interactive Marketing Command Center
          </h3>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("auditor")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === "auditor" ? "bg-blue-600 text-white shadow-md shadow-blue-550/20" : "text-slate-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> Technical SEO Auditor
          </button>
          <button
            onClick={() => setActiveTab("keywords")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === "keywords" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" /> AI Keyword Planner
          </button>
          <button
            onClick={() => setActiveTab("automation")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === "automation" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Automation Log
          </button>
        </div>
      </div>

      {/* Workspace Area */}
      <div className="min-h-[340px]">
        {/* Tab 1: SEO Auditor */}
        {activeTab === "auditor" && (
          <div className="space-y-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <form onSubmit={triggerAudit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  required
                  value={analyzedUrl}
                  onChange={(e) => setAnalyzedUrl(e.target.value)}
                  placeholder="Enter custom business website url"
                  className="bg-slate-900 border border-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 flex-1 placeholder-slate-600"
                />
                <button
                  type="submit"
                  disabled={isAuditing}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-blue-600/10"
                >
                  {isAuditing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      Analyzing site DOM...
                    </>
                  ) : (
                    <>Run Free Technical Audit</>
                  )}
                </button>
              </form>
              <p className="text-[10px] text-slate-500 mt-2 font-mono">
                * Crawl checks include Core Web Vitals, indexability codes, rich snippets validation, and canonical checks.
              </p>
            </div>

            {/* Audit Output Result */}
            {isAuditing && (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
                <div>
                  <p className="text-sm font-semibold">Running multi-threaded search audit...</p>
                  <p className="text-xs text-slate-500 font-mono">Parsing canonical trees & crawling Schema.org tags</p>
                </div>
              </div>
            )}

            {!isAuditing && !auditResult && (
              <div className="border border-dashed border-slate-800 rounded-2xl p-8 text-center text-slate-500 flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-850 flex items-center justify-center text-slate-400">
                  <Database className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">No Web Audit Run Selected</p>
                  <p className="text-xs text-slate-600">Submit your corporate website url above to simulate a live AI Crawl Check.</p>
                </div>
              </div>
            )}

            {auditResult && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Score */}
                <div className="bg-slate-950 border border-slate-850 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase">Optimized Tech Score</span>
                    <div className="text-4xl font-extrabold text-emerald-400 mt-1 font-mono">
                      {auditResult.performanceScore}/100
                    </div>
                  </div>
                  <div className="mt-4 border-t border-slate-900 pt-3 flex justify-between text-xs text-slate-400">
                    <span>Index Status:</span>
                    <span className="text-emerald-400 font-bold">{auditResult.seoIndexability}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>DOM Load Time:</span>
                    <span className="text-white font-mono">{auditResult.loadTime}</span>
                  </div>
                </div>

                {/* Gaps / Warnings */}
                <div className="bg-slate-950 border border-slate-850 rounded-2xl p-5 md:col-span-2 space-y-4">
                  <div>
                    <h5 className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
                      <AlertCircle className="w-4 h-4" /> Crawl Discovered Optimization Opportunities ({auditResult.warnings.length})
                    </h5>
                    <ul className="text-xs text-slate-300 mt-2 space-y-1.5 pl-1">
                      {auditResult.warnings.map((w: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-amber-500">•</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-900 pt-3">
                    <h5 className="text-xs font-semibold text-blue-400 flex items-center gap-1.5 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" /> Strategic Keywords to Conquer
                    </h5>
                    <ul className="text-xs text-slate-300 mt-2 space-y-1.5 pl-1">
                      {auditResult.opportunities.map((o: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-500">•</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: AI Keyword Planner */}
        {activeTab === "keywords" && (
          <div className="space-y-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <form onSubmit={triggerKeywordSearch} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  value={keywordQuery}
                  onChange={(e) => setKeywordQuery(e.target.value)}
                  placeholder="Enter core industry keyword (e.g. cloud CRM, solar panels)"
                  className="bg-slate-900 border border-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 flex-1 placeholder-slate-650"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSearching ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Checking CPC Index...
                    </>
                  ) : (
                    <>Extract Search Gaps</>
                  )}
                </button>
              </form>
            </div>

            {isSearching && (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
                <p className="text-sm font-semibold">Generating semantic clusters and crawling search interest volumes...</p>
              </div>
            )}

            {!isSearching && detectedKeywords.length === 0 && (
              <div className="border border-slate-800 rounded-2xl p-8 text-center text-slate-500 flex flex-col items-center gap-3">
                <Search className="w-7 h-7 text-slate-600 animate-bounce" />
                <div>
                  <p className="text-sm font-semibold text-slate-400 font-display">Intent Parser Idle</p>
                  <p className="text-xs text-slate-600">Type a keyword phrase in your business niche and click 'Extract Search Gaps'.</p>
                </div>
              </div>
            )}

            {detectedKeywords.length > 0 && (
              <div className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-850 flex justify-between bg-slate-900 text-[10px] text-slate-500 font-mono uppercase">
                  <span>Simulated Trend Keywords</span>
                  <span className="text-blue-400">High-Relevancy Gaps Found</span>
                </div>
                <div className="divide-y divide-slate-900">
                  {detectedKeywords.map((k, i) => (
                    <div key={i} className="p-4 hover:bg-slate-900/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div>
                        <p className="text-xs font-bold text-slate-100 font-mono">{k.term}</p>
                        <p className="text-[10px] text-slate-400">Traffic Potential: <span className="text-emerald-400 text-[11px] font-semibold">{k.volume}</span></p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
                        <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded">CPC Index: {k.cpc}</span>
                        <span className="bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded">Intent: {k.intent}</span>
                        <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded">Difficulty: {k.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Automation Log */}
        {activeTab === "automation" && (
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[11px] text-emerald-400 max-h-[290px] overflow-y-auto space-y-2">
              <p className="text-slate-500">[2026-06-02 08:44:48] INITIALIZING DIGITAR-AI SYNC SERVICE CLIENT...</p>
              <p className="text-slate-500">[2026-06-02 08:44:49] CONNECTION RE-ESTABLISHED WITH GOOGLE SEARCH AGENT-NODE 15A...</p>
              <p className="text-slate-400">[2026-06-02 08:45:10] RUNNING BI-HOURLY CANONICAL RE-SCAN ON SITEMAP_INDEX_V3.XML...</p>
              <p className="text-blue-400">[2026-06-02 08:45:12] SYSTEM: Detected 14 positive keyword jumps across SaaS and E-Com segments.</p>
              <p className="text-white">[2026-06-02 08:45:15] LOG: Generated and published 4 new meta updates addressing Google update index patterns.</p>
              <p className="text-emerald-400">[2026-06-02 08:46:00] CRON: All page performance markers verify at green SLA thresholds (99%).</p>
              <div className="border-t border-slate-800 my-2 pt-2 text-[10px] text-slate-500 flex items-center justify-between">
                <span>Total Actions executed today: 142</span>
                <span className="text-emerald-400 animate-pulse flex items-center gap-1">● Active Nodes Stable</span>
              </div>
            </div>

            <div className="bg-slate-900/20 text-xs p-4 rounded-xl border border-blue-500/10 flex items-start gap-2.5">
              <Lock className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">DigitarAI Cloud Security Enforced</p>
                <p className="text-slate-400 text-[11px]">All API endpoints are proxied server-side via TLS 1.3 protocol. No client keys or customer data paths are exposed to external browsers.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
