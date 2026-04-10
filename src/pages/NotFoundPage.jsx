import Button from '../components/Button'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 text-center">
      <div className="rounded-3xl border-2 border-zinc-200 bg-white p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Oops
        </p>

        <h1 className="mt-2 text-4xl font-bold text-zinc-900">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-7 text-zinc-600">
          The page you tried to open does not exist or may have been moved somewhere else.
        </p>

        <div className="mt-6 flex justify-center">
          <Button to="/">Go Back Home</Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage