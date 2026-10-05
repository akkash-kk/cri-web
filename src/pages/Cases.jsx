import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CASES } from "../data/content";
import { FadeUp } from "../components/ScrollReveal";

export default function Cases({ onOpenContact }) {
  const [selectedCaseCategory, setSelectedCaseCategory] = useState("All");

  const caseCategories = ["All", "AI & Legal Tech", "E-Commerce"];

  const filteredCases = selectedCaseCategory === "All"
    ? CASES
    : CASES.filter((c) => c.category.toLowerCase().includes(selectedCaseCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-10 sm:pt-14 pb-20 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none">
      <main className="max-w-[1440px] mx-auto px-6 sm:px-14 lg:px-20 py-8">
        {/* Cases Header & Filters - matches Home Section */}
        <div className="our-cases-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="our-cases-title-wrapper">
            <FadeUp>
              <small className="our-cases-eyebrow uppercase text-xs font-semibold tracking-widest text-neutral-500 block mb-2 font-mono">
                Selected Works
              </small>
              <h1 className="our-cases-title text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#27262b] leading-[1.08]">
                Our Cases
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
                Explore our featured client works across AI platform design and industrial e-commerce.
              </p>
            </FadeUp>
          </div>

          {/* Interactive Category Filter Pills */}
          <FadeUp delay={0.2}>
            <div className="our-cases-filters flex flex-wrap gap-2">
              {caseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCaseCategory(cat)}
                  className={`our-cases-filter-btn text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedCaseCategory === cat
                      ? "bg-[#27262b] text-white font-medium shadow-xs"
                      : "bg-white/80 text-neutral-600 hover:bg-white hover:text-black border border-neutral-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Case Studies Grid - Using the exact same old card design */}
        <motion.div layout className="our-cases-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <AnimatePresence>
            {filteredCases.map((item, index) => {
              const isFeatured = index === 0;
              const hasLink = item.link && item.link !== "#";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                  key={item.id}
                  className="our-cases-card group relative"
                >
                  {hasLink ? (
                    <Link
                      to={item.link}
                      className="our-cases-card-link block aspect-[1.32] overflow-hidden rounded-2xl bg-neutral-200 relative shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="our-cases-card-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />

                      {/* Gradient overlay */}
                      <div className="our-cases-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                      {/* Hover Content */}
                      <div className="our-cases-card-info absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
                        <div className="flex justify-between items-start">
                          <span className="our-cases-card-category text-[11px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                          <div
                            style={{ backgroundColor: item.brandColor || "#1877F2" }}
                            className="our-cases-card-arrow w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-md"
                          >
                            ↗
                          </div>
                        </div>
                        <div>
                          <h4 className="our-cases-card-title text-lg font-bold">{item.title}</h4>
                          <p className="our-cases-card-meta text-xs text-neutral-300">{item.client} • {item.year}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="our-cases-card-link block aspect-[1.32] overflow-hidden rounded-2xl bg-neutral-200 relative shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="our-cases-card-image w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />

                      {/* Gradient overlay */}
                      <div className="our-cases-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                      {/* Hover Content */}
                      <div className="our-cases-card-info absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
                        <div className="flex justify-between items-start">
                          <span className="our-cases-card-category text-[11px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                          <div className="our-cases-card-arrow w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs shadow-md">
                            •
                          </div>
                        </div>
                        <div>
                          <h4 className="our-cases-card-title text-lg font-bold">{item.title}</h4>
                          <p className="our-cases-card-meta text-xs text-neutral-300">{item.client} • {item.year}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
