import { Link } from 'react-router-dom'
import { ArrowRight, Play, CreditCard, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Deep background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        {/* Large orbs */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-purple/20 blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-orange/10 blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-[8%] h-24 w-24 rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm animate-float rotate-12" />
      <div className="absolute top-52 right-[12%] h-16 w-16 rounded-full border border-orange/20 bg-orange/10 backdrop-blur-sm animate-float-slow" />
      <div className="absolute bottom-40 left-[20%] h-20 w-20 rounded-2xl border border-teal/15 bg-teal/10 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-52 right-[25%] h-14 w-14 rounded-xl border border-purple/20 bg-purple/10 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[45%] left-[5%] h-8 w-8 rounded-lg border border-blue/20 bg-blue/10 backdrop-blur-sm animate-float" style={{ animationDelay: '3s' }} />

      <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm text-white/80 backdrop-blur-sm mb-8 shadow-lg shadow-black/10">
              <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span>Trusted by 10,000+ businesses across 50 countries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold text-white leading-[1.08] tracking-tight mb-8">
              Payments{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-300 to-teal">
                  Infrastructure
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-orange/20 to-teal/20 rounded-full blur-[2px]" />
              </span>
              <br />
              for the Internet
            </h1>

            <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
              Accept payments, disburse funds, and manage your entire financial stack with a single powerful API. Built for developers, loved by businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/40 hover:-translate-y-0.5"
              >
                Start Accepting Payments
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {[
                { icon: Shield, text: 'PCI DSS Level 1' },
                { icon: Zap, text: '99.99% Uptime' },
                { icon: CreditCard, text: '135+ Currencies' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-white/40">
                  <item.icon className="h-4 w-4 text-teal" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Payment Dashboard Visual */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl shadow-2xl shadow-black/20">
              <div className="rounded-[22px] bg-navy/90 border border-white/5 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <div className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs text-white/30 font-mono">dashboard.metape.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange to-teal" />
                  </div>
                </div>

                {/* Revenue section */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Total Volume</p>
                    <span className="flex items-center gap-1 rounded-lg bg-teal/15 px-2 py-0.5 text-[11px] font-bold text-teal">
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M3 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      +32.4%
                    </span>
                  </div>
                  <p className="text-4xl font-extrabold text-white tracking-tight">$48,294,102</p>
                  <p className="text-xs text-white/30 mt-1">vs $36,482,901 last month</p>
                </div>

                {/* Chart area */}
                <div className="px-6 pb-4">
                  <div className="relative h-40 overflow-hidden rounded-xl bg-white/[0.03] border border-white/5">
                    <svg viewBox="0 0 500 160" className="h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F88828" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#F88828" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#6828A8" />
                          <stop offset="50%" stopColor="#F88828" />
                          <stop offset="100%" stopColor="#38A898" />
                        </linearGradient>
                      </defs>
                      <path d="M0 130 Q40 120 80 105 T160 90 T240 65 T320 50 T400 35 T500 15 V160 H0Z" fill="url(#areaGrad)" />
                      <path d="M0 130 Q40 120 80 105 T160 90 T240 65 T320 50 T400 35 T500 15" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="160" cy="90" r="4" fill="#6828A8" />
                      <circle cx="320" cy="50" r="4" fill="#F88828" />
                      <circle cx="500" cy="15" r="5" fill="#38A898" stroke="#38A898" strokeWidth="2" strokeOpacity="0.3" />
                    </svg>
                  </div>
                </div>

                {/* Transaction rows */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Recent Transactions</p>
                    <span className="text-[11px] text-orange font-medium cursor-pointer hover:text-orange/80">View All</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Apple Store', amount: '+$2,450.00', status: 'Completed', color: 'text-teal', icon: 'A' },
                      { name: 'Google Cloud', amount: '+$890.00', status: 'Completed', color: 'text-teal', icon: 'G' },
                      { name: 'Stripe Refund', amount: '-$120.00', status: 'Refunded', color: 'text-orange', icon: 'S' },
                      { name: 'AWS Services', amount: '+$3,210.00', status: 'Completed', color: 'text-teal', icon: 'A' },
                    ].map((tx) => (
                      <div key={tx.name} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white">
                          {tx.icon}
                        </div>
                        <span className="flex-1 text-sm text-white/70">{tx.name}</span>
                        <span className="text-xs text-white/30">{tx.status}</span>
                        <span className={`text-sm font-bold ${tx.color}`}>{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-8 rounded-2xl border border-white/10 bg-navy/90 p-4 backdrop-blur-xl shadow-xl shadow-black/20 animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-600 text-white shadow-lg shadow-teal/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <p className="text-[11px] text-white/40">Settlement Speed</p>
                  <p className="text-sm font-bold text-white">T+0 Instant</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-6 rounded-2xl border border-white/10 bg-navy/90 p-4 backdrop-blur-xl shadow-xl shadow-black/20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange to-orange-600 text-white shadow-lg shadow-orange/20">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] text-white/40">Fraud Detection</p>
                  <p className="text-sm font-bold text-white">99.97% Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
