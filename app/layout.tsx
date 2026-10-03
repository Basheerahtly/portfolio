import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

// Load the fonts and give each a name that our CSS can refer to.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// "metadata" sets the browser tab title and the description search engines show.
export const metadata: Metadata = {
  title: "Hajrah Basheerah Tourabally | Portfolio",
  description: "Computer Science (AI) student at Asia Pacific University, Malaysia.",
};

// The layout wraps every page. "children" is whichever page is being shown.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: our theme script changes this tag before React starts,
    // and this tells React that the difference is expected.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}