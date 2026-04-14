import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import logo from '../assets/logo.webp'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-xs tracking-[0.2em] text-zinc-400">
              GILIANNE COSME
            </p>
            <h1 className="text-lg font-semibold">Creative Space</h1>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center px-6 py-10 sm:px-10 lg:px-16">
        
        {/* LEFT SIDE */}
        <div className="flex-1 max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
            Welcome
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            A calm space for signing in and getting started.
          </h1>

          <p className="mt-4 text-zinc-400 text-sm leading-6">
            This layout keeps the same monochrome, structured style across the
            site while giving the auth pages a more polished and focused design.
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            Sign in or create an account to continue.
          </p>
        </div>

        {/* RIGHT SIDE (BIGGER FORM) */}
        <div className="flex-[1.2] flex justify-end">
          <div className="w-full max-w-lg">
            
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* AUTH CONTENT */}
              <Outlet />
            
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default AuthLayout