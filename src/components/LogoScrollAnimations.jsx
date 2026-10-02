import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { BrandLogoMark } from "./BrandLogo";
import { ArrowUp } from "lucide-react";

/**
 * 1. LogoScrollTracker:
 * Floating on-scroll HUD indicator anchored in the corner.
 * Rotates the Black Box logo icon proportionally to page scroll progress with spring physics.
 * Features an animated circular SVG progress ring, scroll percentage, and scroll-to-top interaction.
 */
export function LogoScrollTracker() {
  return null;
}

/**
 * 2. LogoKineticMarquee:
 * Velocity-driven continuous ticker tape containing the Black Box logo mark.
 * When scrolling down, the icons rotate clockwise and accelerate; when scrolling up, they reverse.
 */
export function LogoKineticMarquee() {
  return null;
}

/**
 * 3. LogoParallaxWatermark:
 * Ambient background watermark that translates, rotates, and floats smoothly with scroll.
 */
export function LogoParallaxWatermark({
  size = 320,
  speed = 0.25,
  direction = "right",
  className = "",
  opacity = 0.04
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [-60 * speed, 120 * speed]);
  const rotate = useTransform(
    smoothProgress,
    [0, 1],
    direction === "right" ? [0, 90] : [0, -90]
  );
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale, opacity }}
      className={`pointer-events-none select-none -z-10 ${className}`}
    >
      <BrandLogoMark size={size} primaryColor="currentColor" accentColor="#1877F2" />
    </motion.div>
  );
}

/**
 * 5. LogoScrollRevealBadge:
 * An elegant scroll-activated badge featuring the logo mark that blossoms and rotates when entering view.
 */
export function LogoScrollRevealBadge({
  size = 40,
  label = "BLACK BOX STUDIO",
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow select-none ${className}`}
    >
      <motion.div
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.3 }}
        className="shrink-0"
      >
        <BrandLogoMark size={size} primaryColor="#27262b" accentColor="#1877F2" />
      </motion.div>
      {label && (
        <span className="text-xs font-bold font-mono tracking-wider text-[#27262b] uppercase">
          {label}
        </span>
      )}
    </motion.div>
  );
}
