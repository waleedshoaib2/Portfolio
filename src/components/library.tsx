export function Library() {
  const books = [
    { title: "The Master Switch", author: "Tim Wu", status: "Read 2026", note: "Crucial context for understanding AI centralization." },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", status: "Read 2025", note: "The foundation of our evaluator-first architectural philosophy." },
    { title: "High Output Management", author: "Andrew Grove", status: "Read 2024", note: "The blueprint for running the engineering team at Aeyron." },
    { title: "The Making of the Atomic Bomb", author: "Richard Rhodes", status: "Currently Reading", note: "Fascinating look at large-scale technical coordination." }
  ];

  return (
    <section id="library" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto ">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4">
        Library & Influences
      </h2>
      <div className="space-y-6">
        <p className="font-[family-name:var(--font-source-sans)] text-[16px] text-text-secondary mb-8">
          I read heavily to inform both my engineering and management philosophies. Here is a selected log of influential books.
        </p>
        <ul className="space-y-6">
          {books.map((book, i) => (
            <li key={i} className="font-[family-name:var(--font-source-sans)] text-[15px] text-text-secondary">
              <span className="font-bold text-text-primary">{book.title}</span> by {book.author} <span className="italic text-text-tertiary">({book.status})</span>
              <br />
              <span className="text-[15px] italic text-text-tertiary">— {book.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
