#!/bin/bash
# Corrige permissões antes do build (Hostinger / Linux)
# Evita EACCES ao escanear app/api/leads

set +e

chmod -R 755 app 2>/dev/null
chmod -R 755 app/api 2>/dev/null
chmod -R 755 app/api/leads 2>/dev/null
chmod 644 app/api/leads/route.ts 2>/dev/null

# Demais pastas/arquivos do projeto
find . -type d ! -path './node_modules*' ! -path './.next*' ! -path './.git*' -exec chmod 755 {} \; 2>/dev/null
find . -type f ! -path './node_modules*' ! -path './.next*' ! -path './.git*' -exec chmod 644 {} \; 2>/dev/null
chmod 755 scripts/*.sh 2>/dev/null

exit 0
