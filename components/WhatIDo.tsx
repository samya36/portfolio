import React from "react";

const pillars = [
  {
    title: "AI 产品",
    subtitle: "Product",
    description: "从需求洞察到独立上线，构建解决真实问题的 AI 产品",
    items: ["xhsxuanti.site", "knowtool.com", "雅思阅读分析器"],
  },
  {
    title: "AI 工程",
    subtitle: "Engineering",
    description: "LLM API 架构设计，多模型调度，全栈开发与部署",
    items: ["LLM API 中转站", "Next.js 应用", "Docker 部署"],
  },
  {
    title: "AI 运营",
    subtitle: "Operations",
    description: "将 AI 工具能力沉淀为团队可复用的 SOP 和自动化工作流",
    items: ["Claude/MCP/Agent", "批量内容生产", "团队提效落地"],
  },
];

export function WhatIDo() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          What I Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-txt-primary">
          AI 三栖能力
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`p-8 rounded-2xl bg-bg-card border border-bdr hover:border-accent/30 card-glow transition-all duration-300 fade-up d${i + 1}`}
            >
              <p className="text-xs text-accent tracking-[0.15em] uppercase mb-3 font-medium">
                {pillar.subtitle}
              </p>
              <h3 className="text-xl font-bold mb-4 text-txt-primary">{pillar.title}</h3>
              <p className="text-txt-secondary text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item} className="text-sm text-txt-muted flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
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
