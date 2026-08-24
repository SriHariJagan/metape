const partners = [
  { name: 'Visa', color: '#1A1F71' },
  { name: 'Mastercard', color: '#EB001B' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'PayPal', color: '#003087' },
  { name: 'Razorpay', color: '#3395FF' },
  { name: 'Square', color: '#1A1A1A' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-16 bg-white border-b border-navy/5">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-navy/40 uppercase tracking-widest mb-10">
          Integrated with the world&apos;s leading payment networks
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center gap-2 opacity-30 hover:opacity-70 transition-all duration-500 cursor-default">
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  style={{ backgroundColor: p.color }}
                >
                  {p.name[0]}
                </div>
                <span className="text-lg font-bold text-navy">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
