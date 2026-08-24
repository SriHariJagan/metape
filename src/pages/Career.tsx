import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Heart, Rocket, Coffee, GraduationCap, Briefcase, Globe, Sparkles, ChevronRight } from 'lucide-react'

const departments = ['All', 'Engineering', 'Product', 'Security', 'Risk', 'Infrastructure']

const openings = [
  { title: 'Senior Backend Engineer', department: 'Engineering', location: 'Remote / Bangalore', type: 'Full-time', tags: ['Go', 'PostgreSQL', 'gRPC'], hot: true },
  { title: 'Payments Product Manager', department: 'Product', location: 'San Francisco', type: 'Full-time', tags: ['Fintech', 'Strategy', 'Analytics'], hot: false },
  { title: 'Security Engineer', department: 'Security', location: 'Remote', type: 'Full-time', tags: ['PCI DSS', 'Cryptography', 'Pen Testing'], hot: false },
  { title: 'Frontend Engineer', department: 'Engineering', location: 'Remote / Bangalore', type: 'Full-time', tags: ['React', 'TypeScript', 'Tailwind'], hot: true },
  { title: 'Risk & Compliance Lead', department: 'Risk', location: 'London', type: 'Full-time', tags: ['AML', 'KYC', 'Regulation'], hot: false },
  { title: 'DevOps / SRE', department: 'Infrastructure', location: 'Remote', type: 'Full-time', tags: ['Kubernetes', 'Terraform', 'AWS'], hot: false },
]

const perks = [
  { icon: Heart, title: 'Health & Wellness', description: 'Premium medical, dental, vision, and $500/yr wellness stipend', color: 'bg-orange/10 text-orange' },
  { icon: Rocket, title: '$5K Learning Budget', description: 'Annual budget for conferences, courses, certifications, and books', color: 'bg-purple/10 text-purple' },
  { icon: Coffee, title: 'Flexible Hours', description: 'Work when you\'re most productive — async-first culture', color: 'bg-teal/10 text-teal' },
  { icon: GraduationCap, title: 'Mentorship Program', description: '1-on-1 mentorship from fintech industry veterans', color: 'bg-blue/10 text-blue' },
  { icon: Briefcase, title: 'Meaningful Equity', description: 'Stock options so you share in MetaPE\'s growth', color: 'bg-orange/10 text-orange' },
  { icon: Globe, title: 'Remote-First', description: 'Work from anywhere with team offsites in Bali, Dubai, and Tokyo', color: 'bg-purple/10 text-purple' },
]

const cultureStats = [
  { value: '200+', label: 'Team Members', color: 'text-orange' },
  { value: '40+', label: 'Countries', color: 'text-teal' },
  { value: '4.8', label: 'Glassdoor Rating', color: 'text-purple' },
  { value: '92%', label: 'Retention Rate', color: 'text-blue' },
]

export default function Career() {
  const [activeDept, setActiveDept] = useState('All')

  const filtered = activeDept === 'All' ? openings : openings.filter((j) => j.department === activeDept)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-orange/15 blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-purple/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/80 mb-8 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            We're hiring across 6 teams
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.08]">
            Build the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-300 to-teal">Payments</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
            Join a team of world-class engineers, designers, and operators building the payment infrastructure of tomorrow.
          </p>

          {/* Culture Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {cultureStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/[0.04] border border-white/5 backdrop-blur-sm p-5 text-center">
                <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal mb-4">Why MetaPE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6">Perks & Benefits</h2>
            <p className="text-lg text-navy/50">We take care of our team so they can build amazing payment experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="group rounded-2xl bg-white p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-navy/5">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-navy/50 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-sm font-semibold text-purple mb-4">Open Positions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6">Join Our Team</h2>
            <p className="text-lg text-navy/50">Help us build the world's most developer-friendly payment platform</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeDept === d
                    ? 'bg-navy text-white shadow-lg shadow-navy/20'
                    : 'bg-white text-navy/50 hover:bg-navy/5 hover:text-navy border border-navy/10'
                }`}
              >
                {d}
                {d !== 'All' && (
                  <span className={`ml-1.5 text-xs ${activeDept === d ? 'text-white/60' : 'text-navy/30'}`}>
                    {openings.filter((j) => j.department === d).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filtered.map((job) => (
              <div key={job.title} className="group rounded-2xl bg-white p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-transparent hover:border-navy/5">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-navy group-hover:text-orange transition-colors">{job.title}</h3>
                      {job.hot && (
                        <span className="rounded-lg bg-gradient-to-r from-orange to-orange-500 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">Hot</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-navy/50">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span>
                      <span className="h-1 w-1 rounded-full bg-navy/20" />
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span className="h-1 w-1 rounded-full bg-navy/20" />
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-navy/5 px-3 py-1 text-xs font-medium text-navy/60">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="group/btn inline-flex items-center gap-2 rounded-xl bg-navy/5 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5 shrink-0">
                    Apply
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at MetaPE */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange mb-4">Life at MetaPE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">More Than a Workplace</h2>
            <p className="text-lg text-navy/50">We believe great work comes from happy, supported people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: '🏖️', title: 'Team Offsites', desc: 'Quarterly retreats in Bali, Dubai, Tokyo, and more' },
              { emoji: '🎤', title: 'Hackathons', desc: 'Monthly 24-hour innovation sprints with amazing prizes' },
              { emoji: '📚', title: 'Learning Culture', desc: 'Weekly tech talks, book clubs, and skill-sharing sessions' },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl bg-gradient-to-br from-navy to-navy-700 p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-purple/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange/15 blur-[100px]" />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">Don't See Your Role?</h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">We're always looking for exceptional people. Send us your resume and we'll keep you in mind for future openings.</p>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/35 hover:-translate-y-0.5">
            Get in Touch
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
