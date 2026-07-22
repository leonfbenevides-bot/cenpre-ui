// Screenshot utilitário — serve storybook-static e captura uma story.
import { chromium } from "playwright-core";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

function chromePath() {
  const root = path.join(os.homedir(), "AppData", "Local", "ms-playwright");
  const dir = fs.readdirSync(root).find((d) => /^chromium-\d+$/.test(d));
  for (const sub of ["chrome-win64", "chrome-win"]) {
    const exe = path.join(root, dir, sub, "chrome.exe");
    if (fs.existsSync(exe)) return exe;
  }
  throw new Error("chromium não encontrado");
}

const ROOT = path.resolve("storybook-static");
const OUT = process.argv[2] || "shot.png";
const MATCH = process.argv[3] || "Redesign";
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".map": "application/json",
};
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const f = path.join(ROOT, p);
  fs.readFile(f, (e, data) => {
    if (e) {
      res.statusCode = 404;
      res.end("nf");
      return;
    }
    res.setHeader("content-type", types[path.extname(f)] || "application/octet-stream");
    res.end(data);
  });
});
await new Promise((r) => server.listen(6099, r));
const index = JSON.parse(fs.readFileSync(path.join(ROOT, "index.json"), "utf8"));
const entry = Object.values(index.entries).find(
  (e) => e.type === "story" && new RegExp(MATCH, "i").test(e.title),
);
console.log("story:", entry.title, "→", entry.id);
const browser = await chromium.launch({ executablePath: chromePath() });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(`http://localhost:6099/iframe.html?id=${entry.id}&viewMode=story`, {
  waitUntil: "networkidle",
});
await page.waitForTimeout(1800);
await page.screenshot({ path: OUT, fullPage: true });
console.log("saved", OUT);
await browser.close();
server.close();
process.exit(0);
