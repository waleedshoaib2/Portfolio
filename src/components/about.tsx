"use client";

import { Reveal } from "./reveal";

const stats = [
  { value: "4+", label: "Years shipping production AI" },
  { value: "3", label: "Enterprise products live" },
  { value: "3", label: "IEEE publications" },
  { value: "4.7K", label: "LinkedIn followers" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
      <Reveal>
        <div className="flex items-center gap-4 border-b border-border pb-4 mb-16">
          <span className="font-[family-name:var(--font-mono)] text-[11px] font-bold tracking-widest uppercase text-text-tertiary">
            Data.Author_Profile
          </span>
          <span className="ml-auto font-[family-name:var(--font-mono)] text-[11px] uppercase text-text-tertiary">
            ID: W.S-001
          </span>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_250px] gap-12 items-start">
        <div className="space-y-6">
          <p className="font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.7] text-text-secondary">
            I'm Waleed Shoaib. I write code every day, leading the engineering team at Aeyron in Islamabad. Our AI products are integrated directly into the daily workflows of enterprise clients across the Middle East and USA.
          </p>

          <p className="font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.7] text-text-secondary">
            My engineering philosophy centers around the "evaluator-first architecture." Production AI shouldn't rely on pure generation; it must have deterministic evaluation loops to survive reality. I apply this across healthcare RAG pipelines and remote sensing ML.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-[family-name:var(--font-mono)] text-[24px] text-text-primary mb-1">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:order-first">
          <div className="w-full aspect-[4/5] bg-surface border border-border p-2">
            <div className="w-full h-full relative overflow-hidden bg-bg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover grayscale opacity-90 contrast-125"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <div className="w-1 h-1 bg-text-primary"></div>
                <div className="w-1 h-1 bg-text-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
