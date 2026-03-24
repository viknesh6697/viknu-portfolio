import { CommandPalette } from "@/components/command-palette";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeSections } from "@/components/home-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <CommandPalette />
      <Header />
      <main>
        <HomeSections />
      </main>
      <Footer />
    </div>
  );
}
