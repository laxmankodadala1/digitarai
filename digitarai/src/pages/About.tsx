import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Heart, Shield, Award, Users, CheckCircle, ShieldAlert, FileText, ArrowLeft } from "lucide-react";
import SeoHead from "../components/SeoHead";

// =========================================================================
// ADJUSTABLE SECTION CONFIGURATION (Toggle between true and false to hide/show sections)
// =========================================================================
const SECTION_TOGGLES = {
  hero: true,        // Toggle Hero section
  introText: true,   // Toggle Humanized Intro & Mission Statement
  coreValues: true,  // Toggle Core Values grid
  teamMembers: true, // Toggle Founders & Creators list
  ourJourney: true,  // Toggle Journey Timeline
  cta: true,         // Toggle Contact Hook
};

interface ValueItem {
  icon: any;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export default function About() {
  // Core Values data - easily editable to add/remove values
  const values: ValueItem[] = [
    {
      icon: Heart,
      title: "Humanity-First Search Architecture",
      description: "We refuse to create generic, low-effort bulk automated content. Our strategies align with what actual human beings are searching for, providing answers that have genuine utility and authority.",
    },
    {
      icon: Shield,
      title: "Absolute Technical Transparency",
      description: "No mysterious keyword manipulation or opaque statistics. We deliver pristine data reports, clear crawl indexes, and direct accountability for every dollar spent on campaign acquisitions.",
    },
    {
      icon: Award,
      title: "Craftsmanship & Excellence",
      description: "We treat search crawling and digital conversion optimization as a precise craft. Every heading, schema parameter, and sitemap reference is tuned with total design and development discipline.",
    },
    {
      icon: Users,
      title: "Organic Collaboration",
      description: "We don't operate like a detached software portal. We function as a high-density brain trust, combining our optimization systems with your corporate directors to drive compounding revenue.",
    },
  ];

  // Team members data - easily editable
  const team: TeamMember[] = [
    {
      name: "Elena Vance",
      role: "Founder & Director of Search Strategy",
      bio: "Elena spent 12 years rebuilding sitemap structures and index engines for leading SaaS platforms. She founded DigitarAI to replace sluggish agencies with automated crawler science.",
      initials: "EV",
    },
    {
      name: "Marcus Thorne",
      role: "VP of Inbound Systems & Growth",
      bio: "Marcus specializes in modeling customer lifetime data. He aligns keyword acquisition campaigns directly with real-world sales pipelines, eliminating wasted advertising spend.",
      initials: "MT",
    },
    {
      name: "Amara Cole",
      role: "Head of Brand Integrity & Creative Strategy",
      bio: "Amara ensures our partners project authority and trust across B2B grids like LinkedIn and YouTube. She balances technical data metrics with brilliant human copy.",
      initials: "AC",
    },
  ];

  // Company timeline history - easily editable
  const timeline: TimelineEvent[] = [
    {
      year: "2018",
      title: "The Inception",
      desc: "DigitarAI started as a specialized consultancy in Austin, Texas, assisting early-stage B2B startups with manual technical SEO crawls.",
    },
    {
      year: "2021",
      title: "Automation Transition",
      desc: "Our engineering core constructed proprietary index-monitoring scripts, allowing us to detect negative keyword traps on Google within minutes.",
    },
    {
      year: "2024",
      title: "Enterprise Scaling",
      desc: "Expanded our full-service suite to support advanced Reputation Defense (ORM) and multi-channel SMM scaling, serving over 300 active partners.",
    },
    {
      year: "2026",
      title: "Pristine Human-First Era",
      desc: "Pioneered high-quality semantic answer engineering, protecting our clients from search engines' dynamic shifts away from robotic spam.",
    },
  ];

  return (
    <div className="font-sans py-12 lg:py-20 relative">
      <SeoHead
        title="About Us - Human-Centric Search Intelligence Masters"
        description="Learn about the passionate search specialists, founders, and engineers operating DigitarAI. We construct organic, human-optimized marketing architectures."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" },
        ]}
      />

      {/* Decorative background grid node */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb visual navigation element */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 py-1.5 px-3 rounded-lg w-fit">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">About Us</span>
        </nav>

        {/* 1. HERO SECTION */}
        {SECTION_TOGGLES.hero && (
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Our Organic Identity</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
              A Growth Team Obsessed with <span className="gradient-text">Genuine Performance</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are a group of developers, system crawled engineers, and creative copy experts who think provable math should be the foundation of digital marketing instead of lofty claims.
            </p>
          </div>
        )}

        {/* 2. HUMANIZED INTRO & MISSION STATEMENT */}
        {SECTION_TOGGLES.introText && (
          <div className="bg-[#FAFBFD] border border-slate-200/50 rounded-3xl p-6 lg:p-10 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 h-64 flex flex-col justify-between shadow-md relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest uppercase mb-1">OUR SOLEMN PLEDGE</h4>
                  <p className="text-sm font-extrabold font-display leading-tight">No Robotic Fluff. Just Verifiable Human Craftsmanship.</p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950">We believe index rankings must be earned with substance.</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In 2026, search algorithms are smarter than ever before. They easily recognize and punish cold, automated websites loaded with low-effort blog spam. That is why DigitarAI focuses strictly on <strong>humanized optimization</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We write rich, engaging articles based on genuine expertise, structure your code so search engine crawlers can read sitemaps easily, and optimize paid campaigns to ensure no budget is wasted on click farms.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Real Specialists
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Transparent SLA
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> Secure Data Safe
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CORE VALUES SECTION */}
        {SECTION_TOGGLES.coreValues && (
          <div className="mb-20">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Our Core Pillars</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Principles That Guide Our Optimization Work</h2>
              <p className="text-slate-500 text-xs sm:text-sm">We maintain strict adherence to these pillars so your brand ranks higher with absolute safety.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-950 font-display text-sm mb-2 uppercase">{val.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. FOUNDERS & CREATORS LIST */}
        {SECTION_TOGGLES.teamMembers && (
          <div className="mb-20">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">Specialist Brain Trust</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Meet Your Growth Directors</h2>
              <p className="text-slate-500 text-xs sm:text-sm">You work directly with strategic decision makers, bypassing junior account managers completely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((person, idx) => (
                <div key={idx} className="border border-slate-100 rounded-3xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-blue-50 text-blue-700 font-display font-bold text-lg rounded-2xl flex items-center justify-center border border-blue-100">
                      {person.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 font-display">{person.name}</h4>
                      <p className="text-[10px] text-blue-600 font-mono font-bold uppercase">{person.role}</p>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{person.bio}</p>
                  </div>
                  <div className="border-t border-slate-50 pt-4 mt-6">
                    <span className="text-[9px] text-emerald-600 font-mono font-bold uppercase block">● Active Audit Overseer</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. JOURNEY TIMELINE */}
        {SECTION_TOGGLES.ourJourney && (
          <div className="mb-20">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-widest font-mono block">The Development Path</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">How We Built DigitarAI</h2>
              <p className="text-slate-500 text-xs sm:text-sm">A timeline demonstrating our consistent commitment to index-efficiency auditing.</p>
            </div>

            <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-8">
              {timeline.map((event, idx) => (
                <div key={idx} className="relative">
                  {/* Circle indicator node */}
                  <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-950 border-4 border-white shadow-sm flex items-center justify-center text-white" />
                  
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-extrabold text-blue-600">{event.year}</span>
                    <h4 className="text-sm font-bold text-slate-950 font-display uppercase">{event.title}</h4>
                    <p className="text-[11px] text-slate-550 leading-relaxed max-w-xl">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. CALL TO ACTION HOOK */}
        {SECTION_TOGGLES.cta && (
          <div className="bg-slate-950 text-white rounded-3xl p-6 lg:p-10 border border-slate-900 shadow-xl text-center space-y-4">
            <Heart className="w-6 h-6 text-blue-500 mx-auto fill-blue-500/20" />
            <h4 className="text-lg font-bold font-display uppercase tracking-tight">Let's Establish Real Connection & Brand Growth</h4>
            <p className="text-xs text-slate-450 max-w-md mx-auto leading-relaxed">
              We look forward to diving deep into your technical sitemap coordinates, resolving crawler bottlenecks, and protecting your paid campaigns from click waste. Let's schedule a human inspection today.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition inline-block shadow-md"
              >
                Inquire For A Free Audit Session
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
