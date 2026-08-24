import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-12 md:p-20">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-purple/30 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal/20 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/15 blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="absolute top-10 left-10 h-20 w-20 rounded-2xl border border-white/10 bg-white/5 animate-float" />
          <div className="absolute bottom-10 right-10 h-14 w-14 rounded-full border border-orange/20 bg-orange/10 animate-float-slow" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-8">
              <Sparkles className="h-4 w-4 text-orange" />
              No setup fees. No hidden charges.
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Start Accepting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-300 to-teal">
                Payments Today
              </span>
            </h2>

            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Transparent pricing at 2.9% + 30¢ per transaction. No monthly fees, no setup costs. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/40 hover:-translate-y-0.5"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/40">
              Trusted by 10,000+ businesses processing $10B+ annually
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
