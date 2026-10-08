"use client"; // Animations run in the browser.

import { motion, MotionConfig } from "motion/react";

// Anything placed inside <Reveal> ... </Reveal> fades in when it scrolls into view.
// "children" means "whatever is placed between the opening and closing tags".
export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    // reducedMotion="user" respects people who have turned on "reduce motion"
    // on their device. For them the sliding is skipped automatically.
    <MotionConfig reducedMotion="user">
      <motion.div
        // Where the animation starts: invisible, and 24 pixels lower.
        initial={{ opacity: 0, y: 24 }}
        // Where it ends once it is on screen: fully visible, in its normal place.
        whileInView={{ opacity: 1, y: 0 }}
        // "once" plays it a single time. The margin waits until it is 80 pixels into view.
        viewport={{ once: true, margin: "-80px" }}
        // How long it takes (in seconds) and how it eases to a stop.
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}