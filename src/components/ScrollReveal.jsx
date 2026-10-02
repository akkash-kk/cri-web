import React from "react";
import { motion } from "framer-motion";

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 35,
  className = "",
  threshold = 0.15,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  ...props
}) {
  const x = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUp({
  children,
  delay = 0,
  duration = 0.6,
  scale = 0.92,
  className = "",
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = "",
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 25,
  duration = 0.6,
  className = "",
  ...props
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
