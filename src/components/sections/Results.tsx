"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { results } from "@/data/content";

type Photo = {
  src: string;
  alt: string;
  label: string;
};

type Lightbox = {
  photos: Photo[];
  index: number;
};

export function Results() {
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const move = useCallback(
    (delta: number) =>
      setLightbox((current) => {
        if (!current) return current;
        const total = current.photos.length;
        const index = (current.index + delta + total) % total;
        return { ...current, index };
      }),
    [],
  );

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, move]);

  const openLightbox = (studentName: string, beforeImage: string, afterImage: string, index: number) =>
    setLightbox({
      index,
      photos: [
        { src: beforeImage, alt: `${studentName} - Antes`, label: "Antes" },
        { src: afterImage, alt: `${studentName} - Depois`, label: "Depois" },
      ],
    });

  const activePhoto = lightbox?.photos[lightbox.index];

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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {results.map((result) => (
            <article
              key={result.id}
              className="group overflow-hidden rounded-2xl bg-background ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-glow"
            >
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(result.studentName, result.beforeImage, result.afterImage, 0)
                  }
                  className="relative aspect-[3/4] cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Ampliar foto de ${result.studentName} antes`}
                >
                  <Image
                    src={result.beforeImage}
                    alt={`${result.studentName} - Antes`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/70 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Antes
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(result.studentName, result.beforeImage, result.afterImage, 1)
                  }
                  className="relative aspect-[3/4] cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Ampliar foto de ${result.studentName} depois`}
                >
                  <Image
                    src={result.afterImage}
                    alt={`${result.studentName} - Depois`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-3 left-3 bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Depois
                  </span>
                </button>
              </div>

              <div className="px-4 py-5">
                <p className="font-semibold text-white">{result.studentName}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition-colors hover:bg-white/20"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Próxima foto"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition-colors hover:bg-white/20"
          >
            &#8250;
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-3xl flex-col items-center gap-4"
          >
            <div className="relative w-full flex-1">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
              {activePhoto.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
