import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  name: z.string().min(2).max(40),
  message: z.string().min(2).max(240),
});

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

const globalAny = global as unknown as {
  __guestbook?: Entry[];
};

if (!globalAny.__guestbook) {
  globalAny.__guestbook = [];
}

export async function GET() {
  return NextResponse.json({ entries: globalAny.__guestbook?.slice().reverse() ?? [] });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const entry: Entry = {
    id: crypto.randomUUID(),
    name: parsed.data.name,
    message: parsed.data.message,
    createdAt: new Date().toISOString(),
  };

  globalAny.__guestbook?.push(entry);

  return NextResponse.json({ ok: true, entry }, { status: 201 });
}
