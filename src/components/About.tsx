import Section from "./Section";
import { about } from "@/content/profile";

export default function About() {
  return (
    <Section id="about" title={about.heading}>
      <div className="space-y-4 text-base leading-relaxed text-muted">
        {about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
