import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section className="container-custom mt-20">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Tools I use to ship reliable, polished products.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
