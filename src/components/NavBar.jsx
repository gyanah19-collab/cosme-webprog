import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
]

const navLinkClasses = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900 hover:bg-zinc-900 hover:text-zinc-50',
  ].join(' ')

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-zinc-900 shadow-sm"
          />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              GILIANNE COSME
            </p>
            <p className="text-sm font-semibold text-zinc-900">
              Creative Space
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
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
      </div>
    </header>
  )
}

export default NavBar