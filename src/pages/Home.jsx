import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS, CASES } from "../data/content";
import Button, { Btn } from "../components/Button";
import { FadeUp, FadeIn, SlideIn, ScaleUp, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import Counter from "../components/Counter";
import ProcessSection from "../components/ProcessSection";
import HumbleWorkflowTailor from "../components/HumbleWorkflowTailor";
import FaqSection from "../components/FaqSection";
import HeroSupasteStyle from "../components/HeroSupasteStyle";
import { BrandLogoMark } from "../components/BrandLogo";
import { Sparkles, ArrowDown, ShieldCheck, Zap, Layers, Sliders, Scissors, Shapes, ArrowUpRight, ShoppingCart } from "lucide-react";

export default function Home({ onOpenContact, onOpenLogoLab }) {
  const [selectedCaseCategory, setSelectedCaseCategory] = useState("All");

  const caseCategories = ["All", "UI/UX Design", "E-Commerce", "Branding"];

  const filteredCases = selectedCaseCategory === "All"
    ? CASES
    : CASES.filter((c) => c.category.toLowerCase().includes(selectedCaseCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] overflow-x-clip rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none relative">
      {/* 1. HERO SECTION (Supaste-style vibrant royal-blue gradient, floating pill nav, display typography & macOS Dynamic Island Dock) */}
      <HeroSupasteStyle onOpenContact={onOpenContact} />

      {/* 2. PROCESS / APPROACH SECTION (GSAP PINNED ON-SCROLL ANIMATION) */}
      <ProcessSection />

      {/* 3. CASES SHOWCASE SECTION (OUR CASES) */}
      <section id="cases" aria-label="Our Cases" className="section-our-cases our-cases max-w-[1440px] mx-auto px-6 sm:px-14 lg:px-20 py-20">
        <div className="our-cases-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="our-cases-title-wrapper">
            <FadeUp>
              <small className="our-cases-eyebrow uppercase text-xs font-semibold tracking-widest text-neutral-500 block mb-2 font-mono">
                Selected Works
              </small>
              <h2 className="our-cases-title text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight">
                Our Cases
              </h2>
            </FadeUp>
          </div>

          {/* Interactive Category Filter Pills */}
          <FadeUp delay={0.2}>
            <div className="our-cases-filters flex flex-wrap gap-2">
              {caseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCaseCategory(cat)}
                  className={`our-cases-filter-btn text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedCaseCategory === cat
                      ? "bg-[#27262b] text-white font-medium shadow-xs"
                      : "bg-white/80 text-neutral-600 hover:bg-white hover:text-black border border-neutral-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Case Studies Grid */}
        <motion.div layout className="our-cases-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredCases.map((item, index) => {
              const isMira = index === 0 && item.title.includes("MIRA");
              const hasLink = item.link && item.link !== "#";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                  key={item.id}
                  className="our-cases-card group relative"
                >
                  {hasLink ? (
                    <Link
                      to={item.link}
                      className="our-cases-card-link block aspect-[1.32] overflow-hidden rounded-2xl bg-neutral-200 relative shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="our-cases-card-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />

                      {/* Gradient overlay */}
                      <div className="our-cases-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                      {/* Hover Content */}
                      <div className="our-cases-card-info absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
                        <div className="flex justify-between items-start">
                          <span className="our-cases-card-category text-[11px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                          <div className="our-cases-card-arrow w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs shadow-md">
                            ↗
                          </div>
                        </div>
                        <div>
                          <h4 className="our-cases-card-title text-lg font-bold">{item.title}</h4>
                          <p className="our-cases-card-meta text-xs text-neutral-300">{item.client} • {item.year}</p>
                        </div>
                      </div>

                      {isMira && (
                        <div className="our-cases-featured-badge absolute top-4 left-4 bg-[#1877F2] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md z-10">
                          Featured Case Study
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div
                      className="our-cases-card-link block aspect-[1.32] overflow-hidden rounded-2xl bg-neutral-200 relative shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="our-cases-card-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />

                      {/* Gradient overlay */}
                      <div className="our-cases-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                      {/* Hover Content */}
                      <div className="our-cases-card-info absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
                        <div className="flex justify-between items-start">
                          <span className="our-cases-card-category text-[11px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                          <div className="our-cases-card-arrow w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs shadow-md">
                            •
                          </div>
                        </div>
                        <div>
                          <h4 className="our-cases-card-title text-lg font-bold">{item.title}</h4>
                          <p className="our-cases-card-meta text-xs text-neutral-300">{item.client} • {item.year}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="our-cases-footer flex flex-wrap items-center justify-center gap-4">
          <Button to="/case/mira" className="our-cases-cta-btn">
            View MIRA Case Study ↗
          </Button>
          <Button to="/case/rj-group" className="our-cases-cta-btn" variant="dark">
            View RJ Group Case Study ↗
          </Button>
        </div>
      </section>

      {/* WORKFLOW & TAILOR SECTIONS */}
      <HumbleWorkflowTailor />

      {/* 4. FOUNDER WORDS SECTION */}
      <section
        id="founder-words"
        aria-label="Founder Words"
        className="section-founder-words founder-words max-w-[1400px] mx-auto px-6 sm:px-14 lg:px-20 py-20 lg:py-28"
      >
        <div className="founder-words-container grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Title & Founder Profile */}
          <div className="founder-words-profile space-y-8">
            <h2 className="founder-words-title text-4xl sm:text-5xl lg:text-[52px] font-normal tracking-tight text-[#1e1d21] leading-[1.12]">
              A few words
              <br />
              from our founder
            </h2>

            <div className="founder-words-card-wrapper">
              {/* Photo Card with LinkedIn Badge */}
              <div className="founder-words-photo-card relative w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm">
                <img
                  className="founder-words-photo w-full h-full object-cover object-top"
                  src={ASSETS.ceo}
                  alt="Akash Kumaravel - Founder & Design Director, Criyon"
                  referrerPolicy="no-referrer"
                />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="founder-words-linkedin absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f3f2ee] hover:bg-white text-[#1e1d21] flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                  aria-label="Akash Kumaravel LinkedIn"
                >
                  <span className="font-bold text-xs font-sans">in</span>
                </a>
              </div>

              {/* Name & Title */}
              <div className="founder-words-meta mt-3.5 space-y-0.5">
                <b className="founder-words-name block text-lg font-medium text-[#1e1d21] tracking-tight">
                  Akash Kumaravel
                </b>
                <p className="founder-words-role text-sm text-neutral-400 font-normal">
                  Founder &amp; Design Director, Criyon
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quotes and CTA Card */}
          <div className="founder-words-quotes space-y-4 pt-1">
            {/* 1. Main Quote Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="founder-words-main-quote bg-[#f2f1ec] px-7 sm:px-9 py-5 sm:py-6 rounded-[32px] sm:rounded-[36px] max-w-2xl"
            >
              <p className="text-base sm:text-lg text-[#27262b] leading-relaxed font-normal">
                &ldquo;At Criyon, we don&apos;t believe in design that just looks good in a portfolio. Every brand we build, every screen we design, and every line of code we write is built to solve a real business problem — and ship fast.&rdquo;
              </p>
            </motion.div>

            {/* 2. Secondary Short Quote Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="founder-words-secondary-quote bg-[#f2f1ec] px-7 sm:px-8 py-4 rounded-full inline-block"
            >
              <p className="text-base sm:text-lg text-[#27262b] font-normal">
                &ldquo;Ready to build something people actually remember?&rdquo;
              </p>
            </motion.div>

            {/* 3. Orange Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="founder-words-cta-card bg-[#1877F2] text-white p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] shadow-sm flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
            >
              <h3 className="founder-words-cta-title text-2xl sm:text-3xl lg:text-[34px] font-medium text-white tracking-tight leading-snug">
                Book a 15-min discovery call
                <br />
                for your business
              </h3>

              <div className="founder-words-cta-action flex justify-end pt-6">
                <button
                  type="button"
                  onClick={() => onOpenContact("15-min discovery call")}
                  className="founder-words-cta-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-[#1e1d21] hover:bg-neutral-50 text-xs font-semibold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>BOOK A CALL</span>
                  <span className="w-6 h-6 rounded-full border border-[#1e1d21] flex items-center justify-center text-xs font-semibold group-hover:rotate-45 transition-transform duration-200">
                    ↗
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. AI BACKGROUND REMOVER SPOTLIGHT */}
      <section
        id="ai-tools"
        aria-label="AI Creative Tool"
        className="section-ai-tools ai-tools background-remover-spotlight w-full px-6 sm:px-12 lg:px-16 py-12"
      >
        <div className="ai-tools-container max-w-[1400px] mx-auto bg-white rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="ai-tools-copy space-y-4 max-w-xl">
            <div className="ai-tools-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold uppercase tracking-wider font-mono">
              <Scissors size={13} /> AI Creative Tool
            </div>
            <h2 className="ai-tools-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#27262b]">
              Instant AI Background Remover
            </h2>
            <p className="ai-tools-description text-sm sm:text-base text-neutral-600 leading-relaxed">
              Isolate subjects with high precision directly in your browser. Fine-tune edge tolerance, preview against custom backdrops, and download transparent 32-bit PNGs — 100% free, zero lag, no signup required.
            </p>
            <div className="ai-tools-cta flex flex-wrap gap-4 pt-2">
              <Button
                to="/products"
                variant="accent"
                size="md"
                className="ai-tools-btn font-bold tracking-wider !text-white shadow-md hover:shadow-lg"
                badgeIcon={<ArrowUpRight size={13} className="stroke-[2.5]" />}
                ariaLabel="Try Background Remover"
              >
                Try Background Remover
              </Button>
            </div>
          </div>

          <div className="ai-tools-features-grid grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
            <Link
              to="/products"
              className="ai-tools-feature-card p-4 rounded-2xl bg-[#f5f4f0] border border-neutral-200/80 hover:border-[#1877F2] hover:bg-white hover:shadow-lg transition-all duration-300 space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-center shadow-xs group-hover:bg-[#1877F2]/10 group-hover:border-[#1877F2]/30 group-hover:scale-105 transition-all duration-300">
                <Scissors size={18} className="text-[#1877F2] stroke-[2.2]" />
              </div>
              <strong className="block text-xs font-bold text-[#27262b] group-hover:text-black transition-colors">
                Instant Cutout
              </strong>
              <span className="block text-[10px] text-neutral-500 font-mono">
                Auto alpha isolation
              </span>
            </Link>

            <Link
              to="/products"
              className="ai-tools-feature-card p-4 rounded-2xl bg-[#f5f4f0] border border-neutral-200/80 hover:border-[#1877F2] hover:bg-white hover:shadow-lg transition-all duration-300 space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-center shadow-xs group-hover:bg-[#1877F2]/10 group-hover:border-[#1877F2]/30 group-hover:scale-105 transition-all duration-300">
                <Layers size={18} className="text-[#1877F2] stroke-[2.2]" />
              </div>
              <strong className="block text-xs font-bold text-[#27262b] group-hover:text-black transition-colors">
                Studio Backdrops
              </strong>
              <span className="block text-[10px] text-neutral-500 font-mono">
                Gradients, solid colours &amp; custom images
              </span>
            </Link>

            <Link
              to="/products"
              className="ai-tools-feature-card p-4 rounded-2xl bg-[#f5f4f0] border border-neutral-200/80 hover:border-[#1877F2] hover:bg-white hover:shadow-lg transition-all duration-300 space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-center shadow-xs group-hover:bg-[#1877F2]/10 group-hover:border-[#1877F2]/30 group-hover:scale-105 transition-all duration-300">
                <Zap size={18} className="text-[#1877F2] stroke-[2.2]" />
              </div>
              <strong className="block text-xs font-bold text-[#27262b] group-hover:text-black transition-colors">
                Clean PNG Export
              </strong>
              <span className="block text-[10px] text-neutral-500 font-mono">
                32-bit transparent, full resolution
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION (ACCORDION & STRUCTURED SCHEMA) */}
      <FaqSection onOpenContact={onOpenContact} />

      {/* 6. FINAL CTA SECTION (Pre-footer) */}
      <section
        id="final-cta"
        aria-label="Final Call to Action"
        className="section-final-cta final-cta w-full px-6 sm:px-12 lg:px-16 pt-16 pb-16 relative overflow-hidden"
      >
        <div className="final-cta-container max-w-[1400px] mx-auto space-y-6">
          <FadeUp>
            <h2 className="final-cta-headline text-4xl sm:text-6xl lg:text-[72px] font-normal tracking-tight text-[#27262b] leading-[1.08]">
              Let&apos;s build something <span className="text-[#1877F2]">unforgettable</span>.
            </h2>
            <p className="final-cta-subtext text-base sm:text-lg text-neutral-600 font-normal mt-3">
              Start your project with Criyon today.
            </p>

            <div className="final-cta-actions flex flex-wrap items-center gap-3.5 pt-6">
              <Button
                onClick={() => onOpenContact("New Project Consultation")}
                variant="dark"
                className="final-cta-btn-primary"
              >
                Discuss a project
              </Button>

              <Button
                onClick={() => onOpenContact("Schedule Intro Call")}
                variant="accent"
                className="final-cta-btn-secondary"
              >
                Book a discovery call
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
