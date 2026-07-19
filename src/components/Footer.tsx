import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-10 text-center">
      <p className="font-mono text-xs text-muted">
        Built with Next.js & Tailwind · {profile.name}
      </p>
    </footer>
  );
}
