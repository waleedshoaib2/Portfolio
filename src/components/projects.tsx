"use client";

export function Projects() {
  const projects = [
    {
      pillar: "Healthcare",
      title: "Cornerstone AI",
      description: "Engineered a three-stage RAG pipeline that accurately mimics individual clinician writing styles to generate patient-specific DOCX reports. Built async ingestion services using LanceDB to handle massive document loads without blocking the main event loop. Completely containerized (Docker) and deployed to GCP via automated CI/CD pipelines.",
      tags: ["RAG", "LanceDB", "GCP", "Docker"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
    {
      pillar: "Healthcare / MENA",
      title: "Receiptly AI",
      description: "Architected a hybrid extraction pipeline combining Google Gemini and PaddleOCR (PP-StructureV3) to parse bilingual English/Arabic medical receipts and complex PDFs. Enforced strict custom JSON schemas to guarantee deterministic data ingestion. Handled end-to-end GPU deployment serving enterprise clients across the Middle East.",
      tags: ["Gemini", "PaddleOCR", "Bilingual OCR", "JSON Schema"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
    {
      pillar: "Remote Sensing",
      title: "GeoAsset",
      description: "Designed a multi-sensor geospatial detection architecture. Utilized YOLO-OBB with SAHI for high-altitude satellite imagery, YOLO-World for open-vocabulary street-level detection, and integrated raw LiDAR point clouds. The system fuses inferences with OpenStreetMap data and exports structured geospatial topologies directly to PostGIS databases.",
      tags: ["YOLO", "SAHI", "PostGIS", "LiDAR"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
    {
      pillar: "Computer Vision",
      title: "DataLadder",
      description: "Solved severe image alignment issues in retail environments by building a panorama stitching engine using EfficientLoFTR matching and multiband blending. Deployed as a high-throughput async FastAPI/S3 microservice, achieving a 48× speedup in exposure compensation over previous OpenCV-based baselines.",
      tags: ["EfficientLoFTR", "FastAPI", "AWS S3", "OpenCV"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
    {
      pillar: "Computer Vision / Synthetic Data",
      title: "SteriSmart",
      description: "Overcame severe data scarcity in surgical environments by building an automated procedural pipeline in Blender and FreeCAD. The system procedurally generates highly photorealistic, multi-view synthetic datasets of orthopedic surgical instruments, complete with dynamic lighting and occlusion, directly for downstream CV model fine-tuning.",
      tags: ["Blender", "Synthetic Data", "FreeCAD", "Domain Randomization"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
    {
      pillar: "Finance",
      title: "Forex Intelligence",
      description: "Architected a high-throughput, low-latency financial ingestion engine pumping raw market tick data and global news streams directly into ClickHouse. Integrated FinBERT and Milvus to generate real-time, sentiment-driven macroeconomic summaries and trend signals with strict sub-500ms latency guarantees.",
      tags: ["ClickHouse", "FinBERT", "Milvus", "High Throughput"],
      linkText: "[Proprietary - Enterprise]",
      linkUrl: "#",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-[800px] mx-auto">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4 border-b border-border">
        Selected Engineering Systems
      </h2>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <div key={project.title} id={`project-${i}`} className="group scroll-mt-24">
            <h3 className="font-[family-name:var(--font-sora)] text-[20px] font-bold text-text-primary mb-1 relative flex items-center">
              <a href={`#project-${i}`} className="absolute -left-6 opacity-0 group-hover:opacity-100 text-text-tertiary font-[family-name:var(--font-mono)] transition-opacity text-[16px]">
                #
              </a>
              {project.title}
              <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] font-normal tracking-widest text-text-tertiary uppercase bg-bg-secondary px-2 py-0.5 rounded-sm">
                {project.linkText}
              </span>
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-[13px] text-text-tertiary mb-3 uppercase tracking-wider">
              {project.pillar} / {project.tags.join(", ")}
            </p>
            <p className="font-[family-name:var(--font-source-sans)] text-[16px] leading-[1.65] text-text-secondary">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
