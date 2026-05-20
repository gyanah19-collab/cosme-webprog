import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../services/api'
import toast from 'react-hot-toast'

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.08]'

function SignUpPage() {

  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    age: '',
    contact: '',
  })

  const [errors, setErrors] = useState({})
const [loading, setLoading] =
  useState(false)
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {

    const newErrors = {}

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    }

    const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
      form.email &&
      !emailRegex.test(form.email)
    ) {
      newErrors.email =
        'Invalid email format'
    }

    if (!form.username.trim()) {
      newErrors.username = 'Username is required'
    }

    if (/\s/.test(form.username)) {
      newErrors.username =
        'Username must not contain spaces'
    }

    const ageNum = Number(form.age)

    if (
      !Number.isInteger(ageNum) ||
      ageNum < 1 ||
      ageNum > 120
    ) {
      newErrors.age =
        'Enter valid age'
    }

    if (!/^\d{11}$/.test(form.contact)) {
      newErrors.contact =
        'Contact must be exactly 11 digits'
    }

    if (form.password.length < 8) {
      newErrors.password =
        'Password must be at least 8 characters'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    const validationErrors = validate()

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

 try {

  const [firstName, ...rest] =
    form.fullName.split(' ')

  const lastName = rest.join(' ')

  await api.post(
    '/auth/signup',
    {
      firstName,
      lastName,
      email: form.email,
      username: form.username,
      password: form.password,
      age: form.age,
      contact: form.contact,

      role: 'viewer',
      gender: 'male',
      status: 'active',
    }
  )

  toast.success(
    'Signup successful!'
  )

  navigate('/auth/signin')

} catch (err) {

  toast.error(
    err.response?.data?.message ||
    'Signup failed'
  )

} finally {

  setLoading(false)

}
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

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <div>

          <label className="text-sm text-white/70">
            Full Name
          </label>

          <input
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className={inputClass}
            value={form.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">
              {errors.fullName}
            </p>
          )}

        </div>

        <div>

          <label className="text-sm text-white/70">
            Email
          </label>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={inputClass}
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}

        </div>

        <div>

          <label className="text-sm text-white/70">
            Username
          </label>

          <input
            name="username"
            type="text"
            placeholder="Enter username"
            className={inputClass}
            value={form.username}
            onChange={handleChange}
          />

          {errors.username && (
            <p className="mt-1 text-xs text-red-400">
              {errors.username}
            </p>
          )}

        </div>

        <div>

          <label className="text-sm text-white/70">
            Age
          </label>

          <input
            name="age"
            type="text"
            placeholder="Enter age"
            className={inputClass}
            value={form.age}
            onChange={handleChange}
          />

          {errors.age && (
            <p className="mt-1 text-xs text-red-400">
              {errors.age}
            </p>
          )}

        </div>

        <div>

          <label className="text-sm text-white/70">
            Contact Number
          </label>

          <input
            name="contact"
            type="text"
            placeholder="11-digit number"
            className={inputClass}
            value={form.contact}
            onChange={handleChange}
          />

          {errors.contact && (
            <p className="mt-1 text-xs text-red-400">
              {errors.contact}
            </p>
          )}

        </div>

        <div>

          <label className="text-sm text-white/70">
            Password
          </label>

          <div className="relative mt-2">

            <input
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Create password"
              className={inputClass}
              value={form.password}
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
            <p className="mt-1 text-xs text-red-400">
              {errors.password}
            </p>
          )}

        </div>

        <button
      disabled={loading}
      className="w-full rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-zinc-200 disabled:opacity-50"
    >
      {loading
        ? 'Creating...'
        : 'Create Account'}
    </button>

      </form>

      <p className="mt-6 text-center text-sm text-white/60">
        Already have account?{' '}

        <Link
          to="/auth/signin"
          className="font-semibold text-white hover:text-white/80"
        >
          Log In
        </Link>

      </p>

    </div>
  )
}

export default SignUpPage