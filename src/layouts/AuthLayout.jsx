import { Outlet } from 'react-router-dom'
import bgImage from '../assets/me.jpg'

function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/75" />

      {/* Ambient Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center px-20">
          <p className="text-xs uppercase tracking-[0.45em] text-white/45">
            Creative Identity
          </p>

          <h1 className="mt-5 text-8xl font-serif leading-none tracking-wide">
            VELOUR
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">
            Built from emotion, expression, and design.
            A digital space where creativity becomes identity.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-20 bg-white/30" />
            <p className="text-sm text-white/50">
              Creative Space 2026
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md rounded-[2.5rem] border border-white/15 bg-white/[0.07] p-8 sm:p-10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.75)]">
            <Outlet />
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 px-8 py-4 flex items-center justify-between text-sm text-white/55">

        <div className="flex gap-4 text-lg">
          <span>◎</span>
          <span>◉</span>
          <span>✦</span>
        </div>

        <p>Designed by Gilianne Cosme</p>

      </div>
    </div>
  )
}

export default AuthLayout