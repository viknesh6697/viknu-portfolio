"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FlaskConical, Zap } from "lucide-react";
import Link from "next/link";
import { labsLinks, navLinks } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-sm font-semibold tracking-widest text-sky-300">
          VIKNU // AI SYSTEMS
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <FlaskConical className="h-4 w-4" /> Labs / Agent Playground
            </MenuButton>
            <MenuItems className="absolute right-0 mt-3 w-80 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl shadow-black/40">
              {labsLinks.map((lab) => (
                <MenuItem key={lab.label}>
                  <a
                    href={lab.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg px-3 py-2 hover:bg-slate-800"
                  >
                    <p className="text-sm font-medium text-slate-100">{lab.label}</p>
                    <p className="text-xs text-slate-400">{lab.description}</p>
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/20"
          >
            <Zap className="h-4 w-4" /> Discuss AI Solution
          </a>
        </nav>
      </div>
    </header>
  );
}
