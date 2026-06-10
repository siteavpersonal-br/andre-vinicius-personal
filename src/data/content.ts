import type {
  BeforeAfterResult,
  FaqItem,
  NavLink,
  PricingPlan,
  SocialLink,
} from "@/types";

export const siteConfig = {
  name: "André Vinícius - Personal",
  tagline: "Transforme seu corpo. Eleve sua performance.",
  whatsapp: "https://wa.me/5511999999999",
  instagram: "https://instagram.com/andreviniciuspersonal",
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const heroContent = {
  title: "Transforme seu corpo com método e consistência",
  subtitle:
    "Treinos personalizados, acompanhamento próximo e resultados reais. Pare de adiar a melhor versão de você.",
  cta: "Quero começar agora",
  videoSrc: "/videos/logo-video.mov",
  videoWebm: "/videos/logo-video.mov",
};

export const aboutContent = {
  title: "Sobre mim",
  subtitle: "Personal trainer dedicado à sua evolução",
  bio: "Sou André Vinícius, personal trainer com mais de 8 anos de experiência transformando corpos e hábitos. Minha missão é entregar resultados sustentáveis, unindo ciência do treino, nutrição prática e motivação diária.",
  method:
    "Trabalho com periodização inteligente, ajustes semanais e foco total na sua rotina. Cada plano é construído sob medida — do iniciante ao atleta avançado.",
  certifications: [
    { name: "CREF Ativo", issuer: "Conselho Regional de Educação Física" },
    { name: "Musculação Avançada", issuer: "Instituto de Performance" },
    { name: "Nutrição Esportiva", issuer: "Academia Fitness Pro" },
  ],
  profileImage: "/images/andre.jpg",
};

export const results: BeforeAfterResult[] = [
  {
    id: "1",
    studentName: "Carlos M.",
    duration: "12 semanas",
    beforeImage: "/images/results/placeholder-before.svg",
    afterImage: "/images/results/placeholder-after.svg",
  },
  {
    id: "2",
    studentName: "Juliana R.",
    duration: "16 semanas",
    beforeImage: "/images/results/placeholder-before.svg",
    afterImage: "/images/results/placeholder-after.svg",
  },
  {
    id: "3",
    studentName: "Rafael S.",
    duration: "10 semanas",
    beforeImage: "/images/results/placeholder-before.svg",
    afterImage: "/images/results/placeholder-after.svg",
  },
  {
    id: "4",
    studentName: "Amanda L.",
    duration: "14 semanas",
    beforeImage: "/images/results/placeholder-before.svg",
    afterImage: "/images/results/placeholder-after.svg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "basico",
    name: "Básico",
    description: "Consultoria simples para quem quer começar com direção clara.",
    price: "R$ 197",
    period: "/mês",
    features: [
      { text: "Plano de treino mensal", included: true },
      { text: "Ajustes quinzenais", included: true },
      { text: "Suporte via WhatsApp", included: true },
      { text: "Acompanhamento diário", included: false },
      { text: "Consultoria nutricional", included: false },
    ],
    highlighted: false,
    ctaLabel: "Escolher Básico",
  },
  {
    id: "destaque",
    name: "Performance",
    description: "O plano mais completo para resultados acelerados e consistentes.",
    price: "R$ 397",
    period: "/mês",
    features: [
      { text: "Plano de treino personalizado", included: true },
      { text: "Ajustes semanais", included: true },
      { text: "Suporte prioritário 7 dias", included: true },
      { text: "Acompanhamento diário", included: true },
      { text: "Consultoria nutricional básica", included: true },
    ],
    highlighted: true,
    badge: "Mais Vendido",
    ctaLabel: "Quero o Performance",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Acompanhamento completo para máxima performance e evolução.",
    price: "R$ 697",
    period: "/mês",
    features: [
      { text: "Treino 100% individualizado", included: true },
      { text: "Ajustes em tempo real", included: true },
      { text: "Suporte VIP ilimitado", included: true },
      { text: "Check-ins diários", included: true },
      { text: "Plano nutricional completo", included: true },
    ],
    highlighted: false,
    ctaLabel: "Escolher Premium",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Como funciona o acompanhamento online?",
    answer:
      "Você recebe seu plano personalizado, envia feedbacks regulares e eu ajusto treino e estratégia conforme sua evolução. Tudo via app e WhatsApp.",
  },
  {
    id: "2",
    question: "Preciso ir à academia?",
    answer:
      "Sim, a maioria dos planos é pensada para treino presencial ou em academia. Também adapto treinos para home gym quando necessário.",
  },
  {
    id: "3",
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Com consistência, os primeiros sinais aparecem entre 4 e 6 semanas. Transformações significativas costumam ocorrer entre 12 e 16 semanas.",
  },
  {
    id: "4",
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar com aviso prévio de 7 dias antes da próxima cobrança.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "whatsapp",
    label: "Falar no WhatsApp",
    href: siteConfig.whatsapp,
  },
  {
    platform: "instagram",
    label: "Seguir no Instagram",
    href: siteConfig.instagram,
  },
];
