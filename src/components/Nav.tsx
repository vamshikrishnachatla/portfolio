"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

const sections = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">{"<"}</span>
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">{" />"}</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="transition-colors hover:text-foreground">
              {s.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className="text-muted sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border/60 px-6 py-3 sm:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
