import { Link } from 'react-router-dom'
import { Reveal, SectionHeading } from '@/components/common'
import { Button } from '@/components/ui/Button'
import { getUsefulFor, getProductById } from '@/data/ecosystem'
import { ArrowUpRight, Sparkles, Zap, Shield, Boxes } from 'lucide-react'

interface EcosystemSectionProps {
  currentId?: string
}

export function EcosystemSection({ currentId = 'metape' }: EcosystemSectionProps) {
  const current = getProductById(currentId) ?? getProductById('metape')!
  const companions = getUsefulFor(currentId)
  const CurrentIcon = current.icon

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="ecosystem-heading">
      {/* Premium ambient layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue/[0.07] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal/[0.05] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="absolute left-1/2 top-[52%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Meta ecosystem"
            title="MetaPE,"
            highlight="plugged into everything"
            description={`MetaPE shines alone. With ${companions.length} companion products connected, it becomes your payment layer of record — from first click to settled funds. Only the integrations that actually improve conversion and cash flow are shown.`}
            align="center"
          />
        </Reveal>

        {/* Stats ribbon */}
        <Reveal variant="up" delay={80}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/15 bg-blue/5 px-3 py-1 font-medium text-blue">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Native APIs
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-navy/5 px-3 py-1 font-medium text-navy">
              <Shield className="h-3.5 w-3.5" aria-hidden="true" /> SOC 2 & GDPR ready
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/10 px-3 py-1 font-medium text-teal">
              <Boxes className="h-3.5 w-3.5" aria-hidden="true" /> Plug in &lt; 1 day
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1.85fr] lg:items-start lg:gap-8">
          {/* Highlighted current product — premium glass card */}
          <Reveal variant="up" delay={120}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 lg:sticky lg:top-24 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-slate-300">
              {/* top brand hairline */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-gradient opacity-90" aria-hidden="true" />
              {/* soft glow behind icon */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-gradient opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.13]" aria-hidden="true" />
              <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-purple/10 blur-2xl opacity-60" aria-hidden="true" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" /> Spotlight
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-[1.4rem] bg-brand-gradient text-white shadow-[0_12px_24px_rgba(104,40,168,0.25)] ring-1 ring-white/10">
                    <CurrentIcon className="h-8 w-8" aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-purple shadow">●</span>
                  </div>
                  <div>
                    <h3 className="text-[1.7rem] font-bold leading-none tracking-tight text-navy">{current.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-purple">{current.subtitle}</p>
                    <p className="mt-1 text-xs text-slate-400">Active • Powering 10,000+ checkouts</p>
                  </div>
                </div>

                <p className="mt-5 text-[15px] font-medium leading-relaxed text-slate-700">{current.description}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">{current.benefitForMetaPE}</p>

                {/* metrics */}
                <div className="mt-7 grid grid-cols-3 divide-x divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/80">
                  {[
                    { k: 'Checkout', v: '1-click', sub: 'Convert' },
                    { k: 'Uptime', v: '99.9%', sub: 'Auth rate' },
                    { k: 'Setup', v: '<48h', sub: 'Go live' },
                  ].map((s) => (
                    <div key={s.k} className="px-3 py-4 text-center">
                      <p className="text-xl font-bold tracking-tight text-navy">{s.v}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.k}</p>
                      <p className="mt-0.5 text-[11px] text-slate-400">{s.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {current.external ? (
                    <a
                      href={current.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black hover:shadow-md"
                    >
                      Open {current.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Button variant="brand" to="/contact" size="sm" className="rounded-full px-6">
                      Start with {current.name}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  )}
                  <Button variant="secondary" to="/solutions" size="sm" className="rounded-full">
                    View solutions
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Companion products — more tactile cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {companions.map((product, idx) => {
              const Icon = product.icon
              return (
                <Reveal key={product.id} variant="up" delay={140 + idx * 70}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple/30 hover:shadow-[0_16px_40px_rgba(104,40,168,0.10)]">
                    {/* top accent */}
                    <div className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, ${product.accent}, transparent)` }} aria-hidden="true" />
                    {/* subtle icon glow */}
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundColor: `${product.accent}14` }} aria-hidden="true" />

                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-transform duration-300 group-hover:scale-[1.05] group-hover:rotate-[1deg]" style={{ backgroundColor: `${product.accent}10` }}>
                        <Icon className="h-6 w-6" style={{ color: product.accent }} aria-hidden="true" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal ring-1 ring-teal/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" /> Live integration
                      </span>
                    </div>

                    <h4 className="relative mt-5 text-[1.05rem] font-bold tracking-tight text-navy">{product.name}</h4>
                    <p className="text-xs font-semibold" style={{ color: product.accent }}>
                      {product.subtitle}
                    </p>
                    <p className="relative mt-3 text-[13.5px] font-medium leading-relaxed text-slate-600">{product.benefitForMetaPE}</p>

                    <div className="relative mt-4 flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-500 ring-1 ring-slate-100">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: product.accent }} aria-hidden="true" />
                      Native API + webhooks • No custom dev
                    </div>

                    <div className="relative mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                      {product.external ? (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold tracking-tight hover:gap-2 transition-all"
                          style={{ color: product.accent }}
                        >
                          Explore {product.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link to={product.href} className="inline-flex items-center gap-1.5 text-sm font-bold tracking-tight hover:gap-2 transition-all" style={{ color: product.accent }}>
                          Explore {product.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Elegant closing — no dev hints, just a premium CTA */}
        <Reveal variant="up" delay={320}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-navy p-7 sm:p-9 lg:p-10">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple/25 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" /> Ecosystem stays in sync
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Your stack, connected in one click</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  Connect MetaPE to the products you already use. Sales, verification, billing and inventory flow back into one dashboard — so every transaction is accounted for.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button variant="brand" to="/contact" size="lg" className="rounded-full">
                  Talk to an expert
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button variant="light-outline" to="/about" size="lg" className="rounded-full border-white/20 text-white hover:bg-white hover:text-navy">
                  About Meta
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
