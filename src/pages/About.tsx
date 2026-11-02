import { SEO } from '@/seo/SEO';
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Lightbulb, Users, Award, Globe, Shield } from 'lucide-react'
import { FoundersSection } from '@/components/sections/about/FoundersSection'

const values = [
  {
    icon: Shield,
    title: 'Trust First',
    description: 'Security is not a feature — it is our foundation. Every line of code is written with your customers\' safety in mind.',
    color: 'bg-orange/10 text-orange',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Your success is our success. We measure ourselves by the businesses we help grow, not by features we ship.',
    color: 'bg-purple/10 text-purple',
  },
  {
    icon: Lightbulb,
    title: 'Relentless Innovation',
    description: 'Payments evolve daily. We stay ahead so you always have the cutting edge at your fingertips.',
    color: 'bg-teal/10 text-teal',
  },
  {
    icon: Users,
    title: 'Developer Love',
    description: 'Beautiful APIs, world-class docs, and a community of 50,000+ developers building with MetaPE.',
    color: 'bg-blue/10 text-blue',
  },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'Started with a simple idea: payments should just work' },
  { year: '2021', title: 'First 100 Merchants', description: 'Rapid adoption by forward-thinking startups' },
  { year: '2022', title: 'Series B — $60M', description: 'Backed by top-tier investors to scale globally' },
  { year: '2023', title: '10,000+ Businesses', description: 'Processing billions across 50+ countries' },
  { year: '2024', title: 'AI Fraud Engine', description: 'Launched ML-powered fraud detection scoring 99.97%' },
  { year: '2025', title: '$10B+ Processed', description: 'Crossed the milestone of total payment volume' },
]

export default function About() {
  return (
    <>
      <SEO />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-purple/20 blur-[100px]" />
          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-teal/15 blur-[80px]" />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80 mb-6">About MetaPE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Building the Payment{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-400">Infrastructure</span>
            <br />for the Internet
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We believe every business deserves access to the same world-class payment technology that powers the largest companies in the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block rounded-full bg-blue/10 px-4 py-1.5 text-sm font-semibold text-blue mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
                From a Frustrated <span className="text-gradient">Developer</span> to Global Platform
              </h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                MetaPE was born from a simple frustration: integrating payments was painfully complex. Our founders spent months wrestling with fragmented payment APIs, inconsistent documentation, and endless compliance headaches.
              </p>
              <p className="text-navy/60 leading-relaxed mb-6">
                We asked ourselves: what if accepting payments was as simple as writing a few lines of code? What if every business — from a solo developer to a Fortune 500 enterprise — could access the same powerful payment infrastructure?
              </p>
              <p className="text-navy/60 leading-relaxed">
                Today, MetaPE processes over $10 billion annually for 10,000+ businesses across 190+ countries. We handle cards, UPI, wallets, bank transfers, and 100+ local payment methods — all through a single, elegant API.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-700 p-1 shadow-2xl">
                <div className="rounded-[22px] bg-navy p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Award, label: 'Processing Volume', value: '$10B+', color: 'text-orange' },
                      { icon: Globe, label: 'Countries', value: '190+', color: 'text-teal' },
                      { icon: Users, label: 'Businesses', value: '10,000+', color: 'text-purple' },
                      { icon: Shield, label: 'Fraud Blocked', value: '$200M+', color: 'text-blue' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl bg-white/5 p-5 text-center">
                        <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                        <p className="text-2xl font-bold text-white">{item.value}</p>
                        <p className="text-xs text-white/50">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-sm font-semibold text-purple mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">What Guides Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${v.color} mb-6`}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-navy/50 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal mb-4">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Our Journey</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy/10 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-sm font-bold text-orange">{m.year}</span>
                  <h3 className="text-xl font-bold text-navy">{m.title}</h3>
                  <p className="text-navy/50 text-sm">{m.description}</p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-orange border-4 border-white shadow-lg -translate-x-1/2 z-10" />
                <div className="md:hidden pl-16">
                  <span className="text-sm font-bold text-orange">{m.year}</span>
                  <h3 className="text-xl font-bold text-navy">{m.title}</h3>
                  <p className="text-navy/50 text-sm">{m.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <FoundersSection />

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Join 10,000+ Businesses</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Start accepting payments in minutes. No setup fees, no monthly charges.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Get Started Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
