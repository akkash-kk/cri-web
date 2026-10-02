import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Zap,
  Sliders,
  Layers,
  Download
} from "lucide-react";

import BackgroundRemoverTool from "../components/products/BackgroundRemoverTool";
import Button from "../components/Button";
import { FadeUp } from "../components/ScrollReveal";

const KEY_FEATURES = [
  {
    icon: Zap,
    title: "100% In-Browser Processing",
    desc: "Instant client-side segmentation and pixel processing. No server queues or upload delays."
  },
  {
    icon: Sliders,
    title: "Precision Edge & Tolerance",
    desc: "Interactive tolerance and edge-feather sliders for fine control around hair, clothing, and complex silhouettes."
  },
  {
    icon: Layers,
    title: "Studio Backdrop Testing",
    desc: "Instantly test clean white, dark luxury charcoal, vibrant brand gradients, or transparent checkerboard."
  },
  {
    icon: Download,
    title: "32-Bit Transparent PNG",
    desc: "Export full-resolution lossless cutouts ready for e-commerce stores, ads, presentations, and design systems."
  }
];

export default function Products({ onOpenContact }) {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-10 sm:pt-16 pb-20 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none">
      <main className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Page Hero Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold uppercase tracking-wider text-[#1877F2] shadow-xs font-mono"
          >
            <Scissors size={13} />
            <span>Black Box AI Product</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-[#27262b] leading-[1.08]"
          >
            AI Background Remover
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            Instant subject isolation, high-precision alpha edge refinement, studio backdrop testing, and transparent 32-bit RGBA PNG export — directly in your browser.
          </motion.p>
        </section>

        {/* LIVE BACKGROUND REMOVER WORKSPACE */}
        <section className="relative">
          <BackgroundRemoverTool />
        </section>

        {/* TOOL CAPABILITIES & FEATURES */}
        <section className="space-y-8 pt-6 border-t border-neutral-200/80">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#1877F2]">
              Product Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#27262b]">
              Engineered for Speed &amp; Precision
            </h2>
            <p className="text-sm text-neutral-500">
              Built for designers, e-commerce managers, and founders needing studio-quality cutouts without expensive subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {KEY_FEATURES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f4f0] text-[#1877F2] flex items-center justify-center border border-neutral-200/70">
                    <IconComp size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#27262b] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom Custom Enterprise Tool Request Banner */}
        <FadeUp className="bg-[#27262b] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1877F2]">
              Custom Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need a bespoke AI product or custom tool for your business?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              We design and ship high-performance bespoke AI apps, WebGL product configurators, and brand engineering systems tailored to your workflow.
            </p>
          </div>

          <Button
            onClick={() => onOpenContact("Custom AI Product Engineering")}
            variant="accent"
            className="shrink-0"
          >
            Build a Custom Product
          </Button>
        </FadeUp>
      </main>
    </div>
  );
}
