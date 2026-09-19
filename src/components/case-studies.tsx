export function CaseStudies() {
  const cases = [
    {
      title: "Eliminating Hallucinations in Legal Document Review",
      client: "Enterprise Legal Firm",
      metrics: "99.9% Citation Accuracy | 40x Faster Review",
      summary: "Architected an evaluator-first RAG pipeline that enforces strict provenance on all generated claims. By moving from a pure generation model to a generation-evaluation loop, we achieved deterministic reliability.",
      details: [
        {
          heading: "The Problem Space",
          text: "The client was relying on standard zero-shot LLM prompting to extract clauses from 500-page legal contracts. While extraction speed was high, the model suffered a 4% hallucination rate—unacceptable in compliance environments where a single fabricated clause can invalidate a case."
        },
        {
          heading: "Architectural Shift: The Evaluator Loop",
          text: "Instead of relying on prompt engineering to suppress hallucinations, I decoupled the architecture into two distinct agents: a Generator and a programmatic Judge. The Generator creates the initial extraction. The Judge then runs a deterministic substring-matching algorithm (and a secondary constrained LLM check) to verify that every single claim generated exists verbatim in the source context."
        },
        {
          heading: "Outcome",
          text: "By enforcing this structural provenance, we eliminated hallucinated claims entirely. The system now processes 10,000+ pages a day with 99.9% verifiable citation accuracy, fundamentally shifting the firm's document review economics."
        }
      ]
    },
    {
      title: "Real-Time Object Detection for Remote Sensing",
      client: "AgriTech Startup",
      metrics: "Sub-50ms Inference | 92% mAP",
      summary: "Designed and deployed a custom computer vision architecture optimized for edge devices, enabling real-time crop analysis from drone feeds without relying on cloud inference.",
      details: [
        {
          heading: "The Problem Space",
          text: "Drones capturing remote agricultural data were bottlenecked by cloud dependency. Pushing gigabytes of raw video feed over intermittent 4G networks caused massive latency, preventing real-time decision making for automated crop dusting."
        },
        {
          heading: "Edge-First Vision Architecture",
          text: "I spearheaded the transition to edge inference. I architected a custom YOLO-based detection pipeline, quantized the models using TensorRT, and optimized the inference graph for deployment directly on Jetson Nano edge modules attached to the drones. I also implemented a robust annotation strategy to fine-tune the model specifically for top-down canopy topologies."
        },
        {
          heading: "Outcome",
          text: "The drones now run inference locally in sub-50ms per frame. The system achieves 92% mAP without a continuous internet connection, allowing the client to scale their fleet globally into zero-connectivity rural zones."
        }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-12 pb-4">
        Case Studies
      </h2>
      <div className="space-y-16">
        {cases.map((study, i) => (
          <div key={i} id={`study-${i}`} className="scroll-mt-24">
            <h3 className="font-[family-name:var(--font-sora)] text-[20px] font-bold text-text-primary mb-1 group relative flex items-center">
              <a href={`#study-${i}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-text-tertiary font-[family-name:var(--font-mono)] transition-opacity text-[16px]">
                #
              </a>
              {study.title}
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-widest text-text-tertiary mb-6 pb-4 border-b border-border">
              {study.client} // {study.metrics}
            </p>
            
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-source-sans)] text-[18px] leading-[1.6] text-text-primary font-medium italic">
                {study.summary}
              </p>
              
              <div className="pl-4 border-l-2 border-border space-y-6 mt-8">
                {study.details.map((detail, j) => (
                  <div key={j}>
                    <h4 className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-widest text-text-primary mb-2">
                      {detail.heading}
                    </h4>
                    <p className="font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.65] text-text-secondary">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
