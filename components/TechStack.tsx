import React from "react";

const categories = [
  {
    label: "AI",
    items: ["Claude", "MCP", "AI Agent", "Prompt Engineering", "Gemini"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["Fastify", "Bun", "Docker", "SQLite", "Node.js"],
  },
  {
    label: "Tools",
    items: ["Cursor", "Git", "Canva", "剪映", "数据分析"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-32 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          Tech Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-txt-primary">
          技术栈
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-sm font-bold text-accent tracking-[0.15em] uppercase mb-5">
                {cat.label}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-txt-secondary text-sm flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bdr shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
