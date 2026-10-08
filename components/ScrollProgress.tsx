"use client"; // Runs in the browser, because it follows your scrolling.

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  // scrollYProgress is a number that updates as you scroll:
  // 0 at the top of the page, 1 at the very bottom.
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      // scaleX stretches the bar sideways: 0 means no width, 1 means full width.
      // Linking it to scrollYProgress makes the bar grow as you scroll down.
      style={{ scaleX: scrollYProgress }}
      // "origin-left" makes it grow from the left edge instead of from the middle.
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent"
    />
  );
}