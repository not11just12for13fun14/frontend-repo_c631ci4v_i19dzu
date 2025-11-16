import { useState } from 'react'
import { Menu, X, Waves, Phone, Mail, Info, Home } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Overview', href: '#overview', icon: Home },
    { label: 'How it works', href: '#how-it-works', icon: Waves },
    { label: 'Benefits', href: '#benefits', icon: Info },
    { label: 'Contact', href: '#contact', icon: Phone },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 grid place-content-center text-white shadow-lg shadow-cyan-500/30">
              <Waves size={20} />
            </div>
            <div className="font-extrabold tracking-tight text-slate-900">
              AQUAWISE
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-700/40 transition-shadow"
            >
              <Mail size={16} /> Request demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="mt-2 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  <item.icon className="h-4 w-4" /> {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-3 py-2 text-sm font-semibold text-white"
              >
                <Mail size={16} /> Request demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
