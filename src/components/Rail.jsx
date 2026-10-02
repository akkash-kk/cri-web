import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { BrandLogoMark, BrandFullLogo } from "./BrandLogo";
import Button from "./Button";

export default function Rail({ onOpenContact, isOpen, setIsOpen }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isMenuOpen = isOpen !== undefined ? isOpen : internalOpen;
  const toggleMenu = (val) => {
    if (setIsOpen) setIsOpen(val !== undefined ? val : !isMenuOpen);
    else setInternalOpen(val !== undefined ? val : !internalOpen);
  };

  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Close menu on route change
  useEffect(() => {
    toggleMenu(false);
  }, [location.pathname]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggleMenu(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    { label: "PRODUCTS", href: "/products", isRoute: true, badge: "AI Tool" },
    { label: "OUR CASES", href: "/cases", isRoute: true },
    { label: "OUR APPROACH", href: "/#approach", id: "approach" },
    { label: "FAQ", href: "/#faq", id: "faq" },
    { label: "BLOG", href: "/blog", isRoute: true }
  ];

  const handleNavClick = (e, item) => {
    toggleMenu(false);
    if (!item.isRoute) {
      if (location.pathname === "/") {
        e.preventDefault();
        const elem = document.getElementById(item.id);
        if (elem) {
          elem.scrollIntoView({ behavior: "auto" });
        }
      }
    }
  };

  // Determine current page indicator number
  const pageNumber =
    location.pathname === "/"
      ? "01"
      : location.pathname.startsWith("/case")
      ? "02"
      : location.pathname.startsWith("/products")
      ? "03"
      : location.pathname.startsWith("/blog")
      ? "04"
      : "01";

  return (
    <>
      {/* ============================================================
          1. MOBILE & TABLET TOP BAR (< md / under 768px)
          Designed with the exact same visual language and styling as the aside bar
          ============================================================ */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 h-[64px] bg-[#27262b] text-white z-50 flex items-center justify-between px-4 sm:px-6 select-none shadow-none cursor-pointer group"
        onClick={() => toggleMenu(true)}
      >
        {/* Left: Identical Menu trigger with circular badge & font-mono MENU label */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-sm">
            <Menu size={18} />
          </div>
          <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 group-hover:text-[#1877F2] transition-colors">
            MENU
          </span>
        </div>

        {/* Center: Brand logo with blue accent */}
        <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.28em] uppercase text-neutral-300 group-hover:text-white transition-colors">
          <BrandLogoMark size={20} primaryColor="white" accentColor="#1877F2" />
          <span>CRIYON</span>
        </div>

        {/* Right: Identical scroll track indicator & page number */}
        <div className="flex items-center gap-2">
          <div className="w-12 sm:w-16 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#1877F2] origin-left"
              style={{ scaleX }}
            />
          </div>
          <span className="text-[10px] text-neutral-400 font-mono tracking-tighter">
            {pageNumber}
          </span>
        </div>
      </header>

      {/* ============================================================
          2. BACKDROP OVERLAY (Mobile & Desktop)
          ============================================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu(false);
            }}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* ============================================================
          3. MOBILE DRAWER MENU (< md)
          Matches 1:1 with the desktop expanded menu design
          ============================================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="md:hidden fixed top-0 left-0 bottom-0 w-[88vw] max-w-[380px] h-full bg-[#f5f4f0] text-[#27262b] z-50 flex flex-col justify-between px-6 sm:px-10 py-8 overflow-y-auto shadow-2xl"
          >
            {/* Header: Close Button + Brand Logo */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(false);
                }}
                className="w-10 h-10 rounded-full hover:bg-black/5 text-[#27262b] flex items-center justify-center transition-all cursor-pointer group"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-200" />
              </button>

              <Link
                to="/"
                onClick={() => toggleMenu(false)}
                className="inline-flex items-center hover:opacity-85 transition-opacity"
                aria-label="Black Box Home"
              >
                <BrandFullLogo height={34} primaryColor="#27262b" accentColor="#1877F2" className="h-8 sm:h-9 w-auto" />
              </Link>
            </div>

            {/* Center Menu Links & Action Button */}
            <div className="my-auto py-6 space-y-7">
              <nav className="space-y-4">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + 0.03 * idx, duration: 0.2 }}
                  >
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className="flex items-center justify-between text-base font-semibold tracking-wide text-[#27262b] hover:text-[#1877F2] transition-colors uppercase font-sans group"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className="block text-base font-semibold tracking-wide text-[#27262b] hover:text-[#1877F2] transition-colors uppercase font-sans"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* SCHEDULE A CALL Button */}
              <div className="pt-2">
                <Button
                  onClick={() => {
                    toggleMenu(false);
                    if (onOpenContact) onOpenContact("Mobile Menu Consultation");
                  }}
                  variant="dark"
                  fullWidth
                >
                  SCHEDULE A CALL
                </Button>
              </div>
            </div>

            {/* Bottom Circular Social Badges */}
            <div className="pt-4 flex items-center gap-2.5">
              {/* Clutch */}
              <a
                href="https://clutch.co"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                title="Clutch"
              >
                C
              </a>

              {/* Behance */}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                title="Behance"
              >
                Bē
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                title="LinkedIn"
              >
                in
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-sm transition-all duration-200 shadow-sm"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34675389458"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-sm transition-all duration-200 shadow-sm"
                title="WhatsApp Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ============================================================
          4. DESKTOP EXPANDABLE SIDE RAIL (>= md / 768px and above)
          Renders on the LEFT of the screen on desktop displays
          ============================================================ */}
      <motion.aside
        id="side-rail-nav"
        initial={false}
        animate={{
          width: isMenuOpen ? 380 : 69,
          backgroundColor: isMenuOpen ? "#f5f4f0" : "#27262b"
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 280,
          mass: 0.8
        }}
        className={`hidden md:flex fixed left-0 top-0 h-screen z-50 overflow-hidden select-none flex-col justify-between ${
          isMenuOpen ? "shadow-2xl" : "shadow-none"
        } ${
          !isMenuOpen ? "cursor-pointer group" : ""
        }`}
        onClick={!isMenuOpen ? () => toggleMenu(true) : undefined}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isMenuOpen ? (
            /* COLLAPSED STATE: Vertical rail strip */
            <motion.div
              key="collapsed-rail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-[69px] h-full flex flex-col justify-between items-center py-6 text-white shrink-0"
            >
              {/* Top Menu Icon */}
              <div className="flex flex-col items-center gap-1.5 pt-2">
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                  <Menu size={18} />
                </div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 group-hover:text-[#1877F2] transition-colors">
                  MENU
                </span>
              </div>

              {/* Central rotated complete brand logo (static, no rotation) */}
              <div className="relative py-12 flex items-center justify-center w-full">
                <div className="transform rotate-90 origin-center flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                  <BrandFullLogo
                    height={22}
                    primaryColor="#FCFBF0"
                    accentColor="#1877F2"
                    className="w-auto"
                  />
                </div>
              </div>

              {/* Bottom scroll track indicator */}
              <div className="flex flex-col items-center gap-2 pb-2">
                <div className="w-[2px] h-14 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    className="w-full bg-[#1877F2] origin-top h-full rounded-full"
                    style={{ scaleY }}
                  />
                </div>
                <span className="text-[10px] text-neutral-400 font-mono tracking-tighter">
                  {pageNumber}
                </span>
              </div>
            </motion.div>
          ) : (
            /* EXPANDED STATE: Full internal menu view inside the expanded box */
            <motion.div
              key="expanded-menu"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25, delay: 0.08 }}
              className="w-[380px] h-full flex flex-col justify-between px-8 sm:px-10 py-8 text-[#27262b] overflow-y-auto"
            >
              {/* Header: Close Button + Brand Logo */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(false);
                  }}
                  className="w-10 h-10 rounded-full hover:bg-black/5 text-[#27262b] flex items-center justify-center transition-all cursor-pointer group"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-200" />
                </button>

                <Link
                  to="/"
                  onClick={() => toggleMenu(false)}
                  className="inline-flex items-center hover:opacity-85 transition-opacity"
                  aria-label="Black Box Home"
                >
                  <BrandFullLogo height={36} primaryColor="#27262b" accentColor="#1877F2" className="h-9 sm:h-10 w-auto" />
                </Link>
              </div>

              {/* Center Menu Links & Action Button */}
              <div className="my-auto py-6 space-y-7">
                <nav className="space-y-4">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + 0.04 * idx, duration: 0.25 }}
                    >
                      {item.isRoute ? (
                        <Link
                          to={item.href}
                          onClick={(e) => handleNavClick(e, item)}
                          className="flex items-center justify-between text-base font-semibold tracking-wide text-[#27262b] hover:text-[#1877F2] transition-colors uppercase font-sans group"
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item)}
                          className="block text-base font-semibold tracking-wide text-[#27262b] hover:text-[#1877F2] transition-colors uppercase font-sans"
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* SCHEDULE A CALL Button */}
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      toggleMenu(false);
                      if (onOpenContact) onOpenContact("Sidebar Consultation");
                    }}
                    variant="dark"
                  >
                    SCHEDULE A CALL
                  </Button>
                </div>
              </div>

              {/* Bottom Circular Social Badges */}
              <div className="pt-4 flex items-center gap-2.5">
                {/* Clutch */}
                <a
                  href="https://clutch.co"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                  title="Clutch"
                >
                  C
                </a>

                {/* Behance */}
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                  title="Behance"
                >
                  Bē
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all duration-200 shadow-sm"
                  title="LinkedIn"
                >
                  in
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-sm transition-all duration-200 shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34675389458"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-[#1877F2] flex items-center justify-center text-sm transition-all duration-200 shadow-sm"
                title="WhatsApp Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  </>
);
}
