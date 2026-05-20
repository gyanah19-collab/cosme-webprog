import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../services/api'

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.08]'

function SignInPage() {

  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        form
      )

      localStorage.setItem(
        'token',
        res.data.token
      )

      localStorage.setItem(
        'user',
        JSON.stringify(res.data.user)
      )

      localStorage.setItem(
        'loggedIn',
        'true'
      )

      navigate('/home')

      window.location.reload()

    } catch (err) {

      setError(
        err.response?.data?.message ||
        'Login failed'
      )
    }
  }

  return (
    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
        Welcome Back
      </p>

      <h1 className="mt-3 text-5xl font-serif">
        Log In
      </h1>

      <p className="mt-3 text-sm leading-7 text-white/60">
        Continue your creative journey and access your space.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <div>
          <label className="text-sm text-white/70">
            Email
          </label>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={inputClass}
            onChange={handleChange}
          />
        </div>

        <div>

          <label className="text-sm text-white/70">
            Password
          </label>

          <div className="relative mt-2">

            <input
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Enter your password"
              className={inputClass}
              onChange={handleChange}
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

        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between text-sm text-white/60">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <button
            type="button"
            className="hover:text-white"
          >
            Forgot?
          </button>

        </div>

        <button className="w-full rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-zinc-200">
          Log In
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-white/60">

        No account yet?{' '}

        <Link
          to="/auth/signup"
          className="font-semibold text-white hover:text-white/80"
        >
          Sign Up
        </Link>

      </p>

    </div>
  )
}

export default SignInPage