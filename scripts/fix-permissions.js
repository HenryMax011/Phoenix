/**
 * Corrige permissões em Linux (Hostinger). No Windows, não faz nada.
 */
const { execSync } = require("child_process");
const os = require("os");

if (os.platform() === "win32") {
  process.exit(0);
}

try {
  execSync("bash scripts/fix-permissions.sh", { stdio: "inherit" });
} catch {
  try {
    execSync("chmod -R 755 app", { stdio: "inherit" });
  } catch {
    // ignora — não bloqueia o build
  }
}

process.exit(0);
