import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-white text-black border-white hover:bg-zinc-200',
  secondary: 'bg-white/5 text-white border-white/10 hover:bg-white/10',
}

function Button({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'secondary',
  className = '',
}) {
  const classes = `
    relative overflow-hidden
    inline-flex items-center justify-center
    rounded-full px-5 py-2.5
    text-[11px] font-semibold uppercase tracking-[0.24em]
    border transition-all duration-300
    hover:scale-105 active:scale-95
    ${variants[variant]}
    ${className}
  `

  if (to) {
    return (
      <Link to={to} className={classes}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-700 hover:translate-x-full" />
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-700 hover:translate-x-full" />
    </button>
  )
}

export default Button