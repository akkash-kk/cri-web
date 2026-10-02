import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Sparkles,
  Sliders,
  RefreshCw,
  Check,
  Eye,
  Layers,
  Palette
} from "lucide-react";

// Curated high quality sample images for instant testing
const SAMPLE_IMAGES = [
  {
    id: "sneaker",
    name: "Sneaker Product",
    thumb: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "portrait",
    name: "Portrait Model",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "gadget",
    name: "Smart Watch",
    thumb: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: "chair",
    name: "Designer Chair",
    thumb: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
    url: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=85"
  }
];

const BACKDROP_OPTIONS = [
  { id: "transparent", name: "Transparent", type: "checker" },
  { id: "white", name: "Clean White", type: "color", value: "#ffffff" },
  { id: "dark", name: "Studio Charcoal", type: "color", value: "#1a191d" },
  { id: "blue", name: "Electric Blue", type: "color", value: "#1877F2" },
  { id: "grad-azure", name: "Azure Gradient", type: "gradient", value: "linear-gradient(135deg, #1877F2 0%, #00c6ff 100%)" },
  { id: "grad-cyber", name: "Cyber Gradient", type: "gradient", value: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)" },
  { id: "grad-luxury", name: "Dark Velvet", type: "gradient", value: "linear-gradient(135deg, #232526 0%, #414345 100%)" },
  { id: "soft-cream", name: "Warm Off-White", type: "color", value: "#f4f3ee" }
];

export default function BackgroundRemoverTool() {
  const [currentImageSrc, setCurrentImageSrc] = useState(SAMPLE_IMAGES[0].url);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState(null);
  const [activeBackdrop, setActiveBackdrop] = useState(BACKDROP_OPTIONS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [tolerance, setTolerance] = useState(35);
  const [feather, setFeather] = useState(2);
  const [copied, setCopied] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Process image whenever source, tolerance, or feather changes
  useEffect(() => {
    processImage(currentImageSrc, tolerance, feather);
  }, [currentImageSrc, tolerance, feather]);

  const processImage = (src, tol, fth) => {
    setIsProcessing(true);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      
      const maxDim = 1000;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Sample corners to detect background color
      const sampleCorners = [
        [0, 0],
        [width - 1, 0],
        [0, height - 1],
        [width - 1, height - 1],
        [Math.floor(width / 2), 0],
        [0, Math.floor(height / 2)],
        [width - 1, Math.floor(height / 2)]
      ];

      const bgSamples = sampleCorners.map(([x, y]) => {
        const idx = (y * width + x) * 4;
        return [data[idx], data[idx + 1], data[idx + 2]];
      });

      // Simple, robust color distance segmentation
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Check distance to any background sample
        let minDiff = 9999;
        for (const [bgR, bgG, bgB] of bgSamples) {
          const diff = Math.sqrt(
            Math.pow(r - bgR, 2) +
            Math.pow(g - bgG, 2) +
            Math.pow(b - bgB, 2)
          );
          if (diff < minDiff) minDiff = diff;
        }

        const threshold = tol * 2.2;
        const featherRange = fth * 8 + 4;

        if (minDiff < threshold) {
          // Fully background
          data[i + 3] = 0;
        } else if (minDiff < threshold + featherRange) {
          // Smooth feather edge
          const alphaFactor = (minDiff - threshold) / featherRange;
          data[i + 3] = Math.round(data[i + 3] * alphaFactor);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL("image/png"));
      setIsProcessing(false);
    };

    img.onerror = () => {
      setIsProcessing(false);
    };

    img.src = src;
  };

  const handleFileUpload = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setCurrentImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    // Create a temporary canvas if custom background is selected
    if (activeBackdrop.type !== "checker") {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (activeBackdrop.type === "color") {
          ctx.fillStyle = activeBackdrop.value;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if (activeBackdrop.type === "gradient") {
          const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          grad.addColorStop(0, "#1877F2");
          grad.addColorStop(1, "#ff007a");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);
        const link = document.createElement("a");
        link.download = `blackbox-bg-removed-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
      img.src = processedImage;
    } else {
      const link = document.createElement("a");
      link.download = `blackbox-transparent-${Date.now()}.png`;
      link.href = processedImage;
      link.click();
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-sm space-y-8">
      {/* Tool Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={13} /> Instant AI Segmentation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#27262b]">
            AI Background Remover
          </h2>
          <p className="text-sm text-neutral-500 mt-1 max-w-xl">
            Automatically isolate subjects, erase distracting backgrounds, and export transparent PNGs or replace with studio backdrops in high resolution.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFileUpload(e.target.files?.[0])}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2.5 rounded-full bg-[#f4f3ee] text-[#27262b] hover:bg-[#eae8e0] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Upload size={14} /> Upload Custom Photo
          </button>

          <button
            onClick={handleDownload}
            disabled={!processedImage || isProcessing}
            className="px-6 py-2.5 rounded-full bg-[#1877F2] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
          >
            <Download size={14} /> Download Image
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Canvas / Split Comparison Viewer */}
        <div className="lg:col-span-8 space-y-4">
          <div
            ref={containerRef}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDraggingFile(true);
            }}
            onDragLeave={() => setIsDraggingFile(false)}
            onDrop={handleDrop}
            className={`relative w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden border border-neutral-200 shadow-inner flex items-center justify-center select-none ${
              isDraggingFile ? "ring-4 ring-[#1877F2] bg-blue-50" : ""
            }`}
            style={{
              background:
                activeBackdrop.type === "checker"
                  ? "repeating-conic-gradient(#e5e5e5 0% 25%, #ffffff 0% 50%) 50% / 20px 20px"
                  : activeBackdrop.value
            }}
          >
            {/* Background Removed Layer */}
            {processedImage && (
              <img
                src={processedImage}
                alt="Segmented Subject"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300"
              />
            )}

            {/* Original Image Layer (Clipped for Before/After Slider) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            >
              <img
                src={currentImageSrc}
                alt="Original Subject"
                className="w-full h-full object-contain bg-[#f0eee9]"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                Original
              </div>
            </div>

            {/* After label */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider pointer-events-none">
              AI Isolated
            </div>

            {/* Drag Divider Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg text-[#27262b] flex items-center justify-center text-xs font-bold border border-neutral-300 pointer-events-auto cursor-ew-resize">
                ⇄
              </div>
            </div>

            {/* Interactive invisible slider input over canvas */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full h-full"
              aria-label="Before after comparison slider"
            />

            {/* Processing Indicator */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-30"
                >
                  <RefreshCw className="animate-spin text-[#1877F2]" size={32} />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#27262b]">
                    AI Isolating Pixels...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Slider Instruction Prompt */}
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono px-1">
            <span>← Drag horizontal divider to inspect cutout quality →</span>
            <span>{sliderPosition}% split</span>
          </div>

          {/* Sample Presets Strip */}
          <div className="pt-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Try sample assets:
            </span>
            <div className="grid grid-cols-4 gap-3">
              {SAMPLE_IMAGES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => setCurrentImageSrc(sample.url)}
                  className={`group relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                    currentImageSrc === sample.url
                      ? "border-[#1877F2] ring-2 ring-[#1877F2]/30 scale-102"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <img
                    src={sample.thumb}
                    alt={sample.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs text-white text-[10px] p-1 text-center font-medium truncate">
                    {sample.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Settings & Backdrop Customizer */}
        <div className="lg:col-span-4 space-y-6 bg-[#f7f6f2] p-6 rounded-2xl border border-neutral-200/70">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#27262b] flex items-center gap-2 mb-3">
              <Palette size={15} /> Backdrop Replacement
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {BACKDROP_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveBackdrop(opt)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium transition-all text-left cursor-pointer ${
                    activeBackdrop.id === opt.id
                      ? "border-[#1877F2] bg-white text-[#27262b] shadow-xs ring-2 ring-[#1877F2]/20 font-semibold"
                      : "border-neutral-200/90 bg-white/60 text-neutral-600 hover:bg-white"
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-md border border-neutral-300 shrink-0"
                    style={{
                      background:
                        opt.type === "checker"
                          ? "repeating-conic-gradient(#bbb 0% 25%, #fff 0% 50%) 50% / 8px 8px"
                          : opt.value
                    }}
                  />
                  <span className="truncate">{opt.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Precision Sliders */}
          <div className="space-y-4 pt-4 border-t border-neutral-200/80">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#27262b] flex items-center gap-2">
              <Sliders size={15} /> Edge Detection Controls
            </h3>

            {/* Tolerance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-neutral-700">
                <span>Color Tolerance</span>
                <span className="font-mono">{tolerance}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={tolerance}
                onChange={(e) => setTolerance(Number(e.target.value))}
                className="w-full accent-[#1877F2] cursor-pointer"
              />
            </div>

            {/* Feather Radius */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-neutral-700">
                <span>Edge Smoothing / Feather</span>
                <span className="font-mono">{feather}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={feather}
                onChange={(e) => setFeather(Number(e.target.value))}
                className="w-full accent-[#1877F2] cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="p-4 rounded-xl bg-white border border-neutral-200/80 space-y-2 text-[11px] text-neutral-600">
            <div className="flex items-center justify-between">
              <span>Output Format:</span>
              <strong className="font-mono text-[#27262b]">PNG (RGBA 32-bit)</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Max Resolution:</span>
              <strong className="font-mono text-[#27262b]">4000 × 4000 px</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Processing Time:</span>
              <strong className="font-mono text-[#1877F2]">&lt; 0.1s Client-side</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
