import React from "react";

/**
 * PageLoader:
 * Lightweight, elegant loading state shown during route transitions
 * only if the next page component or content has not finished loading.
 */
export default function PageLoader() {
  return (
    <div
      className="min-h-[65vh] flex flex-col items-center justify-center py-20 px-4"
      aria-label="Loading page content"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle spinning accent ring */}
        <div className="w-11 h-11 rounded-full border-2 border-white/10 border-t-[#1877F2] animate-spin" />
        {/* Center glowing blue dot */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#1877F2] shadow-[0_0_10px_#1877F2]" />
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-neutral-400">
        <span className="text-[11px] font-mono tracking-widest uppercase">
          Loading
        </span>
        <span className="inline-flex gap-1 items-center ml-0.5">
          <span className="w-1 h-1 rounded-full bg-[#1877F2] animate-bounce [animation-delay:0ms]" />
          <span className="w-1 h-1 rounded-full bg-[#1877F2] animate-bounce [animation-delay:150ms]" />
          <span className="w-1 h-1 rounded-full bg-[#1877F2] animate-bounce [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  );
}
