import Image from "next/image";

import { aboutContent } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-32 bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
            {aboutContent.title}
          </p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            {aboutContent.subtitle}
          </h2>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="group relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden border border-white/10 bg-card transition-all duration-300 hover:shadow-glow">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={aboutContent.profileImage}
                  alt="André Vinícius - Personal Trainer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold tracking-tight text-white">André Vinícius</p>
                  <p className="text-sm text-accent">CREF · Personal Trainer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              {aboutContent.bio}
            </p>

            <div className="border border-white/10 bg-card p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                Método de trabalho
              </p>
              <p className="leading-relaxed text-white">{aboutContent.method}</p>
            </div>

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
                Certificações
              </p>
              <ul className="divide-y divide-white/5">
                {aboutContent.certifications.map((cert, i) => (
                  <li
                    key={cert.name}
                    className="flex items-start justify-between gap-4 py-4"
                  >
                    <span className="text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{cert.name}</p>
                      <p className="text-sm text-muted">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
