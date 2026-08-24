import { useState } from 'react'
import { Mail, Phone, Send, MessageSquare, Headphones, Calendar, ChevronDown, Globe, Building2 } from 'lucide-react'

const contactMethods = [
  { icon: Mail, title: 'Email Us', detail: 'support@metape.com', description: 'Response within 2 hours', color: 'from-orange to-orange-600', bg: 'bg-orange/5', iconBg: 'bg-orange/10 text-orange' },
  { icon: Phone, title: 'Call Us', detail: '+1 (555) 987-6543', description: '24/7 Priority Support', color: 'from-blue to-blue-600', bg: 'bg-blue/5', iconBg: 'bg-blue/10 text-blue' },
  { icon: Building2, title: 'Headquarters', detail: 'San Francisco, CA', description: '123 Market Street, Suite 400', color: 'from-purple to-purple-600', bg: 'bg-purple/5', iconBg: 'bg-purple/10 text-purple' },
  { icon: Globe, title: 'Global Offices', detail: 'London • Bangalore', description: 'Local support worldwide', color: 'from-teal to-teal-600', bg: 'bg-teal/5', iconBg: 'bg-teal/10 text-teal' },
]

const faqs = [
  { q: 'How quickly can I start accepting payments?', a: 'Most businesses go live within 24 hours. Our onboarding process is designed to be fast — just verify your identity, connect your bank, and you are ready to accept payments.' },
  { q: 'What payment methods do you support?', a: 'We support 100+ payment methods including Visa, Mastercard, American Express, UPI, Google Pay, Apple Pay, PayPal, bank transfers, and local payment methods across 190+ countries.' },
  { q: 'Is there a setup fee or monthly charge?', a: 'No setup fees, no monthly charges. We charge a simple per-transaction fee of 2.9% + 30¢. Volume discounts are available for businesses processing over $100K/month.' },
  { q: 'How does settlement work?', a: 'We offer instant settlement — your funds are available in your bank account within minutes, not days. Standard settlement (T+1) is also available at no extra cost.' },
  { q: 'Do you support recurring billing?', a: 'Yes! Our Subscriptions product handles trials, upgrades, prorations, dunning, and revenue recognition. You can manage your entire subscription lifecycle from one dashboard.' },
]

const offices = [
  { city: 'San Francisco', country: 'USA', address: '123 Market Street, Suite 400', flag: '🇺🇸', type: 'HQ' },
  { city: 'London', country: 'United Kingdom', address: '1 Canada Square, Canary Wharf', flag: '🇬🇧', type: 'Europe' },
  { city: 'Bangalore', country: 'India', address: 'Outer Ring Road, Marathahalli', flag: '🇮🇳', type: 'Asia Pacific' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-teal/15 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-orange/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
        <div className="container-custom relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/80 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
            We typically respond within 2 hours
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.08]">
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-400 to-orange">Together</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Whether you're ready to integrate or have questions, our team is here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {contactMethods.map((c) => (
              <div key={c.title} className={`group relative rounded-2xl ${c.bg} border border-transparent p-7 text-center transition-all duration-500 hover:border-navy/5 hover:shadow-xl hover:-translate-y-1`}>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-navy mb-1 text-lg">{c.title}</h3>
                <p className="text-navy font-semibold text-sm mb-1">{c.detail}</p>
                <p className="text-xs text-navy/45">{c.description}</p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />
              </div>
            ))}
          </div>

          {/* Form + Support */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 md:p-10 shadow-card border border-navy/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange to-teal text-white">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-navy">Get in Touch</h2>
                  </div>
                </div>
                <p className="text-navy/50 mb-8 ml-[52px]">Fill out the form and our team will get back to you within 2 hours</p>

                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">First Name</label>
                      <input type="text" placeholder="John" className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Company</label>
                      <input type="text" placeholder="Acme Inc." className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Monthly Volume</label>
                      <select className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all">
                        <option>Select volume</option>
                        <option>Under $10K</option>
                        <option>$10K - $100K</option>
                        <option>$100K - $1M</option>
                        <option>$1M+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">How Can We Help?</label>
                    <textarea rows={4} placeholder="Tell us about your payment needs..." className="w-full rounded-xl border border-navy/10 bg-slate-50/80 px-4 py-3.5 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-0.5">
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Support Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-navy">Other Ways to Reach Us</h3>
                {[
                  { icon: MessageSquare, title: 'Sales Inquiry', description: 'Talk to our sales team about pricing and plans', color: 'bg-orange/10 text-orange' },
                  { icon: Headphones, title: 'Technical Support', description: 'Get help with integration, API issues, or account problems', color: 'bg-purple/10 text-purple' },
                  { icon: Calendar, title: 'Book a Demo', description: 'See MetaPE in action with a personalized walkthrough', color: 'bg-teal/10 text-teal' },
                ].map((s) => (
                  <div key={s.title} className="group rounded-2xl bg-white p-5 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 cursor-pointer border border-transparent hover:border-navy/5">
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-sm mb-0.5 group-hover:text-orange transition-colors">{s.title}</h4>
                        <p className="text-xs text-navy/50">{s.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl bg-navy p-7 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-purple/20 blur-[60px]" />
                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-teal/15 blur-[50px]" />
                <div className="relative">
                  <h4 className="text-lg font-bold text-white mb-2">Need Instant Help?</h4>
                  <p className="text-white/50 text-sm mb-5">Enterprise customers get 24/7 priority support</p>
                  <a href="tel:+15559876543" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <Phone className="h-4 w-4" />
                    Call Priority Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-purple/10 px-4 py-1.5 text-sm font-semibold text-purple mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-navy/50">Quick answers to common questions about MetaPE</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-300 ${openFaq === i ? 'bg-white shadow-xl border-navy/5' : 'bg-white/60 border-transparent hover:bg-white hover:shadow-card'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-bold text-navy">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-navy/40 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                  <p className="px-6 text-sm text-navy/60 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal mb-4">Our Offices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Where We Are</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offices.map((o) => (
              <div key={o.city} className="group relative rounded-2xl bg-white p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center border border-transparent hover:border-navy/5">
                <span className="text-4xl mb-4 block">{o.flag}</span>
                <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-[10px] font-bold text-navy/50 uppercase tracking-wider mb-3">{o.type}</span>
                <h3 className="text-xl font-bold text-navy mb-1">{o.city}</h3>
                <p className="text-sm text-navy/50 mb-3">{o.country}</p>
                <p className="text-xs text-navy/40">{o.address}</p>
                <div className="absolute top-0 left-0 h-1 w-0 rounded-t-2xl bg-gradient-to-r from-orange to-teal transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
