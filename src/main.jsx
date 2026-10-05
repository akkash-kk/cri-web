import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";

import ScrollProgressBar from "./components/ScrollProgressBar";
import Rail from "./components/Rail";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ContactFAB from "./components/ContactFAB";
import LoadingScreen from "./components/LoadingScreen";
import FullscreenControl from "./components/FullscreenControl";

import Home from "./pages/Home";
import Cases from "./pages/Cases";
import CasePage from "./pages/CasePage";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "auto" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);
  return null;
}

function AppShell({
  children,
  isNavOpen,
  setIsNavOpen,
  handleOpenContact
}) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Responsive Navigation: Top Bar on Mobile/Tab (< md), Side Rail on Desktop (>= md) */}
      <Rail
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
        onOpenContact={handleOpenContact}
      />

      <div className="pt-[64px] md:pt-0 md:pl-[69px] bg-[#27262b] transition-all duration-300 min-h-screen">
        {children}
        <Footer onOpenContact={() => handleOpenContact("Footer Consultation")} />
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState("Go-to-Market Strategy");

  // Enter full screen on first user touch / interaction anywhere on the website
  useEffect(() => {
    let triggered = false;

    const requestFullscreenOnFirstTouch = () => {
      if (triggered) return;
      triggered = true;

      const doc = document;
      const isFullscreen =
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;

      if (!isFullscreen) {
        const el = doc.documentElement;
        const enterFullscreen =
          el.requestFullscreen ||
          el.webkitRequestFullscreen ||
          el.webkitRequestFullScreen ||
          el.mozRequestFullScreen ||
          el.msRequestFullscreen;

        if (enterFullscreen) {
          try {
            const promise = enterFullscreen.call(el);
            if (promise && typeof promise.catch === "function") {
              promise.catch(() => {
                // Silently ignore if browser security/iframe blocks auto-fullscreen
              });
            }
          } catch {
            // Silently ignore unsupported environments
          }
        }
      }

      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", requestFullscreenOnFirstTouch);
      window.removeEventListener("touchend", requestFullscreenOnFirstTouch);
      window.removeEventListener("pointerdown", requestFullscreenOnFirstTouch);
      window.removeEventListener("click", requestFullscreenOnFirstTouch);
    };

    window.addEventListener("touchstart", requestFullscreenOnFirstTouch, { passive: true, once: true });
    window.addEventListener("touchend", requestFullscreenOnFirstTouch, { passive: true, once: true });
    window.addEventListener("pointerdown", requestFullscreenOnFirstTouch, { passive: true, once: true });
    window.addEventListener("click", requestFullscreenOnFirstTouch, { passive: true, once: true });

    return cleanupListeners;
  }, []);

  // Pause page background scrolling when loading, modal, or drawer menu is open
  useEffect(() => {
    if (isLoading || isNavOpen || isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isNavOpen, isContactOpen]);

  const handleOpenContact = (serviceName = "Go-to-Market Strategy") => {
    setContactInitialService(serviceName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <BrowserRouter>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <ScrollToTopOnRoute />
      <ScrollProgressBar />

      <AppShell
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        handleOpenContact={handleOpenContact}
      >
        <Routes>
          <Route path="/" element={<Home onOpenContact={handleOpenContact} />} />
          <Route path="/products" element={<Products onOpenContact={handleOpenContact} />} />
          <Route path="/cases" element={<Cases onOpenContact={handleOpenContact} />} />
          <Route path="/case/mira" element={<CasePage caseId="mira" onOpenContact={handleOpenContact} />} />
          <Route path="/case/rj-group" element={<CasePage caseId="rj-group" onOpenContact={handleOpenContact} />} />
          <Route path="/case/:id" element={<CasePage onOpenContact={handleOpenContact} />} />
          <Route path="/blog" element={<Blog onOpenContact={handleOpenContact} />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenContact={handleOpenContact} />} />
          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFoundPage onOpenContact={handleOpenContact} />} />
        </Routes>
      </AppShell>

      {/* Full Screen Exit Control when in fullscreen */}
      <FullscreenControl />

      {/* Floating Action Bar for Contact */}
      <ContactFAB />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={contactInitialService}
      />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
