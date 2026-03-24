"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, CircuitBoard, Cpu, DatabaseZap, ServerCog } from "lucide-react";
import { projects } from "@/data/site";

const skills = {
  "AI / LLM": ["LangChain", "CrewAI", "RAG", "Prompt Engineering", "Model Eval"],
  Data: ["Kafka", "Spark", "Databricks", "ETL", "Delta Lake"],
  Cloud: ["AWS", "Bedrock", "Lambda", "OpenSearch", "Redis"],
};

const blogs = [
  "RAG Architectures for Regulated Enterprise Data",
  "Bedrock vs OpenAI for Private Workloads",
  "Designing Fault-Tolerant Kafka Pipelines",
];

export function HomeSections() {
  return (
    <>
      <section id="home" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            I build scalable AI & data systems for enterprise-grade problems
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Architecting resilient retrieval systems, event-driven pipelines, and agentic workflows that move from pilot to production.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "RAG Systems",
              "Data Pipelines",
              "Agentic AI",
              "Distributed Systems",
              "Cost-Optimized",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
          <p className="text-sm text-slate-400">Profile</p>
          <h2 className="mt-2 text-xl font-semibold">AI Engineer @ PwC</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>5+ years building enterprise AI and data platforms</p>
            <p>100K+ jobs/day pipelines at scale</p>
            <p>Specialized in reliable, governed production systems</p>
          </div>
        </aside>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-white">Featured AI & Data Projects</h2>
          <a href="https://github.com/" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-100">
            See More <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
                <p><span className="font-semibold text-slate-100">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-slate-100">Solution:</span> {project.solution}</p>
                <div>
                  <p className="font-semibold text-slate-100">Impact:</p>
                  <ul className="mt-1 space-y-1">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold text-white">Architecture Preview</h2>
        <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <pre className="overflow-x-auto text-xs leading-relaxed text-sky-200">
{`[Sources] -> [Kafka Ingestion] -> [ETL + Validation] -> [OpenSearch Index]
                   |                                  |
                   v                                  v
             [Databricks Jobs]                [Bedrock + RAG API]
                   |                                  |
                   +---------> [Agent Orchestrator] <-+
                                      |
                                [Observability]`}
          </pre>
          <p className="mt-4 text-sm text-slate-300">
            Event-driven flow with decoupled ingestion, retrieval, and orchestration layers for fault tolerance and low-latency inference.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2" id="work">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Skillset</h2>
          <div className="mt-4 grid gap-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm font-semibold text-slate-100">{category}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-600 px-2.5 py-1 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-1"><ServerCog className="h-3.5 w-3.5" />Scalable</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-1"><DatabaseZap className="h-3.5 w-3.5" />Fault-tolerant</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-1"><CircuitBoard className="h-3.5 w-3.5" />Event-driven</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-2 py-1"><Cpu className="h-3.5 w-3.5" />Cost-optimized</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Experience Timeline</h2>
          <ol className="mt-4 space-y-3 border-l border-slate-700 pl-4 text-sm text-slate-300">
            {["PwC", "Digimaxx", "Straive", "Tivona"].map((company) => (
              <li key={company} className="relative">
                <span className="absolute -left-[1.15rem] top-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                {company}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="case-study" className="mx-auto max-w-6xl px-6 py-14">
        <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Case Study: RAG Pipeline for Norfolk Southern</h2>
          <div className="mt-4 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
            <p><span className="font-semibold text-slate-100">Problem:</span> Domain experts needed instant access to operational knowledge across fragmented documentation.</p>
            <p><span className="font-semibold text-slate-100">Architecture:</span> Kafka ingestion, quality filters, embedding/indexing, Bedrock inference, and guardrailed agent workflows.</p>
            <p><span className="font-semibold text-slate-100">Outcome:</span> Trusted answers with citations, faster onboarding, and reduced support dependency.</p>
          </div>
        </article>
      </section>

      <section id="blogs" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold text-white">Blog Ideas</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog} className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-200">
              {blog}
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-500/15 to-violet-500/15 p-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Let’s build your AI system</h2>
          <p className="mt-3 text-slate-200">From architecture strategy to implementation, I can help ship production-ready AI platforms.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950" href="mailto:viknu@example.com">Email</a>
            <a className="rounded-full border border-slate-400 px-5 py-2 text-sm" href="https://calendly.com/" target="_blank" rel="noreferrer">Calendly</a>
            <a className="rounded-full border border-slate-400 px-5 py-2 text-sm" href="https://wa.me/10000000000" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
