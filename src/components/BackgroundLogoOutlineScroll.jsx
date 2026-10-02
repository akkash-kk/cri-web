import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * BackgroundLogoOutlineScroll:
 * Outline stroke appearing animation in the background of the page.
 * Tracks global page scroll and draws the outline contours of the Criyon symbol mark
 * into view with zero rotation, creating an architectural, high-precision appearance.
 */
export default function BackgroundLogoOutlineScroll({
  size = 540,
  className = "",
  color = "#1877F2",
  opacity = 0.12
}) {
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progression using spring dynamics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  // Vertical parallax without any cheesy rotation
  const y = useTransform(smoothProgress, [0, 1], [-30, 90]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1.04, 0.98]);

  // Sequential outline stroke appearance linked directly to scroll position
  const pathLength1 = useTransform(smoothProgress, [0, 0.3], [0.15, 1]);
  const pathLength2 = useTransform(smoothProgress, [0.05, 0.5], [0.05, 1]);
  const pathLength3 = useTransform(smoothProgress, [0.15, 0.7], [0, 1]);
  const pathLength4 = useTransform(smoothProgress, [0.25, 0.9], [0, 1]);

  // Stroke opacity fades in as strokes draw
  const strokeOpacity1 = useTransform(smoothProgress, [0, 0.15], [0.4, 1]);
  const strokeOpacity2 = useTransform(smoothProgress, [0.05, 0.25], [0.2, 1]);
  const strokeOpacity3 = useTransform(smoothProgress, [0.12, 0.35], [0.1, 1]);
  const strokeOpacity4 = useTransform(smoothProgress, [0.2, 0.45], [0.1, 1]);

  // Soft tint fill appearing after strokes are mostly traced
  const fillOpacity = useTransform(smoothProgress, [0.35, 0.85], [0, 0.06]);

  // Dynamic opacity pulse on scroll
  const dynamicOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.6, 1],
    [opacity * 0.9, opacity * 1.3, opacity * 1.4, opacity * 0.9]
  );

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        style={{
          y,
          scale,
          opacity: dynamicOpacity
        }}
        className="relative flex items-center justify-center"
      >
        {/* Subtle Ambient Blueprint Grid Accents (Static, Non-rotating) */}
        <div className="absolute w-[124%] h-[124%] rounded-full border border-neutral-300/15" />
        <div className="absolute w-[148%] h-[148%] rounded-full border border-dashed border-[#1877F2]/10" />

        {/* The Outlined SVG Logo Mark */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 211 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Layer 1: Inner Dot Outline Appearing */}
          <motion.path
            d="M107.083 58.0405C107.083 65.1206 101.343 70.8602 94.2631 70.8602C87.183 70.8602 81.4434 65.1206 81.4434 58.0405C81.4434 50.9603 87.183 45.2207 94.2631 45.2207C101.343 45.2207 107.083 50.9603 107.083 58.0405Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: pathLength1,
              opacity: strokeOpacity1,
              fill: color,
              fillOpacity
            }}
          />

          {/* Layer 2: Upper Crescent Wing Outline Appearing */}
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 0C125 27.131 125 54.2621 125 81.3931C144.22 85.1637 161.331 94.8197 174.374 108.411C175.736 109.829 177.04 111.297 178.32 112.789C186.052 121.929 192.062 132.569 195.848 144.216C205.411 129.55 210.968 112.032 210.968 93.2173C210.968 44.1121 173.117 3.83827 125 0Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: pathLength2,
              opacity: strokeOpacity2,
              fill: color,
              fillOpacity
            }}
          />

          {/* Layer 3: Middle Inner Wedge Outline Appearing */}
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 86V141.892V143.916C145.853 143.415 164.149 132.592 174.973 116.362C162.2 101.438 144.803 90.5701 125 86Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: pathLength3,
              opacity: strokeOpacity3,
              fill: color,
              fillOpacity
            }}
          />

          {/* Layer 4: Sweeping Outer C Curve Outline Appearing */}
          <motion.path
            d="M125 144C118.988 144.757 112.313 144.938 106.321 144.016C75.5795 139.294 52.0332 112.744 52.0332 80.6626C52.0332 45.7647 79.9196 17.3827 114.624 16.5814V0C51.1809 0.807127 0 52.4721 0 116.105C0 178.984 52.7165 232.237 116.132 232.237C118.921 232.237 122.26 231.912 125 231.718V144Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: pathLength4,
              opacity: strokeOpacity4,
              fill: color,
              fillOpacity
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
