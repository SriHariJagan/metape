import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 p-12 backdrop-blur-xl md:p-20"
          style={{
            background: `
              linear-gradient(
                115deg,
                #1B356D 0%,
                #263F76 24%,
                #4B477F 42%,
                #69518A 55%,
                #806B7E 66%,
                #597F7E 80%,
                #315F70 100%
              )
            `,
          }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft blue glow */}
            <div
              className="absolute top-0 right-0 h-72 w-72 rounded-full blur-[120px]"
              style={{
                background: "rgba(135, 167, 219, 0.18)",
              }}
            />

            {/* Soft purple glow */}
            <div
              className="absolute bottom-0 left-0 h-64 w-64 rounded-full blur-[100px]"
              style={{
                background: "rgba(135, 87, 183, 0.16)",
              }}
            />

            {/* Soft orange glow */}
            <div
              className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
              style={{
                background: "rgba(230, 161, 92, 0.12)",
              }}
            />

            {/* Soft teal glow */}
            <div
              className="absolute right-1/4 bottom-0 h-56 w-56 rounded-full blur-[110px]"
              style={{
                background: "rgba(87, 191, 175, 0.12)",
              }}
            />

            {/* Subtle dot texture */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Soft glass highlight */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              }}
            />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.04] animate-float" />

          <div className="absolute right-10 bottom-10 h-14 w-14 rounded-full border border-white/10 bg-white/[0.05] animate-float-slow" />

          {/* Main content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-1.5 text-sm text-white/80 shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-orange-300" />
              No setup fees. No hidden charges.
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Start Accepting{" "}
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-teal-200 bg-clip-text text-transparent">
                Payments Today
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/65">
              Transparent pricing at 2.9% + 30¢ per transaction. No monthly
              fees, no setup costs. Cancel anytime.
            </p>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-gradient-to-r from-orange-400 to-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-300 hover:to-orange-400 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.11]"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust text */}
            <p className="mt-8 text-sm text-white/40">
              Trusted by 10,000+ businesses processing $10B+ annually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
