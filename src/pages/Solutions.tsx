import { Link } from 'react-router-dom'
import { ArrowRight, CreditCard, Repeat, Building2, Wallet, Shield, Globe, Zap, BarChart3, Code2, Lock, Settings, Check, ArrowUpRight } from 'lucide-react'

const steps = [
  { step: '01', title: 'Integrate', description: 'Add our SDK with just a few lines of code', color: 'text-orange', bg: 'bg-orange/10' },
  { step: '02', title: 'Configure', description: 'Set up payment methods, currencies, and rules', color: 'text-purple', bg: 'bg-purple/10' },
  { step: '03', title: 'Accept', description: 'Go live and start accepting payments globally', color: 'text-teal', bg: 'bg-teal/10' },
]

const mainSolutions = [
  {
    icon: CreditCard,
    title: 'Payment Gateway',
    tagline: 'Accept payments anywhere',
    description: 'A fully customizable checkout that supports cards, UPI, wallets, and 100+ local payment methods across 190+ countries.',
    features: ['135+ currencies supported', 'Smart retry logic for failed payments', '3D Secure 2.0 built-in', 'Real-time fraud filtering'],
    gradient: 'from-orange to-orange-600',
    bg: 'bg-gradient-to-br from-orange/5 to-orange/10',
    borderColor: 'border-orange/10 hover:border-orange/30',
    visual: 'gateway',
  },
  {
    icon: Repeat,
    title: 'Subscriptions & Billing',
    tagline: 'Recurring revenue on autopilot',
    description: 'Manage the entire subscription lifecycle — trials, upgrades, prorations, dunning, and revenue recognition in one powerful dashboard.',
    features: ['Flexible billing cycles', 'Smart dunning & auto-retry', 'Trial management & conversions', 'MRR & churn analytics'],
    gradient: 'from-purple to-purple-600',
    bg: 'bg-gradient-to-br from-purple/5 to-purple/10',
    borderColor: 'border-purple/10 hover:border-purple/30',
    visual: 'subscriptions',
  },
  {
    icon: Building2,
    title: 'Marketplace Payments',
    tagline: 'Multi-party payments simplified',
    description: 'Power your marketplace with split payments, vendor onboarding, KYC verification, and automated payouts — all compliant out of the box.',
    features: ['Configurable split payments', 'Automated vendor KYC', 'Escrow & hold logic', 'Instant multi-party payouts'],
    gradient: 'from-teal to-teal-600',
    bg: 'bg-gradient-to-br from-teal/5 to-teal/10',
    borderColor: 'border-teal/10 hover:border-teal/30',
    visual: 'marketplace',
  },
  {
    icon: Wallet,
    title: 'Payment Links & Invoices',
    tagline: 'No code? No problem.',
    description: 'Accept payments without a website. Create shareable links, branded invoices, and QR codes in seconds. Perfect for social sellers.',
    features: ['No developer needed', 'Custom branded templates', 'Multi-use & single-use links', 'Automatic payment reminders'],
    gradient: 'from-blue to-blue-600',
    bg: 'bg-gradient-to-br from-blue/5 to-blue/10',
    borderColor: 'border-blue/10 hover:border-blue/30',
    visual: 'links',
  },
]

const capabilities = [
  { icon: Shield, title: 'PCI DSS Level 1', description: 'Highest level of payment security certification' },
  { icon: Globe, title: '190+ Countries', description: 'Accept and send payments globally' },
  { icon: Zap, title: 'Instant Settlement', description: 'Access funds in real-time, not days' },
  { icon: Code2, title: 'Developer APIs', description: 'RESTful APIs with SDKs in 7+ languages' },
  { icon: BarChart3, title: 'Revenue Analytics', description: 'Real-time dashboards and custom reports' },
  { icon: Lock, title: '3D Secure 2.0', description: 'Strong customer authentication built-in' },
  { icon: Settings, title: 'Smart Routing', description: 'Optimize acceptance rates across processors' },
  { icon: Repeat, title: 'Auto-Recovery', description: 'Intelligent retry logic for failed payments' },
]

function SolutionVisual({ type }: { type: string }) {
  if (type === 'gateway') {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl shadow-navy/30">
        <div className="rounded-[22px] bg-navy p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>
            <span className="text-[10px] text-white/20 font-mono ml-2">checkout.metape.com/pay</span>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-white">Pay to Acme Store</span>
              <span className="text-xl font-extrabold text-orange">$49.99</span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/50">Card Number •••• •••• •••• 4242</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/50">12/28</div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/50">•••</div>
              </div>
            </div>
            <div className="w-full rounded-lg bg-gradient-to-r from-orange to-orange-500 py-3 text-center text-sm font-bold text-white shadow-lg shadow-orange/20">Pay Now</div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/5">
            {['VISA', 'MC', 'UPI', 'GPay'].map((m) => (
              <span key={m} className="text-[10px] text-white/20 font-mono bg-white/5 px-2 py-1 rounded">{m}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'subscriptions') {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl shadow-navy/30">
        <div className="rounded-[22px] bg-navy p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-white/40">Monthly Recurring Revenue</p>
              <p className="text-2xl font-extrabold text-white">$124,892</p>
            </div>
            <span className="rounded-lg bg-teal/15 px-2.5 py-1 text-[11px] font-bold text-teal">+18.2%</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Active subs', value: '2,847', color: 'bg-purple/15 text-purple' },
              { label: 'Trial conv.', value: '34%', color: 'bg-orange/15 text-orange' },
              { label: 'Churn', value: '1.2%', color: 'bg-teal/15 text-teal' },
            ].map((s) => (
              <div key={s.label} className={`rounded-lg ${s.color} p-2.5 text-center`}>
                <p className={`text-sm font-bold ${s.color.split(' ')[1]}`}>{s.value}</p>
                <p className="text-[9px] opacity-60">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 space-y-2.5">
            <p className="text-[10px] text-white/30 uppercase tracking-wider font-semibold">Recent Subscriptions</p>
            {[
              { name: 'Pro Plan', customer: 'john@co.com', amount: '$99/mo', status: 'Active', sc: 'text-teal' },
              { name: 'Enterprise', customer: 'sara@inc.com', amount: '$499/mo', status: 'Active', sc: 'text-teal' },
              { name: 'Starter', customer: 'dev@startup.io', amount: '$29/mo', status: 'Trial', sc: 'text-orange' },
            ].map((sub) => (
              <div key={sub.name} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-bold">{sub.customer[0].toUpperCase()}</div>
                <span className="flex-1 text-[11px] text-white/60 truncate">{sub.customer}</span>
                <span className="text-[10px] text-white/30">{sub.name}</span>
                <span className={`text-[10px] font-semibold ${sub.sc}`}>{sub.status}</span>
                <span className="text-[11px] font-bold text-white">{sub.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'marketplace') {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl shadow-navy/30">
        <div className="rounded-[22px] bg-navy p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>
            <span className="text-[10px] text-white/20 font-mono ml-2">marketplace.config</span>
          </div>
          <pre className="rounded-xl bg-black/30 border border-white/5 p-4 text-[11px] font-mono leading-relaxed mb-4 overflow-x-auto">
            <code>
              <span className="text-purple">const</span> <span className="text-teal">split</span> = <span className="text-white">{'{'}</span>{'\n'}
              {'  '}<span className="text-blue">platform_fee</span>: <span className="text-orange">10</span><span className="text-white">%</span>,{'\n'}
              {'  '}<span className="text-blue">vendor_share</span>: <span className="text-orange">85</span><span className="text-white">%</span>,{'\n'}
              {'  '}<span className="text-blue">referral_share</span>: <span className="text-orange">5</span><span className="text-white">%</span>,{'\n'}
              <span className="text-white">{'}'}</span>
            </code>
          </pre>
          <div className="grid grid-cols-2 gap-3">
            {[
              { vendor: 'Vendor A', amount: '$4,250', fee: '-$425', payout: '$3,825' },
              { vendor: 'Vendor B', amount: '$2,180', fee: '-$218', payout: '$1,962' },
            ].map((v) => (
              <div key={v.vendor} className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                <p className="text-[10px] text-white/30 mb-2">{v.vendor}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]"><span className="text-white/40">Order</span><span className="text-white/70">{v.amount}</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-white/40">Fee</span><span className="text-orange">{v.fee}</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-white/40">Payout</span><span className="text-teal font-bold">{v.payout}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Payment Links
  return (
    <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl shadow-navy/30">
      <div className="rounded-[22px] bg-navy p-6 overflow-hidden">
        <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue to-blue-600 flex items-center justify-center text-white"><Wallet className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-white">Payment Link</p>
              <p className="text-[10px] text-white/30">link.metape.com/pay/4xK9m</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[11px] text-white/40 font-mono truncate">https://metape.link/4xK9mN2pQ</span>
            <button className="rounded-lg bg-orange/20 px-3 py-2 text-[11px] font-bold text-orange">Copy</button>
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { name: 'Wireless Headphones', amount: '$79.00', paid: true },
            { name: 'Premium Membership', amount: '$19.99/mo', paid: true },
            { name: 'Custom Design Work', amount: '$350.00', paid: false },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2.5">
              <div className={`h-2 w-2 rounded-full ${item.paid ? 'bg-teal' : 'bg-white/20'}`} />
              <span className="flex-1 text-[11px] text-white/60">{item.name}</span>
              <span className="text-[11px] font-bold text-white">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple/15 blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-teal/10 blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-orange/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/80 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
            Products & Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-[1.08]">
            Payment Products for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-300 to-teal">
              Every Business
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you're a startup accepting your first payment or an enterprise processing billions, MetaPE has the tools to power your growth.
          </p>

          {/* How it works steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.step} className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} text-lg font-extrabold ${s.color} mb-2`}>{s.step}</div>
                  <p className="text-sm font-bold text-white">{s.title}</p>
                  <p className="text-[11px] text-white/40 max-w-[120px]">{s.description}</p>
                </div>
                {i < steps.length - 1 && <div className="hidden md:block h-px w-24 bg-gradient-to-r from-white/20 to-transparent mt-[-24px]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solutions with Rich Visuals */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {mainSolutions.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-xl mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                  <s.icon className="h-8 w-8" />
                </div>
                <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${s.gradient.split(' ')[0].replace('from-', 'text-')}`}>{s.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{s.title}</h2>
                <p className="text-navy/60 leading-relaxed mb-8 text-lg">{s.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-navy/70">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10">
                        <Check className="h-3 w-3 text-teal" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5">
                    View Docs
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
              {/* Visual */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <SolutionVisual type={s.visual} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange mb-4">Capabilities</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6">Enterprise-Grade Infrastructure</h2>
            <p className="text-lg text-navy/50">Built for scale, security, and reliability at the highest level</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="group rounded-2xl bg-white p-6 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-navy/5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy/40 mb-4 transition-all duration-300 group-hover:bg-orange/10 group-hover:text-orange group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-navy mb-2">{c.title}</h3>
                <p className="text-sm text-navy/50">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-purple/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal/15 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[80px]" />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">Ready to Start?</h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">Join 10,000+ businesses already using MetaPE for their payment infrastructure. No setup fees. No hidden charges.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/35 hover:-translate-y-0.5">
              Start Free Trial <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
