import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { products } from "@/content/products";

const productLinks = products.slice(0, 6).map((p) => ({
  href: `/produtos/${p.slug}`,
  label: p.name,
}));

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Fale conosco" },
  { href: "/privacidade", label: "Política de privacidade" },
];

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 8.5V11h2.5l-.4 3H14v7h-3v-7H9v-3h2V8.2c0-2.1 1-3.7 3.7-3.7H17v3h-1.6c-.8 0-1.4.4-1.4 1.2z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5.1-8.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 4.5c-2 0-2.3 0-3.1.1-.8 0-1.4.2-1.9.4a3.9 3.9 0 0 0-1.4.9 3.9 3.9 0 0 0-.9 1.4c-.2.5-.3 1.1-.4 1.9-.1.8-.1 1.1-.1 3.1s0 2.3.1 3.1c0 .8.2 1.4.4 1.9.2.5.5 1 .9 1.4.4.4.9.7 1.4.9.5.2 1.1.3 1.9.4.8.1 1.1.1 3.1.1s2.3 0 3.1-.1c.8 0 1.4-.2 1.9-.4.5-.2 1-.5 1.4-.9.4-.4.7-.9.9-1.4.2-.5.3-1.1.4-1.9.1-.8.1-1.1.1-3.1s0-2.3-.1-3.1c0-.8-.2-1.4-.4-1.9a3.9 3.9 0 0 0-.9-1.4 3.9 3.9 0 0 0-1.4-.9c-.5-.2-1.1-.3-1.9-.4-.8-.1-1.1-.1-3.1-.1zm0 1.5c2 0 2.2 0 3 .1.7 0 1.1.2 1.4.3.3.1.6.3.8.5.2.2.4.5.5.8.1.3.3.7.3 1.4.1.8.1 1 .1 3s0 2.2-.1 3c0 .7-.2 1.1-.3 1.4-.1.3-.3.6-.5.8-.2.2-.5.4-.8.5-.3.1-.7.3-1.4.3-.8.1-1 .1-3 .1s-2.2 0-3-.1c-.7 0-1.1-.2-1.4-.3a2.2 2.2 0 0 1-.8-.5 2.2 2.2 0 0 1-.5-.8c-.1-.3-.3-.7-.3-1.4-.1-.8-.1-1-.1-3s0-2.2.1-3c0-.7.2-1.1.3-1.4.1-.3.3-.6.5-.8.2-.2.5-.4.8-.5.3-.1.7-.3 1.4-.3.8-.1 1-.1 3-.1z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.3 9.2H3.6V20h2.7V9.2zM4.9 4A1.6 1.6 0 1 0 5 7.2 1.6 1.6 0 0 0 4.9 4zM20.4 20h-2.7v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V9.2h2.6v1.5h.1c.4-.7 1.3-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20z" />
    </svg>
  );
}

const socials = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: IconFacebook },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: IconInstagram },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: IconLinkedin },
];

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.address,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(205,28,24,0.22), transparent 55%), radial-gradient(ellipse 40% 50% at 100% 80%, rgba(205,28,24,0.18), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.75fr_1fr] lg:gap-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-sm text-blue-400">
                PB
              </span>
              PhoenixBor
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Desde 2002, a PhoenixBor desenvolve e fornece soluções de vedação
              industrial — peças técnicas, compostos de alta performance e
              atendimento ágil para o chão de fábrica.
            </p>
            <Link
              href="/contato"
              className="btn-glow mt-6 inline-flex cursor-pointer rounded-lg bg-blue-600 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_32px_rgba(205,28,24,0.45)] transition-all duration-200 hover:bg-blue-500 hover:tracking-[0.24em]"
            >
              Solicitar orçamento
            </Link>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400 transition-all duration-150 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500">
              Produtos
            </p>
            <ul className="mt-5 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500">
              Explore
            </p>
            <ul className="mt-5 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500">
                Contato
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-white/75">
                {siteConfig.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5 text-blue-400" />
                      {phone}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition-colors hover:text-white"
                  >
                    WhatsApp: {siteConfig.whatsappDisplay}
                  </a>
                </li>
                {siteConfig.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="cursor-pointer transition-colors hover:text-white"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500">
                Endereço
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-sm leading-relaxed text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>
                  {siteConfig.address}
                  <br />
                  <span className="text-white/45">{siteConfig.hours}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-steel-950">
          <iframe
            title={`Mapa — ${siteConfig.name}`}
            src={mapSrc}
            className="h-56 w-full grayscale-[30%] contrast-125 sm:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p>Fabricante em São Paulo · Vedação industrial</p>
        </div>
      </div>
    </footer>
  );
}
