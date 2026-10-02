import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Phone, ArrowUpRight, MessageCircle } from "lucide-react";
import { Btn } from "./Button";

export const FAQ_ITEMS = [
  {
    id: "services",
    category: "Services & Expertise",
    question: "What design and development services does Criyon provide?",
    answer:
      "Criyon is a full-service branding, UI/UX, and engineering studio led by Akash Kumaravel. We specialize in four core areas: 1) Brand Identity Design (logos, typography systems, living brand guidelines, and visual language); 2) UI/UX Design (user research, wireframes, interaction design, and clickable Figma prototypes); 3) Mobile App Design & Development (native iOS and Android ergonomics, user flows, and production build); and 4) Website Development (high-speed, SEO-optimized, responsive websites on modern tech stacks like React, Next.js, and Webflow).",
    keywords: "branding agency, UI/UX design studio, mobile app development company, website development company"
  },
  {
    id: "process-sprint",
    category: "Process & Timeline",
    question: "How does the 20-Day Sprint work from concept to launch?",
    answer:
      "Our agile 20-day delivery roadmap is structured into 4 disciplined sprints: Stage 01 (1 Day) — Discovery & Express Research: Kickoff interview, competitor audit, and user research. Stage 02 (5 Days) — Strategy & Concept: Brand positioning, visual direction, mood boards, and wireframes for key screens. Stage 03 (10 Days) — UI/UX Design & Prototype: Complete high-fidelity interface design, interactive clickable prototypes, and design system. Stage 04 (4 Days) — Front-End Build & Launch Handoff: Cross-device testing, performance optimization, launch-ready assets, and deployment.",
    keywords: "20 days concept to launch, rapid design sprint, agile UI UX timeline"
  },
  {
    id: "location-remote",
    category: "Location & Collaboration",
    question: "Where is Criyon located, and do you work with local or international clients?",
    answer:
      "Criyon is based in Tamil Nadu, India, and operates as a global remote studio. We partner with local enterprises, startups, and high-growth businesses across India, as well as international clients in the United States, Europe, the Middle East, Singapore, and Australia. We operate on transparent, asynchronous communication (Slack, Loom, Notion) coupled with weekly strategy syncs scheduled across convenient time zone overlaps.",
    keywords: "branding studio India, UI UX design studio Tamil Nadu, remote design agency global"
  },
  {
    id: "pricing-engagement",
    category: "Pricing & Engagement",
    question: "How does Criyon structure pricing and project engagements?",
    answer:
      "We provide straightforward, transparent pricing with no hidden agency fees. Clients can partner with us on a fixed-scope 20-day sprint, or on a monthly dedicated studio retainer for continuous product updates. Before kicking off, we outline the exact deliverables, sprint stages, and milestones in a written blueprint so you know the exact timeline and budget before making any commitment.",
    keywords: "transparent design pricing, sprint retainer, fixed price UI UX"
  },
  {
    id: "deliverables-ip",
    category: "Deliverables & IP Ownership",
    question: "What deliverables do we receive, and who owns the intellectual property?",
    answer:
      "You receive 100% intellectual property (IP) and commercial ownership of all assets upon project completion. Deliverables include master Figma design files, organized component libraries and design tokens, vector assets (SVG, AI, PNG in 32-bit alpha), responsive design layouts for mobile/tablet/desktop, production-ready source code repositories, and complete documentation for your developers or internal stakeholders.",
    keywords: "Figma design system deliverables, full IP ownership, production source code"
  },
  {
    id: "start-project",
    category: "Getting Started",
    question: "How do we get started with Akash and the Criyon team?",
    answer:
      "Getting started is simple. Schedule a free 15-minute discovery call to discuss your goals, target audience, and product requirements. You can also reach out directly to Akash Kumaravel via phone or WhatsApp at +91 6374433734 or email hello@criyon.agency. We evaluate your project scope and provide a detailed roadmap and estimate within 24 to 48 hours.",
    keywords: "schedule discovery call, Akash Kumaravel, start design project"
  }
];

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Structured Schema.org JSON-LD data for SEO & Local Business
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://ais-pre-dosw5bn3l4ubeanxip6sih-305676713955.asia-east1.run.app/#faq",
        "name": "Frequently Asked Questions - Criyon Studio",
        "description": "Answers to frequently asked questions about Criyon's branding, UI/UX design, mobile app development, and 20-day design sprints.",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ais-pre-dosw5bn3l4ubeanxip6sih-305676713955.asia-east1.run.app/#organization",
        "name": "Criyon",
        "legalName": "Criyon Design Studio",
        "url": "https://ais-pre-dosw5bn3l4ubeanxip6sih-305676713955.asia-east1.run.app/",
        "logo": "https://ais-pre-dosw5bn3l4ubeanxip6sih-305676713955.asia-east1.run.app/logo-full.svg",
        "image": "https://ais-pre-dosw5bn3l4ubeanxip6sih-305676713955.asia-east1.run.app/logo-icon.svg",
        "description": "Criyon is a branding, UI/UX design, mobile app design & development, and website development studio led by Akash Kumaravel. Concept to launch in 20-day sprints.",
        "founder": {
          "@type": "Person",
          "name": "Akash Kumaravel",
          "jobTitle": "Founder & Design Lead",
          "telephone": "+916374433734",
          "email": "akashuxui@gmail.com"
        },
        "telephone": "+916374433734",
        "email": "akashuxui@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Singapore" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Criyon Design & Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity Design & Guidelines",
                "description": "Living brand systems, logo marks, typography, and visual assets."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design & User Flow Architecture",
                "description": "Figma wireframes, interactive clickable prototypes, and conversion optimization."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App UI/UX & Native Development",
                "description": "iOS and Android native interfaces, onboarding flows, and App Store readiness."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Modern Website Development",
                "description": "High-performance responsive websites engineered with React, Webflow, and modern SEO."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "20-Day Rapid Sprint",
                "description": "Concept to market sprint model with discovery, strategy, UI design, and development handoff."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <section
      id="faq"
      className="section-faq faq frequently-asked-questions w-full px-6 sm:px-12 lg:px-16 py-20 lg:py-24 relative overflow-hidden bg-transparent"
      aria-labelledby="faq-headline"
    >
      {/* Schema.org Structured Data Injection for Local SEO & FAQ Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="faq-container max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="faq-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="faq-header-copy space-y-3.5 max-w-2xl">
            <div className="faq-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-neutral-200/80 shadow-xs text-xs font-semibold uppercase tracking-wider text-[#27262b] font-mono">
              <HelpCircle size={13} className="text-[#1877F2]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2
              id="faq-headline"
              className="faq-title text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#27262b] leading-[1.14]"
            >
              Clear answers on how we partner, design, and ship.
            </h2>
            <p className="faq-description text-base text-neutral-600 leading-relaxed">
              Everything you need to know about our 20-day sprint methodology, local &amp; remote collaboration, deliverables, and service scopes.
            </p>
          </div>

          <div className="faq-phone-wrapper shrink-0 flex items-center gap-3">
            <a
              href="tel:+916374433734"
              className="faq-phone-link inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-xs font-semibold uppercase tracking-wider text-[#27262b] border border-neutral-200/80 hover:border-black shadow-xs transition-colors"
            >
              <Phone size={13} className="text-[#1877F2]" />
              <span>+91 6374433734</span>
            </a>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`faq-accordion-item rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-[#27262b]/20 shadow-md"
                    : "bg-white/80 hover:bg-white border-neutral-200/80 hover:border-neutral-300 shadow-xs"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="faq-question-btn w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] rounded-2xl"
                  >
                    <div className="space-y-1 pr-2">
                      <span className="faq-item-category text-[11px] font-mono uppercase tracking-widest text-[#1877F2] font-semibold block">
                        {item.category}
                      </span>
                      <span className="faq-item-question text-lg sm:text-xl font-medium tracking-tight text-[#27262b] block leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`faq-toggle-icon shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#27262b] text-white rotate-0"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} className="stroke-[2.5]" />
                      ) : (
                        <Plus size={16} className="stroke-[2.5]" />
                      )}
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="faq-answer-panel overflow-hidden"
                    >
                      <div className="faq-answer-text px-6 pb-6 pt-1 sm:px-8 sm:pb-7 text-neutral-600 leading-relaxed text-sm sm:text-base border-t border-neutral-100 mt-1">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Support Banner within FAQ */}
        <div className="faq-footer-banner mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-medium text-[#27262b]">
              Have a custom project requirement or need a tailored proposal?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500">
              Speak directly with Akash Kumaravel to discuss your timeline, scope, and technical roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Btn
              onClick={() => {
                if (onOpenContact) onOpenContact("FAQ Section Discovery");
              }}
            >
              Book discovery call
            </Btn>
            <a
              href="mailto:akashuxui@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors px-3 py-2"
            >
              <span>Email Akash</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
