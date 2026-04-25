import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.08]'

function SignUpPage() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('loggedIn', 'true')
    navigate('/home')
    window.location.reload()
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
        Start Here
      </p>

      <h1 className="mt-3 text-5xl font-serif">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-7 text-white/60">
        Create your account and begin your creative identity.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

        <div>
          <label className="text-sm text-white/70">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-sm text-white/70">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-sm text-white/70">Password</label>

          <div className="relative mt-2">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Create password"
              className={inputClass}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button className="w-full rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-zinc-200">
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-white/60">
        Already have account?{' '}
        <Link to="/auth/signin" className="font-semibold text-white hover:text-white/80">
          Log In
        </Link>
      </p>
    </div>
  )
}

export default SignUpPage