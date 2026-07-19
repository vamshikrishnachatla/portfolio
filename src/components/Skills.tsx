import Section from "./Section";
import { skills } from "@/content/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="rounded-lg border border-border bg-surface p-5">
            <h3 className="mb-3 font-mono text-sm text-accent">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-surface-2 px-2.5 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
