"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const navLeft = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/segmentos", label: "Segmentos" },
];

const navRight = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

const navAll = [...navLeft, ...navRight];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative cursor-pointer whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-150 ${
        active ? "text-white" : "text-white/85 hover:text-white"
      }`}
    >
      {label}
      <motion.span
        className="absolute -bottom-1 left-0 h-px bg-blue-500"
        initial={false}
        animate={{ width: active ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-white/10 bg-steel-950/95 backdrop-blur-md"
      }
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6">
        {/* Esquerda */}
        <nav className="hidden items-center justify-end gap-4 xl:gap-5 lg:flex">
          {navLeft.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* Mobile: menu à esquerda */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center text-white/90 transition-transform duration-150 hover:scale-110 hover:text-white"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Centro — marca */}
        <div className="justify-self-center">
          <BrandLogo iconOnly iconSize={88} onClick={() => setOpen(false)} />
        </div>

        {/* Direita */}
        <nav className="hidden items-center justify-start gap-4 xl:gap-5 lg:flex">
          {navRight.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* Mobile: CTA à direita */}
        <div className="flex items-center justify-end lg:hidden">
          <Link
            href="/contato"
            className="cursor-pointer bg-blue-600 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-blue-500"
          >
            Contato
          </Link>
        </div>
      </div>

      {open ? (
        <motion.div
          className="border-t border-white/10 bg-steel-950 text-white lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-1 px-4 py-4 sm:grid-cols-4 sm:px-6">
            {navAll.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, delay: i * 0.03 }}
              >
                <Link
                  href={item.href}
                  className={`block cursor-pointer py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-blue-400"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
