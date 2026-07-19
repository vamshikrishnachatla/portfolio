import Section from "./Section";
import { profile } from "@/content/profile";

export default function Contact() {
  const { links } = profile;

  const items = [
    links.email && { label: "Email", href: `mailto:${links.email}`, text: links.email },
    links.linkedin && { label: "LinkedIn", href: links.linkedin, text: "in/vamshikrishnachatla816" },
    links.leetcode && { label: "LeetCode", href: links.leetcode, text: "u/vamshikrishnachatla" },
  ].filter(Boolean) as { label: string; href: string; text: string }[];

  return (
    <Section id="contact" title="Get in touch">
      <p className="max-w-xl text-base leading-relaxed text-muted">
        I&apos;m open to backend and GenAI engineering roles. The fastest way to reach me is email —
        I&apos;ll get back to you.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent"
          >
            <p className="font-mono text-xs text-accent">{it.label}</p>
            <p className="mt-1 truncate text-sm text-foreground">{it.text}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
