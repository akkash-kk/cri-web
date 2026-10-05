import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SupasteNavbar from "./SupasteNavbar";
import {
  Search,
  Star,
  LayoutGrid,
  ExternalLink,
  Plus,
  Copy,
  Check,
  Download,
  Wifi,
  Globe,
  MapPin,
  Palette,
  Sparkles,
  Layers,
  X,
  Terminal,
  ShieldCheck,
  HardDrive,
  Maximize2,
  Minimize2
} from "lucide-react";

// Apple SVG Icon
export function AppleLogo({ className = "w-4 h-4", fill = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 170 170"
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.71-11.65-14-4.89-7.51-8.7-16.14-11.44-25.9-2.73-9.76-4.1-19.14-4.1-28.14 0-14.53 3.65-26.44 10.95-35.73 7.3-9.3 16.5-13.97 27.6-14.02 5.06 0 10.65 1.34 16.78 4.01 6.13 2.68 10.02 4.07 11.67 4.17 1.8.1 6.18-1.54 13.15-4.91 6.96-3.37 12.87-4.86 17.72-4.47 13.5.76 24.31 5.67 32.44 14.73-11.75 7.1-17.5 16.94-17.26 29.5.25 9.94 4.12 18.23 11.62 24.87 7.5 6.64 16.37 10.42 26.62 11.34-2.14 6.74-4.7 13.26-7.69 19.57zM119.22 31.85c0-7.39 2.66-14.28 7.98-20.67 5.32-6.39 12-10.44 20.04-12.18.3 1.25.46 2.5.46 3.75 0 7.35-2.78 14.47-8.35 21.36-5.57 6.89-12.35 10.74-20.33 11.55-.16-1.25-.24-2.52-.24-3.81z" />
    </svg>
  );
}

// Photos Icon
function PhotosIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" fill="#ff9f0a" stroke="none" />
      <path d="M12 2v4" stroke="#ff453a" />
      <path d="M12 18v4" stroke="#30d158" />
      <path d="M4.93 4.93l2.83 2.83" stroke="#ff9f0a" />
      <path d="M16.24 16.24l2.83 2.83" stroke="#0a84ff" />
      <path d="M2 12h4" stroke="#ffd60a" />
      <path d="M18 12h4" stroke="#5e5ce6" />
      <path d="M4.93 19.07l2.83-2.83" stroke="#64d2ff" />
      <path d="M16.24 7.76l2.83-2.83" stroke="#bf5af2" />
    </svg>
  );
}

// Retro Mac Graphic for Macapp.supply card
function RetroMacIllustration() {
  return (
    <div className="w-16 h-18 bg-[#dfdacd] rounded-t-md rounded-b-sm border border-[#c4beaf] shadow-xs flex flex-col items-center justify-between p-1.5 relative overflow-hidden">
      {/* Mac screen */}
      <div className="w-12 h-9 bg-[#7a7873] rounded-sm flex items-center justify-center border border-[#5c5b57] relative">
        <span className="text-[9px] font-mono text-[#dcdad4] tracking-tight font-bold italic">
          hello
        </span>
      </div>
      {/* Floppy drive slot */}
      <div className="w-7 h-0.5 bg-[#8b8577] rounded-full mt-1.5 mb-1" />
      {/* Apple rainbow badge mini */}
      <div className="w-1.5 h-1.5 rounded-full bg-linear-to-b from-[#62b950] via-[#fcba30] to-[#e44234] self-start ml-0.5" />
    </div>
  );
}

const INITIAL_ITEMS = [
  {
    id: "card-1",
    category: "Assets",
    type: "dock",
    title: "A useful Dock for live widgets.",
    domain: "dock.cool",
    time: "23 min ago",
    app: "Safari",
    icon: "globe",
    content: "https://dock.cool",
    starred: true
  },
  {
    id: "card-2",
    category: "Assets",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    time: "5 min ago",
    size: "3.5 MB",
    app: "Photos",
    icon: "photos",
    content: "IMG_2026_PORTRAIT_HIGHRES.HEIC",
    starred: false
  },
  {
    id: "card-3",
    category: "Inspirations",
    type: "curated",
    title: "A curated shelf of beautifully designed macOS apps.",
    domain: "macapp.supply",
    time: "23 min ago",
    app: "Chrome",
    icon: "globe",
    content: "https://macapp.supply",
    starred: true
  },
  {
    id: "card-4",
    category: "Prompts",
    type: "address",
    text: "Minneapolis 55410, 2941 Rocket Drive United States",
    time: "19 min ago",
    app: "Maps",
    icon: "map-pin",
    content: "Minneapolis 55410, 2941 Rocket Drive United States",
    starred: false
  },
  {
    id: "card-5",
    category: "Colors",
    type: "color",
    hex: "#0080FF",
    time: "35 min ago",
    app: "Digital Color Meter",
    icon: "palette",
    content: "#0080FF",
    starred: true
  },
  {
    id: "card-6",
    category: "Prompts",
    type: "address",
    text: "Craft a high-performance clipboard buffer with zero frame drops.",
    time: "42 min ago",
    app: "Notes",
    icon: "map-pin",
    content: "Craft a high-performance clipboard buffer with zero frame drops.",
    starred: false
  },
  {
    id: "card-7",
    category: "Colors",
    type: "color",
    hex: "#FF453A",
    time: "1 hr ago",
    app: "Figma",
    icon: "palette",
    content: "#FF453A",
    starred: false
  }
];

export default function SupasteHero({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState("History");
  const [searchQuery, setSearchQuery] = useState("");
  const [starredOnly, setStarredOnly] = useState(false);
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [toastMessage, setToastMessage] = useState(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isNewItemOpen, setIsNewItemOpen] = useState(false);
  const [newItemText, setNewItemText] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Prompts");
  const [downloadStep, setDownloadStep] = useState("idle");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen toggle:", err);
    }
  };

  // Auto-request fullscreen: 1-second simulated auto-click + earliest user gesture handler
  useEffect(() => {
    let hasAttempted = false;

    const requestFullscreenAuto = async () => {
      if (hasAttempted || document.fullscreenElement) return;
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          hasAttempted = true;
        }
      } catch {
        // Will succeed when user clicks or taps
      }
    };

    // 1. Attempt immediately on page load
    requestFullscreenAuto();

    // 2. Exact 1-second script to auto-click the fullscreen button
    const autoClickTimer = setTimeout(() => {
      const btn = document.getElementById("fullscreen-auto-btn");
      if (btn) {
        try {
          btn.click();
        } catch {
          // Handled if browser enforces trusted user gesture
        }
      }
    }, 1000);

    const handleKeyDown = (e) => {
      if ((e.key === "f" || e.key === "F") && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(autoClickTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const categories = ["History", "Prompts", "Colors", "Assets", "Inspirations"];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category match
      if (activeCategory !== "History" && item.category !== activeCategory) {
        return false;
      }
      // Star filter
      if (starredOnly && !item.starred) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = item.title?.toLowerCase().includes(q);
        const textMatch = item.text?.toLowerCase().includes(q);
        const hexMatch = item.hex?.toLowerCase().includes(q);
        const domainMatch = item.domain?.toLowerCase().includes(q);
        const contentMatch = item.content?.toLowerCase().includes(q);
        return titleMatch || textMatch || hexMatch || domainMatch || contentMatch;
      }
      return true;
    });
  }, [items, activeCategory, starredOnly, searchQuery]);

  const copyToClipboard = (text, label) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setToastMessage(`Copied ${label || text} to clipboard!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleStar = (id, e) => {
    e.stopPropagation();
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, starred: !item.starred } : item))
    );
  };

  const handleAddNewItem = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;

    const isHex = newItemText.trim().startsWith("#");
    const newItem = {
      id: `custom-${Date.now()}`,
      category: isHex ? "Colors" : newItemCategory,
      type: isHex ? "color" : "address",
      hex: isHex ? newItemText.trim() : undefined,
      text: !isHex ? newItemText.trim() : undefined,
      time: "Just now",
      app: "Clipboard",
      icon: isHex ? "palette" : "map-pin",
      content: newItemText.trim(),
      starred: false
    };

    setItems((prev) => [newItem, ...prev]);
    setNewItemText("");
    setIsNewItemOpen(false);
    copyToClipboard(newItem.content, "new snippet");
  };

  const handleSimulateDownload = () => {
    setDownloadStep("downloading");
    setTimeout(() => {
      setDownloadStep("done");
      // Create a virtual download anchor
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
    }, 1200);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0055fe] via-[#0b6eff] to-[#80c8ff] pt-0 pb-12 sm:pb-16 text-white min-h-[100dvh] flex flex-col justify-between">
      {/* 1-second auto-click button target */}
      <button
        id="fullscreen-auto-btn"
        onClick={toggleFullscreen}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        Auto Fullscreen Trigger
      </button>

      {/* Subtle Prompt when not yet in Fullscreen (Clicking anywhere or this badge enters fullscreen) */}
      <AnimatePresence>
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={toggleFullscreen}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-medium cursor-pointer hover:bg-black transition-all hover:scale-105 active:scale-95 select-none"
            title="Click to enter Complete Full Screen (F)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Click anywhere for Complete Full Screen</span>
            <span className="font-mono text-[10px] text-neutral-400 bg-white/10 px-1.5 py-0.5 rounded">F</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. EXACT FLOATING NAVBAR */}
      <SupasteNavbar
        onOpenContact={onOpenContact}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* 2. HONORS RIBBON ON RIGHT EDGE */}
      <div
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-black text-white px-2.5 py-4 flex-col items-center gap-3 rounded-l-md shadow-2xl cursor-pointer hover:bg-neutral-900 transition-colors group"
        onClick={() => copyToClipboard("https://ais-pre-3a6t3eknnbzrpntqkr4kex-305676713955.asia-east1.run.app", "Site URL")}
        title="Site of the Day Honors"
      >
        <span className="font-serif font-black text-base tracking-tighter leading-none group-hover:scale-110 transition-transform">
          W.
        </span>
        <span
          className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/90"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Honors
        </span>
      </div>

      {/* 3. HERO HEADLINE & ACTIONS (FITS COMPLETE SCREEN) */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto text-center px-4 sm:px-6 pt-16 sm:pt-18 pb-3 space-y-3 sm:space-y-4 my-auto shrink-0">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-white/95 font-medium text-xs sm:text-sm tracking-wide"
        >
          <AppleLogo className="w-4 h-4" fill="#ffffff" />
          <span>Clipboard history</span>
        </motion.div>

        {/* Display Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-0"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-white leading-[1.04]">
            Copy once.
          </h1>
          <h2 className="font-display-serif italic font-normal text-4xl sm:text-6xl lg:text-[80px] text-white tracking-tight leading-[0.98]">
            Reuse anytime.
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal pt-0.5"
        >
          Supaste saves your clipboard and screenshots in a beautiful visual
          history, automatically grouped by type, app, and custom categories, so
          you can search, find, and paste anything back in seconds.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-1.5"
        >
          <button
            onClick={() => {
              setDownloadStep("idle");
              setIsDownloadOpen(true);
            }}
            className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-950 active:scale-97 text-white font-medium text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)] transition-all cursor-pointer border border-white/10"
          >
            <AppleLogo className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="#ffffff" />
            <span>Download for macOS</span>
          </button>
        </motion.div>

        {/* Microcopy features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-xs text-white/75 font-normal tracking-normal pt-0.5"
        >
          <span>One-time purchase</span>
          <span className="text-white/40">·</span>
          <span>Fully offline and privacy</span>
          <span className="text-white/40">·</span>
          <span>macOS Sonoma 14.0 or later</span>
        </motion.div>
      </div>

      {/* 4. MACOS DESKTOP CONTAINER WITH INTEGRATED DYNAMIC NOTCH / DOCK */}
      <div className="w-full max-w-[1280px] mx-auto px-2 sm:px-6 shrink-0 mt-auto">
        {/* Sky-Blue Desktop Surface Window */}
        <div className="relative w-full rounded-t-[24px] sm:rounded-t-[34px] md:rounded-t-[40px] bg-[#9ad8ff] border-t border-x border-white/40 shadow-[0_-15px_40px_rgba(0,40,120,0.15)] overflow-hidden pt-0 pb-6 sm:pb-8">
          {/* macOS Desktop Status Bar Left: Traffic Light dots + Apple + App Name */}
          <div className="absolute top-2.5 left-4 sm:left-7 flex items-center gap-2.5 z-10 select-none">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-1.5 mr-1">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer"
                title="Scroll down"
              />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24] hover:opacity-80 transition-opacity cursor-pointer"
                title="Top"
              />
              <button
                onClick={toggleFullscreen}
                className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center group"
                title={isFullscreen ? "Exit Full Screen (F)" : "Enter Complete Full Screen (F)"}
              >
                <span className="text-[7px] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {isFullscreen ? "−" : "+"}
                </span>
              </button>
            </div>

            <AppleLogo className="w-3.5 h-3.5" fill="#ffffff" />
            <span className="font-semibold text-[13px] tracking-tight text-white drop-shadow-xs">
              Supaste
            </span>
          </div>

          {/* macOS Desktop Status Bar Right: Fullscreen button + Search, Wifi, Clock */}
          <div className="absolute top-2.5 right-4 sm:right-7 flex items-center gap-2.5 sm:gap-3 text-white/95 text-xs z-10 select-none">
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-[10px] font-mono transition-colors cursor-pointer border border-white/20 shadow-xs"
              title={isFullscreen ? "Exit Full Screen (F)" : "Enter Complete Full Screen (F)"}
            >
              {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Full Screen"}</span>
            </button>
            <Search className="w-3.5 h-3.5 drop-shadow-xs" />
            <Wifi className="w-3.5 h-3.5 drop-shadow-xs" />
            <span className="font-mono text-xs font-semibold tracking-tight text-white drop-shadow-xs">
              09:41
            </span>
          </div>

          {/* DYNAMIC NOTCH / DOCK (Curved Black Container docked flush at top) */}
          <div className="max-w-[1060px] mx-auto relative px-2 sm:px-4">
            {/* Notch Wrapper with Apple Dynamic Fillets */}
            <div className="relative bg-black text-white rounded-b-[28px] sm:rounded-b-[38px] p-4 sm:p-5 pt-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.55)] border-b border-x border-white/10 space-y-4">
              {/* Left Top Notch Inverted Fillet Ear (Desktop) */}
              <div className="hidden sm:block absolute -left-[18px] top-0 w-[18px] h-[18px] overflow-hidden pointer-events-none">
                <svg viewBox="0 0 18 18" className="w-full h-full fill-black">
                  <path d="M 0 0 C 10 0 18 8 18 18 L 18 0 Z" />
                </svg>
              </div>

              {/* Right Top Notch Inverted Fillet Ear (Desktop) */}
              <div className="hidden sm:block absolute -right-[18px] top-0 w-[18px] h-[18px] overflow-hidden pointer-events-none">
                <svg viewBox="0 0 18 18" className="w-full h-full fill-black">
                  <path d="M 18 0 C 8 0 0 8 0 18 L 0 0 Z" />
                </svg>
              </div>

              {/* Notch Top Row: Live Search Input + Quick Actions */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                {/* Search Input Bar */}
                <div className="flex-1 min-w-[180px] max-w-sm relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-neutral-900/90 text-white placeholder-neutral-500 text-xs sm:text-[13px] pl-8.5 pr-8 py-1.5 sm:py-2 rounded-xl border border-neutral-800 focus:outline-hidden focus:border-neutral-500 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 text-neutral-400 hover:text-white text-xs cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Quick Action Icons (Star, Grid, Popout) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setStarredOnly(!starredOnly)}
                    className={`p-2 rounded-full border transition-all cursor-pointer ${
                      starredOnly
                        ? "bg-amber-400/20 text-amber-300 border-amber-400/50"
                        : "bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700"
                    }`}
                    title="Filter Starred"
                    aria-label="Filter Starred"
                  >
                    <Star className={`w-3.5 h-3.5 ${starredOnly ? "fill-amber-400 text-amber-400" : ""}`} />
                  </button>

                  <button
                    onClick={() => {
                      const allCount = items.length;
                      setToastMessage(`Viewing ${filteredItems.length} of ${allCount} items`);
                      setTimeout(() => setToastMessage(null), 2000);
                    }}
                    className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                    title="Grid Layout"
                    aria-label="Grid Layout"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsDownloadOpen(true)}
                    className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
                    title="Open in window"
                    aria-label="Open in window"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Notch Tabs / Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count =
                    cat === "History"
                      ? items.length
                      : items.filter((i) => i.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-white text-black font-semibold shadow-xs"
                          : "bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] ${
                          isActive ? "text-neutral-500" : "text-neutral-600"
                        }`}
                      >
                        {count || 24}
                      </span>
                    </button>
                  );
                })}

                {/* Add custom snippet button */}
                <button
                  onClick={() => setIsNewItemOpen(true)}
                  className="shrink-0 w-7 h-7 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors border border-neutral-800 cursor-pointer"
                  title="Add custom clipboard snippet"
                  aria-label="Add custom clipboard snippet"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* CLIPBOARD HISTORY CARDS ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
                {filteredItems.slice(0, 5).map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    onClick={() => copyToClipboard(item.content, item.type)}
                    className="group relative bg-[#141417] hover:bg-[#1a1a1f] rounded-2xl p-2.5 sm:p-3 border border-neutral-800/80 hover:border-neutral-600/80 flex flex-col justify-between h-[185px] sm:h-[195px] cursor-pointer transition-all duration-200 overflow-hidden shadow-xs hover:shadow-lg"
                  >
                    {/* Card Content Top Visuals */}
                    {item.type === "dock" && (
                      <div className="space-y-2">
                        <div className="w-full h-24 bg-neutral-900/90 rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden border border-neutral-800">
                          <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium">
                            <AppleLogo className="w-2.5 h-2.5" fill="#a3a3a3" />
                            <span>dock.cool</span>
                          </div>
                          <p className="text-[11px] font-semibold text-white leading-tight">
                            A useful Dock for live widgets.
                          </p>
                          <div className="w-full bg-neutral-950/80 rounded-lg p-1 flex items-center justify-between border border-neutral-700/50">
                            <span className="text-[8px] text-neutral-300 font-mono">dock.cool</span>
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === "image" && (
                      <div className="w-full h-24 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                        <img
                          src={item.imageUrl}
                          alt={item.content}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    )}

                    {item.type === "curated" && (
                      <div className="w-full h-24 bg-[#eae6dc] rounded-xl p-2.5 flex items-center justify-between relative overflow-hidden border border-[#d6d1c4]">
                        <div className="space-y-1 pr-1 flex-1">
                          <p className="text-[10px] text-neutral-800 font-semibold leading-tight line-clamp-3">
                            A curated shelf of beautifully designed macOS apps.
                          </p>
                          <p className="text-[9px] text-neutral-600 font-mono">macapp.supply</p>
                        </div>
                        <RetroMacIllustration />
                      </div>
                    )}

                    {item.type === "address" && (
                      <div className="w-full h-24 bg-neutral-900/90 rounded-xl p-3 flex flex-col justify-center border border-neutral-800/80">
                        <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    )}

                    {item.type === "color" && (
                      <div
                        className="w-full h-24 rounded-xl p-3 flex flex-col justify-end relative shadow-inner overflow-hidden"
                        style={{ backgroundColor: item.hex }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        <span className="relative z-10 text-xs font-mono font-bold text-white drop-shadow-md">
                          {item.hex}
                        </span>
                      </div>
                    )}

                    {/* Card Bottom Meta Bar (App icon + Timestamp) */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-[10px] text-neutral-400">
                      <div className="flex items-center gap-1.5">
                        {item.type === "image" ? (
                          <PhotosIcon className="w-3 h-3" />
                        ) : item.type === "color" ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                        ) : item.type === "address" ? (
                          <MapPin className="w-3 h-3 text-red-400" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 flex items-center justify-center text-[7px] text-white font-bold">
                            C
                          </div>
                        )}
                        <span>{item.time}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {item.size && (
                          <span className="text-[9px] text-neutral-500 font-mono">
                            {item.size}
                          </span>
                        )}
                        <button
                          onClick={(e) => toggleStar(item.id, e)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-neutral-400 hover:text-amber-400"
                        >
                          <Star
                            className={`w-3 h-3 ${
                              item.starred ? "fill-amber-400 text-amber-400 opacity-100" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Hover copy indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md rounded-md p-1 text-white shadow-xs">
                      <Copy className="w-3 h-3" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-medium"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-black">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. DOWNLOAD MODAL (MACOS STYLE) */}
      <AnimatePresence>
        {isDownloadOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
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
                  className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#002b80] p-3 shadow-lg flex items-center justify-center shrink-0">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
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
                      className="text-neutral-400 hover:text-white p-1 hover:bg-neutral-800 rounded transition-colors"
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

      {/* 7. QUICK ADD SNIPPET MODAL */}
      <AnimatePresence>
        {isNewItemOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1c1c1e] text-white w-full max-w-md rounded-2xl border border-white/15 p-5 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-semibold text-sm">Add Clipboard Item</h3>
                <button
                  onClick={() => setIsNewItemOpen(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddNewItem} className="space-y-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">
                    Text, URL, or Hex Color (e.g. #0080FF)
                  </label>
                  <textarea
                    rows={3}
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Paste text snippet or enter #hex code..."
                    className="w-full bg-neutral-900 text-white text-xs p-3 rounded-xl border border-neutral-800 focus:outline-hidden focus:border-neutral-500"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Category</label>
                  <div className="flex gap-2">
                    {["Prompts", "Colors", "Assets", "Inspirations"].map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setNewItemCategory(c)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                          newItemCategory === c
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-neutral-900 text-neutral-400 border-neutral-800"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsNewItemOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Add to Dock
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
