"use client"; // Needed because this component reacts to clicks.

import { useState } from "react";
import { profile, sections } from "@/data/portfolio";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  // open = is the small-screen menu showing?  setOpen = the function that changes it.
  const [open, setOpen] = useState(false);

  return (
    // "sticky top-0" keeps the bar at the top of the screen while the page scrolls.
    <header className="sticky top-0 z-30 border-b border-border bg-surface">
      <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-10">
        {/* Your name. "truncate" shortens it with three dots if the screen is too narrow. */}
        <a href="#about" className="min-w-0 truncate font-display text-lg font-semibold uppercase tracking-wide">
          {profile.name}
        </a>

        {/* LINKS IN A ROW: only on screens at least 1100 pixels wide.
            "whitespace-nowrap" stops a link name from breaking onto two lines. */}
        <nav className="hidden items-center gap-1 min-[1100px]:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap rounded-lg px-2 py-2 text-sm text-muted transition hover:bg-background hover:text-accent"
            >
              {section.navLabel}
            </a>
          ))}
        </nav>

        {/* "shrink-0" stops these buttons from being squeezed */}
        <div className="flex shrink-0 items-center gap-2">
          {/* On phones the theme button moves into the menu, to leave room for your name */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          {/* MENU BUTTON: only on screens narrower than 1100 pixels */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium min-[1100px]:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* DROPDOWN: the same links stacked in a column, shown while the menu is open */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-3 min-[1100px]:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-muted transition hover:bg-background hover:text-accent"
            >
              {section.navLabel}
            </a>
          ))}
          {/* The theme button, shown here only on phones */}
          <div className="pt-2 sm:hidden">
            <ThemeToggle />
          </div>
        </nav>
      )}

      {/* The thin blue line at the bottom of the bar that fills as you scroll */}
      <ScrollProgress />
    </header>
  );
}