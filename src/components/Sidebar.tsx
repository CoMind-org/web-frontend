import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#010022] text-white border border-blue-500/10"
      >
        <Menu size={20} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#010022] text-white border-r border-blue-500/10 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="h-20 w-full flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-3 py-2 space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm transition ${
                isActive ? "bg-blue-500/15 text-blue-200" : "text-white/80 hover:bg-white/10"
              }`
            }
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm transition ${
                isActive ? "bg-blue-500/15 text-blue-200" : "text-white/80 hover:bg-white/10"
              }`
            }
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
