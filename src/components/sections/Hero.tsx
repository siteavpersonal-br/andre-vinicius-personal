import { heroContent, siteConfig } from "@/data/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background px-6 py-8 lg:px-8 lg:py-12"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">
            Personal Trainer · Resultados Reais
          </p>

          <h1 className="text-5xl font-extrabold leading-none tracking-tighter text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Transforme<br />seu corpo<br />
            <span className="text-accent">com método</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-accent/85 hover:shadow-glow"
            >
              {heroContent.cta} →
            </a>
            <a
              href="#planos"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Ver planos e preços
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-contain"
                poster="/images/hero-poster.svg"
              >
                <source src={`${heroContent.videoSrc}?v=3`} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse at center, transparent 10%, var(--background) 60%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
