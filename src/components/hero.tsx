"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-16 pb-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <Image 
          src="/profile.png" 
          alt="Waleed Shoaib - CTO & AI Engineer" 
          width={200} 
          height={200} 
          className="rounded-sm object-cover w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shrink-0 grayscale"
        />
        <div>
          <h1 className="font-[family-name:var(--font-sora)] text-[32px] sm:text-[48px] font-bold tracking-tight text-text-primary mb-2 leading-none">
            Waleed Shoaib
          </h1>
          <p className="font-[family-name:var(--font-source-sans)] text-[18px] sm:text-[20px] text-text-secondary mb-6">
            AI Engineer & Researcher
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-border">
            <a href="https://github.com/waleedshoaib2" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-source-sans)] text-[15px] text-accent hover:underline decoration-1 underline-offset-4">GitHub</a>
            <a href="https://linkedin.com/in/waleedshoaibai" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-source-sans)] text-[15px] text-accent hover:underline decoration-1 underline-offset-4">LinkedIn</a>
            <a href="https://waleedshoaibai.substack.com" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-source-sans)] text-[15px] text-accent hover:underline decoration-1 underline-offset-4">Substack</a>
          </div>
        </div>
      </div>

      <div className="font-[family-name:var(--font-source-sans)] text-[18px] leading-[1.7] text-text-secondary space-y-6 mt-10">
        <p>
          I am the CTO at Aeyron in Islamabad, where I architect evaluator-first AI pipelines. I build deterministic systems out of probabilistic models for healthcare, remote sensing, and enterprise infrastructure.
        </p>
        <p>
          My research focuses on evaluating RAG pipelines, resolving metric integrity bugs in open-source frameworks, and applying computer vision to large-scale topological data. 
        </p>
        <p>
          Beyond engineering, I am deeply invested in the discipline of technology leadership and am an active part of the CTO Craft community, sharing insights on scaling AI engineering teams and shipping reliable production models.
        </p>
        
        <div className="pt-6 mt-6 border-t border-border">
          <p className="font-[family-name:var(--font-mono)] text-[13px] text-text-primary uppercase tracking-widest mb-2 font-bold">Core Stack</p>
          <p className="font-[family-name:var(--font-mono)] text-[14px] text-text-secondary leading-[1.7]">
            [ Python, PyTorch, YOLO, LlamaIndex, LangChain, Milvus, ClickHouse, Neo4j, GCP, Docker, FastAPI ]
          </p>
        </div>
      </div>
    </section>
  );
}
