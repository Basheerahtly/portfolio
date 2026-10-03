"use client";

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";

// This small script runs before the page appears, so the correct theme shows immediately.
// It uses the saved choice, or the device's own setting if nothing is saved yet.
// It is wrapped in a function so its variable names stay private, and in
// try/catch so a browser that blocks storage doesn't break the page.
const themeScript = `
  (function () {
    try {
      const saved = localStorage.getItem("theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && systemDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch {}
  })();
`;

export default function ThemeScript() {
  // A "ref" is a small box that remembers a value. Here it remembers
  // whether the script was already added, so it is only added once.
  const inserted = useRef(false);

  // useServerInsertedHTML adds something to the page while the server builds it.
  // The script ends up in the page, but React never treats it as a component.
  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;
    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
  });

  // This component shows nothing on screen itself.
  return null;
}