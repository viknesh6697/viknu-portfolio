export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Architecture", href: "#architecture" },
  { label: "AI Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export const labsLinks = [
  {
    label: "RAG Agent Sandbox",
    description: "Evaluate retrieval quality and response grounding.",
    href: "https://github.com/",
  },
  {
    label: "Kafka Replay Lab",
    description: "Stress-test event streams with fault simulation.",
    href: "https://github.com/",
  },
  {
    label: "PromptOps Toolkit",
    description: "Versioned prompts, eval runs, and safety checks.",
    href: "https://github.com/",
  },
];

export const projects = [
  {
    title: "Enterprise RAG Pipeline (Kafka + Bedrock)",
    problem:
      "Business users lacked trusted answers from thousands of operational documents.",
    solution:
      "Designed an event-driven ingestion and retrieval pipeline using Kafka, OpenSearch, and Bedrock with traceable citations.",
    impact: ["1000+ files indexed in 3 hours", "75% reduction in response latency"],
    stack: ["AWS", "Kafka", "Bedrock", "LangChain", "OpenSearch", "Redis"],
  },
  {
    title: "Databricks Financial Reconciliation Platform",
    problem: "Manual reconciliation workflows caused reporting delays and data drift.",
    solution:
      "Built quality-guarded ETL workflows and exception routing with Spark and Delta Live Tables.",
    impact: ["100K+ jobs/day pipelines", "99.9% workflow reliability"],
    stack: ["Databricks", "Spark", "Delta", "Airflow", "AWS"],
  },
  {
    title: "Multi-Agent Incident Resolution System",
    problem: "SRE teams needed faster triage of multi-service incidents.",
    solution:
      "Implemented agent orchestration for root-cause analysis, runbook lookup, and remediation planning.",
    impact: ["42% faster MTTR", "30% reduction in escalations"],
    stack: ["CrewAI", "LangChain", "Python", "Redis", "OpenSearch"],
  },
];
