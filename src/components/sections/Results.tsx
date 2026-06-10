import Image from "next/image";

import { results } from "@/data/content";

export function Results() {
  return (
    <section id="resultados" className="scroll-mt-16 bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
            Prova social
          </p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Resultados dos alunos
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted">
            Transformações reais de quem confiou no método. Consistência, treino
            inteligente e acompanhamento de perto.
          </p>
        </div>

        <div className="grid gap-px bg-white/5 sm:grid-cols-2 xl:grid-cols-4">
          {results.map((result) => (
            <article
              key={result.id}
              className="group bg-background transition-all duration-300 hover:shadow-glow"
            >
              <div className="grid grid-cols-2 gap-px bg-white/5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={result.beforeImage}
                    alt={`${result.studentName} - Antes`}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute left-3 top-3 bg-black/70 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Antes
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={result.afterImage}
                    alt={`${result.studentName} - Depois`}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Depois
                  </span>
                </div>
              </div>

              <div className="border-b border-white/10 px-4 py-5">
                <p className="font-semibold text-white">{result.studentName}</p>
                <p className="text-sm text-muted">{result.duration}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
