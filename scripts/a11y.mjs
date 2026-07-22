/**
 * Auditoria de acessibilidade (axe-core) das stories de página.
 *
 * Uso: com o Storybook rodando (npm run storybook), execute `npm run test:a11y`.
 * Varre todas as stories em "Páginas/…" nos viewports desktop e mobile e
 * imprime as violações por página; sai com código 1 se houver violação séria.
 */
import { chromium } from "playwright-core";
import { createRequire } from "node:module";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");
const HOST = process.env.SB_HOST ?? "http://localhost:6006";

function chromePath() {
  const root = path.join(os.homedir(), "AppData", "Local", "ms-playwright");
  const dir = fs.readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  if (!dir)
    throw new Error(
      "Chromium do Playwright não encontrado — rode `npx playwright install chromium`.",
    );
  for (const sub of ["chrome-win64", "chrome-win"]) {
    const exe = path.join(root, dir, sub, "chrome.exe");
    if (fs.existsSync(exe)) return exe;
  }
  throw new Error("chrome.exe não encontrado dentro de " + path.join(root, dir));
}

const index = await (await fetch(`${HOST}/index.json`)).json();
const stories = Object.values(index.entries).filter(
  (e) => e.type === "story" && e.title.startsWith("Páginas"),
);

const browser = await chromium.launch({ executablePath: chromePath() });
let totalSerious = 0;

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport });
  for (const story of stories) {
    await page.goto(`${HOST}/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`, {
      waitUntil: "networkidle",
    });
    await page.addScriptTag({ path: axePath });
    const result = await page.evaluate(() => axe.run(document, { resultTypes: ["violations"] }));
    const serious = result.violations.filter((v) => ["serious", "critical"].includes(v.impact));
    const minor = result.violations.filter((v) => !["serious", "critical"].includes(v.impact));
    if (result.violations.length === 0) {
      console.log(`✓ ${story.title} [${viewport.name}]`);
    } else {
      console.log(`✗ ${story.title} [${viewport.name}]`);
      for (const v of result.violations) {
        console.log(`   [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length}x)`);
        for (const n of v.nodes.slice(0, 3)) console.log(`      → ${n.target.join(" ")}`);
      }
    }
    totalSerious += serious.length;
    void minor;
  }
  await page.close();
}

await browser.close();
console.log(
  totalSerious === 0 ? "\nSem violações sérias ✓" : `\n${totalSerious} violações sérias/críticas ✗`,
);
process.exit(totalSerious === 0 ? 0 : 1);
