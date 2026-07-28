"use client";

import { useState, type ReactNode } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { products } from "@/content/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { StarButton } from "@/components/ui/star-button";

type LeadFormProps = {
  defaultProduct?: string;
  compact?: boolean;
  variant?: "light" | "dark";
};

export function LeadForm({
  defaultProduct = "",
  compact = false,
  variant = "light",
}: LeadFormProps) {
  const dark = variant === "dark";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function buildWhatsAppUrl() {
    const text = [
      `Olá, sou ${form.name || "interessado(a)"} da ${form.company || "empresa"}.`,
      form.product ? `Produto de interesse: ${form.product}.` : "",
      form.message
        ? `Mensagem: ${form.message}`
        : "Gostaria de solicitar um orçamento.",
    ]
      .filter(Boolean)
      .join(" ");

    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg("Preencha nome, e-mail e telefone.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Falha ao enviar.");
      }
      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: defaultProduct,
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado.");
    }
  }

  const labelClass = cn(
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em]",
    dark ? "text-white/55" : "text-steel-600",
  );

  const fieldClass = cn(
    "w-full border px-4 py-3 text-sm outline-none transition-all duration-200",
    dark
      ? "border-white/15 bg-black/80 text-white placeholder:text-white/30 focus:border-blue-500 focus:bg-black focus:shadow-[0_0_0_3px_rgba(205,28,24,0.25)]"
      : "border-steel-300 bg-white text-steel-900 placeholder:text-steel-400 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(205,28,24,0.15)]",
  );

  if (status === "success") {
    return (
      <div
        className={cn(
          "border p-8 text-center sm:p-10",
          dark
            ? "border-emerald-500/30 bg-emerald-500/10"
            : "border-emerald-200 bg-emerald-50",
        )}
      >
        <CheckCircle2
          className={cn(
            "mx-auto h-11 w-11",
            dark ? "text-emerald-400" : "text-emerald-600",
          )}
        />
        <h3
          className={cn(
            "mt-4 font-[family-name:var(--font-display)] text-xl font-semibold",
            dark ? "text-white" : "text-steel-950",
          )}
        >
          Solicitação recebida
        </h3>
        <p
          className={cn(
            "mx-auto mt-2 max-w-sm text-sm leading-relaxed",
            dark ? "text-white/60" : "text-steel-600",
          )}
        >
          Em breve nossa equipe entra em contato. Enquanto isso, você também
          pode falar pelo WhatsApp.
        </p>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex cursor-pointer items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className={compact ? "grid gap-5" : "grid gap-5 sm:grid-cols-2"}>
        <Field label="Nome" htmlFor="name" required labelClass={labelClass}>
          <input
            id="name"
            className={fieldClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Seu nome completo"
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Empresa" htmlFor="company" labelClass={labelClass}>
          <input
            id="company"
            className={fieldClass}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
        </Field>
        <Field label="E-mail" htmlFor="email" required labelClass={labelClass}>
          <input
            id="email"
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />
        </Field>
        <Field
          label="Telefone"
          htmlFor="phone"
          required
          labelClass={labelClass}
        >
          <input
            id="phone"
            type="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            required
          />
        </Field>
      </div>

      <Field
        label="Produto de interesse"
        htmlFor="product"
        labelClass={labelClass}
      >
        <div className="relative">
          <select
            id="product"
            className={cn(fieldClass, "appearance-none pr-10")}
            value={form.product}
            onChange={(e) => update("product", e.target.value)}
          >
            <option value="">Selecione um produto...</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Outro / Sob medida">Outro / Sob medida</option>
          </select>
          <span
            className={cn(
              "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs",
              dark ? "text-white/40" : "text-steel-400",
            )}
            aria-hidden
          >
            ▾
          </span>
        </div>
      </Field>

      <Field label="Mensagem" htmlFor="message" labelClass={labelClass}>
        <textarea
          id="message"
          rows={compact ? 3 : 4}
          className={cn(fieldClass, "resize-y min-h-[100px]")}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Descreva aplicação, dimensões, quantidade ou urgência..."
        />
      </Field>

      {status === "error" && errorMsg ? (
        <p
          className={cn(
            "border px-4 py-3 text-sm",
            dark
              ? "border-red-500/40 bg-red-500/10 text-red-300"
              : "border-red-200 bg-red-50 text-red-700",
          )}
          role="alert"
        >
          {errorMsg}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        {status === "loading" ? (
          <button
            type="submit"
            disabled
            className={cn(
              "inline-flex h-12 min-w-[200px] cursor-not-allowed items-center justify-center gap-2 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70",
              dark ? "bg-blue-700 text-white" : "bg-blue-600 text-white",
            )}
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </button>
        ) : (
          <StarButton
            type="submit"
            lightColor="#CD1C18"
            backgroundColor="#0a0a0a"
            lightWidth={120}
            duration={2.6}
            borderWidth={1}
            className="h-12 min-w-[200px] cursor-pointer rounded-none px-8 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            Solicitar orçamento
          </StarButton>
        )}

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-12 cursor-pointer items-center justify-center gap-2 border px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
            dark
              ? "border-white/25 text-white hover:border-[#25D366]/60 hover:bg-[#25D366]/10 hover:text-[#25D366]"
              : "border-steel-300 bg-white text-steel-900 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:text-[#128C7E]",
          )}
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          WhatsApp
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  labelClass,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  labelClass: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? (
          <span className="ml-1 text-blue-500" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
