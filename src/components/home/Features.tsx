import { CreditCard, Shield, Globe, Zap, BarChart3, Code2 } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Accept Payments',
    description: 'Accept cards, UPI, wallets, and 100+ local payment methods with a single integration. Supports 135+ currencies.',
    color: 'from-orange to-orange-600',
    bg: 'bg-orange/5',
    iconBg: 'bg-orange/10',
    iconColor: 'text-orange',
  },
  {
    icon: Shield,
    title: 'Fraud Prevention',
    description: 'AI-powered fraud detection with machine learning models trained on billions of transactions. Block 99.97% of fraudulent attempts.',
    color: 'from-teal to-teal-600',
    bg: 'bg-teal/5',
    iconBg: 'bg-teal/10',
    iconColor: 'text-teal',
  },
  {
    icon: Globe,
    title: 'Global Payouts',
    description: 'Disburse funds to 190+ countries in multiple currencies. Bank transfers, wallets, and card payouts with competitive FX rates.',
    color: 'from-purple to-purple-600',
    bg: 'bg-purple/5',
    iconBg: 'bg-purple/10',
    iconColor: 'text-purple',
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Get access to your funds in real-time with instant settlement. No more waiting 2-3 business days for your money.',
    color: 'from-blue to-blue-600',
    bg: 'bg-blue/5',
    iconBg: 'bg-blue/10',
    iconColor: 'text-blue',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Real-time dashboards, cohort analysis, MRR tracking, and custom reports. Understand your revenue like never before.',
    color: 'from-navy to-navy-600',
    bg: 'bg-navy/5',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
  },
  {
    icon: Code2,
    title: 'Developer First',
    description: 'Beautiful APIs, SDKs for every major language, and comprehensive docs. Go from zero to live in under 15 minutes.',
    color: 'from-teal to-blue',
    bg: 'bg-teal/5',
    iconBg: 'bg-teal/10',
    iconColor: 'text-teal',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-slate-50/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-sm font-semibold text-purple mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6 leading-tight">
            Everything You Need to{' '}
            <span className="text-gradient">Accept Payments</span>
          </h2>
          <p className="text-lg text-navy/50">
            A complete payments platform that replaces your entire financial stack. One API, infinite possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl ${feature.bg} border border-transparent p-8 transition-all duration-500 hover:border-navy/5 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-navy/50 leading-relaxed">{feature.description}</p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
