import { site } from "@/data/site";
import Link from "next/link";
import CommandMenu from "./CommandMenu";

const items = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
  { label: "Labs", href: "/labs" },
  { label: "Links", href: "/links" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-zinc-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CommandMenu />
      </div>
    </header>
  );
}
