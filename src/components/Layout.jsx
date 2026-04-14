import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#18181b_0%,#0f0f12_35%,#09090b_100%)] text-white">
      <NavBar />
      <main className="pb-10 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout