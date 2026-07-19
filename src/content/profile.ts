// ============================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
//  Edit this file to update the site. Nothing else needs to change.
//  Lines marked  // TODO  are placeholders — replace with real, sanitized info.
// ============================================================================

export const profile = {
  name: "Vamshi Krishna Chatla",
  // The one-liner recruiters read first. Backend-first, GenAI as differentiator.
  role: "Java Backend Engineer",
  tagline: "Backend systems engineer building production GenAI services.",
  location: "Chennai, India",

  // Links shown in hero + contact. Leave a value empty ("") to hide that link.
  links: {
    email: "vamshikrishnachatla@gmail.com",
    linkedin: "https://www.linkedin.com/in/vamshikrishnachatla816/",
    leetcode: "https://leetcode.com/u/vamshikrishnachatla/",
    github: "", // empty on purpose — hidden until there's something to show
    resume: "/resume.pdf", // drop your resume PDF into /public as resume.pdf
  },
} as const;

export const about = {
  heading: "About",
  // 3–4 sentences. Who you are, what you do, what you're looking for.
  body: [
    "I'm a backend engineer with 3+ years at Zoho Corp, working across Java, Spring Boot, and distributed systems.",
    "For the last two years my focus has been production GenAI infrastructure — RAG pipelines, agentic tool-calling, and LLM orchestration across multiple model providers — all on a Java stack.",
    "I care about systems that stay correct and fast under load: clean service boundaries, sensible caching, and observable failure modes.",
  ],
} as const;

// Skill groups mirror the resume's 6 categories.
export const skills = [
  { group: "Languages", items: ["Java", "Python", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "Microservices", "REST APIs", "Multithreading"] },
  { group: "Data & Messaging", items: ["MySQL", "Redis Cluster", "Apache Kafka"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes"] },
  { group: "Search / NLP / GenAI", items: ["RAG", "LLM Orchestration", "Tool Calling", "Apache Lucene", "OpenNLP"] },
  { group: "Foundations", items: ["Distributed Systems", "System Design", "DSA"] },
] as const;

export const experience = [
  {
    company: "Zoho Corp",
    title: "Member Technical Staff",
    period: "Jun 2023 — Present",
    location: "Chennai, India",
    // Short, sanitized bullets. No internal jargon. Add numbers when you have them.
    bullets: [
      "Build backend services on Java and Spring Boot for a production AI assistant used across Zoho products.", // TODO: how many products / query volume
      "Designed a RAG pipeline for grounded question-answering over large document corpora.",
      "Implemented LLM orchestration routing requests across multiple model providers (OpenAI, Qwen, Llama).",
      "Owned microservices with Kafka messaging and Redis Cluster caching for low-latency reads.", // TODO: how many services
    ],
  },
] as const;

// ============================================================================
//  CASE STUDIES — the differentiator. Keep sanitized (no employer IP).
//  For each: problem → what you built → impact. Add real numbers when you have them.
// ============================================================================
export const caseStudies = [
  {
    slug: "rag-pipeline",
    title: "RAG Pipeline for Grounded Q&A",
    summary: "Retrieval-augmented generation over large document corpora with source-grounded answers.",
    tags: ["Java", "Spring Boot", "RAG", "Vector Search", "LLM"],
    problem:
      "TODO: What needed solving? (e.g. users needed accurate answers grounded in internal docs, not hallucinated ones.)",
    build:
      "TODO: What you built + how. (e.g. chunking + embeddings + retrieval, prompt assembly, citation of sources, guardrails.)",
    impact:
      "TODO: Impact / numbers. (e.g. answer relevance, latency, corpus size, query volume.)",
  },
  {
    slug: "async-query-service",
    title: "Async Query Processing Service",
    summary: "Non-blocking service for long-running query workloads with backpressure and retries.",
    tags: ["Java", "Multithreading", "Kafka", "Redis"],
    problem:
      "TODO: What needed solving? (e.g. synchronous processing timed out on heavy queries.)",
    build:
      "TODO: What you built + how. (e.g. async task queue, worker pool, Kafka for decoupling, Redis for state.)",
    impact:
      "TODO: Impact / numbers. (e.g. throughput, p99 latency, reliability under load.)",
  },
  {
    slug: "llm-orchestration",
    title: "Multi-Provider LLM Orchestration",
    summary: "Routing layer that selects and falls back across LLM providers with tool-calling support.",
    tags: ["Java", "LLM", "Tool Calling", "Resilience"],
    problem:
      "TODO: What needed solving? (e.g. single-provider dependency, cost/latency tradeoffs, rate limits.)",
    build:
      "TODO: What you built + how. (e.g. provider abstraction, routing policy, fallback, tool-calling schema.)",
    impact:
      "TODO: Impact / numbers. (e.g. providers unified, cost saved, uptime under provider outages.)",
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];
