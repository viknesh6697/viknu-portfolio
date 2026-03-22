import { site } from "@/data/site";
import Link from "next/link";

export default function BookPage() {
  return (
    <section className="container-custom py-16">
      <h1 className="section-title">Book a Call</h1>
      <p className="mt-3 text-zinc-300">Let’s discuss your idea, product, or partnership.</p>
      <Link
        href={site.calendly}
        target="_blank"
        className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900"
      >
        Open Calendar
      </Link>
    </section>
  );
}
