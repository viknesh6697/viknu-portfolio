"use client";

import { Command } from "cmdk";
import { useEffect, useMemo, useState } from "react";

const commandItems = [
  { label: "View RAG Architecture", href: "#architecture" },
  { label: "See Kafka Pipelines", href: "#projects" },
  { label: "Open GitHub AI Projects", href: "https://github.com/" },
  { label: "Jump to Case Study", href: "#case-study" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const commands = useMemo(() => commandItems, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/70 px-4 pt-24" onClick={() => setOpen(false)}>
      <Command
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-100"
        onClick={(event) => event.stopPropagation()}
      >
        <Command.Input
          autoFocus
          placeholder="Search architecture, projects, and links..."
          className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
        />
        <Command.List className="mt-3 max-h-80 overflow-y-auto">
          <Command.Empty className="px-2 py-4 text-sm text-slate-400">No results found.</Command.Empty>
          {commands.map((item) => (
            <Command.Item key={item.label} className="rounded-md px-3 py-2 text-sm data-[selected=true]:bg-slate-800">
              <a href={item.href} className="block w-full" target={item.href.startsWith("http") ? "_blank" : undefined}>
                {item.label}
              </a>
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
