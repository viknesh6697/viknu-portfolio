import { site } from "@/data/site";
import Link from "next/link";

export default function LinksPage() {
  return (
    <section className="container-custom py-16">
      <h1 className="section-title">Links</h1>
      <div className="mt-6 space-y-3">
        <Link className="glass block rounded-lg p-4" href={site.social.github} target="_blank">
          GitHub
        </Link>
        <Link className="glass block rounded-lg p-4" href={site.social.linkedin} target="_blank">
          LinkedIn
        </Link>
        <Link className="glass block rounded-lg p-4" href={site.social.twitter} target="_blank">
          X / Twitter
        </Link>
      </div>
    </section>
  );
}
