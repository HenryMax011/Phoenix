import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactChat } from "@/components/ContactChat";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a PhoenixBor por chat, e-mail, telefone ou WhatsApp.",
};

export default function ContatoPage() {
  return (
    <div className="bg-white">
      <div className="bg-blue-600">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-5 sm:px-6">
          <h1 className="shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-white sm:text-base">
            Contato
          </h1>
          <span className="h-px flex-1 bg-white/90" aria-hidden />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="flex justify-center lg:justify-start">
          <ContactChat embedded />
        </div>

        <div className="space-y-8 pt-2">
          <div className="space-y-4">
            {siteConfig.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex cursor-pointer items-center gap-3 text-sm text-steel-800 transition-colors hover:text-blue-700"
              >
                <Mail className="h-5 w-5 shrink-0 text-blue-700" />
                {email}
              </a>
            ))}
            {siteConfig.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex cursor-pointer items-center gap-3 text-sm text-steel-800 transition-colors hover:text-blue-700"
              >
                <Phone className="h-5 w-5 shrink-0 text-blue-700" />
                {phone}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-3 text-sm text-steel-800 transition-colors hover:text-blue-700"
            >
              <span className="flex h-5 w-5 items-center justify-center text-[#25D366]">
                <Phone className="h-5 w-5" />
              </span>
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-steel-700">
            Disponibilizamos um formulário para sua maior comodidade. A
            PhoenixBor terá imensa satisfação em responder o mais breve
            possível.
          </p>
        </div>
      </div>
    </div>
  );
}
