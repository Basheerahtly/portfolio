"use client"; // Animations run in the browser.

import { useState } from "react";
import { motion, MotionConfig } from "motion/react";

// Anything placed inside <Reveal> ... </Reveal> fades in when it scrolls into view.
// "children" means "whatever is placed between the opening and closing tags".
export default function Reveal({ children }: { children: React.ReactNode }) {
  // seen = has this section scrolled into view yet?
  const [seen, setSeen] = useState(false);

  return (
    // reducedMotion="user" respects people who have turned on "reduce motion".
    <MotionConfig reducedMotion="user">
      <motion.div
        // A marker that CSS can read. It says "false" until the section is seen, then "true".
        data-seen={seen}
        // Runs once, at the moment the section scrolls into view.
        onViewportEnter={() => setSeen(true)}
        // Where the animation starts: invisible, and 40 pixels lower.
        initial={{ opacity: 0, y: 40 }}
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