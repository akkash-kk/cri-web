import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ExternalLink,
  Download,
  Sparkles,
  ShieldCheck,
  Check,
  Terminal,
  Copy,
  Layers,
  Film,
  Maximize2,
  Minimize2
} from "lucide-react";
import { AppleLogo } from "./SupasteHero";

// Glossy App Icon matching screenshot
export function SupasteAppIcon({ className = "w-[28px] h-[28px]" }) {
  return (
    <div className={`relative ${className} shrink-0 select-none overflow-hidden rounded-[8px] shadow-[0_2px_8px_rgba(0,102,255,0.45)]`}>
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="supaste-blue-base" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4cb2ff" />
            <stop offset="35%" stopColor="#0a7aff" />
            <stop offset="100%" stopColor="#004ce5" />
          </linearGradient>
          <linearGradient id="supaste-glare" x1="16" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="supaste-inner-border" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Base squircle */}
        <rect width="32" height="32" rx="8" fill="url(#supaste-blue-base)" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="url(#supaste-inner-border)" strokeWidth="1" />

        {/* Upper curved gloss glare */}
        <ellipse cx="16" cy="7" rx="14" ry="7" fill="url(#supaste-glare)" />

        {/* White clipboard/document sheets icon */}
        <rect x="9.5" y="10.5" width="13" height="15" rx="2.5" fill="#ffffff" fillOpacity="0.5" />
        <rect x="11.5" y="8" width="11" height="15" rx="2.5" fill="#ffffff" />
        {/* Clip top tab */}
        <rect x="13.5" y="6.5" width="7" height="3" rx="1.5" fill="#dbeafe" />
      </svg>
    </div>
  );
}

export default function SupasteNavbar({
  onOpenContact,
  isFullscreen,
  onToggleFullscreen
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadStep, setDownloadStep] = useState("idle");
  const [activeModal, setActiveModal] = useState(null); // 'updates' | 'movie' | 'pricing' | null
  const [toastMessage, setToastMessage] = useState(null);

  const copyToClipboard = (text, label) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setToastMessage(`Copied ${label || text} to clipboard!`);
    setTimeout(() => setToastMessage(null), 2400);
  };

  const navLinks = [
    { label: "Features", href: "#features", action: null },
    { label: "FAQ", href: "#faq", action: null },
    { label: "Updates", href: "#updates", action: () => setActiveModal("updates") },
    { label: "Cooldock", href: "#features", action: null },
    { label: "Screen Movie", href: "#screen-movie", action: () => setActiveModal("movie") },
    { label: "Pricing", href: "#pricing", action: () => setActiveModal("pricing") }
  ];

  const handleLinkClick = (e, link) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      setIsMobileMenuOpen(false);
      return;
    }

    if (link.href.startsWith("#")) {
      const targetId = link.href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleSimulateDownload = () => {
    setDownloadStep("downloading");
    setTimeout(() => {
      setDownloadStep("done");
      const element = document.createElement("a");
      const file = new Blob(
        [
          "Supaste v2.4.0 for macOS\n\nThank you for downloading Supaste!\nTo install, drag Supaste into your Applications folder.\n\nRequirement: macOS Sonoma 14.0 or later.\nEnjoy instant visual clipboard history!"
        ],
        { type: "text/plain" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "Supaste-2.4.0-Universal.dmg.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1100);
  };

  return (
    <>
      {/* EXACT TOP-DOCKED NAVBAR CONTAINER (MATCHING IMAGE SCREENSHOT 1:1) */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw] select-none">
        <div className="flex items-center justify-between bg-black text-white rounded-b-[24px] px-5 sm:px-6 h-[52px] sm:h-[54px] shadow-[0_10px_35px_rgba(0,0,0,0.5)] border-b border-x border-white/10 transition-all">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group cursor-pointer mr-6 sm:mr-8 lg:mr-9"
          >
            <SupasteAppIcon className="w-[28px] h-[28px]" />
            <span className="font-semibold text-[14px] text-white tracking-tight group-hover:text-blue-200 transition-colors">
              Supaste
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav
            aria-label="Desktop Navigation Links"
            className="hidden md:flex items-center gap-6 lg:gap-7 text-[13px] font-normal text-neutral-400"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="hover:text-white transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Download Button & Fullscreen */}
          <div className="flex items-center gap-2 sm:gap-2.5 ml-6 sm:ml-8 lg:ml-9">
            <button
              onClick={() => {
                setDownloadStep("idle");
                setIsDownloadOpen(true);
              }}
              className="flex items-center gap-1.5 bg-white hover:bg-neutral-100 active:scale-95 text-black font-semibold text-[13px] px-4 py-1.5 rounded-full shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <AppleLogo className="w-3.5 h-3.5 fill-black" />
              <span>Download</span>
            </button>

            {onToggleFullscreen && (
              <button
                onClick={onToggleFullscreen}
                className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                title={isFullscreen ? "Exit Full Screen (F)" : "Enter Complete Full Screen (F)"}
                aria-label="Toggle Full Screen"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Attached Under Top Bar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-1 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-3 shadow-2xl space-y-1 z-50"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DOWNLOAD MODAL (MACOS STYLE) */}
      <AnimatePresence>
        {isDownloadOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="bg-[#1c1c1e] text-white w-full max-w-lg rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <AppleLogo className="w-4 h-4" fill="#ffffff" />
                  <span className="font-semibold text-sm">Download Supaste for macOS</span>
                </div>
                <button
                  onClick={() => setIsDownloadOpen(false)}
                  className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <SupasteAppIcon className="w-16 h-16 shadow-lg" />
                  <div>
                    <h3 className="font-bold text-lg text-white">Supaste v2.4.0</h3>
                    <p className="text-xs text-neutral-400">
                      Universal Binary for Apple Silicon (M1/M2/M3/M4) &amp; Intel Macs
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-[11px] text-neutral-400 font-mono">
                      <span>48.2 MB DMG</span>
                      <span>·</span>
                      <span className="text-emerald-400 font-sans font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Notarized by Apple
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Download Action */}
                <div className="space-y-3">
                  <button
                    onClick={handleSimulateDownload}
                    disabled={downloadStep === "downloading"}
                    className="w-full bg-white hover:bg-neutral-100 text-black font-semibold py-3 px-5 rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer disabled:opacity-60"
                  >
                    {downloadStep === "downloading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Downloading installer...
                      </span>
                    ) : downloadStep === "done" ? (
                      <span className="flex items-center gap-2 text-emerald-700">
                        <Check className="w-4 h-4 stroke-[3]" />
                        Download Started! Check Downloads folder
                      </span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Supaste.dmg</span>
                      </>
                    )}
                  </button>

                  {/* Terminal Homebrew snippet */}
                  <div className="bg-black/60 rounded-xl p-3 border border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                      <span>brew install --cask supaste</span>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard("brew install --cask supaste", "Terminal command")
                      }
                      className="text-neutral-400 hover:text-white p-1 hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                      title="Copy brew command"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Privacy Assurance */}
                <div className="bg-neutral-900/60 rounded-xl p-3.5 border border-neutral-800 space-y-1 text-xs text-neutral-300">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Zero Cloud Storage &amp; 100% Privacy</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    Your clipboard records never touch any remote server. Everything is indexed locally on your Mac SSD with hardware encryption.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: UPDATES / CHANGELOG */}
      <AnimatePresence>
        {activeModal === "updates" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1c1c1e] text-white w-full max-w-md rounded-2xl border border-white/15 p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h3 className="font-semibold text-sm">Supaste Updates &amp; Releases</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">v2.4.0 (Latest Release)</span>
                    <span className="text-[10px] text-neutral-500 font-mono">Oct 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1 pl-1">
                    <li>Dynamic Notch visual docking for macOS Sonoma and Sequoia</li>
                    <li>Instant hex color swatch copy and digital color sampler</li>
                    <li>40% reduced memory footprint with zero background polling</li>
                  </ul>
                </div>

                <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/60 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-300">v2.3.8</span>
                    <span className="text-[10px] text-neutral-500 font-mono">Sep 2026</span>
                  </div>
                  <p className="text-neutral-400 text-[11px]">
                    Added global hotkey custom mapping and instant OCR text detection on captured screenshots.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: SCREEN MOVIE */}
      <AnimatePresence>
        {activeModal === "movie" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1c1c1e] text-white w-full max-w-xl rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-sm">Supaste in Action · Screen Movie</span>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div className="relative aspect-video rounded-xl bg-neutral-950 overflow-hidden border border-neutral-800 flex items-center justify-center">
                  {/* Visual mockup of screen recording */}
                  <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-blue-900/40 via-neutral-950 to-neutral-900">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Live Clipboard Recording</span>
                      <span className="flex items-center gap-1.5 text-red-400 font-mono text-[10px]">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" /> REC
                      </span>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-lg font-bold text-white">Press ⌘ + Shift + V</p>
                      <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                        Summon the floating notch anywhere across macOS in 0.05 seconds.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setActiveModal(null);
                          setIsDownloadOpen(true);
                        }}
                        className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors"
                      >
                        Try it on your Mac
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: PRICING */}
      <AnimatePresence>
        {activeModal === "pricing" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1c1c1e] text-white w-full max-w-md rounded-2xl border border-white/15 p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-semibold text-sm">Supaste Pricing</h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 text-center space-y-3">
                <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                  Pay Once, Own Forever
                </span>
                <div>
                  <div className="text-3xl font-extrabold text-white">$19</div>
                  <div className="text-xs text-neutral-400">One-time purchase · Lifetime updates</div>
                </div>
                <ul className="text-xs text-neutral-300 space-y-1.5 text-left pt-2 border-t border-neutral-800">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Up to 3 Macs per license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% offline &amp; encrypted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>14-day full refund guarantee</span>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setActiveModal(null);
                    setIsDownloadOpen(true);
                  }}
                  className="w-full bg-white text-black font-semibold py-2.5 rounded-xl text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Download Free Trial
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating toast notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-medium"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
