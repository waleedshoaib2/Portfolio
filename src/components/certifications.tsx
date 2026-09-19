export function Certifications() {
  const certifications = [
    { title: "CTO Craft Member", issuer: "CTO Craft Community", year: "Present", link: "https://ctocraft.com/" },
    { title: "FHIR Fundamentals Course", issuer: "Medblocks", year: "Sep 2026", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" },
    { title: "Neo4j Certified Professional", issuer: "Neo4j", year: "Nov 2025", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" },
    { title: "ServiceNow IT Leadership Professional Certificate", issuer: "ServiceNow", year: "Aug 2025", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" },
    { title: "Docker Foundations Professional Certificate", issuer: "Docker, Inc", year: "Aug 2024", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" },
    { title: "Microservices Foundations Professional Certificate", issuer: "Kong", year: "Aug 2024", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" },
    { title: "Jira: From Basics to Advanced for Agile Project Management", issuer: "Udemy", year: "Jul 2024", link: "https://www.linkedin.com/in/waleedshoaibai/details/certifications/" }
  ];

  return (
    <section id="certifications" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4">
        Certifications & Affiliations
      </h2>
      <ul className="space-y-4">
        {certifications.map((cert, i) => (
          <li key={i} className="font-[family-name:var(--font-source-sans)] text-[15px] text-text-secondary">
            <a href={cert.link} className="font-bold text-accent hover:underline">{cert.title}</a> — {cert.issuer} <span className="italic text-text-tertiary">({cert.year})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
