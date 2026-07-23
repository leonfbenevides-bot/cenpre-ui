// Empacota scripts/export-content-json.ts com esbuild (pra resolver imports
// de imagem, que o Node puro não entende) e roda o resultado. Ver comentário
// no topo do .ts para o que este export faz e por quê.
import { build } from "esbuild";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const tmp = mkdtempSync(path.join(tmpdir(), "cenpre-export-"));
const outfile = path.join(tmp, "export-content-json.mjs");

// Imports de imagem viram o caminho relativo do arquivo-fonte (ex.:
// "src/assets/hero-aluno-bg.jpg"), sem copiar/hashear nada — o JSON é um
// contrato de dados, não um pacote de assets buildado.
const imagePathPlugin = {
  name: "image-as-source-path",
  setup(pb) {
    pb.onLoad({ filter: /\.(png|jpe?g|webp|svg)$/ }, (args) => {
      const rel = path.relative(process.cwd(), args.path).replace(/\\/g, "/");
      return { contents: `export default ${JSON.stringify(rel)};`, loader: "js" };
    });
  },
};

await build({
  entryPoints: ["scripts/export-content-json.ts"],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile,
  jsx: "automatic",
  plugins: [imagePathPlugin],
  external: ["node:fs", "node:url"],
});

await import(pathToFileURL(outfile).href);

rmSync(tmp, { recursive: true, force: true });
