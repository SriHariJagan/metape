// FoundersSection.tsx — ported from metaads/src/pages/About.tsx (FoundersSection)
// Adapted for metape: copy references MetaFlow -> the Meta platform, MetaPE navy/blue/teal theme.
import { Reveal, SectionHeading } from "@/components/common";
import {
  UserCheck,
  Rocket,
  Users,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";

const FOUNDERS = [
  {
    name: "Kishore Kodali",
    role: "Founder & CEO",
    image: "/kishore.png",
    initials: "KK",
    bio: "Kishore founded the Meta platform to replace fragmented tools with one connected business platform. He sets product vision, growth strategy, and partnerships so companies can launch a website, admin, payments, and operations without rebuilding from scratch. His focus is simple: clear outcomes for every business that starts on Meta.",
    highlights: [
      {
        icon: Rocket,
        label: "Product Vision",
        desc: "Defines roadmap & category strategy",
      },
      {
        icon: Target,
        label: "Growth Strategy",
        desc: "Scales from 0 → $10M+ ARR",
      },
      {
        icon: UserCheck,
        label: "Partnerships",
        desc: "Builds ecosystem alliances",
      },
    ],
    accent: "#285898",
    accentLight: "#28589815",
    gradient: "linear-gradient(90deg, #5787cf 0%, #183660 100%)",
  },
  {
    name: "Satya Kavipurapu",
    role: "COO",
    image: "/satya.png",
    initials: "SK",
    bio: "Satya runs Meta's day-to-day operations—delivery, support systems, and process quality. He keeps onboarding, module activation, and customer success moving in sync so teams can scale without losing reliability. Customers feel that discipline as faster launches and smoother handoffs.",
    highlights: [
      {
        icon: Shield,
        label: "Operations",
        desc: "Delivery, support & process quality",
      },
      {
        icon: Users,
        label: "Customer Success",
        desc: "Onboarding & activation at scale",
      },
      {
        icon: Sparkles,
        label: "Reliability",
        desc: "Systems that scale without breaking",
      },
    ],
    accent: "#2D867A",
    accentLight: "#2D867A15",
    gradient: "linear-gradient(90deg, #57bfaf 0%, #22655b 100%)",
  },
];

export function FoundersSection() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="founders-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 h-[400px] w-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #285898 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[400px] w-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #38A898 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="founders-heading"
            eyebrow="Founders"
            title="Two operators. One mission."
            description="Built by people who've lived the problem. Kishore and Satya have scaled ad spend from $0 to $1B+ across D2C, SaaS, gaming, and enterprise. They know the chaos — and they built Meta to end it."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <article
                key={founder.name}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-slate-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: founder.gradient }}
                  aria-hidden="true"
                />
                {/* Subtle glow */}
                <div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: founder.gradient }}
                  aria-hidden="true"
                />

                <div className="p-7 sm:p-9 lg:p-10 flex flex-col h-full">
                  {/* Image + Role badge */}
                  <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div
                        className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[1.2rem] overflow-hidden ring-4 ring-white shadow-xl"
                        style={{
                          boxShadow: `0 0 0 1px ${founder.accent}20, 0 20px 40px -12px ${founder.accent}25`,
                        }}
                      >
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Role badge */}
                      <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-lg"
                          style={{ color: founder.accent }}
                        >
                          {founder.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy">
                        {founder.name}
                      </h3>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: founder.accent }}
                      >
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-base leading-relaxed text-slate-600 mb-6 flex-1">
                    {founder.bio}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {founder.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 text-left sm:block sm:text-center"
                      >
                        <div
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:mb-3"
                          style={{ backgroundColor: founder.accentLight }}
                        >
                          <h.icon
                            className="h-5 w-5"
                            style={{ color: founder.accent }}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            {h.label}
                          </p>
                          <p className="text-[11px] font-medium text-slate-700 leading-snug">
                            {h.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Shared philosophy */}
        <Reveal variant="up" delay={300}>
          <div className="mt-16 relative overflow-hidden rounded-[2rem] bg-navy p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple/25 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-teal motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                Shared philosophy
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Clear outcomes. No rebuilding from scratch.
              </h3>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Every feature we ship, every partnership we sign, every decision
                we make comes back to one question: does this give our customers
                a clear, measurable outcome — without forcing them to stitch
                together fragmented tools?
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <UserCheck
                    className="h-4 w-4 text-teal-300"
                    aria-hidden="true"
                  />
                  Outcome-first
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Rocket
                    className="h-4 w-4 text-purple-300"
                    aria-hidden="true"
                  />
                  Ship fast
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Users
                    className="h-4 w-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Customer-obsessed
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
