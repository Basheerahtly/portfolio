"use client"; // Needed because this component reacts to clicks.

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { journey } from "@/data/portfolio";

export default function Journey() {
  // active = the position of the stage being shown. 0 means the first stage.
  const [active, setActive] = useState(0);
  const stage = journey[active];

  return (
    <MotionConfig reducedMotion="user">
      <div className="mt-8">
        {/* THE TABS: one button per stage */}
        <div className="flex flex-wrap gap-2">
          {journey.map((item, index) => (
            <button
              key={item.tab}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={`relative isolate rounded-xl border px-5 py-3 text-left transition-colors ${
                index === active ? "border-accent" : "border-border text-muted hover:text-foreground"
              }`}
            >
              {/* The blue highlight that slides between tabs */}
              {index === active && (
                <motion.span
                  layoutId="journey-highlight"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 -z-10 rounded-xl bg-accent/10"
                />
              )}
              <span className="block font-mono text-xs text-accent">{item.period}</span>
              <span className="block font-display text-xl font-semibold uppercase">{item.tab}</span>
            </button>
          ))}
        </div>

        {/* THE PANEL: details of the chosen stage */}
        <div className="mt-6 rounded-2xl border border-border bg-surface p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-3xl font-semibold uppercase leading-tight">{stage.place}</h3>
              <p className="mt-2 font-medium text-accent">{stage.heading}</p>

              {/* Bullet points, shown only if there are any */}
              {stage.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                  {stage.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {/* Roles, shown as a small timeline, only if there are any */}
              {stage.roles.length > 0 && (
                <>
                  <p className="mt-8 font-mono text-sm text-accent">Roles and activities</p>
                  <ol className="mt-4 flex flex-col gap-6 border-l-2 border-border pl-6">
                    {stage.roles.map((item) => (
                      <li key={item.role} className="relative">
                        {/* The small circle sitting on the timeline line */}
                        <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-surface" />
                        <p className="font-mono text-sm text-muted">{item.period}</p>
                        <p className="font-semibold">{item.role}</p>
                        {item.description && <p className="mt-1 text-muted">{item.description}</p>}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}