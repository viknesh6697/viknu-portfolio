export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Viknu. Built for enterprise AI leadership.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:viknu@example.com">Email</a>
          <a href="/resume.pdf">Resume</a>
        </div>
      </div>
    </footer>
  );
}
