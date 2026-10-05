import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Layers, Sparkles, Layout, CheckCircle2 } from "lucide-react";
import Counter from "./Counter";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    id: "stage-1",
    num: "01",
    title: "Briefing & Express Research",
    duration: "1 Day",
    tag: "Discovery Sprint",
    icon: Zap,
    items: [
      "Kickoff interview with your team",
      "Competitor & market audit",
      "Desk research on your users and category"
    ]
  },
  {
    id: "stage-2",
    num: "02",
    title: "Strategy & Concept",
    duration: "5 Days",
    tag: "Concept Sprint",
    icon: Layers,
    items: [
      "Brand positioning & messaging direction",
      "Mood boards and concept directions",
      "Wireframes for key screens/pages"
    ]
  },
  {
    id: "stage-3",
    num: "03",
    title: "Design & Prototype",
    duration: "10 Days",
    tag: "Design Sprint",
    icon: Sparkles,
    items: [
      "Final UI/UX design",
      "Interactive, clickable prototype",
      "Design system & style guide"
    ]
  },
  {
    id: "stage-4",
    num: "04",
    title: "Development & Handoff",
    duration: "4 Days",
    tag: "Delivery Sprint",
    icon: Layout,
    items: [
      "Front-end / app build",
      "QA and cross-device testing",
      "Launch-ready files and full handoff"
    ]
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.matchMedia();

    // Desktop, Laptop, Windows, Tablet (>= 768px)
    ctx.add("(min-width: 768px)", () => {
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length < 4) return;

      // Card 0 takes 100% of available space initially
      gsap.set(cards[0], {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "0%",
        minWidth: 0,
        opacity: 1,
        xPercent: 0,
        pointerEvents: "auto"
      });

      // Cards 1, 2, 3 start collapsed with zero flex-grow, zero opacity, and shifted right
      gsap.set([cards[1], cards[2], cards[3]], {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "0%",
        minWidth: 0,
        opacity: 0,
        xPercent: 40,
        pointerEvents: "none"
      });

      // Timeline attached to ScrollTrigger pinning the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2800",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.20) {
              setActiveStageIndex(0);
            } else if (p < 0.45) {
              setActiveStageIndex(1);
            } else if (p < 0.70) {
              setActiveStageIndex(2);
            } else if (p < 0.88) {
              setActiveStageIndex(3);
            } else {
              // After the last container has entered, it also changes to rgb(245, 244, 240)
              setActiveStageIndex(-1);
            }
          }
        }
      });

      // Step 1: Card 1 slides in from the right and expands alongside Card 0
      tl.to(
        cards[1],
        {
          flexGrow: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          duration: 1,
          ease: "power2.inOut"
        },
        0
      );

      // Step 2: Card 2 slides in from the right and expands alongside Cards 0 & 1
      tl.to(
        cards[2],
        {
          flexGrow: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          duration: 1,
          ease: "power2.inOut"
        },
        1
      );

      // Step 3: Card 3 slides in from the right and expands alongside Cards 0, 1 & 2
      tl.to(
        cards[3],
        {
          flexGrow: 1,
          opacity: 1,
          xPercent: 0,
          pointerEvents: "auto",
          duration: 1,
          ease: "power2.inOut"
        },
        2
      );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    // Mobile vertical layout (< 768px)
    ctx.add("(max-width: 767px)", () => {
      const cards = cardRefs.current.filter(Boolean);
      cards.forEach((card, idx) => {
        gsap.set(card, {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "auto",
          opacity: 1,
          pointerEvents: "auto"
        });
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
              onEnter: () => setActiveStageIndex(idx),
              onEnterBack: () => setActiveStageIndex(idx)
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleStageJump = (count) => {
    setActiveStageIndex(count - 1);
    if (typeof window === "undefined") return;
    const trigger = sectionRef.current;
    if (!trigger) return;
    const st = ScrollTrigger.getAll().find((s) => s.trigger === trigger);
    if (st) {
      const targetP = (count - 1) / 3;
      const targetScroll = st.start + (st.end - st.start) * targetP;
      window.scrollTo({ top: targetScroll + 10, behavior: "auto" });
    }
  };

  return (
    <section
      id="approach"
      ref={sectionRef}
      aria-label="Our Process & Approach"
      className="section-process process section-approach approach scroll-mt-16 relative bg-white w-full overflow-hidden"
    >
      <div id="process" className="contents">
        {/* Full-height container spanning full width across the viewport */}
        <div className="process-container w-full min-h-screen md:h-screen flex flex-col justify-between py-3 sm:py-5 lg:py-6 px-3 sm:px-6 lg:px-8 box-border">
          {/* Top Header Information & Live Stage Indicator */}
          <div className="process-header flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 shrink-0">
            <div className="process-header-copy space-y-1 max-w-xl">
              <div className="process-badge inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-ping" />
                <small className="uppercase text-[11px] sm:text-xs font-semibold tracking-widest text-[#1877F2] font-mono">
                  A clear, proven path from idea to launch
                </small>
              </div>
              <h2 className="process-title text-xl sm:text-2xl lg:text-[32px] font-bold tracking-tight text-[#27262b] leading-tight">
                From Concept to Market in{" "}
                <span className="not-italic bg-[#1877F2] text-white rounded-full px-3 py-0.5 text-[0.65em] uppercase font-bold inline-block align-middle">
                  <Counter to={20} suffix=" Days" />
                </span>
              </h2>
            </div>

            {/* Clickable Stage Navigation Bars */}
            <div className="process-stage-nav flex items-center gap-1.5 sm:gap-2 self-start sm:self-auto">
              {[1, 2, 3, 4].map((count) => {
                const isCurrent = activeStageIndex === count - 1;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => handleStageJump(count)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? "w-8 bg-[#1877F2]"
                        : "w-2.5 bg-[#27262b]/20 hover:bg-[#27262b]/40"
                    }`}
                    aria-label={`Show stage 0${count}`}
                    title={`Stage 0${count}: ${STAGES[count - 1]?.title}`}
                  />
                );
              })}
            </div>
          </div>

          {/* DYNAMIC SCALING ACCORDION ROW */}
          <div className="relative w-full flex-1 min-h-0 my-auto py-1 sm:py-2 flex items-stretch justify-center md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px]">
            <div className="flex flex-col md:flex-row items-stretch gap-3 lg:gap-4 w-full h-full min-h-0 max-h-full">
              {STAGES.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = idx === activeStageIndex;

                return (
                  <div
                    key={stage.id}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => handleStageJump(idx + 1)}
                    className={`relative rounded-2xl lg:rounded-3xl overflow-hidden min-w-0 flex flex-col justify-between cursor-pointer transition-colors duration-500 ease-out min-h-0 ${
                      isActive
                        ? "bg-[#1877F2] text-white"
                        : "bg-[rgb(245,244,240)] text-[#27262b]"
                    }`}
                    style={{
                      willChange: "flex-grow, opacity, transform"
                    }}
                  >
                    {/* Inner Card Content */}
                    <div className="p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between h-full w-full min-h-0">
                      {/* Top Header inside Card */}
                      <div className="relative z-10 space-y-2 sm:space-y-2.5 shrink-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div
                            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors duration-500 ${
                              isActive
                                ? "bg-black/20 text-white"
                                : "bg-[#27262b]/10 text-[#27262b]"
                            } shrink-0`}
                          >
                            <Icon size={12} />
                            <span>Stage {stage.num}</span>
                          </div>

                          <div
                            className={`font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors duration-500 ${
                              isActive
                                ? "bg-white text-[#1877F2]"
                                : "bg-[#27262b] text-white"
                            } shrink-0`}
                          >
                            {stage.duration}
                          </div>
                        </div>

                        <div>
                          <h3 className={`text-base sm:text-lg lg:text-xl font-extrabold leading-snug tracking-tight transition-colors duration-500 ${
                            isActive ? "text-white" : "text-[#27262b]"
                          }`}>
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      {/* Middle / Bottom: Deliverables List */}
                      <div className="relative z-10 pt-2 sm:pt-3 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-center min-h-0">
                        <span className={`block text-[10px] font-mono uppercase tracking-widest font-bold transition-colors duration-500 ${
                          isActive ? "text-white/80" : "text-[#1877F2]"
                        }`}>
                          Deliverables:
                        </span>

                        <ul className="space-y-1 sm:space-y-1.5">
                          {stage.items.map((item, iIndex) => (
                            <li
                              key={iIndex}
                              className="flex items-start gap-2 text-[11px] sm:text-xs lg:text-[13px] font-medium leading-snug"
                            >
                              <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500 ${
                                isActive
                                  ? "bg-white text-[#1877F2]"
                                  : "bg-[#1877F2] text-white"
                              }`}>
                                <CheckCircle2 size={10} strokeWidth={3} />
                              </div>
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Info Marker */}
                      <div className={`relative z-10 flex items-center justify-between pt-2 mt-1 text-[10px] font-mono shrink-0 transition-colors duration-500 ${
                        isActive ? "text-white/70" : "text-neutral-400"
                      }`}>
                        <span>Sprint {stage.num}/04</span>
                        <span className="uppercase tracking-wider">{stage.tag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
