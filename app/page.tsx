import type { FC } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  LightningBolt,
  LineChart,
  Quote,
} from 'lucide-react';

interface Feature {
  id: number;
  name: string;
  description: string;
  icon: FC<{ className?: string }>;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const features: Feature[] = [
  {
    id: 1,
    name: 'Blazing fast by default',
    description:
      'Leverage the power of Next.js 14 App Router, React Server Components, and edge rendering with zero config.',
    icon: LightningBolt,
  },
  {
    id: 2,
    name: 'Production-grade DX',
    description:
      'TypeScript, ESLint, and Tailwind are wired up so you can focus on building instead of setup.',
    icon: Sparkles,
  },
  {
    id: 3,
    name: 'Secure & scalable',
    description:
      'Best-practice patterns that grow with your product and keep your users safe.',
    icon: ShieldCheck,
  },
  {
    id: 4,
    name: 'Analytics-ready',
    description:
      'Structure your app to integrate product analytics, A/B testing, and observability from day one.',
    icon: LineChart,
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'We shipped our MVP in a week instead of a month. The foundation was rock solid from day one.',
    name: 'Alex Carter',
    role: 'Founder',
    company: 'Northwind Labs',
  },
  {
    id: 2,
    quote:
      'The developer experience is phenomenal. Clean architecture, clear patterns, and zero friction.',
    name: 'Jamie Lee',
    role: 'Staff Engineer',
    company: 'Orbit Systems',
  },
];

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Is this template production-ready?',
    answer:
      'Yes. It uses strict TypeScript, accessibility-minded components, and patterns that scale to real products.',
  },
  {
    id: 2,
    question: 'Can I customize the design?',
    answer:
      'Absolutely. The layout is powered by Tailwind CSS, so you can adjust the theme, spacing, and components quickly.',
  },
  {
    id: 3,
    question: 'Does it work well on mobile?',
    answer:
      'The entire page is designed mobile-first with responsive typography, spacing, and touch-friendly hit targets.',
  },
];

const CTA_PRIMARY_CLASS =
  'inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition-all duration-200 hover:bg-sky-400 hover:shadow-sky-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const CTA_SECONDARY_CLASS =
  'inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-3 text-sm md:text-base font-medium text-slate-100 shadow-sm transition-all duration-200 hover:bg-slate-800 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const SectionShell: FC<{
  id?: string;
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, ariaLabel, children, className }) => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={`w-full px-4 sm:px-6 lg:px-8 ${className ?? ''}`}
  >
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

const SectionHeader: FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}> = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignmentClass =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-3 ${alignmentClass}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm sm:text-base text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

const HeroSection: FC = () => {
  return (
    <SectionShell ariaLabel="Hero" className="pt-20 sm:pt-24 lg:pt-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-none text-emerald-200">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
            <span>Next.js 14 • React 18 • TypeScript 5</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
              Build beautiful products
              <span className="block text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text">
                without starting from scratch.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300">
              Aurora is a production-ready Next.js starter that gives you a
              polished homepage, modern tooling, and a scalable architecture in
              minutes instead of days.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#get-started"
              className={CTA_PRIMARY_CLASS}
            >
              Get started in minutes
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href="#features"
              className={CTA_SECONDARY_CLASS}
            >
              Explore the features
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                className="h-4 w-4 text-emerald-400"
                aria-hidden
              />
              <span>No config • No lock‑in</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                className="h-4 w-4 text-emerald-400"
                aria-hidden
              />
              <span>Accessible by design</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                className="h-4 w-4 text-emerald-400"
                aria-hidden
              />
              <span>Mobile-first layout</span>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-emerald-400/20 blur-2xl" />
          <div className="relative space-y-4 rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Deploy-ready
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Next.js App Router
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-500/40">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Ship faster
              </span>
            </div>

            <div className="space-y-3 rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
              <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
                <span>Performance</span>
                <span className="text-sky-300">99</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[92%] bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>Accessible components</span>
                <span className="text-emerald-300">WCAG AA</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
                <p className="mb-1 text-[11px] text-slate-400">Stack</p>
                <p className="font-medium text-slate-50">Next 14</p>
                <p className="text-[11px] text-slate-400">App Router • RSC</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
                <p className="mb-1 text-[11px] text-slate-400">Styling</p>
                <p className="font-medium text-slate-50">Tailwind</p>
                <p className="text-[11px] text-slate-400">Tokens • Utility</p>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-3 ring-1 ring-slate-800/80">
                <p className="mb-1 text-[11px] text-slate-400">Safety</p>
                <p className="font-medium text-slate-50">TypeScript</p>
                <p className="text-[11px] text-slate-400">Strict by default</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

const FeaturesSection: FC = () => {
  return (
    <SectionShell
      id="features"
      ariaLabel="Key features"
      className="pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="space-y-12">
        <SectionHeader
          eyebrow="Why Aurora"
          title="A starter that feels like a finished product."
          subtitle="Beautiful defaults, smart architecture, and everything you need to ship a polished experience from day one."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="group relative flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 shadow-sm transition-all duration-200 hover:border-sky-500/60 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-sky-900/40 focus-within:border-sky-500/70 focus-within:shadow-lg focus-within:shadow-sky-900/40"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/40">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {feature.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
};

const TestimonialsSection: FC = () => {
  return (
    <SectionShell
      ariaLabel="Testimonials"
      className="pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Teams that move fast"
            title="Loved by founders & engineers who ship."
            subtitle="Use this layout as your foundation and focus on what matters most—your product."
            align="left"
          />
          <ul className="flex flex-wrap gap-3 text-xs text-slate-400">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1">
              <CheckCircle2
                className="h-3.5 w-3.5 text-emerald-400"
                aria-hidden
              />
              <span>Zero-config setup</span>
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1">
              <CheckCircle2
                className="h-3.5 w-3.5 text-emerald-400"
                aria-hidden
              />
              <span>Production best practices</span>
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1">
              <CheckCircle2
                className="h-3.5 w-3.5 text-emerald-400"
                aria-hidden
              />
              <span>Fully responsive</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5 shadow-md shadow-slate-950/60"
            >
              <Quote
                className="absolute -top-4 -left-2 h-10 w-10 text-sky-500/15"
                aria-hidden
              />
              <blockquote className="relative text-sm sm:text-base text-slate-200">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 flex flex-col text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-100">{item.name}</p>
                  <p>
                    {item.role} • {item.company}
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700/80 sm:mt-0">
                  Verified launch
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

const FaqSection: FC = () => {
  return (
    <SectionShell
      ariaLabel="Frequently asked questions"
      className="pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="space-y-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers to common questions."
          subtitle="Everything you need to know to start customizing this homepage for your own product."
        />
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4"
            >
              <dt className="text-sm font-medium text-slate-100">
                {faq.question}
              </dt>
              <dd className="mt-2 text-xs sm:text-sm text-slate-300">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
};

const FinalCTASection: FC = () => {
  return (
    <SectionShell
      id="get-started"
      ariaLabel="Get started"
      className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-600/30 via-cyan-500/20 to-emerald-500/25 p-1 shadow-[0_18px_45px_rgba(8,47,73,0.75)]">
        <div className="relative flex flex-col gap-6 rounded-2xl bg-slate-950/95 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              You&apos;re one command away
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
              Drop this homepage into your project and start shipping today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Copy the code, tailor the copy, and wire it up to your product in
              minutes. No design skills required.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href="#top" className={CTA_PRIMARY_CLASS}>
              Use this as your homepage
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a href="#features" className={CTA_SECONDARY_CLASS}>
              View all sections
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

const Home: FC = () => {
  return (
    <main
      id="top"
      className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.12),transparent_55%),linear-gradient(to_bottom,_#020617,_#020617)]"
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      <header className="sticky top-0 z-20 border-b border-slate-900/80 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-2 py-1"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-slate-950 text-xs font-black">
              A
            </span>
            <span className="hidden sm:inline">Aurora</span>
            <span className="hidden text-xs font-normal text-slate-400 sm:inline">
              Next.js Starter
            </span>
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-4 text-xs sm:text-sm"
          >
            <a
              href="#features"
              className="text-slate-300 transition-colors hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full px-2 py-1"
            >
              Features
            </a>
            <a
              href="#get-started"
              className="hidden rounded-full border border-slate-700/80 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition-all hover:bg-slate-800 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:inline-flex"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTASection />
      </div>

      <footer className="border-t border-slate-900/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Aurora Starter. All rights reserved.</p>
          <p className="text-[11px]">
            Built with Next.js, React, and Tailwind CSS. Customize this footer
            for your own product.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;