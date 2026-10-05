import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RJ_GROUP_DATA } from "../data/content";
import Button from "../components/Button";
import { FadeUp } from "../components/ScrollReveal";
import { X, ArrowRight, CheckCircle2, ShieldCheck, Zap, Truck, Wrench, Settings, ShoppingBag, PhoneCall, ExternalLink } from "lucide-react";

export default function CaseRJGroup({ onOpenContact }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProductModal, setActiveProductModal] = useState(null);

  const tags = [
    "Industrial E-Commerce",
    "Textile Machinery",
    "Weaving Looms",
    "Genuine Spares",
    "B2B Catalog System",
    "Rapid RFQ Engine"
  ];

  const categories = ["All", "Weaving Machinery", "Spinning Machinery", "Genuine Spares"];

  const filteredProducts = activeCategory === "All"
    ? RJ_GROUP_DATA.products
    : RJ_GROUP_DATA.products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-4 sm:pt-6 pb-16 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-2 grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-6 lg:gap-8 items-start">
        {/* Sticky Aside Information Box */}
        <aside className="lg:sticky lg:top-6 bg-[#f3f2ec] rounded-[28px] p-6 sm:p-7 shadow-xs border border-neutral-200/60 space-y-6">
          {/* Header row: RJ GROUP + Subtitle + Action Badges */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E53935]/10 text-[#E53935] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 border border-[#E53935]/20">
                  Industrial Flagship
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-[#27262b] leading-tight">
                  RJ Group
                </h1>
                <p className="text-xs text-neutral-400 font-normal mt-1">
                  Global Textile Hubs – Premium Industrial Grade
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 pt-0.5">
                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact("RJ Group Machinery Consultation")}
                  style={{ backgroundColor: "#E53935", color: "#ffffff" }}
                  className="h-8 px-3.5 rounded-full inline-flex items-center gap-1.5 text-[11px] font-semibold font-sans transition-all duration-200 shadow-sm hover:opacity-90 cursor-pointer"
                  title="Shop Now / Inquire"
                >
                  <ShoppingBag size={12} />
                  <span>Shop Now</span>
                </button>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mt-4 font-normal">
              Advanced Textile Machinery Solutions. Trusted by global textile mills and industry leaders for fast delivery, genuine spares, and expert engineering support.
            </p>
          </div>

          <hr className="border-neutral-200/80" />

          {/* Quick Specifications */}
          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-200/50">
              <span className="text-neutral-500 font-mono">Client</span>
              <span className="font-medium text-[#27262b]">RJ Group International</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200/50">
              <span className="text-neutral-500 font-mono">Sector</span>
              <span className="font-medium text-[#27262b]">Textile Machinery &amp; Spares</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200/50">
              <span className="text-neutral-500 font-mono">Platform Type</span>
              <span className="font-medium text-[#27262b]">Industrial E-Commerce &amp; RFQ</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200/50">
              <span className="text-neutral-500 font-mono">Brand Accent</span>
              <span className="font-medium text-[#E53935] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] inline-block shadow-xs" />
                Industrial Crimson Red (#E53935)
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200/50">
              <span className="text-neutral-500 font-mono">Year</span>
              <span className="font-medium text-[#27262b]">2025</span>
            </div>
          </div>

          {/* Core Guarantees Box */}
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/70 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
              Client Core Pillars
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-700">
                <Truck size={14} className="text-[#E53935] shrink-0" />
                <span><strong>Fast Delivery:</strong> Same-day dispatch on high-demand spares.</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <ShieldCheck size={14} className="text-[#E53935] shrink-0" />
                <span><strong>Genuine Spares:</strong> 100% OEM precision-machined alloys.</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Wrench size={14} className="text-[#E53935] shrink-0" />
                <span><strong>Expert Support:</strong> Factory-certified technicians on call.</span>
              </div>
            </div>
          </div>

          {/* Deliverables / Tags */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
              Scope of Work
            </span>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white text-[11px] font-medium text-neutral-700 border border-neutral-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-4 rounded-2xl bg-[#27262b] text-white space-y-2 shadow-xs">
            <p className="text-xs text-neutral-300 italic leading-relaxed">
              "Black Box turned our extensive machinery catalog and complex spare parts inventory into a blazing-fast, intuitive digital showroom. Inquiries from textile mill directors rose fourfold within 90 days."
            </p>
            <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
              <span className="text-white font-medium">Rajesh J., Founder</span>
              <span className="text-[#E53935]">RJ Group</span>
            </div>
          </div>

          <Button
            onClick={() => onOpenContact && onOpenContact("RJ Group Project Discussion")}
            style={{ backgroundColor: "#27262b", color: "#ffffff" }}
            className="w-full text-center justify-center !rounded-xl py-3 text-xs tracking-wider uppercase font-semibold hover:!bg-[#E53935] transition-colors"
          >
            Start a Similar Project
          </Button>
        </aside>

        {/* Main Content Stream */}
        <div className="space-y-8 sm:space-y-10">
          {/* 1. Hero Showcase Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl overflow-hidden bg-[#161616] text-white shadow-xl aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-between p-6 sm:p-10 lg:p-12 cursor-pointer"
            onClick={() => setSelectedImg("https://larkh.vercel.app/RJ%20group%20img%201.jpg")}
          >
            {/* Background Image with dark industrial gradient */}
            <img
              src="https://larkh.vercel.app/RJ%20group%20img%201.jpg"
              alt="RJ Group Premium Textile Machinery"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-[#E53935] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg font-mono">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Premium Industrial Grade
              </div>

              <span className="text-xs font-mono text-neutral-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Surat • Worldwide Dispatch
              </span>
            </div>

            {/* Bottom Headline & CTA */}
            <div className="relative z-10 space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E53935] font-bold block">
                Advanced Textile Machinery Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Empowering Global Textile Mills with Precision &amp; Speed.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                A purpose-built digital commerce experience combining heavy machinery spec visualization with instant genuine spares ordering.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContact && onOpenContact("Shop RJ Group Solutions");
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#E53935] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-white hover:text-[#27262b] transition-all flex items-center gap-2"
                >
                  <ShoppingBag size={14} />
                  <span>Shop Now</span>
                </button>
                <span className="text-xs text-neutral-400 font-mono">
                  Trusted by 480+ textile mills worldwide
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {RJ_GROUP_DATA.stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#E53935] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 3. The Industrial Challenge & Digital Architecture */}
          <div className="bg-[#1e1d21] text-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <small className="text-xs font-mono uppercase tracking-widest text-[#E53935]">
                  B2B Transformation
                </small>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1 text-white">
                  Bridging Heavy Engineering and Digital Commerce
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                01 / The Challenge
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-sm leading-relaxed">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  The Legacy Friction
                </h4>
                <p>
                  Textile manufacturing operates on razor-thin deadlines. A stopped weaving loom costs thousands of dollars per hour. Historically, purchasing multi-ton weaving machines or finding specific OEM Sulzer and Air-Jet spare parts required endless phone calls, ambiguous paper catalogs, and uncertain lead times.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF38]" />
                  The E-Commerce Solution
                </h4>
                <p>
                  We architected a streamlined, high-trust digital storefront: high-resolution machinery specs, interactive parts schematics, real-time stock availability, and a one-click "Request Quote" &amp; "Shop Now" pipeline that delivers complete technical dossiers directly to decision makers.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Interactive Product Catalog Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <small className="text-xs font-mono uppercase tracking-widest text-[#E53935]">
                  E-Commerce Inventory
                </small>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#27262b]">
                  All Types of Weaving &amp; Spinning Solutions
                </h3>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                      activeCategory === cat
                        ? "bg-[#E53935] text-white shadow-xs"
                        : "bg-white text-neutral-600 hover:text-black border border-neutral-200/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image container */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer"
                    onClick={() => setSelectedImg(prod.image)}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#27262b]/85 backdrop-blur-md text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full uppercase">
                      {prod.badge}
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-[#27262b] flex items-center justify-center text-xs font-bold shadow-xs">
                      🔍
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                        <span>{prod.category}</span>
                        <span className="text-[#E53935] font-semibold">{prod.type}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#27262b] tracking-tight">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-neutral-600 line-clamp-3 mt-2 leading-relaxed">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-neutral-100 text-xs">
                      <div className="flex justify-between text-neutral-500">
                        <span className="font-mono">Speed / Rating:</span>
                        <span className="font-semibold text-neutral-800">{prod.speed}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500">
                        <span className="font-mono">Applications:</span>
                        <span className="font-semibold text-neutral-800 truncate max-w-[160px]">{prod.fabricTypes}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveProductModal(prod)}
                        className="flex-1 py-2 px-3 rounded-xl bg-neutral-100 text-[#27262b] hover:bg-[#27262b] hover:text-white transition-colors text-xs font-semibold text-center"
                      >
                        Technical Specs
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenContact && onOpenContact(`Inquire: ${prod.name}`)}
                        className="py-2 px-4 rounded-xl bg-[#E53935] text-white hover:bg-[#c62828] transition-colors text-xs font-semibold flex items-center gap-1.5"
                      >
                        <ShoppingBag size={12} />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5. Fast Spares & Support Guarantee Banner */}
          <div className="bg-gradient-to-br from-[#E53935] to-[#B71C1C] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono uppercase tracking-wider">
                <CheckCircle2 size={14} />
                <span>Zero Downtime Mill Protocol</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Need Emergency Sulzer or Air-Jet Spares?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                We maintain an active ready-stock of genuine projectiles, grippers, guide teeth, solenoid valves, and profile reeds with guaranteed 24-hour dispatch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact("Emergency Spares RFQ")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#E53935] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#27262b] hover:text-white transition-all text-center"
              >
                Request Immediate Spares
              </button>
              <Link
                to="/case/mira"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black/20 hover:bg-black/30 text-white font-semibold text-xs uppercase tracking-wider transition-all text-center border border-white/20"
              >
                View MIRA Project →
              </Link>
            </div>
          </div>

          {/* 6. Collaboration Banner */}
          <FadeUp className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <small className="text-xs uppercase font-mono tracking-widest text-[#E53935]">
                Ready to build your digital flagship?
              </small>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-[#27262b]">
                Let’s elevate your industrial enterprise
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                From precision B2B catalog architecture to global e-commerce systems.
              </p>
            </div>
            <Button onClick={() => onOpenContact && onOpenContact("Industrial E-Commerce Project")} variant="dark">
              Start a project
            </Button>
          </FadeUp>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md p-4 sm:p-10 flex items-center justify-center cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl">
              <img
                src={selectedImg}
                alt="Enlarged Machinery View"
                className="w-full h-full max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                type="button"
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Technical Specs Modal */}
      <AnimatePresence>
        {activeProductModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[210] bg-black/75 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setActiveProductModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProductModal(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E53935] font-semibold">{activeProductModal.category}</span>
                  <span className="text-neutral-500">{activeProductModal.type}</span>
                </div>
                <h3 className="text-xl font-bold text-[#27262b]">
                  {activeProductModal.name}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {activeProductModal.desc}
                </p>

                <div className="bg-[#f5f4f0] rounded-xl p-3.5 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-mono">Operating Speed:</span>
                    <span className="font-semibold">{activeProductModal.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-mono">Recommended Fabrics:</span>
                    <span className="font-semibold">{activeProductModal.fabricTypes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-mono">Warranty &amp; Support:</span>
                    <span className="font-semibold text-[#E53935]">12 Months OEM Warranty</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const name = activeProductModal.name;
                      setActiveProductModal(null);
                      onOpenContact && onOpenContact(`RFQ for ${name}`);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#E53935] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#c62828] transition-colors"
                  >
                    Request Quotation
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveProductModal(null)}
                    className="py-3 px-5 rounded-xl bg-neutral-100 text-neutral-700 font-semibold text-xs hover:bg-neutral-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
