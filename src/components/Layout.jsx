// src/components/Layout.jsx

import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#2a2a2e_0%,#151518_35%,#0b0b0d_100%)] text-white overflow-hidden">
      
      {/* soft glow */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-zinc-400/10 blur-3xl" />
      </div>

      <NavBar />

      <main className="relative z-10 pt-24 pb-14">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout