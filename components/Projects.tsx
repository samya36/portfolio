import React from "react";

const projects = [
  {
    name: "llmapi",
    description: "多模型 LLM API 中转站，统一代理 + 配额管理 + 飞书告警",
    tags: ["Fastify", "Docker", "OpenAI", "Anthropic", "GLM"],
    github: "https://github.com/samya36/llmapi",
    link: null,
  },
  {
    name: "IELTS Reading Analyzer",
    description: "AI 驱动的雅思阅读分析器，粘贴文章即出分析报告 + 自动生成练习题",
    tags: ["Next.js", "TypeScript", "AI API"],
    github: "https://github.com/samya36/ieltsreadinganalyzer",
    link: null,
  },
  {
    name: "IELTS Writing Toolkit",
    description: "雅思写作 AI 评分工具包：Prompt 模板 + 自检清单 + 词汇升级表 + 报告生成",
    tags: ["Prompt Engineering", "AI Grading"],
    github: "https://github.com/jackyan318/IELTS-Writing-Improvement-Toolkit",
    link: null,
  },
  {
    name: "小红书选题生成器",
    description: "输入关键词，AI 生成选题方向 + 热度评分，辅助内容策划决策",
    tags: ["独立建站", "已上线"],
    github: null,
    link: "https://xhsxuanti.site",
  },
  {
    name: "KnowTool",
    description: "知识聚合站，多源信息整合与检索",
    tags: ["React", "已上线"],
    github: null,
    link: "https://knowtool.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-txt-primary">
          独立构建的 AI 项目
        </h2>
        <div className="grid gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`group p-7 md:p-8 rounded-2xl bg-bg-card border border-bdr hover:border-accent/30 card-glow transition-all duration-300 fade-up d${Math.min(i + 1, 5)}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-txt-primary group-hover:text-accent-light transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-txt-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-bg-dark text-txt-secondary border border-bdr"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 shrink-0 md:mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm border border-bdr text-txt-secondary hover:text-txt-primary hover:border-txt-muted transition-all duration-200"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm bg-accent text-white hover:bg-accent-light transition-all duration-200"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
