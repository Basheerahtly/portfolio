"use client"; // Needed because the animations run in the browser.

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import type { Variants } from "motion/react";
import Explore from "@/components/Explore";
import { profile } from "@/data/portfolio";

// "Variants" are named animation states. Every animated piece here has two:
// "hidden" (before it appears) and "show" (after it appears).

// The whole intro. When it switches to "show", its pieces start one after
// another, 0.12 seconds apart. "staggerChildren" sets that gap.
const intro: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// One piece of the intro: it fades in while rising 24 pixels.
const piece: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// The role line: its letters appear one after another, like typing.
const typing: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

// One letter of the role line: it switches from invisible to visible.
const letter: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

// The photo: it fades in while growing slightly.
const photoIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  // Split the name into words, so the last word can sit on its own line in blue.
  // split(" ") cuts the text at every space and gives a list of words.
  const words = profile.name.split(" ");
  // slice(0, -1) takes every word except the last. join(" ") glues them back together.
  const firstNames = words.slice(0, -1).join(" ");
  // The last word in the list.
  const lastName = words[words.length - 1];

  return (
    // reducedMotion="user" skips the movement for visitors who asked for reduced motion.
    <MotionConfig reducedMotion="user">
      {/* "relative" lets the glows be placed inside this section.
          "isolate" keeps them behind the text. "overflow-hidden" trims what sticks out. */}
      <section id="about" className="relative isolate overflow-hidden">
        {/* BACKGROUND GLOWS: two large blurred circles that drift slowly.
            aria-hidden tells screen readers to ignore them. */}
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 -z-10 h-120 w-120 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-1/2 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        />

        {/* initial="hidden" is the starting state. animate="show" plays as soon as the page opens. */}
        <motion.div
          variants={intro}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-6xl px-8 py-16 md:px-16"
        >
          <div className="flex min-h-[70vh] flex-wrap items-center gap-10">
            {/* LEFT SIDE: the text */}
            <div className="flex min-w-0 grow basis-96 flex-col items-start gap-5">
              {/* Status badge, shown only if status is not empty */}
              {profile.status && (
                <motion.p
                  variants={piece}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {profile.status}
                </motion.p>
              )}

              {/* The name, in the big display font. Each "block" span starts on its own line.
                  &apos; is how an apostrophe is written inside JSX text. */}
              <motion.h1
                variants={piece}
                className="font-display text-5xl font-bold uppercase leading-[1.05] md:text-6xl xl:text-7xl"
              >
                <span className="mb-3 block font-sans text-xl font-medium normal-case text-muted">Hi, I&apos;m</span>
                <span className="block">{firstNames}</span>
                <span className="block text-accent">{lastName}</span>
              </motion.h1>

              {/* The role line. split("") cuts the text into single letters, and each
                  letter becomes its own small animated piece. aria-label gives screen
                  readers the whole phrase instead of separate letters. */}
              <motion.p variants={typing} aria-label={profile.role} className="text-2xl font-semibold">
                {profile.role.split("").map((character, index) => (
                  <motion.span key={index} variants={letter} aria-hidden="true">
                    {character}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p variants={piece} className="max-w-xl text-lg text-muted">
                {profile.bio}
              </motion.p>

              {/* Skill tags: one tag per item in the skills list */}
              <motion.ul variants={piece} className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </motion.ul>

              {/* Buttons. whileHover and whileTap make them grow slightly under the
                  mouse and press in when clicked. */}
              <motion.div variants={piece} className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent"
                >
                  View projects
                </motion.a>
                {profile.cv && (
                  <motion.a
                    href={`/${profile.cv}`}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-xl border-2 border-accent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-on-accent"
                  >
                    Download CV
                  </motion.a>
                )}
              </motion.div>

              {/* Links. target="_blank" opens the link in a new tab. */}
              <motion.div variants={piece} className="flex flex-wrap gap-6 pt-2 font-medium">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  GitHub ↗
                </a>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    LinkedIn ↗
                  </a>
                )}
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  Email ↗
                </a>
              </motion.div>
            </div>

            {/* RIGHT SIDE: the photo */}
            <motion.div variants={photoIn} className="relative h-110 w-full max-w-90">
              {/* Blue outline, shifted slightly so it peeks out behind the photo */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent" />

              {/* If a photo is set, show it, otherwise show the grey box */}
              {profile.photo ? (
                <Image
                  src={`/${profile.photo}`}
                  alt={`Photo of ${profile.name}`}
                  fill
                  sizes="360px"
                  priority
                  className="rounded-3xl object-cover"
                />
              ) : (
                <div className="relative flex h-full items-center justify-center rounded-3xl bg-placeholder font-mono text-sm text-muted">
                  Your photo
                </div>
              )}

              {/* Small card that overlaps the photo */}
              <div className="absolute -left-6 bottom-7 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg">
                <p className="font-mono text-xs text-muted">Studying</p>
                <p className="font-semibold">{profile.course}</p>
                <p className="text-sm text-muted">{profile.university}</p>
              </div>
            </motion.div>
          </div>

          {/* The Explore row. It is the last piece of the intro to appear. */}
          <motion.div variants={piece} className="mt-16">
            <Explore />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}