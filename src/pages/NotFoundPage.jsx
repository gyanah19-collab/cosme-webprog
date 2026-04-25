import Button from '../components/Button'

function NotFoundPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,#18181b_0%,#0f0f12_35%,#09090b_100%)] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            Error
          </p>

          <h1 className="mt-2 text-5xl font-bold text-white">
            404
          </h1>

          <p className="mt-4 text-base leading-7 text-white/65">
            This page doesn’t exist.
          </p>

          <div className="mt-6 flex justify-center">
            <Button to="/home" variant="primary">
              Back Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage

