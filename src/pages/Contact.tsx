import { SEO } from '@/seo/SEO';
import { useState, useCallback, useRef, useEffect } from "react";
import { Reveal, SectionHeading } from "@/components/common";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { contactService } from "@/services/contactService";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  Send,
  LifeBuoy,
  Handshake,
  UserPlus,
  ChevronDown,
  Building2,
  Globe,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const CONTACT_REASONS = [
  { value: "demo", label: "Request a live demo" },
  { value: "pricing", label: "Pricing & plans" },
  { value: "enterprise", label: "Enterprise / custom deployment" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const PAYMENT_VOLUMES = [
  { value: "under-10k", label: "Under $10k/month" },
  { value: "10k-50k", label: "$10k-$50k/month" },
  { value: "50k-250k", label: "$50k-$250k/month" },
  { value: "250k-1m", label: "$250k-$1M/month" },
  { value: "1m+", label: "$1M+/month" },
  { value: "not-sure", label: "Not sure yet" },
];

const channels = [
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Account & payment help",
    color: "#285898",
    value: "support@metadev.in",
    href: "mailto:support@metadev.in",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Integrations & collaborations",
    color: "#6828A8",
    value: "partnership@metape.in",
    href: "mailto:partnership@metape.in",
  },
  {
    icon: UserPlus,
    title: "Careers",
    desc: "Questions about open roles",
    color: "#38A898",
    value: "careers@metadev.in",
    href: "mailto:careers@metadev.in",
  },
  {
    icon: Phone,
    title: "General",
    desc: "Main contact line",
    color: "#F88828",
    value: "+91 95595 59143",
    href: "tel:+919559559143",
  },
];

const offices = [
  {
    city: "Hyderabad",
    region: "Telangana",
    tag: "HQ",
    color: "#6828A8",
    address: "HITEC City, Madhapur",
  },
  {
    city: "Bengaluru",
    region: "Karnataka",
    tag: "HQ",
    color: "#285898",
    address: "Koramangala, 4th Block",
  },
  {
    city: "Amaravathi",
    region: "Andhra Pradesh",
    tag: "Office",
    color: "#38A898",
    address: "Amaravathi Capital Region",
  },
];

const faqs = [
  {
    q: "How quickly will I get a response?",
    a: "Most inquiries receive a response within 4 business hours. Enterprise and partnership requests are typically addressed within 24 hours by a dedicated specialist.",
  },
  {
    q: "Can I schedule a live demo before committing?",
    a: "Absolutely. We offer free, no-obligation 30-minute demos tailored to your business. Our specialists will walk you through the platform and answer any questions.",
  },
  {
    q: "Do you offer custom enterprise solutions?",
    a: "Yes. We provide custom deployment options, dedicated infrastructure, SLA guarantees, and white-label solutions for enterprise clients processing high payment volumes.",
  },
  {
    q: "What support channels are available?",
    a: "We offer email support, phone support during business hours, and dedicated account managers for enterprise plans. All channels are monitored and responses are guaranteed within committed timelines.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. We offer a 14-day free trial with full platform access. No credit card required. You can upgrade or downgrade at any time during or after the trial.",
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  companySize: string;
  adSpend: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
}

/* ───────────────────────── HERO ───────────────────────── */

function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-navy pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-32 min-h-[85vh] flex items-center"
      aria-labelledby="contact-hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        {/* Floating orbs */}
        <div
          className="absolute top-[15%] left-[10%] h-72 w-72 rounded-full opacity-20 animate-float-slow"
          style={{ background: "radial-gradient(circle, #A855F7 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[60%] right-[8%] h-56 w-56 rounded-full opacity-15 animate-float"
          style={{ background: "radial-gradient(circle, #38A898 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[30%] h-40 w-40 rounded-full opacity-10 animate-float-slow"
          style={{ background: "radial-gradient(circle, #F88828 0%, transparent 60%)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[30%] right-[25%] h-32 w-32 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, #6828A8 0%, transparent 60%)", animationDelay: "4s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            <span className="text-xs font-medium tracking-wide text-teal-300">
              Get in touch
            </span>
          </span>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[0.95]"
          >
            Let's build something{" "}
            <span className="text-gradient">extraordinary</span>
          </h1>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-7 text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
            Whether you're evaluating MetaPE, need enterprise pricing, or have
            questions — our payments specialists are ready to help you succeed.
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact-form" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange to-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5">
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#offices" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5">
              View our offices
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CHANNEL CARDS ───────────────────────── */

function ChannelsSection() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="channels-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="relative -mt-16 sm:-mt-20 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <Reveal key={ch.title} variant="up" delay={i * 80}>
                    <a
                      href={ch.href}
                      className="group relative rounded-2xl bg-white p-6 shadow-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1 gradient-border-solid block"
                    >
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                        style={{
                          backgroundColor: `${ch.color}12`,
                          boxShadow: `0 0 0 0 ${ch.color}00`,
                        }}
                      >
                        <Icon
                          className="h-6 w-6 transition-colors duration-300"
                          style={{ color: ch.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-bold text-navy text-sm">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {ch.desc}
                      </p>
                      <p
                        className="text-xs font-semibold mt-3 truncate transition-colors duration-300"
                        style={{ color: ch.color }}
                      >
                        {ch.value}
                      </p>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── MULTI-STEP FORM ───────────────────────── */

function ContactFormSection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "demo",
    companySize: "",
    adSpend: "not-sure",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const formRef = useRef<HTMLDivElement>(null);

  const steps = [
    { label: "About you", fields: ["name", "email"] },
    { label: "Your company", fields: ["company", "companySize", "adSpend"] },
    { label: "Your message", fields: ["reason", "message"] },
  ];

  const validateStep = useCallback(
    (s: number): boolean => {
      const newErrors: FormErrors = {};
      if (s === 0) {
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
          newErrors.email = "Invalid email format";
      } else if (s === 1) {
        if (!formData.company.trim()) newErrors.company = "Company name is required";
      } else if (s === 2) {
        if (!formData.reason) newErrors.reason = "Please select a reason";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.trim().length < 20)
          newErrors.message = "Please provide more detail (at least 20 characters)";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  const nextStep = () => {
    if (!validateStep(step)) return;
    setSlideDir("left");
    setStep((s) => Math.min(s + 1, 2));
  };

  const prevStep = () => {
    setSlideDir("right");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    setIsSubmitting(true);
    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        companySize: formData.companySize,
        adSpend: formData.adSpend,
        subject: formData.reason,
        message: formData.message,
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section
      id="contact-form"
      className="relative py-16 sm:py-20 lg:py-28 bg-slate-50/80 overflow-hidden"
      aria-labelledby="contact-form-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full opacity-[0.03] bg-purple blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-[0.03] bg-teal blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <Reveal variant="up">
              <SectionHeading
                eyebrow="Contact us"
                title="Start the conversation"
                description="Fill out the form and we'll route you to the right person. Most inquiries get a response within 4 business hours."
                align="left"
              />
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="mt-12 space-y-5">
                {[
                  {
                    icon: Mail,
                    color: "#285898",
                    title: "Email",
                    lines: ["info@metadev.in", "contact@metadev.in", "support@metadev.in"],
                  },
                  {
                    icon: MapPin,
                    color: "#6828A8",
                    title: "Offices",
                    lines: ["Hyderabad, Telangana (HQ)", "Bengaluru, Karnataka (HQ)", "Amaravathi, Andhra Pradesh"],
                  },
                  {
                    icon: Phone,
                    color: "#38A898",
                    title: "Phone",
                    lines: ["+91 95595 59143"],
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div
                        className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy text-sm">{item.title}</h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-sm text-slate-500 mt-0.5">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 shadow-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple to-teal flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">Global presence</h3>
                    <p className="text-xs text-slate-400">3 offices across India</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: o.color }} />
                      <span className="text-sm text-slate-600">
                        {o.city}, {o.region}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 ml-auto">
                        {o.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div ref={formRef}>
            <Reveal variant="up" delay={150}>
              {submitStatus === "success" ? (
                <div className="rounded-3xl bg-white border border-slate-200 p-10 sm:p-14 text-center shadow-card">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal/10 to-purple/10 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-teal" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Message sent!</h2>
                  <p className="mt-3 text-slate-500 max-w-md mx-auto">
                    Thanks for reaching out. Our team will review your message and
                    get back to you soon.
                  </p>
                  <Button
                    variant="brand"
                    className="mt-8"
                    onClick={() => {
                      setSubmitStatus("idle");
                      setStep(0);
                      setFormData({ name: "", email: "", company: "", reason: "demo", companySize: "", adSpend: "not-sure", message: "" });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden">
                  {/* Progress bar */}
                  <div className="px-8 pt-8 pb-0">
                    <div className="flex items-center justify-between mb-3">
                      {steps.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-2">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                              i < step
                                ? "bg-teal text-white"
                                : i === step
                                  ? "bg-gradient-to-r from-purple to-teal text-white shadow-lg shadow-purple/20"
                                  : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {i < step ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              i + 1
                            )}
                          </div>
                          <span
                            className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                              i <= step ? "text-navy" : "text-slate-400"
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple via-teal to-orange rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Form body */}
                  <form onSubmit={handleSubmit} noValidate className="p-8">
                    <div
                      className={`transition-all duration-500 ease-out ${
                        slideDir === "left" ? "animate-[slideInLeft_0.4s_ease-out]" : "animate-[slideInRight_0.4s_ease-out]"
                      }`}
                      key={step}
                    >
                      {step === 0 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-navy mb-1">About you</h3>
                          <p className="text-sm text-slate-400 mb-6">Tell us who you are so we can personalize your experience.</p>
                          <Input
                            label="Full name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            error={errors.name}
                            required
                            placeholder="Priya Sharma"
                            autoComplete="name"
                          />
                          <Input
                            label="Work email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            error={errors.email}
                            required
                            placeholder="priya@company.com"
                            autoComplete="email"
                          />
                        </div>
                      )}

                      {step === 1 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-navy mb-1">Your company</h3>
                          <p className="text-sm text-slate-400 mb-6">Help us understand your business so we can tailor our solution.</p>
                          <Input
                            label="Company"
                            name="company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            error={errors.company}
                            required
                            placeholder="Lumenkart"
                            autoComplete="organization"
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Select
                              label="Company size"
                              name="companySize"
                              value={formData.companySize}
                              onChange={(e) => handleChange("companySize", e.target.value)}
                              options={COMPANY_SIZES}
                              placeholderOption="Select size"
                            />
                            <Select
                              label="Monthly payment volume"
                              name="adSpend"
                              value={formData.adSpend}
                              onChange={(e) => handleChange("adSpend", e.target.value)}
                              options={PAYMENT_VOLUMES}
                              placeholderOption="Select volume"
                            />
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-navy mb-1">Your message</h3>
                          <p className="text-sm text-slate-400 mb-6">What can we help you with?</p>
                          <Select
                            label="How can we help?"
                            name="reason"
                            value={formData.reason}
                            onChange={(e) => handleChange("reason", e.target.value)}
                            options={CONTACT_REASONS}
                            error={errors.reason}
                            required
                          />
                          <Textarea
                            label="Tell us more"
                            name="message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            error={errors.message}
                            required
                            rows={5}
                            placeholder="What challenges are you facing? What outcomes are you looking for?"
                          />
                        </div>
                      )}
                    </div>

                    {submitStatus === "error" && (
                      <p className="mt-4 text-center text-sm text-red-500" role="alert">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy transition-colors duration-200"
                        >
                          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < 2 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy to-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all duration-300 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5"
                        >
                          Continue
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" aria-hidden="true" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <Send className="h-4 w-4 ml-2" aria-hidden="true" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GLOBAL OFFICES ───────────────────────── */

function OfficesSection() {
  return (
    <section
      id="offices"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="offices-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Our offices"
            title="Where we operate"
            description="Headquartered in India's tech hubs, our team spans across multiple cities to serve you better."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, i) => (
            <Reveal key={office.city} variant="up" delay={i * 100}>
              <div className="group relative rounded-2xl bg-white border border-slate-200 p-8 shadow-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1 gradient-border-solid overflow-hidden">
                {/* Decorative pin */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${office.color}12` }}
                    >
                      <Building2
                        className="h-5 w-5"
                        style={{ color: office.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white animate-pulse"
                      style={{ backgroundColor: office.color }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: `${office.color}10`,
                      color: office.color,
                    }}
                  >
                    {office.tag}
                  </span>
                  <h3 className="text-xl font-bold text-navy">{office.city}</h3>
                  <p className="text-sm text-slate-400 mt-1">{office.region}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    {office.address}
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div
                  className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]"
                  style={{ background: `radial-gradient(circle, ${office.color} 0%, transparent 70%)` }}
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 ${
        isOpen
          ? "border-purple/20 bg-white shadow-lg shadow-purple/5"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-card"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold transition-colors duration-300 ${isOpen ? "text-navy" : "text-slate-700"}`}>
          {q}
        </span>
        <div
          className={`ml-4 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? "bg-purple/10 rotate-180" : "bg-slate-100"
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-colors duration-300 ${isOpen ? "text-purple" : "text-slate-400"}`}
            aria-hidden="true"
          />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="px-6 pb-6">
          <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-slate-50/80 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 rounded-full opacity-[0.03] bg-teal blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal variant="up">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Everything you need to know about getting in touch with our team."
              align="left"
            />
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} variant="up" delay={i * 60}>
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Contact() {
  return (
    <>
      <SEO />
      <ContactHero />
      <ChannelsSection />
      <ContactFormSection />
      <OfficesSection />
      <FAQSection />
    </>
  );
}
