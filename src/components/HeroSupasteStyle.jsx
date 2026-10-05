import React from "react";
import { motion } from "framer-motion";

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
        {/* Eyebrow: Apple logo + Studio label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 text-white/95 text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.83-9.01-10.42-19.16-13.78-30.47-3.35-11.31-5.03-22.18-5.03-32.61 0-14.02 3.69-25.79 11.07-35.31 7.37-9.52 16.63-14.39 27.76-14.61 4.79 0 10.15 1.25 16.08 3.75 5.93 2.5 9.77 3.86 11.53 4.08 2.02-.33 6.07-1.74 12.16-4.23 6.08-2.5 11.37-3.64 15.86-3.43 12.39.65 22.39 4.88 30.01 12.69-10.87 6.53-16.19 15.66-15.97 27.4.22 9.14 3.7 16.85 10.44 23.16 6.74 6.31 14.75 9.89 24.03 10.76-2.39 7.07-5.54 14.57-9.45 22.5m-30.56-118.2c0 6.63-2.4 12.72-7.2 18.27-4.8 5.55-10.76 9.02-17.89 10.42-.43-1.09-.65-2.28-.65-3.59 0-6.63 2.61-12.94 7.83-18.92 5.22-5.98 11.31-9.35 18.27-10.11.11 1.3.17 2.61.17 3.93z" />
          </svg>
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

        {/* Primary CTA Button (Black Pill matching screenshot " Download for macOS") */}
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
            <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.83-9.01-10.42-19.16-13.78-30.47-3.35-11.31-5.03-22.18-5.03-32.61 0-14.02 3.69-25.79 11.07-35.31 7.37-9.52 16.63-14.39 27.76-14.61 4.79 0 10.15 1.25 16.08 3.75 5.93 2.5 9.77 3.86 11.53 4.08 2.02-.33 6.07-1.74 12.16-4.23 6.08-2.5 11.37-3.64 15.86-3.43 12.39.65 22.39 4.88 30.01 12.69-10.87 6.53-16.19 15.66-15.97 27.4.22 9.14 3.7 16.85 10.44 23.16 6.74 6.31 14.75 9.89 24.03 10.76-2.39 7.07-5.54 14.57-9.45 22.5m-30.56-118.2c0 6.63-2.4 12.72-7.2 18.27-4.8 5.55-10.76 9.02-17.89 10.42-.43-1.09-.65-2.28-.65-3.59 0-6.63 2.61-12.94 7.83-18.92 5.22-5.98 11.31-9.35 18.27-10.11.11 1.3.17 2.61.17 3.93z" />
            </svg>
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
