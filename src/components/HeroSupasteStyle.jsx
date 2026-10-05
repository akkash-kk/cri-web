import React from "react";
import { motion } from "framer-motion";
import { BrandLogoMark } from "./BrandLogo";

export default function HeroSupasteStyle({ onOpenContact }) {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full min-h-[calc(100dvh-64px)] md:min-h-screen flex flex-col justify-center items-center overflow-hidden text-white px-6 py-12 sm:py-16"
      style={{
        background:
          "radial-gradient(135% 85% at 50% -5%, #004fe8 0%, #065cf5 28%, #1677fa 52%, #429eff 72%, #8ecdfe 90%, #bde4fc 100%)"
      }}
    >
      {/* HERO CENTER CONTENT */}
      <div className="w-full max-w-4xl mx-auto text-center my-auto relative z-20">
        {/* Eyebrow: Brand logo + Studio label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 text-white/95 text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6"
        >
          <BrandLogoMark
            size={16}
            primaryColor="currentColor"
            accentColor="currentColor"
            className="w-4 h-4 fill-current shrink-0"
          />
          <span>UI/UX &amp; Mobile App Design Studio</span>
        </motion.div>

        {/* Display Headline using the clean original sans font style */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-medium tracking-tight text-white select-none text-balance"
        >
          Branding, UI/UX &amp;
          <br />
          Mobile App Design Studio
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/90 text-base sm:text-lg md:text-[19px] leading-relaxed max-w-2xl mx-auto mt-6 text-balance font-normal"
        >
          We turn ambitious ideas into high-impact brand identities, intuitive mobile apps, and high-converting websites that drive real growth.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4"
        >
          <button
            onClick={() => onOpenContact("Hero Black Pill CTA")}
            className="group inline-flex items-center justify-center gap-2.5 bg-black hover:bg-neutral-900 text-white font-medium text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_16px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_44px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/15"
          >
            <BrandLogoMark
              size={16}
              primaryColor="currentColor"
              accentColor="currentColor"
              className="w-4 h-4 fill-current group-hover:scale-110 transition-transform shrink-0"
            />
            <span>Discuss a project</span>
          </button>

          {/* Micro trust tags below button */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-[13px] text-white/80 font-medium tracking-wide">
            <span>20-Day Sprints</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>100% IP Ownership</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Fixed Transparent Pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
