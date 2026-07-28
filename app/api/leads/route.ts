import { NextResponse } from "next/server";
import { isPrismaReady } from "@/lib/prisma";

type LeadBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
};

/**
 * Stub de API de leads.
 * Valida o payload e retorna sucesso mock.
 * Quando Prisma/Supabase estiverem conectados, persistir em `Lead`.
 */
export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Nome, e-mail e telefone são obrigatórios." },
      { status: 400 },
    );
  }

  // TODO: persistir com Prisma quando isPrismaReady === true
  // if (isPrismaReady) {
  //   await prisma.lead.create({ data: { name, email, phone, ... } });
  // }

  return NextResponse.json({
    ok: true,
    mock: true,
    prismaReady: isPrismaReady,
    message:
      "Lead recebido (modo mock). Persistência Supabase/Prisma ainda não conectada.",
  });
}
