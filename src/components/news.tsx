export function News() {
  const messages = [
    { 
      date: "September 15, 2026", 
      text: "Currently thinking a lot about evaluator-first architectures. If we can't deterministically evaluate a pipeline in CI/CD, we have no business shipping it to production. The next phase of AI engineering is entirely about writing better programmatic judges, not just better prompts.",
      code: `def evaluate_provenance(claim: str, context: str) -> bool:
    """Deterministic check before LLM evaluation."""
    if not is_substring_fuzzy(claim, context):
        raise HallucinationError("Claim not found in context")
    return True`
    },
    { date: "August 20, 2026", text: "Just finished re-reading The Master Switch. It's fascinating how the current AI landscape mirrors the early days of radio and telecom. The centralizing forces are identical." },
    { date: "July 10, 2026", text: "Open source contribution merged into Ragas today. Fixing metric integrity bugs is unglamorous work, but it's the only way we build trust in these systems." }
  ];

  return (
    <section id="notes" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4">
        Notes & Thoughts
      </h2>
      <div className="space-y-10">
        {messages.map((msg, i) => (
          <div key={i} className="pl-4 border-l-2 border-border hover:border-accent transition-colors">
            <p className="font-[family-name:var(--font-mono)] text-[12px] text-text-tertiary mb-2">
              {msg.date}
            </p>
            <p className="font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.6] text-text-primary">
              {msg.text}
            </p>
            {msg.code && (
              <pre className="mt-4 p-4 bg-bg-secondary border border-border rounded-sm overflow-x-auto text-[13px] font-[family-name:var(--font-mono)] text-text-secondary leading-[1.6]">
                <code>{msg.code}</code>
              </pre>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
