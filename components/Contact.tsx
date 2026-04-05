import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-bg-dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-txt-primary">
          Let's Connect
        </h2>
        <p className="text-txt-secondary mb-12">
          对 AI 产品、AI 工程或 AI 运营方向有合作意向，欢迎联系
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:2641614804@qq.com"
            className="px-8 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-all duration-200"
          >
            2641614804@qq.com
          </a>
          <a
            href="https://github.com/jackyan318"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-bdr text-txt-secondary hover:text-txt-primary hover:border-txt-muted transition-all duration-200"
          >
            GitHub · jackyan318
          </a>
          <a
            href="https://github.com/samya36"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-bdr text-txt-secondary hover:text-txt-primary hover:border-txt-muted transition-all duration-200"
          >
            GitHub · samya36
          </a>
        </div>
        <p className="mt-20 text-txt-muted text-xs">
          © 2026 严美红. Built with Bun + React + Tailwind.
        </p>
      </div>
    </section>
  );
}
