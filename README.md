# André Vinícius Personal

Site institucional de personal trainer — landing page de alta conversão com design editorial escuro inspirado no Catalyst Performance.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** (Accordion)

## Seções

- **Hero** — vídeo em loop com vinheta oval e CTA principal
- **Sobre** — foto de perfil, bio, método de trabalho e certificações
- **Resultados** — galeria antes/depois dos alunos
- **Planos** — cards de precificação com destaque no plano principal
- **FAQ + Contato** — accordion de perguntas frequentes e links de contato

## Design

Paleta escura com accent amarelo (`#f5c518`), tipografia editorial grande, cantos retos e efeito de glow no hover — baseado no visual do [Catalyst Performance](https://catalystperformance.sg/).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Conteúdo

Todo o conteúdo do site (textos, links, planos, resultados, FAQ) está centralizado em:

```
src/data/content.ts
```

Edite esse arquivo para atualizar informações sem precisar mexer nos componentes.

## Mídias

Coloque os arquivos de mídia nas seguintes pastas:

```
public/
  images/   → fotos, logo
  videos/   → vídeos da hero section
```

## Deploy

O site está configurado para deploy automático na **Vercel** a cada push na branch `main`.
