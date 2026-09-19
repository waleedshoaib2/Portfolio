"use client";

import { Reveal } from "./reveal";

const jobs = [
  {
    company: "Aeyron",
    role: "Chief Technology Officer",
    period: "Apr 2026 – Present",
    location: "Lewes, DE & Islamabad",
    current: true,
    bullets: [
      "Problem: Enterprise clients required deterministic guarantees from probabilistic LLM outputs before deploying to high-stakes healthcare and finance environments.",
      "Solution: Architected an evaluator-first roadmap for 3 production AI products across MENA and USA, ensuring strict structural scaffolding (RAG, validation layers, semantic routing) over raw LLM generation.",
      "Engineered real-time YOLO-based computer vision pipelines—handling the full lifecycle from annotation strategy to sub-50ms low-latency inference at the edge.",
      "Implemented granular telemetry using Prometheus and Grafana, ensuring observability across the entire inference graph.",
    ],
  },
  {
    company: "Aeyron",
    role: "Senior AI Engineer",
    period: "May 2025 – Apr 2026",
    location: "Islamabad",
    bullets: [
      "Problem: Single-prompt LLM solutions were hallucinating on complex, multi-step forex data and manual analysis was bottlenecked.",
      "Solution: Built autonomous, multi-agent collaborative systems using LlamaIndex and ReAct, improving financial analysis accuracy by 35%.",
      "Designed a high-throughput forex intelligence pipeline ingesting raw market data into ClickHouse with sub-500ms latency.",
    ],
  },
  {
    company: "Catalic AI",
    role: "AI Engineer",
    period: "Mar – May 2025",
    location: "Remote",
    bullets: [
      "Problem: Ingesting massive FOMC datasets caused memory exhaustion and slow contextual retrieval for research agents.",
      "Solution: Built robust ETL pipelines and established long-term semantic memory architectures via Milvus, reducing processing time by 10% and scaling retrieval.",
    ],
  },
  {
    company: "Objex",
    role: "Software Engineer",
    period: "Mar 2024 – Feb 2025",
    location: "Montreal, Canada",
    bullets: [
      "Problem: Legacy search architecture yielded poor semantic relevancy and severe API latency spikes.",
      "Solution: Migrated to a cloud-native microservices platform on GCP, integrating RAG components to drive a 40% improvement in search relevancy.",
      "Optimized core GraphQL APIs (achieving a 25% latency reduction) and decoupled services using event-driven Pub/Sub pipelines.",
    ],
  },
  {
    company: "Eastlancer",
    role: "Junior Software Engineer",
    period: "Mar 2022 – Feb 2024",
    location: "Islamabad",
    bullets: [
      "Problem: Monolithic backend structures made it extremely difficult and brittle to integrate emerging third-party AI services.",
      "Solution: Built scalable, decoupled backend APIs with Node.js/Express, ensuring resilient API integrations without cascading timeout failures.",
    ],
  },
];

export function Experience() {
  return (
    <section id="work" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto ">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4 border-b border-border">
        Professional Career
      </h2>

      <div className="space-y-12">
        {jobs.map((job, i) => (
          <div key={`${job.company}-${job.role}`}>
            <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-1">
              {job.role}
            </h3>
            <div className="font-[family-name:var(--font-source-sans)] text-[16px] text-text-secondary mb-4">
              {job.company} — {job.location} | {job.period}
            </div>
            
            <ul className="list-disc pl-5 space-y-2">
              {job.bullets.map((bullet, j) => {
                // Bold the Problem/Solution keywords
                const formattedBullet = bullet.replace("Problem:", "<strong>Problem:</strong>").replace("Solution:", "<strong>Solution:</strong>");
                return (
                  <li
                    key={j}
                    className="font-[family-name:var(--font-source-sans)] text-[15px] leading-[1.6] text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: formattedBullet }}
                  />
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4 border-b border-border mt-16">
        Side Ventures & Consulting
      </h2>

      <div className="space-y-12">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-1">
            Independent AI Consultant
          </h3>
          <div className="font-[family-name:var(--font-source-sans)] text-[16px] text-text-secondary mb-4">
            Global | 2024 – Present
          </div>
          
          <ul className="list-disc pl-5 space-y-2">
            <li className="font-[family-name:var(--font-source-sans)] text-[15px] leading-[1.6] text-text-secondary">
              <strong>Problem:</strong> Early-stage startups were building brittle LLM prototypes based entirely on prompting, failing in production.
            </li>
            <li className="font-[family-name:var(--font-source-sans)] text-[15px] leading-[1.6] text-text-secondary">
              <strong>Solution:</strong> Advised technical founders on transitioning to robust, evaluator-first architectures. Architected custom RAG pipelines for legal and compliance firms requiring 100% deterministic citation guarantees.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
