"use client";

import { useEffect, useState } from "react";

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

export default function GuestbookPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    const response = await fetch("/api/guestbook");
    const data = await response.json();
    setEntries(data.entries || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    setLoading(false);

    if (response.ok) {
      setName("");
      setMessage("");
      load();
      return;
    }

    alert("Failed to submit.");
  }

  return (
    <section className="container-custom py-16">
      <h1 className="section-title">Guestbook</h1>

      <form onSubmit={submit} className="glass mt-6 space-y-3 rounded-xl p-4">
        <input
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          maxLength={40}
        />
        <textarea
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none"
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          maxLength={240}
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Sign Guestbook"}
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {entries.map((entry) => (
          <article key={entry.id} className="glass rounded-lg p-4">
            <p className="text-sm text-zinc-200">{entry.message}</p>
            <p className="mt-2 text-xs text-zinc-400">
              — {entry.name} · {new Date(entry.createdAt).toLocaleString()}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
