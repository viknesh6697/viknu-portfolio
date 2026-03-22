import { site } from "@/data/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-custom flex flex-col items-start justify-between gap-4 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={site.social.github} target="_blank">
            GitHub
          </Link>
          <Link href={site.social.linkedin} target="_blank">
            LinkedIn
          </Link>
          <Link href={site.social.twitter} target="_blank">
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
