import Image from "next/image";
import { MessageCircle, Share2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, siteConfig, socialLinks } from "@/data/content";

const socialIcons = {
  whatsapp: MessageCircle,
  instagram: Share2,
};

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-16 bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
            Contato
          </p>
          <h2 className="text-4xl font-extrabold leading-none tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base text-muted">
            Tire suas dúvidas e entre em contato. Estou pronto para te ajudar a começar.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-16 w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col gap-px sm:flex-row">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.platform];
            return (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.platform === "whatsapp"
                    ? "inline-flex flex-1 items-center justify-center gap-2 h-14 bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-accent/85 hover:shadow-glow"
                    : "inline-flex flex-1 items-center justify-center gap-2 h-14 border border-white/20 px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-glow"
                }
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Image
            src="/images/logo-branca.png"
            alt={siteConfig.name}
            width={120}
            height={34}
            className="h-7 w-auto opacity-60"
          />
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
