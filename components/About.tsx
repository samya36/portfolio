import React from "react";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-txt-primary">
          关于我
        </h2>
        <div className="space-y-5 text-txt-secondary leading-relaxed text-[15px]">
          <p>
            我从运营起步，在实际业务中发现了 AI 能力的杠杆效应——
            一个好的 Prompt 可以替代一周的重复劳动，一个 API 中转层可以让整个团队用上最新的模型。
          </p>
          <p>
            从 AI 的使用者，到 AI 工作流的设计者，再到 AI 产品的构建者。
            我用 Claude Code、MCP、AI Agent 搭建自动化工作流，
            用 Next.js 和 Fastify 构建完整的 Web 应用，
            独立开发并上线了多个工具站。
          </p>
          <p>
            我相信最好的 AI 产品来自对真实业务痛点的深刻理解。
            运营背景让我知道用户要什么，工程能力让我把它做出来。
          </p>
        </div>
        <div className="mt-14 pt-8 border-t border-bdr">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <span className="text-txt-secondary font-medium block mb-1">教育</span>
              <p className="text-txt-muted">安徽中医药大学 · 本科</p>
            </div>
            <div>
              <span className="text-txt-secondary font-medium block mb-1">内容</span>
              <p className="text-txt-muted">公众号「AI运营教程」· Claude Code 系列</p>
            </div>
            <div>
              <span className="text-txt-secondary font-medium block mb-1">AI 实践</span>
              <p className="text-txt-muted">深度使用 Claude 2-3 年，从对话到 MCP 到代码开发</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
