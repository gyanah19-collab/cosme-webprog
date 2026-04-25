// src/components/NavBar.jsx

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import Button from './Button'

const links = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/home/about' },
  { label: 'Articles', to: '/home/articles' },
]

function NavBar() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('loggedIn')
    setLoggedIn(auth === 'true')
  }, [])

  const logout = () => {
    localStorage.removeItem('loggedIn')
    navigate('/auth/signin')
    window.location.reload()
  }

  const navClass = ({ isActive }) =>
    `
    px-4 py-2 rounded-full text-[11px]
    uppercase tracking-[0.24em]
    border transition-all duration-300
    ${
      isActive
        ? 'bg-white text-black border-white'
        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
    }
  `

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link to="/home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15"
          />

          <div>
            <p className="text-[10px] tracking-[0.28em] text-white/45">
              GILIANNE COSME
            </p>

            <p className="text-sm font-semibold text-white">
              Creative Space
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex gap-2">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/home'}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {loggedIn ? (
            <>
              <Button to="/dashboard">Dashboard</Button>
              <Button onClick={logout} variant="primary">
                Log Out
              </Button>
            </>
          ) : (
            <Button to="/auth/signin" variant="primary">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default NavBar