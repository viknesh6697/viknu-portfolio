"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
  { label: "Labs", href: "/labs" },
  { label: "Links", href: "/links" },
  { label: "Uses", href: "/uses" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Book a Call", href: "/book" },
];

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-zinc-300 hover:text-white"
      >
        <Search className="h-4 w-4" />
        Search
        <kbd className="ml-2 rounded bg-zinc-800 px-1.5 text-xs text-zinc-400">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 p-4" onClick={() => setOpen(false)}>
          <div
            className="mx-auto mt-24 w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
            onClick={(event) => event.stopPropagation()}
          >
            <Command className="w-full">
              <Command.Input
                autoFocus
                placeholder="Type a page..."
                className="w-full border-b border-white/10 bg-transparent px-4 py-3 text-sm outline-none"
              />
              <Command.List className="max-h-80 overflow-auto p-2">
                <Command.Empty className="px-2 py-3 text-sm text-zinc-400">No results.</Command.Empty>
                <Command.Group heading="Navigation" className="text-zinc-500">
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => {
                        router.push(item.href);
                        setOpen(false);
                      }}
                      className="cursor-pointer rounded-md px-2 py-2 text-sm text-zinc-200 aria-selected:bg-white/10"
                    >
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
