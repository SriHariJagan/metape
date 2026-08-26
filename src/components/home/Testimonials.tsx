import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Head of Payments, FinLoop',
    quote: "MetaPE's API is the most elegant payments integration I've implemented in 15 years. We went from zero to accepting cards across 8 countries in just one weekend.",
    rating: 5,
    color: 'from-orange to-orange-600',
  },
  {
    name: 'James Mitchell',
    role: 'CTO, ShopStream',
    quote: "Our checkout conversion increased 34% after switching to MetaPE. The smart retry logic and localized payment methods made a massive difference.",
    rating: 5,
    color: 'from-purple to-purple-600',
  },
  {
    name: 'Anika Patel',
    role: 'CFO, CloudBill',
    quote: "The fraud detection alone saved us over $2M in the first quarter. The real-time analytics dashboard gives us complete visibility into our revenue pipeline.",
    rating: 5,
    color: 'from-teal to-teal-600',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6">
            Loved by{' '}
            <span className="text-gradient-warm">Businesses</span>
          </h2>
          <p className="text-lg text-navy/50">
            See why thousands of companies trust MetaPE for their payment infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="group relative rounded-2xl bg-white p-8 shadow-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange text-orange" />
                ))}
              </div>
              <p className="text-navy/70 leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white font-bold`}>
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-navy/50">{t.role}</p>
                </div>
              </div>
              <div className={`absolute top-0 left-0 h-1 w-0 rounded-t-2xl bg-gradient-to-r ${t.color} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
