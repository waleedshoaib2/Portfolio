export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4">
        Engineering Philosophy
      </h2>
      <div className="space-y-10 font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.65] text-text-secondary">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-2">
            1. Evaluators Over Prompting
          </h3>
          <p>
            If you cannot deterministically measure a pipeline's performance in CI/CD, you cannot ship it. The future of AI engineering is not writing better prompts; it is writing robust programmatic judges and evaluation loops.
          </p>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-2">
            2. Determinism from Probability
          </h3>
          <p>
            Language models are inherently probabilistic, but enterprise systems require determinism. The architect's job is to build the structural scaffolding—strict RAG architectures, validation layers, and semantic routing—that forces probabilistic models to yield reliable, repeatable results.
          </p>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-2">
            3. Granular Telemetry
          </h3>
          <p>
            Massive, monolithic LLM calls fail silently. Breaking complex tasks down into micro-agents or distinct evaluation steps allows for precise telemetry. When the system fails, you must know exactly which node in the graph hallucinated.
          </p>
        </div>
      </div>
    </section>
  );
}
