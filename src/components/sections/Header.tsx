"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = 0;

function scrollToSection(href: string) {
  if (href === "#inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    // Wait for mobile menu to collapse before measuring positions
    setTimeout(() => scrollToSection(href), 10);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, "#inicio")}
          className="flex items-center gap-3 transition-colors hover:text-accent"
        >
          <Image
            src="/images/logo-branca.png"
            alt=""
            width={500}
            height={500}
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-semibold uppercase tracking-widest text-white">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          onClick={(e) => handleClick(e, "#contato")}
          className="hidden text-sm font-semibold uppercase tracking-wider text-white underline-offset-4 transition-colors hover:text-accent md:block"
        >
          Falar agora →
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="border-b border-white/5 py-4 text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
