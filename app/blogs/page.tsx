const posts = [
  { title: "Designing better developer UX", date: "2026-02-01" },
  { title: "How I structure modern Next.js apps", date: "2026-01-11" },
];

export default function BlogsPage() {
  return (
    <section className="container-custom py-16">
      <h1 className="section-title">Blogs</h1>
      <div className="mt-6 space-y-3">
        {posts.map((post) => (
          <article key={post.title} className="glass rounded-lg p-4">
            <h2 className="font-medium">{post.title}</h2>
            <p className="text-sm text-zinc-400">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
