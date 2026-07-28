import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do site ${siteConfig.name}.`,
};

export default function PrivacidadePage() {
  return (
    <div className="bg-white text-steel-950">
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Legal"
        title="Política de Privacidade"
        description="Texto placeholder — revise com assessoria jurídica antes da publicação."
      />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-steel-700">
        <p>
          A {siteConfig.name} coleta dados pessoais informados voluntariamente
          em formulários de contato e orçamento (nome, empresa, e-mail,
          telefone e mensagem) com a finalidade de responder solicitações
          comerciais e prestar atendimento.
        </p>
        <p>
          Os dados não são vendidos a terceiros. Podem ser compartilhados com
          ferramentas de CRM, e-mail e WhatsApp Business utilizadas pela
          empresa, exclusivamente para fins de atendimento.
        </p>
        <p>
          Você pode solicitar atualização ou exclusão dos seus dados pelo
          e-mail {siteConfig.email}.
        </p>
        <p>
          Este site pode utilizar cookies técnicos necessários ao funcionamento
          e, futuramente, cookies de analytics/ads — com consentimento quando
          aplicável.
        </p>
        <p>Última atualização: julho de 2026.</p>
      </div>
    </div>
    </div>
  );
}
