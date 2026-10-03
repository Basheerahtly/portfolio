"use client"; // Needed because this component now reacts to clicks.

import { useState } from "react";
import { profile, sections } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

export default function Sidebar() {
  // "State" is a value React remembers. When it changes, React redraws this component.
  // open = is the phone menu showing?  setOpen = the function that changes it.
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR: phones only ("md:hidden" hides it on wider screens) */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface px-5 py-3 md:hidden">
        <p className="font-bold">{profile.name}</p>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="rounded-lg border border-border px-3 py-2 text-sm font-medium"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {/* DARK BACKDROP: phones only, shown while the menu is open. Tapping it closes the menu. */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-10 bg-black/40 md:hidden"
        />
      )}

      {/* SIDEBAR: always visible on wide screens. On phones it slides in when open. */}
      <aside
        className={`fixed left-0 top-0 z-20 flex h-dvh w-64 flex-col gap-8 border-r border-border bg-surface p-8 pt-20 transition-[translate,visibility] duration-300 md:visible md:translate-x-0 md:pt-8 ${
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <p className="hidden text-lg font-bold md:block">{profile.name}</p>

        <nav className="flex flex-col gap-1">
          {/* Clicking a link also closes the phone menu */}
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-muted transition hover:bg-background hover:text-accent"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}