import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const inputClasses =
  'mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/30 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]'

const actionButtonClassName =
  'w-full rounded-2xl py-3.5 text-[11px] tracking-[0.28em] bg-white text-black border-white hover:bg-zinc-200'

function SignUpPage() {
  const navigate = useNavigate()

  const handleCreateAccount = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-9">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
          Create Account
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Sign Up
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-white/65">
          Create an account and start building your creative journey.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleCreateAccount}>
        <div>
          <label className="text-sm font-medium text-white/80">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className={inputClasses}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Create Account
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-sm text-white/60">
          Already have an account?{' '}
          <Link
            to="/auth/signin"
            className="font-semibold text-white transition hover:text-white/70"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage