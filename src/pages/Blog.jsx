import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "../data/content";
import Button from "../components/Button";
import { FadeUp } from "../components/ScrollReveal";
import { ArrowLeft, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";

export default function Blog({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState("All posts");

  const categories = ["All posts", "Agency life", "Case study", "Marketing", "How To"];

  const filteredPosts = selectedCategory === "All posts"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#27262b] pt-8 sm:pt-12 pb-20 rounded-bl-2xl sm:rounded-bl-[28px] rounded-br-none">
      {/* Top breadcrumb */}
      <div className="max-w-[1370px] mx-auto px-6 sm:px-12 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#1877F2] transition-colors font-mono"
        >
          <ArrowLeft size={14} /> Back to Overview
        </Link>
        <span className="text-xs font-mono text-neutral-400">Knowledge Hub</span>
      </div>

      <main className="max-w-[1370px] mx-auto px-6 sm:px-12 py-6">
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold uppercase tracking-wider font-mono">
            <BookOpen size={12} /> Strategic Perspectives
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#27262b]">
            Our blog
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl">
            Hard-won playbooks on rapid go-to-market strategies, brand storytelling, conversion design, and product validation.
          </p>
        </div>

        {/* Category Navigation with Animated Layout Underline */}
        <nav className="flex flex-wrap gap-2 sm:gap-3 my-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBlogCategory"
                    className="absolute inset-0 bg-[#1877F2] rounded-full z-0 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </nav>

        {/* Blog Post Grid with Staggered On-Scroll Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <AnimatePresence>
            {filteredPosts.map((post, i) => (
              <motion.article
                layout
                key={post.slug || post.title}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col justify-between p-5 rounded-[28px] bg-white border border-neutral-200/70 shadow-2xs hover:border-[#1877F2]/40 hover:shadow-md transition-all duration-300 space-y-4"
              >
                <Link to={`/blog/${post.slug}`} className="block space-y-4">
                  {/* Thumbnail Image */}
                  <div className="h-[260px] rounded-[20px] overflow-hidden relative bg-neutral-100 shadow-2xs">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#27262b] text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full shadow-xs">
                      {post.category}
                    </div>

                    <div className="absolute right-4 top-4 bg-white text-[#27262b] group-hover:bg-[#1877F2] group-hover:text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md transition-colors duration-300 text-xs">
                      ↗
                    </div>
                  </div>

                  {/* Meta tag */}
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h2 className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight group-hover:text-[#1877F2] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      className="w-6 h-6 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="text-xs font-medium text-neutral-600 font-mono">{post.author?.name}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs uppercase font-semibold font-mono tracking-wider text-[#27262b] group-hover:text-[#1877F2] inline-flex items-center gap-1.5 transition-colors"
                  >
                    Read <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA section */}
        <FadeUp className="mt-20">
          <section className="bg-[#27262b] text-white rounded-[28px] p-8 sm:p-14 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Let’s make<br />something{" "}
                <em className="not-italic bg-[#1877F2] text-white rounded-full px-4 py-1 text-[0.62em] uppercase font-bold shadow-xs">
                  outstanding
                </em>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300">
                Turn strategic insights into market reality. Reach out for a free consultation today.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  onClick={() => onOpenContact("Strategy Consultation")}
                  variant="accent"
                >
                  discuss a project
                </Button>

                <Button
                  onClick={() => onOpenContact("Schedule Intro Call")}
                  variant="light"
                >
                  schedule a call
                </Button>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  );
}
