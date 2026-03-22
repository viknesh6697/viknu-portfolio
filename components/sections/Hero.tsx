"use client";

import { site } from "@/data/site";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-custom pt-16 sm:pt-24">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-zinc-400">
        {site.location} · {site.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
      >
        Building thoughtful digital products that feel fast, clear, and human.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-5 max-w-2xl text-zinc-300"
      >
        {site.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Link href="/work" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900">
          View Work
        </Link>
        <Link href="/book" className="glass rounded-lg px-4 py-2 text-sm text-zinc-100">
          Book a Call
        </Link>
      </motion.div>
    </section>
  );
}
