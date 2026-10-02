import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { BLOG_POSTS } from "../data/content";
import Button from "../components/Button";
import { FadeUp } from "../components/ScrollReveal";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Check,
  ThumbsUp,
  Bookmark,
  ChevronRight,
  Send,
  MessageSquare
} from "lucide-react";

export default function BlogPostPage({ onOpenContact }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find post by slug (or fallback to first if matched by title/id)
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const [copied, setCopied] = useState(false);
  const [claps, setClaps] = useState(48);
  const [hasClapped, setHasClapped] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Reading progress for the individual article
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section on scroll
  useEffect(() => {
    if (!post?.sections) return;
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = post.sections.length - 1; i >= 0; i--) {
        const sec = post.sections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  // Find other related posts
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post?.slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#27262b] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Publication Not Found</h1>
        <p className="text-neutral-500 mb-6">The article you requested could not be located.</p>
        <Button to="/blog" variant="dark">
          Return to Knowledge Hub
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-4 sm:pt-6 pb-20 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none relative">
      {/* Top reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1877F2] z-[60] origin-left"
        style={{ scaleX: progressScale }}
      />

      {/* Top Breadcrumbs & Back Navigation */}
      <div className="max-w-[1370px] mx-auto px-6 sm:px-12 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-neutral-700 hover:text-[#1877F2] transition-colors"
          >
            <ArrowLeft size={14} /> Blog
          </Link>
          <ChevronRight size={12} className="text-neutral-300" />
          <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-white border border-neutral-200/60 text-neutral-600 text-[11px] shadow-2xs">
            {post.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80 text-xs font-mono transition-all shadow-2xs cursor-pointer"
            title="Copy article link"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Share</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isBookmarked
                ? "bg-[#1877F2]/10 border-[#1877F2] text-[#1877F2]"
                : "bg-white border-neutral-200/80 text-neutral-600 hover:bg-neutral-100"
            }`}
            title="Bookmark article"
          >
            <Bookmark size={14} className={isBookmarked ? "fill-current" : ""} />
          </button>
        </div>
      </div>

      {/* Main Article Container */}
      <main className="max-w-[1370px] mx-auto px-6 sm:px-12 py-6 sm:py-10">
        {/* Article Header */}
        <header className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles size={13} /> {post.category} Publication
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27262b] leading-[1.12]">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author attribution & metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/80">
            <div className="flex items-center gap-3">
              <img
                src={post.author?.avatar}
                alt={post.author?.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
              />
              <div>
                <div className="text-sm font-bold text-[#27262b]">{post.author?.name}</div>
                <div className="text-xs text-neutral-500 font-mono">{post.author?.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Hero Banner */}
        <div className="my-10 max-w-5xl rounded-[28px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md relative group">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-[320px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-mono flex items-center gap-2 max-w-md">
            <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
            <span>Case Artifact • Strategic Knowledge Base</span>
          </div>
        </div>

        {/* 2-Column Article Body with Sticky Table of Contents on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-start max-w-6xl">
          {/* Main Prose Column */}
          <article className="space-y-8">
            {/* Key Takeaways Callout Card */}
            {post.keyTakeaways && (
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-neutral-200/70 space-y-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#27262b] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                  Key Strategic Takeaways
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#27262b] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact Metric Stats Bar if present */}
            {post.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {post.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-[22px] bg-white border border-neutral-200/70 shadow-2xs space-y-1"
                  >
                    <div className="text-3xl font-extrabold text-[#1877F2] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Article Content Sections wrapped in a pristine white reading card */}
            <div className="bg-white rounded-[28px] p-6 sm:p-10 border border-neutral-200/70 shadow-2xs space-y-10">
              {post.sections?.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="space-y-4 scroll-mt-28"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#27262b] pt-2 border-t border-neutral-100 first:border-t-0 first:pt-0">
                    {section.heading}
                  </h2>
                  <div className="prose prose-neutral max-w-none text-neutral-700 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4">
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Article Tags */}
              <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-neutral-400 mr-2">Topics:</span>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#f5f4f0] text-neutral-700 text-xs font-mono font-medium hover:bg-neutral-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Clap & Reaction Section */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={handleClap}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
                    hasClapped
                      ? "bg-[#1877F2] text-white"
                      : "bg-[#27262b] text-white hover:bg-[#1877F2]"
                  }`}
                  title="Clap for this article"
                >
                  <ThumbsUp size={22} />
                </motion.button>
                <div>
                  <div className="text-lg font-bold text-[#27262b] flex items-center gap-2">
                    <span>{claps} Claps</span>
                    {hasClapped && <span className="text-xs font-mono text-[#1877F2]">+1 thank you!</span>}
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">Found this playbook helpful?</p>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#27262b] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] flex items-center justify-center transition-all shadow-xs"
                  title="Share on X / Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#27262b] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] flex items-center justify-center text-xs font-bold font-sans transition-all shadow-xs"
                  title="Share on LinkedIn"
                >
                  in
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#27262b] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                  title="Copy Link"
                >
                  {copied ? <Check size={15} className="text-emerald-600" /> : <Share2 size={15} />}
                </button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar Column */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            {/* Table of Contents */}
            {post.sections && (
              <div className="p-6 rounded-[28px] bg-white border border-neutral-200/70 space-y-4 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Table of Contents
                </div>
                <nav className="space-y-2">
                  {post.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`block text-xs font-medium transition-all leading-snug py-1 pl-2 border-l-2 ${
                        activeSection === sec.id
                          ? "border-[#1877F2] text-[#1877F2] font-semibold translate-x-1"
                          : "border-transparent text-neutral-600 hover:text-[#27262b]"
                      }`}
                    >
                      {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Profile Card */}
            <div className="p-6 rounded-[28px] bg-white border border-neutral-200/70 space-y-4 shadow-2xs">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                Written By
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={post.author?.avatar}
                  alt={post.author?.name}
                  className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="text-sm font-bold text-[#27262b]">{post.author?.name}</div>
                  <div className="text-xs text-neutral-500 font-mono">{post.author?.role}</div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Advising high-growth startups on brand positioning, conversion architecture, and market acceleration.
              </p>
            </div>

            {/* Consultation Callout Box */}
            <div className="p-6 rounded-[28px] bg-[#27262b] text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 text-[10px] font-mono uppercase">
                Direct Partnership
              </div>
              <h3 className="text-lg font-bold leading-tight">
                Want to execute this playbook for your product?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Schedule a 30-minute consultation with our strategy and design partners.
              </p>
              <button
                type="button"
                onClick={() => onOpenContact(`Strategy session: ${post.title}`)}
                className="cta-button w-full"
                style={{
                  background: "#1877F2",
                  color: "#ffffff",
                  borderColor: "#1877F2"
                }}
              >
                <span className="button-text top" style={{ color: "#ffffff", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                  TALK TO A STRATEGIST
                </span>
                <span className="button-text bottom" style={{ color: "#ffffff", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                  TALK TO A STRATEGIST
                </span>
                <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-bold shrink-0 ml-1">
                  ↗
                </span>
              </button>
            </div>
          </aside>
        </div>

        {/* Next Articles / Related Publications Grid */}
        <section className="mt-20 pt-12 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#1877F2] mb-1">
                Explore More Insights
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#27262b]">
                Related publications
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs uppercase font-mono font-semibold tracking-wider text-neutral-600 hover:text-[#1877F2] inline-flex items-center gap-1 transition-colors"
            >
              View all <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                to={`/blog/${other.slug}`}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-white border border-neutral-200/70 hover:border-[#1877F2]/60 hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f5f4f0] text-[#27262b] font-semibold">
                      {other.category}
                    </span>
                    <span>{other.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#27262b] group-hover:text-[#1877F2] transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {other.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                  <div className="flex items-center gap-2">
                    <img
                      src={other.author?.avatar}
                      alt={other.author?.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-xs font-medium text-neutral-700 font-mono">{other.author?.name}</span>
                  </div>
                  <span className="text-xs uppercase font-semibold font-mono tracking-wider text-[#27262b] group-hover:text-[#1877F2] inline-flex items-center gap-1">
                    Read article <span>↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <FadeUp className="mt-20">
          <section className="bg-[#27262b] text-white rounded-[28px] p-8 sm:p-14 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Let’s make<br />something{" "}
                <em className="not-italic bg-[#1877F2] text-white rounded-full px-4 py-1 text-[0.62em] uppercase font-bold shadow-xs">
                  outstanding
                </em>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300">
                Ready to translate market strategies and visual excellence into compounding revenue? Discuss your project with Black Box.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact("Strategy Consultation")}
                  className="cta-button"
                  style={{
                    background: "#1877F2",
                    color: "#ffffff",
                    borderColor: "#1877F2"
                  }}
                >
                  <span className="button-text top" style={{ color: "#ffffff", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                    DISCUSS A PROJECT
                  </span>
                  <span className="button-text bottom" style={{ color: "#ffffff", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                    DISCUSS A PROJECT
                  </span>
                  <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-bold shrink-0 ml-1">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenContact("Schedule Intro Call")}
                  className="cta-button"
                  style={{
                    background: "#ffffff",
                    color: "#27262b",
                    borderColor: "#ffffff"
                  }}
                >
                  <span className="button-text top" style={{ color: "#27262b", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                    SCHEDULE A CALL
                  </span>
                  <span className="button-text bottom" style={{ color: "#27262b", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>
                    SCHEDULE A CALL
                  </span>
                  <span className="w-5 h-5 rounded-full bg-black/10 text-[#27262b] flex items-center justify-center text-[10px] font-bold shrink-0 ml-1">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  );
}
