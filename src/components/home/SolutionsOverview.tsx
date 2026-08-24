import { Link } from 'react-router-dom'
import { ArrowRight, CreditCard, Repeat, Building2, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: CreditCard,
    title: 'Payment Gateway',
    description: 'Accept online payments with a fully customizable checkout. Supports cards, UPI, wallets, and 100+ methods.',
    gradient: 'from-orange to-orange-600',
    border: 'hover:border-orange/20',
  },
  {
    icon: Repeat,
    title: 'Subscriptions',
    description: 'Manage recurring billing, trials, prorations, and dunning automatically. Perfect for SaaS businesses.',
    gradient: 'from-purple to-purple-600',
    border: 'hover:border-purple/20',
  },
  {
    icon: Building2,
    title: 'Marketplace Payments',
    description: 'Split payments, manage vendor payouts, and handle KYC for multi-party transactions.',
    gradient: 'from-teal to-teal-600',
    border: 'hover:border-teal/20',
  },
  {
    icon: Wallet,
    title: 'Payment Links',
    description: 'Create shareable payment links and invoices without writing a single line of code.',
    gradient: 'from-blue to-blue-600',
    border: 'hover:border-blue/20',
  },
]

export default function SolutionsOverview() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal mb-4">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6 leading-tight">
              One Platform,{' '}
              <span className="text-gradient-teal">Every Payment</span>
            </h2>
            <p className="text-lg text-navy/50 mb-10">
              From simple one-time payments to complex marketplace flows — MetaPE handles it all with elegant simplicity.
            </p>

            <div className="space-y-6">
              {solutions.map((s) => (
                <div key={s.title} className={`group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 ${s.border} hover:bg-slate-50 hover:shadow-lg`}>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{s.title}</h3>
                    <p className="text-navy/50 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/solutions"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-orange"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right - Code + Dashboard Visual */}
          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl shadow-navy/30">
              <div className="rounded-[22px] bg-navy p-6 overflow-hidden">
                {/* Code snippet */}
                <div className="rounded-xl bg-black/30 border border-white/5 overflow-hidden mb-6">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <span className="text-[10px] text-white/20 font-mono ml-2">payment.js</span>
                  </div>
                  <pre className="p-4 text-[13px] font-mono leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-purple">const</span>{' '}
                      <span className="text-teal">metape</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-orange">require</span>
                      <span className="text-white">(</span>
                      <span className="text-teal/80">'@metape/sdk'</span>
                      <span className="text-white">)</span>{'\n\n'}
                      <span className="text-purple">const</span>{' '}
                      <span className="text-white">session</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-purple">await</span>{' '}
                      <span className="text-teal">metape</span>
                      <span className="text-white">.</span>
                      <span className="text-orange">checkout</span>
                      <span className="text-white">.</span>
                      <span className="text-orange">create</span>
                      <span className="text-white">({'{'}</span>{'\n'}
                      {'  '}<span className="text-blue">amount</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-orange">4999</span>
                      <span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-blue">currency</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-teal/80">'usd'</span>
                      <span className="text-white">,</span>{'\n'}
                      {'  '}<span className="text-blue">method</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-teal/80">'card'</span>
                      <span className="text-white">,</span>{'\n'}
                      <span className="text-white">{'}'}</span>
                    </code>
                  </pre>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Success Rate', value: '99.8%', color: 'bg-teal/20 text-teal' },
                    { label: 'Avg Latency', value: '120ms', color: 'bg-purple/20 text-purple' },
                    { label: 'Today', value: '$2.4M', color: 'bg-orange/20 text-orange' },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl ${stat.color} p-3 text-center`}>
                      <p className={`text-lg font-bold ${stat.color.split(' ')[1]}`}>{stat.value}</p>
                      <p className="text-[10px] opacity-70">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Success notification */}
                <div className="rounded-xl bg-teal/10 border border-teal/20 p-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white text-sm">✓</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Payment Successful</p>
                    <p className="text-[11px] text-white/40">Order #48291 — $49.99 charged to •••• 4242</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-5 -right-5 h-28 w-28 rounded-2xl bg-gradient-to-br from-orange to-teal shadow-xl shadow-orange/20 animate-float opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
