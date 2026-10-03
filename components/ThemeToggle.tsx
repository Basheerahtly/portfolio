"use client"; // This component runs in the browser, because it responds to clicks.

export default function ThemeToggle() {
  // This function runs each time the button is clicked.
  function toggleTheme() {
    // document.documentElement is the <html> tag.
    // toggle("dark") adds the class if it's missing, or removes it if it's there,
    // and tells us whether the class is now present.
    const isDark = document.documentElement.classList.toggle("dark");
    // Remember the choice in the browser for the next visit.
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-gray-500/30 px-3 py-2 text-sm hover:border-accent hover:text-accent"
    >
      Switch theme
    </button>
  );
}