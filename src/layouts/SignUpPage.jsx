import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.08]'

function SignUpPage() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  // NEW STATE
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    age: '',
    contact: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    const newErrors = {}

    if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!/^\d{11}$/.test(form.contact)) {
      newErrors.contact = 'Contact must be exactly 11 digits'
    }

    if (!/^\d+$/.test(form.age)) {
      newErrors.age = 'Age must be a number only'
    }

    if (/\s/.test(form.username)) {
      newErrors.username = 'Username must not contain spaces'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

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
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className={inputClass}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm text-white/70">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={inputClass}
            onChange={handleChange}
          />
        </div>

        {/* NEW FIELD */}
        <div>
          <label className="text-sm text-white/70">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            className={inputClass}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-400 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        {/* NEW FIELD */}
        <div>
          <label className="text-sm text-white/70">Age</label>
          <input
            name="age"
            type="text"
            placeholder="Enter age"
            className={inputClass}
            onChange={handleChange}
          />
          {errors.age && (
            <p className="text-red-400 text-xs mt-1">{errors.age}</p>
          )}
        </div>

        {/* NEW FIELD */}
        <div>
          <label className="text-sm text-white/70">Contact Number</label>
          <input
            name="contact"
            type="text"
            placeholder="11-digit number"
            className={inputClass}
            onChange={handleChange}
          />
          {errors.contact && (
            <p className="text-red-400 text-xs mt-1">{errors.contact}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-white/70">Password</label>

          <div className="relative mt-2">
            <input
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Create password"
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

          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
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