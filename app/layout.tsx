import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viknu | AI Engineer Portfolio",
  description:
    "Enterprise AI engineer portfolio focused on RAG systems, distributed data pipelines, and agentic platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
