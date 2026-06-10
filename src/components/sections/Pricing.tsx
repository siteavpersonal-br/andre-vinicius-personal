import { Check, X } from "lucide-react";

import { pricingPlans, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={cn(
        "relative flex flex-col border p-8 transition-all duration-300",
        plan.highlighted
          ? "border-accent bg-card shadow-glow"
          : "border-white/10 bg-background hover:border-accent/50 hover:shadow-glow"
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          {plan.badge}
        </span>
      )}

      <div className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
          Plano
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight text-white">{plan.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {plan.description}
        </p>
      </div>

      <div className="mb-8 border-b border-white/10 pb-8">
        <span className="text-5xl font-extrabold tracking-tighter text-white">{plan.price}</span>
        <span className="ml-1 text-muted">{plan.period}</span>
      </div>

      <ul className="mb-8 flex flex-1 flex-col divide-y divide-white/5">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3 py-3 text-sm">
            {feature.included ? (
              <Check className="h-4 w-4 shrink-0 text-accent" />
            ) : (
              <X className="h-4 w-4 shrink-0 text-white/20" />
            )}
            <span className={cn(feature.included ? "text-white" : "text-white/30")}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex h-12 w-full items-center justify-center text-sm font-semibold uppercase tracking-wider transition-all duration-200",
          plan.highlighted
            ? "bg-accent text-white hover:bg-accent/85 hover:shadow-glow"
            : "border border-white/20 text-white hover:border-accent hover:text-accent hover:shadow-glow"
        )}
      >
        {plan.ctaLabel} →
      </a>
    </article>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-16 bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
            Planos
          </p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Escolha o plano ideal
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted">
            Investimento transparente, sem taxas escondidas. Comece hoje e evolua no seu ritmo.
          </p>
        </div>

        <div className="grid items-stretch gap-px bg-white/5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
