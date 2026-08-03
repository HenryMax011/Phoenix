#!/bin/bash
# Corrige permissões após upload/unzip na Hostinger (Linux)
set -euo pipefail

echo "Ajustando permissões do projeto..."

find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;

# scripts executáveis
chmod 755 scripts/*.sh 2>/dev/null || true

# garante leitura em app/api
chmod -R u+rwX,go+rX app public 2>/dev/null || true

echo "OK — pastas 755, arquivos 644"
echo "Agora rode: npm ci && npm run build && npm run start"
