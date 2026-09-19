"use client";

import { Reveal } from "./reveal";

const publications = [
  {
    badge: "IEEE GRSL · 2026",
    title:
      "Point-Cloud-Native L-Band Augmentation of SWOT KaRIn: Recovering Canopy-Shadowed Dark Water with NISAR",
    authors: ["W. Shoaib", "B. Ismail", "M. Salik"],
    venue: "IEEE Geoscience and Remote Sensing Letters, 2026",
    linkText: "[DOI]",
    linkUrl: "https://zenodo.org/records/22818804",
    highlight:
      "First combined use of NISAR L-band SAR and SWOT pixel clouds on real co-observed scenes. +11.3 pp dark-water recall on Congo, +17.9 pp on Amazon (disjoint 95% bootstrap CIs).",
  },
  {
    badge: "IEEE GRSL · 2026",
    title:
      "Semantic-Conditioned Spectral Fusion for Label-Efficient Multispectral Adaptation of Frozen Remote-Sensing VLMs",
    authors: ["B. Ismail", "W. Shoaib"],
    venue: "IEEE Geoscience and Remote Sensing Letters, 2026. (Under Review)",
    linkText: "[DOI]",
    linkUrl: "https://zenodo.org/records/22729754",
    highlight:
      "~0.1M parameter module adapting frozen RGB VLMs to multispectral imagery via FiLM-conditioned spectral fusion. +4.6% accuracy on EuroSAT-MS.",
  },
  {
    badge: "Whitepaper · 2026",
    title:
      "Why Production AI Fails on Day 90 — and What Evaluator-First Architecture Fixes",
    authors: ["W. Shoaib"],
    venue: "Whitepaper, 2026",
    linkText: "[PDF]",
    linkUrl: "#",
    highlight:
      "Proposes an evaluator-first architecture where evaluation agents are built before generation agents, enabling production AI systems that self-correct and improve post-deployment.",
  },
];

export function Research() {
  return (
    <section id="research" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4 border-b border-border">
        Publications & Open Source
      </h2>

      <div className="space-y-12">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-6">
            Selected Papers
          </h3>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div key={pub.title} id={`pub-${i}`} className="scroll-mt-24 group">
                <h4 className="font-[family-name:var(--font-sora)] text-[16px] font-bold text-text-primary mb-1 relative flex items-start gap-2">
                  <a href={`#pub-${i}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-text-tertiary font-[family-name:var(--font-mono)] transition-opacity text-[16px]">
                    #
                  </a>
                  <span>
                    {pub.title}{" "}
                    <a href={pub.linkUrl} className="text-accent hover:underline font-[family-name:var(--font-mono)] text-[13px] ml-1">
                      {pub.linkText}
                    </a>
                  </span>
                </h4>
                <p className="font-[family-name:var(--font-source-sans)] text-[15px] text-text-primary mb-1">
                  {pub.authors.join(", ")}
                </p>
                <p className="font-[family-name:var(--font-source-sans)] text-[15px] text-text-secondary italic mb-2">
                  {pub.venue}
                </p>
                <p className="font-[family-name:var(--font-source-sans)] text-[15px] leading-[1.6] text-text-secondary">
                  {pub.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-bold text-text-primary mb-6">
            Open Source Contributions
          </h3>
          <div>
            <h4 className="font-[family-name:var(--font-sora)] text-[16px] font-bold text-accent mb-2">
              <a href="https://github.com/vibrantlabsai/ragas/pull/3008" className="hover:underline">Ragas Framework (PR #3008)</a>
            </h4>
            <p className="font-[family-name:var(--font-source-sans)] text-[15px] text-text-secondary leading-[1.6] mb-4">
              Fixed three metric integrity bugs that could silently corrupt
              evaluation scores in production. 24 deterministic regression tests.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {[
                "NaN masking — np.nanmean hiding 90% failure rates as perfect scores",
                "Prompt injection — unsanitized context reaching judge prompts",
                "JSON extraction — preliminary verdicts overriding final ones",
              ].map((fix) => (
                <li
                  key={fix}
                  className="font-[family-name:var(--font-source-sans)] text-[14px] text-text-secondary"
                >
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
