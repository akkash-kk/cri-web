import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * LoadingScreen:
 * GSAP path drawing, shape fill, and the iconic "i" dot zoom reveal.
 * 
 * Sequence:
 * 1. Measures all SVG path lengths and sets strokeDasharray/offset to draw outlines
 * 2. Animate strokeDashoffset to 0 (drawing the vector outline)
 * 3. Animate path fills to their true colors (#1877F2 for symbol + 'i' dot, #27262b for letters)
 * 4. Reveal the tagline "Artisanal Engineering"
 * 5. Other letters and tagline fade out, leaving the blue dot above the "i"
 * 6. The blue "i" dot zooms in exponentially (scale: 500) to engulf the entire screen
 * 7. Screen dissolves smoothly to reveal the website, triggering onComplete()
 */
export default function LoadingScreen({ onComplete = () => {} }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allPaths = Array.from(logoRef.current?.querySelectorAll("path") || []);
      const otherPaths = allPaths.filter((p) => p !== dotRef.current);

      // 1. Calculate path lengths and initialize outline stroke
      if (allPaths.length > 0) {
        allPaths.forEach((path) => {
          const length = path.getTotalLength();
          const targetColor = path.getAttribute("data-fill") || "#27262b";

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            fill: "none",
            stroke: targetColor === "#1877F2" ? "#1877F2" : "currentColor",
            strokeWidth: 1,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          });
        });
      }

      // Configure dot transform origin exactly at its bounding box center
      if (dotRef.current) {
        gsap.set(dotRef.current, {
          transformOrigin: "center center",
          willChange: "transform",
        });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Initial state for the logo container
      gsap.set(logoRef.current, {
        scale: 0.85,
        opacity: 1,
      });

      const textSpan = textRef.current?.querySelector("span");
      if (textSpan) {
        gsap.set(textSpan, {
          yPercent: 100,
        });
      }

      // 2. Stroke animation sequence
      tl
        // Step A: Draw the outer stroke paths
        .to(allPaths, {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: {
            each: 0.05,
            from: "start",
          },
          ease: "power2.inOut",
        })
        // Step B: Fill the shapes only after strokes finish drawing
        .to(allPaths, {
          fill: (i, target) => target.getAttribute("data-fill") || "currentColor",
          duration: 0.55,
          ease: "power3.out",
        })
        // Step C: Fade out the stroke line as the fill takes over
        .to(
          allPaths,
          {
            stroke: "transparent",
            duration: 0.3,
          },
          "-=0.35"
        )
        .to(
          logoRef.current,
          {
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
          },
          "<"
        )
        // Reveal tagline
        .to(
          textSpan || {},
          {
            yPercent: 0,
            duration: 0.7,
            ease: "expo.out",
          },
          "-=0.5"
        )
        // Step D: The rest of the logo and tagline fade away smoothly
        .to(
          [otherPaths, textRef.current],
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "+=0.2"
        )
        // Step E: The dot above the "i" zooms in massively to fill the entire screen
        .to(
          dotRef.current,
          {
            scale: 500,
            duration: 1.05,
            ease: "power4.inOut",
          },
          "<+=0.05"
        )
        // Step F: As the vibrant blue dot engulfs the screen, smoothly dissolve to reveal the website
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.3,
            pointerEvents: "none",
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f4f0] select-none text-[#27262b] overflow-hidden"
      style={{ willChange: "opacity" }}
    >
      <div className="relative flex flex-col items-center px-4 overflow-visible">
        {/* Animated Brand Logo with discrete paths */}
        <div
          ref={logoRef}
          className="mb-8 max-w-[85vw] sm:max-w-none overflow-visible"
          style={{ willChange: "transform" }}
        >
          <svg
            width="340"
            height="105"
            viewBox="118 98 780 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 sm:w-80 md:w-96 h-auto shrink-0 overflow-visible"
            aria-label="Criyon"
          >
            {/* Symbol: Inner dot */}
            <path
              data-fill="#1877F2"
              d="M230.082 161.04C230.082 168.121 224.343 173.86 217.263 173.86C210.182 173.86 204.443 168.121 204.443 161.04C204.443 153.96 210.182 148.221 217.263 148.221C224.343 148.221 230.082 153.96 230.082 161.04Z"
            />
            {/* Symbol: Upper crescent wing */}
            <path
              data-fill="#1877F2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M248 103C248 130.131 248 157.262 248 184.393C267.22 188.164 284.331 197.82 297.374 211.411C298.736 212.829 300.04 214.297 301.32 215.789C309.052 224.929 315.062 235.569 318.848 247.216C328.411 232.55 333.968 215.032 333.968 196.217C333.968 147.112 296.117 106.838 248 103Z"
            />
            {/* Symbol: Middle inner wedge */}
            <path
              data-fill="#1877F2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M248 189V244.892V246.916C268.853 246.415 287.149 235.592 297.973 219.362C285.2 204.438 267.803 193.57 248 189Z"
            />
            {/* Symbol: Sweeping outer C curve */}
            <path
              data-fill="#1877F2"
              d="M248 247C241.988 247.757 235.313 247.938 229.321 247.016C198.579 242.294 175.033 215.744 175.033 183.663C175.033 148.765 202.92 120.383 237.624 119.581V103C174.181 103.807 123 155.472 123 219.105C123 281.984 175.716 335.237 239.132 335.237C241.921 335.237 245.26 334.912 248 334.718V247Z"
            />

            {/* Wordmark letter 'C' */}
            <path
              data-fill="#27262b"
              d="M425.892 280.23C393.47 280.23 367.395 253.983 367.395 220.531C367.395 187.423 393.47 161.176 425.892 161.176C445.62 161.176 463.633 171.297 472.382 188.109L458.143 196.343C451.453 184.849 439.959 177.816 425.206 177.816C402.905 177.816 385.407 196.343 385.407 220.531C385.407 245.063 402.733 263.762 425.206 263.762C439.959 263.762 451.625 256.728 458.143 245.234L472.382 253.469C463.633 270.28 445.62 280.23 425.892 280.23Z"
            />
            {/* Wordmark letter 'r' */}
            <path
              data-fill="#27262b"
              d="M505.457 278.172H488.474V228.08C488.474 207.665 500.217 194.113 522.175 194.113C527.493 194.113 537.194 194.113 537.194 194.113V210.314C537.194 210.314 528.748 210.314 524.116 210.314C512.794 210.314 505.457 216.414 505.457 228.766V278.172Z"
            />
            {/* Wordmark letter 'i' stem */}
            <path
              data-fill="#27262b"
              d="M550.54 194.113H567.523V278.172H550.54V194.113Z"
            />
            {/* Wordmark letter 'y' */}
            <path
              data-fill="#27262b"
              d="M633.616 319C615.775 319 601.022 311.452 593.473 296.527L607.54 288.808C612.344 297.9 621.779 303.218 633.273 303.218C651.114 303.218 660.377 289.837 660.377 271.653V264.276C655.402 273.711 646.482 279.372 633.787 279.372C608.055 279.372 595.532 262.389 595.532 237.686V194.113H612.344V236.828C612.344 252.611 620.578 263.418 635.846 263.418C650.599 263.418 660.206 251.067 660.206 235.628V194.113H677.361V271.481C677.361 299.615 660.892 319 633.616 319Z"
            />
            {/* Wordmark letter 'o' */}
            <path
              data-fill="#27262b"
              d="M743.207 280.23C717.818 280.23 698.261 260.331 698.261 235.971C698.261 211.782 717.989 192.054 743.207 192.054C768.596 192.054 787.809 211.954 787.809 235.971C787.809 260.331 768.424 280.23 743.207 280.23ZM743.207 264.105C758.818 264.105 770.826 251.41 770.826 236.142C770.826 220.703 758.818 208.008 743.207 208.008C727.424 208.008 715.245 220.703 715.245 236.142C715.245 251.41 727.424 264.105 743.207 264.105Z"
            />
            {/* Wordmark letter 'n' */}
            <path
              data-fill="#27262b"
              d="M848.462 208.352C831.994 208.352 823.759 221.904 823.759 237.515V278.172H806.776V235.799C806.776 211.268 821.358 192.054 848.462 192.054C875.91 192.054 890.835 211.268 890.835 235.628V278.172H873.851V237.686C873.851 221.904 865.274 208.352 848.462 208.352Z"
            />
            {/* Wordmark letter 'i' accent dot - zooms and fills screen */}
            <path
              ref={dotRef}
              data-fill="#1877F2"
              d="M547.795 166.322C547.795 172.498 552.77 177.473 558.946 177.473C565.121 177.473 569.925 172.498 569.925 166.322C569.925 160.146 565.121 155 558.946 155C552.77 155 547.795 160.146 547.795 166.322Z"
            />
          </svg>
        </div>

        {/* Tagline */}
        <div ref={textRef} className="flex flex-col items-center overflow-hidden">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.6em] sm:tracking-[0.8em] font-black opacity-50 translate-y-full font-mono text-[#27262b]">
            Artisanal Engineering
          </span>
        </div>
      </div>

      {/* Ambient background glow */}
      <div ref={overlayRef} className="absolute inset-0 z-[-1] overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] bg-[#1877F2]/15 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
