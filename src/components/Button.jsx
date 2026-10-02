import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Universal Black Box Action Button Component
 * 
 * Highly customizable with variants & direct color props:
 * - variant: "dark" (default) | "accent" / "orange" | "light" / "white" | "outline" | "ghost"
 * - bg: custom background color (hex or Tailwind class)
 * - textColor: custom text color (hex or Tailwind class)
 * - badgeBg: custom circle badge background color
 * - badgeColor: custom circle badge arrow color
 * - size: "sm" | "md" | "lg"
 * - fullWidth: boolean (expands w-full, typically justify-between)
 * - showBadge: boolean (default true, ↗ arrow circle)
 * - to: React Router route link
 * - href: standard external link
 * - onClick: callback
 */
export function Button({
  children,
  onClick,
  href,
  to,
  type = "button",
  variant = "dark",
  size = "md",
  fullWidth = false,
  showBadge = true,
  badgeIcon = "↗",
  bg,
  textColor,
  badgeBg,
  badgeColor,
  borderColor,
  className = "",
  disabled = false,
  ariaLabel,
  ...props
}) {
  // Preset Variants
  const variants = {
    dark: {
      container: "bg-[#27262b] text-white hover:bg-black border-transparent",
      badge: "bg-white text-[#27262b]",
    },
    accent: {
      container: "bg-[#1877F2] text-white hover:bg-[#1565D8] shadow-[0_4px_16px_rgba(24,119,242,0.25)] border-transparent",
      badge: "bg-white text-[#1877F2]",
    },
    orange: {
      container: "bg-[#1877F2] text-white hover:bg-[#1565D8] shadow-[0_4px_16px_rgba(24,119,242,0.25)] border-transparent",
      badge: "bg-white text-[#1877F2]",
    },
    light: {
      container: "bg-white text-[#27262b] border border-neutral-200/90 hover:bg-neutral-50 shadow-xs hover:border-neutral-300",
      badge: "bg-[#27262b] text-white",
    },
    white: {
      container: "bg-white text-[#27262b] border border-neutral-200/90 hover:bg-neutral-50 shadow-xs hover:border-neutral-300",
      badge: "bg-[#27262b] text-white",
    },
    outline: {
      container: "bg-transparent border border-[#27262b] text-[#27262b] hover:bg-[#27262b] hover:text-white",
      badge: "bg-[#27262b] text-white group-hover:bg-white group-hover:text-[#27262b]",
    },
    ghost: {
      container: "bg-transparent text-[#27262b] hover:bg-black/5 border-transparent",
      badge: "bg-[#27262b]/10 text-[#27262b]",
    }
  };

  const selectedVariant = variants[variant] || variants.dark;

  // Size Presets
  const sizes = {
    sm: {
      btn: "px-3.5 py-1.5 text-[11px] gap-2.5",
      badge: "w-5 h-5 text-[10px]",
    },
    md: {
      btn: "px-5 py-2.5 text-xs gap-3.5",
      badge: "w-6 h-6 text-xs",
    },
    lg: {
      btn: "px-6 py-3.5 text-sm gap-4",
      badge: "w-7 h-7 text-xs",
    }
  };

  const selectedSize = sizes[size] || sizes.md;

  // Inline styling for direct color overrides (hex, rgb, etc.)
  const customStyle = {};
  if (bg) {
    if (bg.startsWith("#") || bg.startsWith("rgb")) customStyle.backgroundColor = bg;
  }
  if (textColor) {
    if (textColor.startsWith("#") || textColor.startsWith("rgb")) customStyle.color = textColor;
  }
  if (borderColor) {
    if (borderColor.startsWith("#") || borderColor.startsWith("rgb")) customStyle.borderColor = borderColor;
  }

  const customBadgeStyle = {};
  if (badgeBg) {
    if (badgeBg.startsWith("#") || badgeBg.startsWith("rgb")) customBadgeStyle.backgroundColor = badgeBg;
  }
  if (badgeColor) {
    if (badgeColor.startsWith("#") || badgeColor.startsWith("rgb")) customBadgeStyle.color = badgeColor;
  }

  // Determine Tailwind classes for overrides if classes were passed (e.g. bg-[#...], text-...)
  const bgClass = bg && !bg.startsWith("#") && !bg.startsWith("rgb") ? bg : "";
  const textClass = textColor && !textColor.startsWith("#") && !textColor.startsWith("rgb") ? textColor : "";
  const borderClass = borderColor && !borderColor.startsWith("#") && !borderColor.startsWith("rgb") ? borderColor : "";
  const badgeBgClass = badgeBg && !badgeBg.startsWith("#") && !badgeBg.startsWith("rgb") ? badgeBg : "";
  const badgeColorClass = badgeColor && !badgeColor.startsWith("#") && !badgeColor.startsWith("rgb") ? badgeColor : "";

  const containerClasses = [
    "group inline-flex items-center rounded-full font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs select-none",
    fullWidth ? "w-full justify-between" : "justify-center",
    selectedSize.btn,
    !bg && !textColor ? selectedVariant.container : "",
    bgClass,
    textClass,
    borderClass,
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:shadow-md",
    className
  ].filter(Boolean).join(" ");

  const badgeClasses = [
    "rounded-full inline-flex items-center justify-center font-bold shrink-0 transition-all duration-300",
    selectedSize.badge,
    !badgeBg && !badgeColor ? selectedVariant.badge : "",
    badgeBgClass,
    badgeColorClass
  ].filter(Boolean).join(" ");

  const content = (
    <>
      <span className="tracking-wider text-inherit truncate">{children}</span>
      {showBadge && (
        <motion.b
          whileHover={{ rotate: 45 }}
          className={badgeClasses}
          style={customBadgeStyle}
        >
          {badgeIcon}
        </motion.b>
      )}
    </>
  );

  // Router Link
  if (to) {
    return (
      <Link to={to} className={fullWidth ? "w-full block" : "inline-block"}>
        <motion.div
          whileHover={disabled ? {} : { scale: 1.03 }}
          whileTap={disabled ? {} : { scale: 0.97 }}
          className={containerClasses}
          style={customStyle}
          aria-label={ariaLabel}
          {...props}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  // External / Anchor Link
  if (href) {
    return (
      <motion.a
        whileHover={disabled ? {} : { scale: 1.03 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
        href={href}
        onClick={onClick}
        className={containerClasses}
        style={customStyle}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  // Standard Button
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={containerClasses}
      style={customStyle}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </motion.button>
  );
}

// Backwards compatibility alias
export const Btn = Button;

export default Button;
