import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="container-custom mt-20">
      <h2 className="section-title">What people say</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="glass rounded-xl p-5">
            <p className="text-zinc-200">“{item.quote}”</p>
            <footer className="mt-4 text-sm text-zinc-400">
              — {item.author}, {item.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
