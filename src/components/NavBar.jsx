import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import Button from './Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
]

const navLinkClasses = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all',
    isActive
      ? 'border-white/10 bg-white text-black'
      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white',
  ].join(' ')

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full border border-white/20 object-cover shadow-sm"
          />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/45">
              GILIANNE COSME
            </p>
            <p className="text-sm font-semibold text-white">
              Creative Space
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Button to="/auth/signin" variant="primary">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}

export default NavBar