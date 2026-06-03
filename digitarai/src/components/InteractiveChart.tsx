import { useState } from "react";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

interface ChartProps {
  initialTrack: "traffic" | "leads" | "roi";
}

export default function InteractiveChart({ initialTrack }: ChartProps) {
  const [metric, setMetric] = useState<"traffic" | "leads" | "roi">(initialTrack || "traffic");
  const [adSpend, setAdSpend] = useState<number>(3000); // simulation input

  // Generate data points
  const getDataForMetric = () => {
    switch (metric) {
      case "traffic":
        return {
          title: "Website Traffic & Keywords Increasing Index",
          percentage: "+210%",
          points: [25, 40, 35, 65, 80, 110, 145, 190, 240, 310],
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          note: "Powered by DigitarAI Continuous Keyword Auditing and Indexing Optimizations.",
        };
      case "leads":
        return {
          title: "AI-Qualified Lead Flow Growth",
          percentage: "+154%",
          points: [15, 30, 48, 55, 75, 98, 120, 140, 185, 250],
          labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8", "Wk 9", "Wk 10"],
          note: "Leads matched and validated autonomously via Lead Intelligence Pipeline.",
        };
      case "roi":
      default:
        // dynamic ROI calculator based on spend
        const calculatedReturn = Math.round(adSpend * 4.2);
        return {
          title: `Projected Performance Return (At $${adSpend.toLocaleString()}/mo spend)`,
          percentage: `+$${calculatedReturn.toLocaleString()}`,
          points: [
            adSpend * 0.1,
            adSpend * 0.3,
            adSpend * 0.6,
            adSpend * 1.1,
            adSpend * 1.8,
            adSpend * 2.5,
            adSpend * 3.1,
            adSpend * 3.6,
            adSpend * 4.0,
            calculatedReturn,
          ],
          labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
          note: "Estimate calculated with historical client PPC conversion benchmarks of 4.2x ROI.",
        };
    }
  };

  const chartInfo = getDataForMetric();
  const maxVal = Math.max(...chartInfo.points);
  const minVal = Math.min(...chartInfo.points);
  const range = maxVal - minVal || 1;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden font-sans">
      {/* Dynamic Glow decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" /> DigitarAI Growth Simulator
          </span>
          <h4 className="text-lg font-bold text-slate-150 tracking-tight font-display">
            {chartInfo.title}
          </h4>
        </div>
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setMetric("traffic")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metric === "traffic" ? "bg-emerald-500 text-slate-950 font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Traffic & Keywords
          </button>
          <button
            onClick={() => setMetric("leads")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metric === "leads" ? "bg-emerald-500 text-slate-950 font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            Qualified Leads
          </button>
          <button
            onClick={() => setMetric("roi")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metric === "roi" ? "bg-emerald-500 text-slate-950 font-semibold shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            ROI Predictor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics & Calculator parameters */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-baseline gap-2.5 mb-1">
              <span className="text-5xl font-extrabold tracking-tight text-white font-mono">
                {chartInfo.percentage}
              </span>
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" /> Direct Impact
              </span>
            </div>
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {chartInfo.note}
            </p>
          </div>

          {metric === "roi" && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mt-4">
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                Simulated Ad Campaign Monthly Spend:{" "}
                <span className="text-emerald-400 font-mono text-sm">${adSpend.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>$1K</span>
                <span>$12K</span>
                <span>$25K</span>
              </div>
            </div>
          )}

          <div className="mt-4 border-t border-slate-850 pt-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-200">Autonomous Indexing active</p>
              <p className="text-[10px] text-zinc-400">Optimization interval: 10 mins</p>
            </div>
          </div>
        </div>

        {/* Dynamic Vector/SVG Performance Chart */}
        <div className="lg:col-span-2 bg-[#0B132B] rounded-xl border border-slate-800/80 p-4 min-h-[220px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-800/50 pb-2 mb-2 font-mono">
            <span>METRIC SCALE (AUTO-OPTIMIZED)</span>
            <span className="text-emerald-500">PROJECTIONS STABLE</span>
          </div>

          <div className="relative flex-1 w-full flex items-end">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
              <div className="w-full border-t border-slate-800/50" />
              <div className="w-full border-t border-slate-800/50" />
              <div className="w-full border-t border-slate-800/50" />
              <div className="w-full border-t border-slate-800/50" />
            </div>

            {/* Custom SVG Line Graph */}
            <svg
              className="w-full h-40 overflow-visible relative z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradient-emerald" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area Under Curve */}
              <path
                d={`M 0,100 ${chartInfo.points
                  .map(
                    (p, i) =>
                      `L ${(i / (chartInfo.points.length - 1)) * 100},${
                        95 - ((p - minVal) / range) * 80
                      }`
                  )
                  .join(" ")} L 100,100 Z`}
                fill="url(#gradient-emerald)"
                className="transition-all duration-500 ease-out"
              />

              {/* Line */}
              <path
                d={chartInfo.points
                  .map(
                    (p, i) =>
                      `${i === 0 ? "M" : "L"} ${(i / (chartInfo.points.length - 1)) * 100},${
                        95 - ((p - minVal) / range) * 80
                      }`
                  )
                  .join(" ")}
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />

              {/* Interactive nodes */}
              {chartInfo.points.map((p, i) => {
                const x = (i / (chartInfo.points.length - 1)) * 100;
                const y = 95 - ((p - minVal) / range) * 80;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="#10B981"
                    stroke="#1E3A8A"
                    strokeWidth="0.75"
                    className="hover:r-4 cursor-pointer transition-all duration-200"
                  />
                );
              })}
            </svg>
          </div>

          {/* X Axis labels */}
          <div className="flex justify-between text-[10px] text-slate-400 mt-2 border-t border-slate-800/50 pt-2 font-mono">
            {chartInfo.labels.map((lbl, idx) => (
              <span key={idx}>{lbl}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
