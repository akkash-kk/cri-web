import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minimize2, X } from "lucide-react";

export default function FullscreenControl() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document;
      const fsElement =
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;
      setIsFullscreen(Boolean(fsElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    // Initial check
    handleFullscreenChange();

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  const handleExitFullscreen = (e) => {
    e.stopPropagation();
    const doc = document;
    const exitFs =
      doc.exitFullscreen ||
      doc.webkitExitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.msExitFullscreen;

    if (exitFs) {
      try {
        const promise = exitFs.call(doc);
        if (promise && typeof promise.catch === "function") {
          promise.catch(() => {});
        }
      } catch {
        // Silently ignore
      }
    }
  };

  return (
    <AnimatePresence>
      {isFullscreen && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.92 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleExitFullscreen}
          className="fixed top-3.5 right-3.5 sm:top-4 sm:right-4 z-[9999] bg-[#0c0d12]/90 hover:bg-black text-white/90 hover:text-white px-3 py-1.5 rounded-full border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer group select-none"
          title="Close Full Screen (Esc)"
          aria-label="Close Full Screen"
        >
          <Minimize2 size={13} className="text-white/70 group-hover:text-white transition-colors" />
          <span className="text-[11px] font-medium tracking-wide">Close Full Screen</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
