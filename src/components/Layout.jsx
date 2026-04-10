import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="pb-10 pt-24">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout