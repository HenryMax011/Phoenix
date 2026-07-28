import type { Metadata } from "next";
import { SectionHeading, CtaButton } from "@/components/ui";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Perguntas frequentes sobre produtos, prazos e atendimento PhoenixBor.",
};

export default function FaqPage() {
  return (
    <div className="bg-white text-steel-950">
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Respostas rápidas sobre atendimento, prazos e peças sob medida."
      />
      <div className="mt-10">
        <FaqAccordion items={faqItems} />
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-steel-600">Ainda com dúvida?</p>
        <div className="mt-4 flex justify-center">
          <CtaButton href="/contato">Falar com a PhoenixBor</CtaButton>
        </div>
      </div>
    </div>
    </div>
  );
}
