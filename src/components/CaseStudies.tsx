import Section from "./Section";
import { caseStudies } from "@/content/profile";

function Field({ label, value }: { label: string; value: string }) {
  const isTodo = value.startsWith("TODO");
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{label}</p>
      <p className={`mt-1 text-sm leading-relaxed ${isTodo ? "text-muted/50 italic" : "text-muted"}`}>
        {value}
      </p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Section id="work" title="Selected Work">
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <article
            key={cs.slug}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold">{cs.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{cs.summary}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-3">
              <Field label="Problem" value={cs.problem} />
              <Field label="What I built" value={cs.build} />
              <Field label="Impact" value={cs.impact} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
