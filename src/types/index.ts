export interface NavLink {
  label: string;
  href: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface BeforeAfterResult {
  id: string;
  studentName: string;
  beforeImage: string;
  afterImage: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted: boolean;
  badge?: string;
  ctaLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: "whatsapp" | "instagram";
  label: string;
  href: string;
}
