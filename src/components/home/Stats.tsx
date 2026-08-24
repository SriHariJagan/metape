import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 10, suffix: 'B+', label: 'Transactions Processed', color: 'text-orange', prefix: '$' },
  { number: 10000, suffix: '+', label: 'Businesses Worldwide', color: 'text-teal' },
  { number: 99.99, suffix: '%', label: 'Uptime SLA', color: 'text-purple', decimals: 2 },
  { number: 190, suffix: '+', label: 'Countries Supported', color: 'text-blue' },
]

function AnimatedCounter({ end, decimals = 0, suffix, prefix = '' }: { end: number; decimals?: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = end / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-extrabold text-white mb-2">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-purple/20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-teal/15 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[60px]" />
      </div>

      <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Powering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-400">
              Global Commerce
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The numbers behind the platform trusted by businesses of every size
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="relative inline-block">
                <AnimatedCounter end={stat.number} decimals={stat.decimals} suffix={stat.suffix} prefix={stat.prefix} />
                <div className={`absolute -bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-full ${stat.color.replace('text-', 'bg-')}`} />
              </div>
              <p className="text-white/50 text-sm md:text-base mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
