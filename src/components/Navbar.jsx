import { useState, useEffect } from 'react'
import { Menu, X, Tooth, Phone } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow">
            <Tooth size={20} />
          </div>
          <span className="font-semibold text-gray-800 tracking-tight">BlueSmile Dental</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
            <Phone size={16} /> Call Us
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-4 shadow-sm">
            <div className="flex flex-col divide-y">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-left py-3 text-gray-700 hover:text-sky-600"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+1234567890" className="mt-3 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
