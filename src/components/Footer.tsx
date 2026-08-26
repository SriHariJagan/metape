import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Products: [
    { name: 'Payment Gateway', path: '/solutions' },
    { name: 'Subscriptions', path: '/solutions' },
    { name: 'Marketplace', path: '/solutions' },
    { name: 'Payment Links', path: '/solutions' },
    { name: 'Invoicing', path: '/solutions' },
  ],
  Developers: [
    { name: 'Documentation', path: '/solutions' },
    { name: 'API Reference', path: '/solutions' },
    { name: 'SDKs & Libraries', path: '/solutions' },
    { name: 'Webhooks', path: '/solutions' },
    { name: 'Status Page', path: '/solutions' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/about' },
    { name: 'Press', path: '/about' },
    { name: 'Partners', path: '/about' },
  ],
  Resources: [
    { name: 'Pricing', path: '/solutions' },
    { name: 'Help Center', path: '/contact' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/about' },
    { name: 'Terms of Service', path: '/about' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="MetaPE" className="h-10 w-10 rounded-xl object-contain" />
              <span className="text-xl font-extrabold text-white">
                META<span className="text-orange">PE</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The payment infrastructure for the internet. Accept payments, disburse funds, and manage your financial stack.
            </p>
            <div className="flex gap-3">
              {['X', 'Li', 'Gh'].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 text-xs font-bold transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1 text-sm text-white/50 transition-colors duration-300 hover:text-orange"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} MetaPE Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Cookies</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
