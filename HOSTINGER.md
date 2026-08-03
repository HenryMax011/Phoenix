# Deploy Hostinger (Node.js)

Este projeto é **Next.js** e precisa de hospedagem **Node.js** na Hostinger
(não use apenas a pasta `public_html` de hospedagem compartilhada PHP).

## Erro EACCES em `app/api/leads` (build)

Se o build falhar com `EACCES` ao escanear `app/api/leads`, as pastas
chegaram no servidor **sem permissão de leitura/execução** (comum após ZIP/FTP).

No SSH da Hostinger, na pasta do app:

```bash
bash scripts/fix-permissions.sh
# ou manualmente:
chmod -R u+rwX,go+rX app
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
npm ci
npm run build
npm run start
```

A pasta `app/api/leads` **é necessária** (formulário de orçamento). Não remova.

## O que foi preparado no SEO

- `robots.ts` → `/robots.txt`
- `sitemap.ts` → `/sitemap.xml`
- Meta description, Open Graph, Twitter, ícones
- JSON-LD (Organization + WebSite)
- Verificação Google via variável:
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Google Search Console (tag de verificação)

1. Abra [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade do domínio (ex.: `https://phoenixbor.com.br`)
3. Escolha **tag HTML**
4. Copie só o valor de `content="..."`
5. Coloque em `.env` / painel da Hostinger:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=SEU_CODIGO_AQUI
NEXT_PUBLIC_SITE_URL=https://phoenixbor.com.br
```

6. Faça o build/redeploy e clique em **Verificar**
7. Em seguida envie o sitemap: `https://phoenixbor.com.br/sitemap.xml`

Sem o site no ar no domínio correto, o Google **não encontra a tag**.

## Como subir na Hostinger (Node.js)

1. Crie um site Node.js no painel Hostinger
2. Faça upload deste ZIP e extraia na pasta do app
3. **Rode o script de permissões** (passo acima)
4. No painel, configure:

```
Node version: 20+
Start command: npm run start
Build command: npm run build
```

Ou via SSH:

```bash
bash scripts/fix-permissions.sh
npm ci
npm run build
npm run start
```

5. Defina as variáveis de ambiente listadas em `.env.example`
6. Aponte o domínio para a aplicação Node

## Arquivos importantes

- `.env.example` — modelo de variáveis
- `scripts/fix-permissions.sh` — corrige EACCES após upload
- `app/robots.ts` / `app/sitemap.ts` — indexação
- `app/layout.tsx` — metadados + verificação Google
- `components/JsonLd.tsx` — dados estruturados
- `app/api/leads/route.ts` — API do formulário
