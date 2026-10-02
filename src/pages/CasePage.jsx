import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MIRA_GALLERY, RJ_GROUP_GALLERY } from "../data/content";
import Button from "../components/Button";
import { FadeUp } from "../components/ScrollReveal";
import { X, ArrowRight } from "lucide-react";

export default function CasePage({ caseId: propCaseId, onOpenContact }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const { id: paramId } = useParams();
  const location = useLocation();

  // Detect whether to display RJ Group or MIRA using the EXACT same layout
  const isRJ =
    propCaseId === "rj-group" ||
    paramId === "rj-group" ||
    location.pathname.includes("rj-group");

  // Content configuration for MIRA vs RJ Group
  const gallery = isRJ ? RJ_GROUP_GALLERY : MIRA_GALLERY;
  const brandAccent = isRJ ? "#DC2626" : "#00FF38";
  const brandColor = isRJ ? "#DC2626" : "#1877F2";

  const tags = isRJ
    ? ["Branding", "E-Commerce", "Web design", "Industrial Grade", "Textile Machinery", "Genuine Spares"]
    : ["Branding", "Web design", "Web development", "3D Product Visualization", "AI Interface", "Motion Design"];

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-4 sm:pt-6 pb-16 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-2 grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-6 lg:gap-8 items-start">
        {/* Sticky Aside Information Box */}
        <aside className="lg:sticky lg:top-6 bg-[#f3f2ec] rounded-[28px] p-6 sm:p-7 shadow-xs border border-neutral-200/60 space-y-5">
          {/* Header row: Title + Subtitle + Action Badges */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-[#27262b] leading-tight">
                  {isRJ ? "RJ GROUP" : "MIRA"}
                </h1>
                <p className="text-xs text-neutral-400 font-normal mt-1">
                  {isRJ ? "Industrial Grade – Textile Machinery" : "Los Angeles – AI, Product"}
                </p>
              </div>

              {/* Action Buttons: Behance & Website */}
              <div className="flex items-center gap-2 shrink-0 pt-0.5">
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#27262b", color: "#ffffff" }}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-sans transition-all duration-200 shadow-sm hover:!bg-[#1877F2] hover:!text-white"
                  title="Behance Showcase"
                >
                  <span style={{ color: "#ffffff" }} className="text-white">Bē</span>
                </a>

                <a
                  href={isRJ ? "https://rjgrouptextile.com" : "https://mira-glasses.com"}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "#27262b", color: "#ffffff" }}
                  className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 text-[11px] font-medium font-sans transition-all duration-200 shadow-sm hover:opacity-90 hover:!text-white"
                  title="Visit Website"
                >
                  <span style={{ color: "#ffffff" }} className="text-white">Website</span>
                  <span style={{ color: "#ffffff" }} className="text-white text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tags Chips */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="bg-[#e7e5df] text-[#27262b] px-3 py-1 rounded-full text-[11px] font-normal"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Client Section */}
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-[#27262b]">
              Client
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {isRJ
                ? "RJ Group is a premier manufacturer and supplier of advanced industrial textile weaving machinery and genuine OEM spares, trusted by textile mills and industry leaders globally."
                : "MIRA Glasses are smart glasses with built-in AI. They record daily events, save meaningful details and give access to information in real time."}
            </p>
          </div>

          {/* Process Section */}
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-[#27262b]">
              Process
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {isRJ
                ? "We developed a high-conversion industrial e-commerce digital experience with brand color red, structured around full loom lines, rotor spinning systems, and fast 24-48h genuine spares delivery."
                : "We aimed to build a brand identity and website for a product where AI is the core function, not an add-on. The website combines product shots, interface screens and lifestyle photography."}
            </p>
          </div>

          {/* Bottom Two Stat Cards */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* Colored Card */}
            <div
              style={{ backgroundColor: "#1877F2" }}
              className="text-white rounded-2xl p-4 flex flex-col justify-between min-h-[82px] shadow-sm"
            >
              <div className="text-xl font-semibold tracking-tight leading-tight">
                {isRJ ? "6 Lines" : "2 sequences"}
              </div>
              <div className="text-[11px] text-white/90 font-normal mt-1 leading-snug">
                {isRJ ? "weaving machines & spares" : "we made to present the product"}
              </div>
            </div>

            {/* Light Card */}
            <div className="bg-white rounded-2xl p-4 flex flex-col justify-between min-h-[82px] shadow-xs">
              <div className="text-xl font-semibold tracking-tight text-[#27262b] leading-tight">
                {isRJ ? "24-48h" : "1 day"}
              </div>
              <div className="text-[11px] text-neutral-500 font-normal mt-1 leading-snug">
                {isRJ ? "fast delivery dispatch worldwide" : "to design the mobile version"}
              </div>
            </div>
          </div>
        </aside>

        {/* Gallery Image Feed with Stagger & On-Scroll Reveal */}
        <div className="space-y-6">
          {/* 1. Image 1 */}
          <motion.div
            key={isRJ ? "rj-img-1" : "mira-img-1"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
            onClick={() => setSelectedImg(gallery[0])}
          >
            <img
              src={gallery[0]}
              alt={isRJ ? "RJ Group Weaving Machinery" : "MIRA Project Asset 1"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </motion.div>

          {/* 2. Container 1: Overview & Products / The Problem */}
          <motion.div
            key={isRJ ? "rj-overview-products" : "mira-overview-problem"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/11.4] flex justify-between px-[5.5cqw] py-[5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Column */}
              <div className="w-[45%] shrink-0 flex flex-col justify-start">
                <div
                  className="text-[#7e7e82] font-normal"
                  style={{ fontSize: "1.45cqw", marginBottom: "2.5cqw" }}
                >
                  {isRJ ? "Industrial Grade, E-Commerce, Weaving Machinery" : "AI, Smart Glasses, Wearable Tech"}
                </div>
                <h2
                  className="font-medium text-white tracking-tight"
                  style={{
                    fontSize: "3.9cqw",
                    lineHeight: "1.08",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {isRJ ? (
                    <>
                      RJ Group — Advanced<br />
                      Textile Machinery Solutions
                    </>
                  ) : (
                    <>
                      MIRA — AI Glasses<br />
                      for Real Life
                    </>
                  )}
                </h2>
              </div>

              {/* Right Column */}
              <div className="w-[50%] shrink-0 flex flex-col justify-start text-[#8c8c92] font-normal overflow-y-auto">
                <div
                  className="text-[#7e7e82]"
                  style={{ fontSize: "1.45cqw", marginBottom: "2.5cqw" }}
                >
                  {isRJ ? "E-Commerce, Web Design & Digital Spares Catalog" : "Branding, Web Design & Development"}
                </div>

                {/* Overview text */}
                <div
                  className="space-y-[1.4cqw]"
                  style={{ fontSize: "1.42cqw", lineHeight: "1.52" }}
                >
                  {isRJ ? (
                    <>
                      <p>
                        RJ Group is a trusted industrial grade supplier of advanced high-speed weaving machinery and genuine OEM replacement spares. Trusted by industry leaders — fast delivery, genuine spares, and expert support.
                      </p>
                      <p>
                        Our task was to engineer an e-commerce platform that pairs heavy industrial machinery specifications with modern, intuitive purchasing workflows — allowing factory directors and procurement leads to order looms and genuine spares with complete confidence.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        MIRA is an AI-powered smart glasses company that helps professionals remember everything they hear, see, and need to recall — in real time. From live translation to personalized prompts and unlimited memory on the display, MIRA helps doctors, lawyers, students, and creatives excel in their most critical moments, hands-free.
                      </p>
                      <p>
                        Our task was to translate a complex, deeply human technology into a confident digital and brand experience. One that balances innovation and warmth — and speaks just as clearly to early adopters as it does to the people they work with every day.
                      </p>
                    </>
                  )}
                </div>

                {/* The Problem / Products Section */}
                <h3
                  style={{
                    color: brandAccent,
                    fontSize: "2.15cqw",
                    lineHeight: "1.2",
                    marginTop: "2.8cqw",
                    marginBottom: "1.3cqw",
                    letterSpacing: "-0.015em",
                  }}
                  className="font-medium"
                >
                  {isRJ ? "ALL TYPE OF WEAVING MACHINE AVAILABLE" : "The problem"}
                </h3>

                <div
                  className="space-y-[1.4cqw]"
                  style={{ fontSize: "1.42cqw", lineHeight: "1.52" }}
                >
                  {isRJ ? (
                    <>
                      <p>
                        • <strong className="text-white">Sulzer Weaving Machine:</strong> Projectile weaving system engineered for heavy technical textiles, agrotextiles, denim, and wide-width fabrics.
                      </p>
                      <p>
                        • <strong className="text-white">Air-Jet Weaving Machine:</strong> Ultra high-speed pneumatic insertion with electronic air pressure regulation for cotton &amp; apparel.
                      </p>
                      <p>
                        • <strong className="text-white">Rapier Weaving Machine:</strong> Superior versatility for high-end jacquard weaving, home textiles, and complex multi-color patterning.
                      </p>
                      <p>
                        • <strong className="text-white">OE Machine:</strong> High-efficiency open-end rotor spinning machinery engineered for continuous high-tensile yarn output.
                      </p>
                      <p>
                        • <strong className="text-white">Sulzer Spares:</strong> 100% genuine OEM replacement parts: projectiles, picking shoes, guide teeth, returners &amp; torsion shafts.
                      </p>
                      <p>
                        • <strong className="text-white">Airjet Spares:</strong> Original pneumatic nozzles, relay nozzles, solenoid valves, cutting blades &amp; optical sensors.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Most smart glasses today feel like gadgets, not products people actually want to wear. The category is dominated by two extremes: tech-first interfaces that overwhelm with features, or fashion-first wearables that ignore why someone would put them on in the first place.
                      </p>
                      <p>
                        At the same time, the idea of <span className="text-[#00FF38]">AI augmenting human memory</span> still feels abstract and uncomfortable to most people. It raises questions about privacy, identity, and what it means to rely on a machine for the things our minds used to hold.
                      </p>
                      <p>
                        The challenge was not only to build a brand for a new product — but to <span className="text-[#00FF38]">make a new behavior feel natural</span>. To position MIRA as a tool that gives people back their attention, their presence, and their confidence in the room.
                      </p>
                    </>
                  )}
                </div>

                {/* Live Link */}
                <div style={{ marginTop: "2.4cqw" }}>
                  <a
                    href={isRJ ? "https://rjgrouptextile.com" : "https://trymira.com"}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: isRJ ? "#1877F2" : brandAccent, fontSize: "1.52cqw" }}
                    className="hover:underline font-medium inline-block transition-opacity hover:opacity-85"
                  >
                    {isRJ ? "https://rjgrouptextile.com" : "https://trymira.com"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Image 2 */}
          <motion.div
            key={isRJ ? "rj-img-2" : "mira-img-2"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
            onClick={() => setSelectedImg(gallery[1])}
          >
            <img
              src={gallery[1]}
              alt={isRJ ? "RJ Group Machine Assembly" : "MIRA Project Asset 2"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </motion.div>

          {/* 4. Container 2: Brand Concept */}
          <motion.div
            key={isRJ ? "rj-brand-concept" : "brand-concept-elephant-memory"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5.6] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {isRJ ? (
                    <>
                      RJ Group is<br />
                      industrial power
                    </>
                  ) : (
                    <>
                      MIRA is an elephant<br />
                      memory
                    </>
                  )}
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 space-y-[1.2cqw] text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <>
                    <p>
                      We selected <span style={{ color: brandAccent }}>high-energy industrial red</span> as the core brand color to reflect the heat, velocity, and unrelenting torque of industrial weaving machines. In high-output textile manufacturing, downtime is the enemy; red signifies speed, urgency, and decisive reliability.
                    </p>
                    <p>
                      Every loom and spare component is precision-machined to guarantee <span className="text-white">24/7 continuous duty cycles</span> under high load, ensuring textile mills maintain peak efficiency.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We chose the <span className="text-[#00FF38]">elephant</span> as a symbolic anchor for MIRA because of its deep cultural association with <span className="text-white">memory, wisdom, and quiet intelligence</span>. In <em>The Little Prince</em>, the image of an elephant inside a boa constrictor becomes a metaphor for seeing beyond the obvious — noticing what others overlook.
                    </p>
                    <p>
                      That idea resonates with MIRA&apos;s purpose: capturing subtle, meaningful details and resurfacing them when they matter most. Just as the phrase &ldquo;an elephant never forgets&rdquo; suggests unwavering memory, MIRA serves as a <span className="text-[#00FF38]">calm, constant presence that remembers for you</span>.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* 5. Image 3 */}
          <motion.div
            key={isRJ ? "rj-img-3" : "mira-img-3"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
            onClick={() => setSelectedImg(gallery[2])}
          >
            <img
              src={gallery[2]}
              alt={isRJ ? "RJ Group Loom Technology" : "MIRA Project Asset 3"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </motion.div>

          {/* 6. Container 3: The Challenge */}
          <motion.div
            key={isRJ ? "rj-the-challenge" : "mira-the-challenge"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/7.2] flex justify-between px-[5.5cqw] py-[4.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.35cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  The challenge
                </h2>
              </div>

              {/* Right Narrative with Bullets */}
              <div className="w-[52%] shrink-0 space-y-[2.2cqw] font-normal">
                <p
                  className="text-[#9e9ea3]"
                  style={{ fontSize: "1.5cqw", lineHeight: "1.55" }}
                >
                  {isRJ
                    ? "Industrial textile machinery procurement has historically been plagued by opaque pricing, fragmented catalogs, and unverified third-party spares."
                    : "MIRA works at the intersection of technology and a category that people are still learning to trust. The product is complex, the audience is demanding."}
                </p>

                <div className="space-y-[1.2cqw]">
                  <h3
                    style={{ color: brandAccent, fontSize: "1.65cqw", lineHeight: "1.3" }}
                    className="font-medium"
                  >
                    {isRJ
                      ? "We needed to build an e-commerce platform that:"
                      : "We needed to build a brand and website that:"}
                  </h3>

                  <ul
                    className="space-y-[0.8cqw] text-[#c4c4c8]"
                    style={{ fontSize: "1.42cqw", lineHeight: "1.5" }}
                  >
                    {isRJ ? (
                      <>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span style={{ color: brandAccent }} className="shrink-0 font-bold">•</span>
                          <span>Showcases all weaving machine models with transparent technical specifications</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span style={{ color: brandAccent }} className="shrink-0 font-bold">•</span>
                          <span>Enables 1-click RFQ and fast delivery dispatch for critical OEM spares</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span style={{ color: brandAccent }} className="shrink-0 font-bold">•</span>
                          <span>Commands authority and trust with bold industrial red brand styling</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span style={{ color: brandAccent }} className="shrink-0 font-bold">•</span>
                          <span>Provides 24/7 direct access to textile engineering support and genuine spares</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span className="text-[#00FF38] shrink-0 font-bold">•</span>
                          <span>Explain a new technology without overwhelming with features</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span className="text-[#00FF38] shrink-0 font-bold">•</span>
                          <span>Carry the emotional promise of the product — bringing presence back</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span className="text-[#00FF38] shrink-0 font-bold">•</span>
                          <span>Hold the balance between tech credibility and product desirability</span>
                        </li>
                        <li className="flex items-start gap-[0.8cqw]">
                          <span className="text-[#00FF38] shrink-0 font-bold">•</span>
                          <span>Avoid AR/AI clichés (blue holograms, futurism, neon glow)</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. Image 4 */}
          <motion.div
            key={isRJ ? "rj-img-4" : "mira-img-4"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
            onClick={() => setSelectedImg(gallery[3])}
          >
            <img
              src={gallery[3]}
              alt={isRJ ? "RJ Group Precision Engineering" : "MIRA Project Asset 4"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </motion.div>

          {/* 8. Container 4: Designing presence / Shop Now with confidence */}
          <motion.div
            key={isRJ ? "rj-designing-speed" : "mira-designing-presence"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5.6] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {isRJ ? (
                    <>
                      Engineering with<br />
                      industrial confidence
                    </>
                  ) : (
                    <>
                      Designing presence,<br />
                      not features
                    </>
                  )}
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 space-y-[1.2cqw] text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <>
                    <p>
                      The website leads with immediate product categorization — <span style={{ color: brandAccent }}>Sulzer, Air-Jet, Rapier, OE Machines, and OEM Spares</span>. Factory engineers can find exact projectile teeth, nozzles, and high-frequency solenoid valves with instant inventory checks.
                    </p>
                    <p>
                      Layout remains clean and spacious. Blue highlights indicate stock availability and rapid 24-48h dispatch, removing friction from critical manufacturing procurement.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The website opens with the brand&apos;s central promise — <span className="text-[#00FF38]">giving people back their presence</span>. The hero leads with a single statement and the product itself, no feature lists, no overload. Functionality unfolds gradually as the user scrolls, mirroring how MIRA itself works: <span className="text-white">surfacing what&apos;s needed, when it&apos;s needed</span>.
                    </p>
                    <p>
                      Layout stays calm and spacious. Typography does the heavy lifting. The product is shown in context, not as a spec sheet.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* 9. Image 5 */}
          <motion.div
            key={isRJ ? "rj-img-5" : "mira-img-5"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
            onClick={() => setSelectedImg(gallery[4])}
          >
            <img
              src={gallery[4]}
              alt={isRJ ? "RJ Group Factory Spares" : "MIRA Project Asset 5"}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />
          </motion.div>

          {/* 10. Container 5: Visual system */}
          <motion.div
            key={isRJ ? "rj-visual-system" : "mira-visual-system"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5.6] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Visual system
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 space-y-[1.2cqw] text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <>
                    <p>
                      The visual system is built on the contrast between an <span className="text-white">industrial obsidian foundation</span> and <span style={{ color: brandAccent }}>vibrant brand red (#DC2626)</span>. Black carries industrial durability and weight; red brings energy, speed, and immediate visibility. Together they convey <span style={{ color: brandAccent }}>uncompromising industrial excellence</span>.
                    </p>
                    <p>
                      Typography balances technical precision with high readability across mobile and desktop catalogs.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The visual system is built on the contrast between a <span className="text-white">precise black foundation</span> and a <span className="text-[#1877F2]">vibrant blue accent</span>. Black carries confidence, precision, and premium weight; blue brings energy, clarity, and humanity. Together they reflect the <span className="text-[#00FF38]">dual nature of MIRA</span> — a high-tech product with a human face.
                    </p>
                    <p>
                      Typography balances technical clarity with warmth, supporting both rational product communication and emotional brand storytelling.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* 11. Container 6: Geist Typography & Color Palette Wheel */}
          <motion.div
            key={isRJ ? "rj-geist-palette" : "mira-geist-palette"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/10] relative flex items-center justify-between px-[5.5cqw] py-[5cqw] bg-[radial-gradient(circle_at_50%_50%,#232326_0%,#111113_80%)] overflow-hidden">
              {/* Left Column: Geist Info & Specs */}
              <div className="w-[30%] h-full flex flex-col justify-between z-10">
                {/* Top Part */}
                <div className="space-y-[1.2cqw]">
                  <h2
                    className="font-medium text-white tracking-tight"
                    style={{ fontSize: "3.8cqw", lineHeight: "1.05" }}
                  >
                    Geist
                  </h2>
                  <p
                    className="text-[#9e9ea3]"
                    style={{ fontSize: "1.38cqw", lineHeight: "1.45" }}
                  >
                    Its clean geometry and balanced proportions create a modern and restrained tone — supporting readability without drawing unnecessary attention.
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="space-y-[1.2cqw] pt-[2cqw]">
                  <div className="flex items-center gap-[0.8cqw]">
                    <span
                      style={{ backgroundColor: brandAccent, width: "0.8cqw", height: "0.8cqw" }}
                      className="inline-block shrink-0"
                    />
                    <span
                      style={{ color: brandAccent, fontSize: "1.55cqw" }}
                      className="font-medium"
                    >
                      Regular Medium
                    </span>
                  </div>
                  <div
                    className="space-y-[0.9cqw] text-[#8c8c92]"
                    style={{ fontSize: "1.22cqw", lineHeight: "1.45" }}
                  >
                    <p>
                      Used in <span className="text-white">Regular and Medium weights</span>, it reflects the brand&apos;s calm, intelligent, and system-driven character. The type feels stable, clear, and functional across both interface and communication.
                    </p>
                    <p>
                      Letter spacing is slightly tightened (-1px) to maintain compact rhythm and visual control. Line spacing ranges from 90% to 120%, depending on hierarchy and layout density.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Pinwheel: Color Palette */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[36cqw] h-[36cqw] flex items-center justify-center">
                  {/* Swatches Ring */}
                  {(isRJ
                    ? [
                        { color: "#FFFFFF", rotate: -90 },
                        { color: "#DC2626", rotate: -45 },
                        { color: "#EF4444", rotate: 0 },
                        { color: "#0A0A0A", rotate: 45 },
                        { color: "#1F1F1F", rotate: 90 },
                        { color: "#991B1B", rotate: 135 },
                        { color: "#B4B4B6", rotate: 180 },
                        { color: "#E1E1E3", rotate: 225 },
                      ]
                    : [
                        { color: "#FFFFFF", rotate: -90 },
                        { color: "#00FF38", rotate: -45 },
                        { color: "#1877F2", rotate: 0 },
                        { color: "#0A0A0A", rotate: 45 },
                        { color: "#1F1F1F", rotate: 90 },
                        { color: "#4F5052", rotate: 135 },
                        { color: "#B4B4B6", rotate: 180 },
                        { color: "#E1E1E3", rotate: 225 },
                      ]
                  ).map((sw, i) => {
                    const angleRad = (sw.rotate * Math.PI) / 180;
                    const radius = 10.8;
                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;

                    return (
                      <div
                        key={i}
                        className="absolute rounded-[1.4cqw] shadow-md border border-white/5"
                        style={{
                          width: "11cqw",
                          height: "11cqw",
                          backgroundColor: sw.color,
                          transform: `translate(${x}cqw, ${y}cqw)`,
                          zIndex: i === 0 ? 8 : 7 - i,
                        }}
                      />
                    );
                  })}

                  {/* Center Badge */}
                  <div
                    style={{ color: brandAccent, borderColor: `${brandAccent}66`, fontSize: "0.85cqw" }}
                    className="absolute z-20 bg-[#161616] rounded-full border px-[1.6cqw] py-[0.5cqw] font-mono uppercase tracking-wider shadow-sm"
                  >
                    {isRJ ? "Brand Color: Red" : "color palette"}
                  </div>
                </div>
              </div>

              {/* Right Column: Alphabet specimen */}
              <div className="w-[28%] h-full flex flex-col justify-center items-end text-right z-10">
                <div
                  className="text-[#4e4e55] font-medium tracking-wide space-y-[0.8cqw] select-none"
                  style={{ fontSize: "1.75cqw", lineHeight: "1.6" }}
                >
                  <div>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj</div>
                  <div>Kk Ll Mm Nn Oo Pp Qq Rr Ss</div>
                  <div>Tt Uu Vv Ww Xx Yy Zz</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 12. Container 7: A product, not a checkout */}
          <motion.div
            key={isRJ ? "rj-product-not-checkout" : "mira-product-not-checkout"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5.6] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {isRJ ? (
                    <>
                      Industrial grade,<br />
                      not generic retail
                    </>
                  ) : (
                    <>
                      A product, not<br />
                      a checkout
                    </>
                  )}
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 space-y-[1.2cqw] text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <>
                    <p>
                      Procuring industrial weaving machinery requires precise technical engineering. Buyers specify fabric widths, picks per minute, electronic dobby configurations, and spare part quotas. We designed the workflow as a <span style={{ color: brandAccent }}>streamlined RFQ portal, not an ordinary cart</span>.
                    </p>
                    <p>
                      Textile executives can request full container quotes, verify genuine OEM certificates, and schedule technical onboarding directly through the platform.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Buying smart glasses is not the same as buying any other product. The user has to choose a prescription, a ring size, an app setup — and trust that all three will work together. We designed the purchase journey as a <span className="text-[#00FF38]">guided experience, not a transaction</span>.
                    </p>
                    <p>
                      The product page introduces MIRA as a system: <span className="text-white">glasses, ring, and app</span>. Configuration unfolds step by step, with each choice explained in context. The mobile version mirrors the desktop logic but adapts to one-thumb scanning, keeping the rhythm calm and the path clear.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* 13. Container 8: Brand beyond the screen */}
          <motion.div
            key={isRJ ? "rj-brand-beyond-screen" : "mira-brand-beyond-screen"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5.6] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {isRJ ? (
                    <>
                      Genuine spares<br />
                      on the mill floor
                    </>
                  ) : (
                    <>
                      Brand beyond<br />
                      the screen
                    </>
                  )}
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 space-y-[1.2cqw] text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <>
                    <p>
                      A manufacturing brand only builds lasting authority when its quality is proven on the factory floor. We extended RJ Group&apos;s identity onto laser-etched metal spare parts, hologram authenticity labels, and industrial steel crates — <span style={{ color: brandAccent }}>every touchpoint engineered for longevity</span>.
                    </p>
                    <p>
                      Every projectile shoe, pneumatic solenoid, and rotor bearing carries serial traceability, reinforcing RJ Group&apos;s commitment to <span className="text-white">zero mill downtime</span>.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      A brand only feels real when it lives in the world. We extended MIRA&apos;s identity into product accessories, packaging, and hardware language — <span className="text-[#00FF38]">every touchpoint a person can hold or carry</span>.
                    </p>
                    <p>
                      The blue pouch turns the glasses into a daily companion, not a gadget kept in a case. Hardware specs are presented as quiet facts, not marketing claims. Every detail reinforces the same idea: <span className="text-white">technology made to be lived with, not displayed</span>.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* 14. Container 9: The result */}
          <motion.div
            key={isRJ ? "rj-the-result" : "mira-the-result"}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden bg-[#161616] text-white shadow-sm hover:shadow-xl transition-all duration-500 [container-type:inline-size] select-text"
            style={{ containerType: "inline-size" }}
          >
            <div className="w-full aspect-[16/5] flex items-center justify-between px-[5.5cqw] py-[3.5cqw] gap-[5cqw] bg-[#161616]">
              {/* Left Headline */}
              <div className="w-[44%] shrink-0">
                <h2
                  className="font-normal text-white tracking-tight"
                  style={{
                    fontSize: "3.25cqw",
                    lineHeight: "1.1",
                    letterSpacing: "-0.025em",
                  }}
                >
                  The result
                </h2>
              </div>

              {/* Right Narrative Copy */}
              <div
                className="w-[52%] shrink-0 text-[#9e9ea3] font-normal"
                style={{
                  fontSize: "1.52cqw",
                  lineHeight: "1.58",
                }}
              >
                {isRJ ? (
                  <p>
                    A complete identity and e-commerce platform that positions RJ Group as the definitive benchmark in <span style={{ color: brandAccent }}>advanced textile machinery solutions</span>. Backed by fast global delivery, 100% genuine spares, and expert technical support, RJ Group now powers weaving mills worldwide with modern digital ordering.
                  </p>
                ) : (
                  <p>
                    A complete identity system — from logotype and visual language to web experience — that gives MIRA a <span className="text-[#00FF38]">confident place in the smart wearables category</span>. The brand stands apart through the idea of memory and presence, not tech aesthetics. Built to scale across product, marketing, and PR.
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Next Case CTA */}
          <FadeUp className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            <div>
              <small
                style={{ color: brandColor }}
                className="text-xs uppercase font-mono tracking-widest font-bold"
              >
                Next Showcase
              </small>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                {isRJ ? "MIRA AI Glasses" : "RJ Group International"}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isRJ
                  ? "Smart AI Wearables Interface & Memory Timeline"
                  : "Premium Industrial Grade • Advanced Textile Machinery Solutions"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button to={isRJ ? "/case/mira" : "/case/rj-group"} variant="dark">
                {isRJ ? "view MIRA case" : "view RJ Group case"}
              </Button>
              <Button to="/#cases" variant="outline">
                view all works
              </Button>
            </div>
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
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Enlarged preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
