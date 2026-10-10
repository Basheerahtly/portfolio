"use client"; // Needed because this component reacts to clicks.

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import type { Variants } from "motion/react";
import { skillGroups } from "@/data/portfolio";

// The list of skill tags. When it shows, its tags appear 0.06 seconds apart.
const tagList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

// One skill tag: it fades in while growing to its full size.
const tag: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function Skills() {
  // active = the position of the group being shown. 0 means the first group.
  const [active, setActive] = useState(0);
  // The group that matches that position.
  const group = skillGroups[active];

  return (
    // reducedMotion="user" skips the movement for visitors who asked for reduced motion.
    <MotionConfig reducedMotion="user">
      {/* On phones the two parts stack. On wide screens they sit side by side. */}
      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* LEFT: one button per group */}
        <div className="flex flex-wrap gap-2 lg:w-80 lg:shrink-0 lg:flex-col">
          {skillGroups.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActive(index)}
              // aria-pressed tells screen readers which button is switched on.
              aria-pressed={index === active}
              className={`relative isolate flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                index === active ? "border-accent" : "border-border text-muted hover:text-foreground"
              }`}
            >
              {/* The blue highlight. Because every button uses the same layoutId,
                  Motion slides it from the old button to the new one. */}
              {index === active && (
                <motion.span
                  layoutId="skill-highlight"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 -z-10 rounded-xl bg-accent/10"
                />
              )}
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* RIGHT: the skills of the chosen group */}
        <div className="min-h-56 grow rounded-2xl border border-border bg-surface p-6 md:p-8">
          {/* AnimatePresence lets the old group fade out before the new one fades in.
              The "key" tells it that the content has changed. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-mono text-sm text-accent">{group.items.length} skills</p>
              <h3 className="mt-1 font-display text-3xl font-semibold uppercase">{group.title}</h3>

              <motion.ul variants={tagList} initial="hidden" animate="show" className="mt-6 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={tag}
                    className="rounded-full border border-border bg-background px-4 py-2 font-medium"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}