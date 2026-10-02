import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { BrandFullLogo } from "./BrandLogo";
import Button, { Btn } from "./Button";

export { Button, Btn };

export default function Header({ onOpenContact, onOpenNav }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 z-40 left-0 md:left-[69px] px-6 sm:px-12 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f4f0]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-[#27262b]/5"
          : "bg-transparent"
      }`}
    >
      {/* Brand logo & mobile menu toggle */}
      <div className="flex items-center gap-6">
        <button
          onClick={onOpenNav}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#27262b] text-white hover:bg-black transition-colors cursor-pointer"
          aria-label="Open Navigation Drawer"
        >
          <Menu size={18} />
        </button>

        <Link
          to="/"
          className="inline-flex items-center group transition-transform hover:scale-105 active:scale-95"
          aria-label="Criyon Home"
        >
          <BrandFullLogo
            height={32}
            primaryColor="#27262b"
            accentColor="#1877F2"
            className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-[1.02] duration-200"
          />
        </Link>
      </div>

      {/* Action CTA button with rolling text / arrow & Products nav */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          to="/products"
          className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
            location.pathname === "/products"
              ? "bg-[#1877F2] text-white shadow-sm"
              : "bg-white/80 hover:bg-white text-[#27262b] border border-neutral-200/80 shadow-xs"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] animate-pulse" />
          <span>Products</span>
        </Link>

        <button
          onClick={onOpenNav}
          className="hidden sm:inline-flex md:hidden text-xs uppercase font-mono px-3.5 py-2 rounded-full border border-neutral-300 hover:border-black transition-colors"
        >
          Menu
        </button>

        <Button
          size="sm"
          variant="light"
          onClick={() => {
            if (onOpenContact) onOpenContact("Header Schedule Call");
          }}
        >
          schedule a call
        </Button>
      </div>
    </motion.header>
  );
}
