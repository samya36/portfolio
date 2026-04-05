import { mkdirSync, copyFileSync } from "fs";

const result = await Bun.build({
  entrypoints: ["./frontend.tsx"],
  outdir: "./dist",
  minify: true,
});

if (!result.success) {
  console.error("Build failed:", result.logs);
  process.exit(1);
}

const jsFileName = result.outputs[0].path.split("/").pop()!;

const html = `<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>严美红 | AI Ops × Product × Engineering</title>
    <meta name="description" content="将 AI 能力落地为可复用的产品和工作流" />
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              bg: { darkest: '#0a0a0f', dark: '#111118', card: '#1a1a24' },
              accent: { DEFAULT: '#3b82f6', light: '#60a5fa', glow: 'rgba(59,130,246,0.15)' },
              txt: { primary: '#f0f0f5', secondary: '#9999aa', muted: '#666677' },
              bdr: '#2a2a38',
            },
          },
        },
      }
    <\/script>
    <style>
      body { background-color: #0a0a0f; color: #f0f0f5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif; -webkit-font-smoothing: antialiased; }
      .gradient-text { background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .card-glow:hover { box-shadow: 0 0 40px rgba(59,130,246,0.12); }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .fade-up { animation: fadeUp 0.7s ease-out forwards; opacity: 0; }
      .d1 { animation-delay: 0.1s; } .d2 { animation-delay: 0.2s; } .d3 { animation-delay: 0.3s; } .d4 { animation-delay: 0.4s; } .d5 { animation-delay: 0.5s; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./${jsFileName}"></script>
  </body>
</html>`;

await Bun.write("./dist/index.html", html);
console.log("Build complete → dist/");
