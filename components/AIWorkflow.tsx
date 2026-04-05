import React from "react";

const workflows = [
  {
    icon: "⚡",
    title: "数据自动化",
    description: "用 Cursor 抓取网站题库数据，自动清洗、结构化并生成 PDF 交付产品",
    result: "节省 90% 人工时间",
  },
  {
    icon: "✍️",
    title: "AI 内容批量生产",
    description: "Claude / Gemini 驱动的内容工作流，批量生成小红书笔记与视频脚本",
    result: "月产 20+ 篇高质量内容",
  },
  {
    icon: "🔧",
    title: "团队 AI SOP",
    description: "将 Claude Code / MCP / AI Agent 能力封装为团队可复用流程，包括备考计划生成器、HTML 报告自动生成",
    result: "显著降低重复性生产成本",
  },
];

export function AIWorkflow() {
  return (
    <section id="workflow" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          AI Workflow
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-txt-primary">
          AI 落地实战
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((wf, i) => (
            <div
              key={wf.title}
              className={`p-8 rounded-2xl bg-bg-card border border-bdr hover:border-accent/30 card-glow transition-all duration-300 fade-up d${i + 1}`}
            >
              <div className="text-4xl mb-5">{wf.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-txt-primary">{wf.title}</h3>
              <p className="text-txt-secondary text-sm leading-relaxed mb-6">
                {wf.description}
              </p>
              <span className="inline-block px-3 py-1.5 rounded-lg bg-accent-glow text-accent text-sm font-medium">
                {wf.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
