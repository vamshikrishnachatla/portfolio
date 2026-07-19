import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold tracking-tight">
        <span className="font-mono text-accent">#</span>
        {title}
        <span className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}
