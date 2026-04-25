// Footer.jsx

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/35 backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
            GILIANNE COSME
          </p>

          <p className="mt-2 text-sm leading-6 text-white/55">
            Creative Space, music, visuals, and self-expression.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <p className="text-xs tracking-[0.2em] text-white/35">
            © 2026 CREATIVE SPACE
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer