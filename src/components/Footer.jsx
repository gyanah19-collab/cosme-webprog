function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            Gilianne Cosme
          </p>
          <p className="text-sm text-white/60">
            Creative Space, music, visuals, and self-expression.
          </p>
        </div>

        <p className="text-xs text-white/40">
          © 2026 Creative Space
        </p>
      </div>
    </footer>
  )
}

export default Footer