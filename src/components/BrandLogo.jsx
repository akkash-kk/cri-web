import React from "react";
import { motion } from "framer-motion";

/**
 * BrandLogoStrokeOutline:
 * A distinct, modern outline stroke appearing animation.
 * The SVG paths draw themselves into view smoothly without any rotation.
 */
export function BrandLogoStrokeOutline({
  color = "#1877F2",
  size = 28,
  strokeWidth = 2,
  fillOnComplete = true,
  loop = true,
  duration = 2.4,
  className = "",
  style = {},
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 211 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      aria-hidden="true"
      {...props}
    >
      {/* 1. Inner dot outline appearing */}
      <motion.path
        d="M107.083 58.0405C107.083 65.1206 101.343 70.8602 94.2631 70.8602C87.183 70.8602 81.4434 65.1206 81.4434 58.0405C81.4434 50.9603 87.183 45.2207 94.2631 45.2207C101.343 45.2207 107.083 50.9603 107.083 58.0405Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
          fill: fillOnComplete ? ["transparent", "transparent", color, "transparent"] : "transparent"
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: loop ? Infinity : 0,
          repeatDelay: 0.6,
          times: [0, 0.4, 0.8, 1]
        }}
      />
      {/* 2. Upper crescent wing outline appearing */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125 0C125 27.131 125 54.2621 125 81.3931C144.22 85.1637 161.331 94.8197 174.374 108.411C175.736 109.829 177.04 111.297 178.32 112.789C186.052 121.929 192.062 132.569 195.848 144.216C205.411 129.55 210.968 112.032 210.968 93.2173C210.968 44.1121 173.117 3.83827 125 0Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
          fill: fillOnComplete ? ["transparent", "transparent", color, "transparent"] : "transparent"
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: loop ? Infinity : 0,
          repeatDelay: 0.6,
          times: [0, 0.5, 0.8, 1]
        }}
      />
      {/* 3. Middle inner wedge outline appearing */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125 86V141.892V143.916C145.853 143.415 164.149 132.592 174.973 116.362C162.2 101.438 144.803 90.5701 125 86Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
          fill: fillOnComplete ? ["transparent", "transparent", color, "transparent"] : "transparent"
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: loop ? Infinity : 0,
          repeatDelay: 0.6,
          times: [0, 0.55, 0.8, 1]
        }}
      />
      {/* 4. Sweeping outer C curve outline appearing */}
      <motion.path
        d="M125 144C118.988 144.757 112.313 144.938 106.321 144.016C75.5795 139.294 52.0332 112.744 52.0332 80.6626C52.0332 45.7647 79.9196 17.3827 114.624 16.5814V0C51.1809 0.807127 0 52.4721 0 116.105C0 178.984 52.7165 232.237 116.132 232.237C118.921 232.237 122.26 231.912 125 231.718V144Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0, fill: "transparent" }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
          fill: fillOnComplete ? ["transparent", "transparent", color, "transparent"] : "transparent"
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: loop ? Infinity : 0,
          repeatDelay: 0.6,
          times: [0, 0.6, 0.8, 1]
        }}
      />
    </svg>
  );
}

/**
 * BrandLogoMark: Renders the standalone Criyon symbol mark.
 * @param {string} [primaryColor="#1877F2"] - Main color for the symbol.
 * @param {string} [accentColor="#1877F2"] - Accent color for the symbol facets and dot.
 * @param {number|string} [size=28] - Pixel size or CSS dimension.
 * @param {string} [className=""] - Additional class names for styling.
 */
export function BrandLogoMark({
  primaryColor = "#1877F2",
  accentColor = "#1877F2",
  size = 28,
  className = "",
  style = {},
  ...props
}) {
  const fillColor = accentColor || primaryColor || "#1877F2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 211 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      aria-hidden="true"
      {...props}
    >
      {/* 1. Inner dot */}
      <path
        d="M107.083 58.0405C107.083 65.1206 101.343 70.8602 94.2631 70.8602C87.183 70.8602 81.4434 65.1206 81.4434 58.0405C81.4434 50.9603 87.183 45.2207 94.2631 45.2207C101.343 45.2207 107.083 50.9603 107.083 58.0405Z"
        fill={fillColor}
      />
      {/* 2. Upper crescent wing */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125 0C125 27.131 125 54.2621 125 81.3931C144.22 85.1637 161.331 94.8197 174.374 108.411C175.736 109.829 177.04 111.297 178.32 112.789C186.052 121.929 192.062 132.569 195.848 144.216C205.411 129.55 210.968 112.032 210.968 93.2173C210.968 44.1121 173.117 3.83827 125 0Z"
        fill={fillColor}
      />
      {/* 3. Middle inner wedge */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125 86V141.892V143.916C145.853 143.415 164.149 132.592 174.973 116.362C162.2 101.438 144.803 90.5701 125 86Z"
        fill={fillColor}
      />
      {/* 4. Sweeping outer C curve */}
      <path
        d="M125 144C118.988 144.757 112.313 144.938 106.321 144.016C75.5795 139.294 52.0332 112.744 52.0332 80.6626C52.0332 45.7647 79.9196 17.3827 114.624 16.5814V0C51.1809 0.807127 0 52.4721 0 116.105C0 178.984 52.7165 232.237 116.132 232.237C118.921 232.237 122.26 231.912 125 231.718V144Z"
        fill={fillColor}
      />
    </svg>
  );
}

/**
 * BrandFullLogo: Renders the official Criyon logo with symbol mark + wordmark typography.
 * Dimensions: tight viewBox 118 98 780 242 (aspect ratio ~3.22:1).
 * @param {string} [primaryColor="currentColor"] - Color for the typography wordmark.
 * @param {string} [accentColor="#1877F2"] - Color for the symbol mark and 'i' dot.
 * @param {number|string} [height=36] - Desired height.
 * @param {string} [className=""] - Additional class names for styling.
 */
export function BrandFullLogo({
  primaryColor = "currentColor",
  accentColor = "#1877F2",
  height = 36,
  width,
  className = "",
  style = {},
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="118 98 780 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      aria-label="Criyon logo"
      role="img"
      {...props}
    >
      {/* Symbol: Inner dot */}
      <path
        d="M230.082 161.04C230.082 168.121 224.343 173.86 217.263 173.86C210.182 173.86 204.443 168.121 204.443 161.04C204.443 153.96 210.182 148.221 217.263 148.221C224.343 148.221 230.082 153.96 230.082 161.04Z"
        fill={accentColor}
      />
      {/* Symbol: Upper crescent wing */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M248 103C248 130.131 248 157.262 248 184.393C267.22 188.164 284.331 197.82 297.374 211.411C298.736 212.829 300.04 214.297 301.32 215.789C309.052 224.929 315.062 235.569 318.848 247.216C328.411 232.55 333.968 215.032 333.968 196.217C333.968 147.112 296.117 106.838 248 103Z"
        fill={accentColor}
      />
      {/* Symbol: Middle inner wedge */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M248 189V244.892V246.916C268.853 246.415 287.149 235.592 297.973 219.362C285.2 204.438 267.803 193.57 248 189Z"
        fill={accentColor}
      />
      {/* Symbol: Sweeping outer C curve */}
      <path
        d="M248 247C241.988 247.757 235.313 247.938 229.321 247.016C198.579 242.294 175.033 215.744 175.033 183.663C175.033 148.765 202.92 120.383 237.624 119.581V103C174.181 103.807 123 155.472 123 219.105C123 281.984 175.716 335.237 239.132 335.237C241.921 335.237 245.26 334.912 248 334.718V247Z"
        fill={accentColor}
      />

      {/* Wordmark letter 'C' */}
      <path
        d="M425.892 280.23C393.47 280.23 367.395 253.983 367.395 220.531C367.395 187.423 393.47 161.176 425.892 161.176C445.62 161.176 463.633 171.297 472.382 188.109L458.143 196.343C451.453 184.849 439.959 177.816 425.206 177.816C402.905 177.816 385.407 196.343 385.407 220.531C385.407 245.063 402.733 263.762 425.206 263.762C439.959 263.762 451.625 256.728 458.143 245.234L472.382 253.469C463.633 270.28 445.62 280.23 425.892 280.23Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'r' */}
      <path
        d="M505.457 278.172H488.474V228.08C488.474 207.665 500.217 194.113 522.175 194.113C527.493 194.113 537.194 194.113 537.194 194.113V210.314C537.194 210.314 528.748 210.314 524.116 210.314C512.794 210.314 505.457 216.414 505.457 228.766V278.172Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'i' stem */}
      <path
        d="M550.54 194.113H567.523V278.172H550.54V194.113Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'y' */}
      <path
        d="M633.616 319C615.775 319 601.022 311.452 593.473 296.527L607.54 288.808C612.344 297.9 621.779 303.218 633.273 303.218C651.114 303.218 660.377 289.837 660.377 271.653V264.276C655.402 273.711 646.482 279.372 633.787 279.372C608.055 279.372 595.532 262.389 595.532 237.686V194.113H612.344V236.828C612.344 252.611 620.578 263.418 635.846 263.418C650.599 263.418 660.206 251.067 660.206 235.628V194.113H677.361V271.481C677.361 299.615 660.892 319 633.616 319Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'o' */}
      <path
        d="M743.207 280.23C717.818 280.23 698.261 260.331 698.261 235.971C698.261 211.782 717.989 192.054 743.207 192.054C768.596 192.054 787.809 211.954 787.809 235.971C787.809 260.331 768.424 280.23 743.207 280.23ZM743.207 264.105C758.818 264.105 770.826 251.41 770.826 236.142C770.826 220.703 758.818 208.008 743.207 208.008C727.424 208.008 715.245 220.703 715.245 236.142C715.245 251.41 727.424 264.105 743.207 264.105Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'n' */}
      <path
        d="M848.462 208.352C831.994 208.352 823.759 221.904 823.759 237.515V278.172H806.776V235.799C806.776 211.268 821.358 192.054 848.462 192.054C875.91 192.054 890.835 211.268 890.835 235.628V278.172H873.851V237.686C873.851 221.904 865.274 208.352 848.462 208.352Z"
        fill={primaryColor}
      />
      {/* Wordmark letter 'i' accent dot */}
      <path
        d="M547.795 166.322C547.795 172.498 552.77 177.473 558.946 177.473C565.121 177.473 569.925 172.498 569.925 166.322C569.925 160.146 565.121 155 558.946 155C552.77 155 547.795 160.146 547.795 166.322Z"
        fill={accentColor}
      />
    </svg>
  );
}

/**
 * BrandLogo: Primary export for rendering the official Criyon logo.
 * Supports rendering either the full logo or just the icon mark.
 */
export default function BrandLogo({
  variant = "full",
  height = 36,
  primaryColor = "#27262b",
  accentColor = "#1877F2",
  className = "",
  style = {},
  ...props
}) {
  if (variant === "icon") {
    return (
      <BrandLogoMark
        size={height}
        primaryColor={primaryColor}
        accentColor={accentColor}
        className={className}
        style={style}
        {...props}
      />
    );
  }

  return (
    <BrandFullLogo
      height={height}
      primaryColor={primaryColor}
      accentColor={accentColor}
      className={className}
      style={style}
      {...props}
    />
  );
}
