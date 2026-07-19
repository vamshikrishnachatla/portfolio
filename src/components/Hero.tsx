import { profile } from "@/content/profile";

export default function Hero() {
  const { links } = profile;

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28">
      <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <h2 className="mt-3 text-2xl font-semibold text-muted sm:text-4xl">{profile.role}</h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </p>
      <p className="mt-2 font-mono text-sm text-muted">{profile.location}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {links.resume && (
          <a
            href={links.resume}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        )}
        {links.email && (
          <a
            href={`mailto:${links.email}`}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Email
          </a>
        )}
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        )}
        {links.leetcode && (
          <a
            href={links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            LeetCode
          </a>
        )}
      </div>
    </section>
  );
}
