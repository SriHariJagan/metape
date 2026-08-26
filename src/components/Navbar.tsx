import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/90 shadow-2xl shadow-navy/20 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="MetaPE"
              className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
              META<span className="text-orange">PE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange to-teal" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange/35 hover:-translate-y-0.5"
            >
              Get Started
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-white transition-all duration-300 lg:hidden hover:bg-white/10"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[320px] bg-navy shadow-2xl transition-transform duration-500 ease-out lg:hidden border-l border-white/5 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-24 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`group flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 ${
                mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              } ${
                location.pathname === link.path
                  ? 'bg-white/10 text-white'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  location.pathname === link.path
                    ? 'text-orange'
                    : 'text-white/30 group-hover:text-orange group-hover:translate-x-0.5'
                }`}
              />
            </Link>
          ))}
        </div>
        <div className={`absolute bottom-8 left-6 right-6 transition-all duration-500 delay-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange/25"
          >
            Get Started
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
