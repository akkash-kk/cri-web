import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SYSTEM_DATA = {
  branding: {
    folder: "Branding",
    todayLabel: "Common Challenge",
    today:
      "Your brand guidelines say one thing, but every team applies them differently — inconsistent logos, colours, and tone across your website, app, and socials. Nobody's watching, so the brand quietly drifts.",
    solutionLabel: "Unified Brand System & Guidelines",
    humble:
      "We build a living brand system, not just a PDF nobody opens. Clear, usable rules for every touchpoint, so your brand looks and feels the same on a billboard, an app icon, or a pitch deck.",
    size: "large"
  },
  uiux: {
    folder: "UI/UX Design",
    todayLabel: "Common Challenge",
    today:
      "Your product has grown feature by feature for years. New users get lost on day one, support tickets pile up, and every “quick fix” makes the next update harder.",
    solutionLabel: "User-Centric UX Architecture",
    humble:
      "We map the real user journey, strip out the clutter, and redesign flows around what people actually need to do — so the product feels obvious again, not just prettier.",
    size: "large"
  },
  mobileDesign: {
    folder: "Mobile App Design",
    todayLabel: "Common Challenge",
    today:
      "Your app looks great on your designer's phone but breaks on half your users' devices — spacing off, buttons too small, onboarding nobody finishes.",
    solutionLabel: "Native Mobile UI & Ergonomics",
    humble:
      "We design and test across real device sizes and real user behaviour, so what ships matches what was designed — pixel-accurate, accessible, built for how people actually hold their phones.",
    size: "large"
  },
  mobileDev: {
    folder: "Mobile App Dev",
    todayLabel: "Common Challenge",
    today:
      "Design and development live in two different worlds. What gets built rarely matches what was designed, timelines slip, and “we’ll fix it later” becomes permanent.",
    solutionLabel: "End-to-End Mobile App Development",
    humble:
      "One team owns design and development end-to-end. What you approve in the prototype is what ships to the App Store — no handoff gaps, no surprises.",
    size: "large"
  },
  webDev: {
    folder: "Web Development",
    todayLabel: "Common Challenge",
    today:
      "Your website was built years ago by three different freelancers. It's slow, it barely works on mobile, and updating one line of copy means calling someone.",
    solutionLabel: "High-Performance SEO Web Development",
    humble:
      "We build fast, responsive, SEO-ready websites on modern platforms — so your site loads quickly, ranks better, and you can update it yourself.",
    size: "large"
  }
};

const TAB_ORDER = [
  { key: "branding", label: "Branding" },
  { key: "uiux", label: "UI/UX Design" },
  { key: "mobileDesign", label: "Mobile App Design" },
  { key: "mobileDev", label: "Mobile App Development" },
  { key: "webDev", label: "Website Development" }
];

function FolderCardItem({
  tabKey,
  index,
  total,
  d
}) {
  const containerRef = useRef(null);

  // Measure scroll progress as this item enters sticky threshold
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92px", "end 92px"]
  });

  const isLast = index === total - 1;

  // Exact reproduction of user's keyframe:
  // 0% - 75%: scale 100%
  // 100%: scale 85%
  const scale = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, isLast ? 1 : 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, isLast ? 1 : 0.9]);

  return (
    <div
      ref={containerRef}
      className="folder-card-sticky-container"
      style={{
        zIndex: 10 + index
      }}
    >
      <motion.article
        style={{
          scale,
          opacity,
          transformOrigin: "center top"
        }}
        className={`folder-card ${d.size}`}
        data-card={tabKey}
      >
        {/* Folder Top Tab */}
        <div className="folder-tab">
          <svg
            viewBox="0 0 210 50"
            className="folder-tab-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 51L0 50L14.5 21A38 38 0 0 1 48.5 0H161.5A38 38 0 0 1 195.5 21L210 50L210 51Z"
              fill="#FFFFFF"
            />
            <path
              d="M0 50L14.5 21A38 38 0 0 1 48.5 0H161.5A38 38 0 0 1 195.5 21L210 50"
              fill="none"
              className="folder-tab-stroke"
            />
          </svg>
          <span>{d.folder}</span>
        </div>

        {/* Card Content Body */}
        <div className="folder-card-body">
          <div className="folder-block today">
            <div className="folder-label">{d.todayLabel || "Common Challenge"}</div>
            <p>{d.today}</p>
          </div>
          <div className="folder-block humble">
            <div className="folder-label">{d.solutionLabel || "Tailored Studio Solution"}</div>
            <p>{d.humble}</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function HumbleWorkflowTailor() {
  return (
    <div className="w-full bg-[#fafafa] py-10 md:py-16 text-[#1c1c1c] border-y border-neutral-200/60 font-geist">
      {/* 1. SECTION WORKFLOW & SERVICES COMPARISON */}
      <section className="section-services-comparison services-comparison section workflow" id="fit" aria-label="Services Comparison">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="workflow-intro"
        >
          <p>
            Not another generic-template nightmare. Criyon works with what you already have — fixing your biggest pain point first, whether that&apos;s an inconsistent brand, a confusing app, or a website that isn&apos;t converting. Start with one project, prove the value, expand when you&apos;re ready.
          </p>
          <strong>
            Your brand stays live. Your product keeps shipping.<br />
            <span>Criyon plugs in alongside your team — or takes the whole thing end-to-end. Your choice.</span>
          </strong>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
        >
          One partner everyone actually trusts:
        </motion.h2>

        {/* Folder Cards Stack */}
        <div className="folder-cards" id="systemCard">
          {TAB_ORDER.map(({ key }, index) => (
            <FolderCardItem
              key={key}
              tabKey={key}
              index={index}
              total={TAB_ORDER.length}
              d={SYSTEM_DATA[key]}
            />
          ))}
        </div>
      </section>

      {/* 2. SECTION TAILOR / COMMON PITFALLS VS TAILORED SOLUTION */}
      <section className="section-tailored-edge tailored-edge common-pitfalls section tailor" id="tailor" aria-label="Tailored Solutions & Pitfalls">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="tailor-copy"
        >
          <div className="eyebrow">One Brand. One Team. Every Touchpoint.</div>
          <h2>
            Conveniently templated<br />
            design doesn&apos;t move<br />
            the needle anymore.
          </h2>
          <p>
            But your edge cases — your users, your market, your voice — ARE your business.<br />
            <span>Criyon makes them your advantage.</span>
          </p>
          <a className="btn btn-dark" href="#contact">
            Book My Discovery Call
          </a>
        </motion.div>

        <div className="edge-stack">
          {/* Card 1 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="edge-card"
          >
            <div className="edge-tag">Brand Identity</div>
            <h3>Common Pitfall</h3>
            <p>
              Three teams, three mismatched logo files, inconsistent font scales, and zero brand equity.
            </p>
            <div className="with">Unified Brand Identity &amp; Living Design System</div>
            <p className="dark">
              One centralized visual system, accessible token library, and cross-channel guidelines everyone actually uses.
            </p>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="edge-card small"
          >
            <div className="edge-tag">UI/UX Architecture</div>
            <h3>Common Pitfall</h3>
            <p>
              Users drop off before discovering your product&apos;s core value due to friction-heavy flows.
            </p>
            <div className="with">Conversion-Centric UX Architecture &amp; User Journeys</div>
            <p className="dark">
              Streamlined navigation and data-backed UX flows engineered to maximize activation, conversion, and retention.
            </p>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="edge-card small"
          >
            <div className="edge-tag">Mobile App UI/UX</div>
            <h3>Common Pitfall</h3>
            <p>
              Mockups look flawless in desktop design tools but degrade and break on real device screens.
            </p>
            <div className="with">Native iOS &amp; Android Ergonomic Interface Design</div>
            <p className="dark">
              Touch-friendly UI components and responsive layout grids rigorously tested on actual iOS and Android viewports.
            </p>
          </motion.article>

          {/* Card 4 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="edge-card small"
          >
            <div className="edge-tag">Web Development</div>
            <h3>Common Pitfall</h3>
            <p>
              Bloated legacy code, poor Core Web Vitals, and complex CMS workflows requiring developer tickets.
            </p>
            <div className="with">SEO-Engineered Fast Webflow &amp; React Development</div>
            <p className="dark">
              Sub-second page speeds, Google-optimized semantic schema markup, and an intuitive CMS your team can update anytime.
            </p>
          </motion.article>
        </div>
      </section>

      {/* 3. SECTION ROADMAP */}
      <section className="section-roadmap roadmap section" id="roadmap" aria-label="Strategic Roadmap">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Roadmap</div>
          <h2>
            Your Roadmap to a Stronger<br />
            Brand, Accelerated
          </h2>
          <p className="section-lead">
            The one-time rebrand and the &ldquo;redesign it once every five years&rdquo; approach were built for a slower era — and they&apos;re holding you back in a market that moves every quarter. Criyon gets you there iteratively, building on top of what you already have.
          </p>
        </motion.div>

        {/* Roadmap Cards Grid - On-Scroll Staggered Appearance */}
        <motion.div
          className="roadmap-grid"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            {
              phase: "Week 1",
              dotRight: "82%",
              text: "Launch your first design sprint and lock a clean brand foundation — logo, colour, typography — live, no full rebuild required."
            },
            {
              phase: "Month 1",
              dotRight: "56%",
              text: "Ship a redesigned core flow, app screen, or landing page and connect it to what’s already live. Inconsistency fades; one design system starts to emerge."
            },
            {
              phase: "Quarter 1",
              dotRight: "30%",
              text: "Run a fully designed, fully developed product experience — every screen, every touchpoint on-brand, tested with real users."
            },
            {
              phase: "Year 1",
              dotRight: "4px",
              text: "You’re not sitting on a brand strategy deck — you’re running one, built in weeks, with every new feature and channel shipping on-brand by default."
            }
          ].map((step, idx) => (
            <motion.article
              key={step.phase}
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="mini-timeline">
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                <motion.b
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.25 + idx * 0.12,
                    type: "spring",
                    stiffness: 320,
                    damping: 18
                  }}
                  style={{ right: step.dotRight }}
                />
              </div>
              <h3>{step.phase}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
