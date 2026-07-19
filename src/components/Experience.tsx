import Section from "./Section";
import { experience } from "@/content/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.company} className="relative border-l border-border pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-lg font-semibold">
                {job.title} <span className="text-accent">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-muted">{job.location}</p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
