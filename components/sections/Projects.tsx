import { projects } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="container-custom mt-20">
      <h2 className="section-title">Featured Work</h2>
      <p className="section-subtitle">A selection of projects with measurable outcomes.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="glass overflow-hidden rounded-2xl">
            <div className="relative h-52 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{project.summary}</p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-400">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm">
                {project.live && (
                  <Link href={project.live} target="_blank" className="link-underline">
                    Live
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" className="link-underline">
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
