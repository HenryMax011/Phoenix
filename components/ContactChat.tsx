"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  MessageCircle,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

type Step = "chat" | "form" | "thanks";

type ContactChatProps = {
  embedded?: boolean;
  open?: boolean;
  onClose?: () => void;
};

const OPTIONS = [
  "Quero orçamento de vedação",
  "Peça sob medida / por amostra",
  "Dúvida técnica de material",
  "Outro assunto",
];

function nowTime() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ContactChat({
  embedded = false,
  open = true,
  onClose,
}: ContactChatProps) {
  const [step, setStep] = useState<Step>("chat");
  const [showTyping, setShowTyping] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [topic, setTopic] = useState("");
  const [draft, setDraft] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [time] = useState(nowTime);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step !== "chat") return;
    if (topic) return;
    setShowTyping(true);
    setShowPrompt(false);
    setShowOptions(false);
    const t1 = window.setTimeout(() => {
      setShowTyping(false);
      setShowPrompt(true);
    }, 1200);
    const t2 = window.setTimeout(() => setShowOptions(true), 1600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [step, topic]);

  useEffect(() => {
    scroller.current?.scrollTo({
      top: scroller.current.scrollHeight,
      behavior: "smooth",
    });
  }, [step, showTyping, showPrompt, showOptions, topic]);

  if (!open && !embedded) return null;

  function chooseOption(label: string) {
    setTopic(label);
    setDraft("");
    window.setTimeout(() => setStep("form"), 450);
  }

  function sendDraft() {
    const text = draft.trim();
    if (!text) return;
    chooseOption(text);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Informe nome e número.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: "whatsapp-lead@phoenixbor.local",
          phone: phone.trim(),
          message: topic || "Contato via chat",
          product: topic || "Contato WhatsApp",
        }),
      });
      setStep("thanks");
    } catch {
      setError("Não foi possível enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setTopic("");
    setDraft("");
    setError("");
    setStep("chat");
  }

  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Olá! Meu nome é ${name || "cliente"}, meu número é ${phone || "—"}. Assunto: ${topic || "contato"}.`,
  )}`;

  const fieldClass =
    "w-full rounded-md border border-white/20 bg-[#141414] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-blue-500";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] text-white shadow-2xl ${
        embedded
          ? "h-[600px] w-full max-w-md"
          : "h-[600px] w-[min(100vw-1.5rem,380px)]"
      }`}
    >
      <span className="absolute -top-3 right-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
        Grátis · Sem compromisso
      </span>

      <div className="flex items-center gap-3 border-b border-white/10 bg-[#111] px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700">
          <ShieldCheck className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            PhoenixBor · Atendimento
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            online agora
          </p>
        </div>
        <MessageCircle className="h-5 w-5 text-white/70" />
        {onClose ? (
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="cursor-pointer rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div
        ref={scroller}
        className="relative flex-1 overflow-y-auto bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] bg-[#121212] p-4"
      >
        {step === "thanks" ? (
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700">
              <Check className="h-7 w-7 text-white" />
            </div>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold">
              Muito obrigado!
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Recebemos seus dados. A PhoenixBor retorna o mais breve possível.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Continuar no WhatsApp
            </a>
            <button
              type="button"
              className="mt-4 cursor-pointer text-xs text-white/50 underline-offset-2 hover:text-white hover:underline"
              onClick={reset}
            >
              Enviar outro contato
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/70">
                Hoje
              </span>
            </div>

            <div className="mb-3 max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1e1e1e] px-3.5 py-2.5 text-sm leading-relaxed text-white/95 shadow">
              Olá! Sou o assistente virtual da <strong>PhoenixBor</strong>.
              <span className="mt-1 block text-right text-[10px] text-white/40">
                {time}
              </span>
            </div>

            {showTyping ? (
              <div className="mb-3 inline-flex gap-1 rounded-2xl rounded-tl-sm bg-[#1e1e1e] px-4 py-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/50" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/50 [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/50 [animation-delay:240ms]" />
              </div>
            ) : null}

            {showPrompt ? (
              <div className="mb-3 max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1e1e1e] px-3.5 py-2.5 text-sm leading-relaxed text-white/95 shadow">
                Como podemos te ajudar hoje? Escolha uma opção ou digite sua
                mensagem.
                <span className="mt-1 block text-right text-[10px] text-white/40">
                  {time}
                </span>
              </div>
            ) : null}

            {showOptions && step === "chat" && !topic ? (
              <div className="mb-3 flex flex-col items-start gap-2">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => chooseOption(opt)}
                    className="cursor-pointer rounded-full border border-blue-500/80 bg-[#0a0a0a] px-4 py-2 text-left text-sm text-blue-300 transition-colors hover:bg-blue-700 hover:text-white"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : null}

            {topic ? (
              <div className="mb-3 ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-800 px-3.5 py-2.5 text-sm leading-relaxed text-white shadow">
                {topic}
                <span className="mt-1 block text-right text-[10px] text-white/50">
                  {time}
                </span>
              </div>
            ) : null}

            {step === "form" ? (
              <>
                <div className="mb-3 max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1e1e1e] px-3.5 py-2.5 text-sm leading-relaxed text-white/95 shadow">
                  Perfeito. Para te atender, preciso só do seu nome e número.
                  <span className="mt-1 block text-right text-[10px] text-white/40">
                    {time}
                  </span>
                </div>

                <form
                  onSubmit={onSubmit}
                  className="mt-2 space-y-3 rounded-xl border border-white/10 bg-[#0f0f0f] p-4"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="chat-name"
                        className="mb-1.5 block text-sm font-semibold text-white"
                      >
                        Nome <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="chat-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className={fieldClass}
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="chat-phone"
                        className="mb-1.5 block text-sm font-semibold text-white"
                      >
                        Telefone <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="chat-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(xx) 00000-0000"
                        className={fieldClass}
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  {error ? (
                    <p className="text-xs text-red-400" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex cursor-pointer items-center justify-center bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? "Enviando..." : "Solicitar orçamento"}
                    </button>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center justify-center gap-2 border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      WhatsApp
                    </a>
                  </div>
                </form>
              </>
            ) : null}
          </>
        )}
      </div>

      {step === "chat" ? (
        <div className="flex items-center gap-2 border-t border-white/10 bg-[#111] px-3 py-2.5">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendDraft();
              }
            }}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-full border-0 bg-[#1e1e1e] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
          />
          <button
            type="button"
            aria-label="Enviar mensagem"
            onClick={sendDraft}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-700 text-white transition-colors hover:bg-blue-600"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function ContactChatFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <ContactChat open={open} onClose={() => setOpen(false)} />
      ) : null}
      <button
        type="button"
        aria-label={open ? "Fechar chat" : "Abrir chat de contato"}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-700 text-white shadow-lg ring-2 ring-steel-950 transition-transform duration-150 hover:scale-110 hover:bg-blue-600 ${
          open ? "" : "float-pulse"
        }`}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
