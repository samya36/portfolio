import React from "react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-txt-muted text-sm tracking-[0.2em] uppercase mb-8 fade-up">
          AI Ops · Product · Engineering
        </p>
        <h1 className="mb-8 fade-up d1">
          <span className="gradient-text text-7xl md:text-8xl font-extrabold tracking-tight block">
            严美红
          </span>
          <span className="text-txt-secondary text-3xl md:text-4xl font-light mt-4 block">
            Yan Meihong
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-txt-secondary leading-relaxed mb-14 fade-up d2 max-w-xl mx-auto">
          将 AI 能力落地为可复用的产品和工作流
        </p>
        <div className="flex items-center justify-center gap-4 fade-up d3">
          <a
            href="https://github.com/jackyan318"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl border border-bdr text-txt-secondary hover:text-txt-primary hover:border-txt-muted transition-all duration-200"
          >
            View Projects
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 text-xs sm:text-sm text-txt-muted fade-up d4 flex-wrap">
          <a href="https://github.com/jackyan318" target="_blank" rel="noopener noreferrer" className="hover:text-txt-secondary transition-colors">jackyan318</a>
          <span className="text-bdr">·</span>
          <a href="https://github.com/samya36" target="_blank" rel="noopener noreferrer" className="hover:text-txt-secondary transition-colors">samya36</a>
          <span className="text-bdr">·</span>
          <span>公众号「AI运营教程」</span>
        </div>
      </div>
    </section>
  );
}
