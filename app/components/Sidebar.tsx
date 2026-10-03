import { profile, sections } from "@/data/portfolio";

export default function Sidebar() {
  return (
    // "fixed" pins the sidebar in place while the page scrolls.
    // "hidden md:flex" hides it on phones and shows it on wider screens.
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col gap-6 border-r border-gray-500/20 p-8 md:flex">
      <p className="text-lg font-bold">{profile.name}</p>
      <nav className="flex flex-col gap-3">
        {/* .map() repeats this link once for every section in the list */}
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="opacity-70 hover:opacity-100">
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}