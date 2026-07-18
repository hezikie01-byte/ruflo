<div align="center">

[![Ruflo Banner](assets/ruflo-small.jpeg)](../../releases)

<!-- Try Ruflo — the 4 badges first-time visitors actually act on -->
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)



# Ruflo

**An agent meta-harness for Claude Code and Codex.**

</div>

> **Agent = Model + Harness.** The model writes; the harness gives it tools, memory, loops, sandboxes, and controls so it can actually work. **Ruflo is the harness** — the execution layer around Claude Code and Codex that adds 100+ specialized agents, coordinated swarms, self-learning memory, federated comms across machines, and enterprise security guardrails. So agents don't just run, they collaborate.

> **New to Ruflo?** You don't need to learn 314 MCP tools or 26 CLI commands. After `init`, just use Claude Code normally — the hooks system automatically routes tasks, learns from successful patterns, and coordinates agents in the background.

---

## Quick Start

Latest release: **v3.32.4** — [View all releases](../../releases)

| Platform | Download | Run |
|----------|----------|-----|
| **Windows x64** | [ruflo-x64.7z](../../releases) | Run installer → launch `ruflo-x64.exe` |
| **Linux x64** | [ruflo-Linux-x64.run](../../releases) | `chmod +x` → run installer |
| **macOS Apple Silicon** | [ruflo-macOS-arm64.dmg](../../releases) | Open DMG → drag to Applications |

<details>
<summary><strong>🔌 All 35 plugins</strong></summary>

#### Core & Orchestration

| Plugin | What it does |
|--------|-------------|
| **ruflo-core** | Foundation — server, health checks, plugin discovery |
| **ruflo-swarm** | Coordinate multiple agents as a team |
| **ruflo-autopilot** | Let agents run autonomously in a loop |
| **ruflo-loop-workers** | Schedule background tasks on a timer |
| **ruflo-workflows** | Reusable multi-step task templates |
| **ruflo-federation** | Agents on different machines collaborate securely |

#### Memory & Knowledge

| Plugin | What it does |
|--------|-------------|
| **ruflo-agentdb** | Fast vector database for agent memory |
| **ruflo-rag-memory** | Smart retrieval — hybrid search, graph hops, diversity ranking |
| **ruflo-rvf** | Save and restore agent memory across sessions |
| **ruflo-ruvector** | `ruvector` — GPU-accelerated search, Graph RAG, 103 tools |
| **ruflo-knowledge-graph** | Build and traverse entity relationship maps |

#### Intelligence & Learning

| Plugin | What it does |
|--------|-------------|
| **ruflo-intelligence** | Agents learn from past successes and get smarter |
| **ruflo-graph-intelligence** | Sublinear graph reasoning — PageRank, delta updates, complexity-aware execution (ADR-123) |
| **ruflo-daa** | Dynamic agent behavior and cognitive patterns |
| **ruflo-ruvllm** | Run local LLMs (Ollama, etc.) with smart routing |
| **ruflo-goals**| Break big goals into plans and track progress |

#### Code Quality & Testing

| Plugin | What it does |
|--------|-------------|
| **ruflo-testgen** | Find missing tests and generate them automatically |
| **ruflo-browser** | Automate browser testing with Playwright |
| **ruflo-jujutsu** | Analyze git diffs, score risk, suggest reviewers |
| **ruflo-docs** | Generate and maintain documentation automatically |

#### Security & Compliance

| Plugin | What it does |
|--------|-------------|
| **ruflo-security-audit** | Scan for vulnerabilities and CVEs |
| **ruflo-aidefence** | Block prompt injection, detect PII, safety scanning |

#### Architecture & Methodology

| Plugin | What it does |
|--------|-------------|
| **ruflo-adr** | Track architecture decisions with a living record |
| **ruflo-ddd** | Scaffold domain-driven design — contexts, aggregates, events |
| **ruflo-sparc** | Guided 5-phase development methodology with quality gates |
| **ruflo-metaharness** | Grade your agent setup, scan tool configs for security risks, and track changes over time |
| **ruflo-arena** | Competitive ruliology — pit agent strategies against each other in tournaments, hill-climb and co-evolve the winners (ADR-147/148) |

#### DevOps & Observability

| Plugin | What it does |
|--------|-------------|
| **ruflo-migrations** | Manage database schema changes safely |
| **ruflo-observability** | Structured logs, traces, and metrics in one place |
| **ruflo-cost-tracker** | Track token usage, set budgets, get cost alerts |

#### Extensibility

| Plugin | What it does |
|--------|-------------|
| **ruflo-agent** | Run agents — local WASM sandbox (rvagent) + Anthropic Claude Managed Agents (cloud) |
| **ruflo-plugin-creator**| Scaffold, validate, and publish your own plugins |

#### Domain-Specific

| Plugin | What it does |
|--------|-------------|
| **ruflo-iot-cognitum** | IoT device management — trust scoring, anomaly detection, fleets |
| **ruflo-neural-trader** | `neural-trader` — AI trading with 4 agents, backtesting, 112+ tools |
| **ruflo-market-data** | Ingest market data, vectorize OHLCV, detect patterns |

</details>

---

## What You Get

| Capability | Description |
|------------|-------------|
| 🤖 **100+ Agents** | Specialized agents for coding, testing, security, docs, architecture |
| 📡 **Comms Layer** | Zero-trust federation — agents across machines/orgs discover, authenticate, and exchange work securely |
| 🐝 **Swarm Coordination** | Hierarchical, mesh, and adaptive topologies with consensus |
| 🧠 **Self-Learning** | SONA neural patterns, ReasoningBank, trajectory learning |
| 💾 **Vector Memory** | HNSW-indexed AgentDB — measured ~1.9x faster at N=20k, ~3.2x–4.7x at N=5k vs brute force (recall@10 ~0.99); ANN wins above the crossover, ties/loses at small N. |
| ⚡ **Background Workers** | 12 auto-triggered workers (audit, optimize, testgaps, etc.) |
| 🧩 **Plugin Marketplace** | 33 native Claude Code plugins + 21 npm plugins |
| 🔌 **Multi-Provider** | Claude, GPT, Gemini, Cohere, Ollama with smart routing |
| 🛡️ **Security** | AIDefence, input validation, CVE remediation, path traversal prevention |
| 🌐 **Agent Federation** | Cross-installation agent collaboration with zero-trust security |
| 💬 **Web UI Beta** | Multi-model chat with parallel MCP tool calling and an in-browser WASM tool gallery |


<p align="center">
  <a href="../../releases">
    <img src="assets/ruVocal.png" alt="RuFlo Web UI executing parallel MCP tool calls at flo.ruv.io — ruflo__memory_store and ruflo__memory_search firing in a single model turn with the 'Step 1 — 2 tools completed' parallel-execution indicator, thinking process panel visible, Qwen 3.6 Max as the active model. Multi-agent AI chat with Model Context Protocol (MCP) tool calling, persistent vector memory via AgentDB + HNSW, swarm coordination, and 6 frontier models including Claude Sonnet 4.6, Gemini 2.5 Pro, and OpenAI through OpenRouter." width="100%" />
  </a>
</p>

### Web UI (Beta) — self-hostable.

**RuFlo's web UI is a multi-model AI chat with built-in Model Context Protocol (MCP) tool calling.** Talk to Qwen, Claude, Gemini, or OpenAI while RuFlo invokes the same MCP tools the CLI uses — agent orchestration, persistent memory, swarm coordination, code review, GitHub ops — directly from chat. No install, no API key needed to try it.

| | What it is | Why it matters |
|---|------------|----------------|
| 🧠 | **Any model, local or remote** | 6 curated frontier models out-of-the-box — Qwen 3.6 Max (default), Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, OpenAI — via OpenRouter. Add your own: any OpenAI-compatible endpoint (vLLM, Ollama, LM Studio, Together, Groq, self-hosted). |
| 🦾 | **ruvLLM self-learning AI** | Native support for ruvLLM (lives in `ruvnet/RuVector/examples/ruvLLM`) — RuFlo's self-improving local model layer. Routes to MicroLoRA adapters, learns from your trajectories via SONA, and stays on your machine. Pair with the cloud models or run fully offline. |
| 🛠️ | **~210 tools, ready to call** | 5 server groups (Core, Intelligence, Agents, Memory, DevTools) plus an 18-tool gallery that runs entirely in your browser — works offline. |
| 🔌 | **Bring your own MCP servers** | Click the **MCP (n)** pill in the chat input → *Add Server* and paste any MCP endpoint (HTTP, SSE, or stdio). Your tools join RuFlo's native ones in the same parallel-execution flow. Run a local MCP server on `localhost:3000` and it just works. |
| ⚡ | **Tools run in parallel** | One model response can fire 4–6+ tools at the same time. The UI shows them as cards with a *Step 1 — 2 tools completed* badge so you can see exactly what ran. |
| 💾 | **Memory that sticks** | Say *"remember my favorite color is indigo"* and ask weeks later — RuFlo recalls it. Backed by AgentDB + HNSW vector search (measured ~1.9x–4.7x faster than brute force above the crossover, recall@10 ~0.99). |
| 📘 | **Built-in capabilities tour** | Click the question-mark icon in the sidebar — a "RuFlo Capabilities" modal opens with the full tool list, model strengths, architecture, and keyboard shortcuts. |
| 🏠 | **Self-hostable** | Web UI is shipped as Docker (`ruflo/src/ruvocal/Dockerfile`) with embedded Mongo. Deploy to your own Cloud Run / Fly / Kubernetes / docker-compose. |


<p align="center">
  <a href="../../releases">
    <img src="assets/goal.png" alt="goal.ruv.io/agents — RuFlo Goal-Oriented Action Planning (GOAP) UI for autonomous AI agents. Visual goal decomposition, A* search through state spaces, multi-agent task assignment, and live agent telemetry." width="100%" />
  </a>
</p>

### Goal Planner UI — autonomous agents

| | What it is | Why it matters |
|---|------------|----------------|
| 🎯 | **Plain-English goals** | Type *"ship the auth refactor with tests and a PR"* — RuFlo extracts the success criteria, the constraints, and the implicit preconditions. No JSON, no DSL. |
| 🧭 | **GOAP A\* planner** | Classic gaming-AI planning ported to software work: state-space search through actions with preconditions/effects to find the shortest viable path. Replans on the fly when state changes. |
| 🤖 | **Live agent dashboard** | shows every spawned agent — role, current step, memory namespace, token budget, status. Click in to inspect trajectories, kill runaway workers, or reassign. |
| 🌳 | **Visual plan tree** | Goals render as collapsible action trees with progress, blocked branches, and rollbacks highlighted. See *exactly* why an agent picked a path — no opaque chain-of-thought. |
| ♻️ | **Adaptive replanning** | When an action fails or new info arrives, the planner re-runs A\* from the current state instead of restarting. Failures become learning, not loops. |
| 🧠 | **Shared memory + SONA** | Plans, trajectories, and outcomes flow into AgentDB. Future plans retrieve past solutions via HNSW — the planner gets smarter with every run. |
| 🔗 | **Wired to MCP tools** | Every action node maps to a tool call (RuFlo's ~210 MCP tools, your custom servers, or shell). The planner schedules them in parallel where the dependency graph allows. |



### Agent Federation — Slack for Agents

```
Your Agent --> [ Remove secrets ] --> [ Sign message ] --> [ Encrypted channel ]
                 Emails, SSNs,        Proves it came       No one reads it
                 keys stripped         from you              in transit
                                                                |
                                                                v
Their Agent <-- [ Block attacks ] <-- [ Check identity ] <------+
                 Stops prompt          Rejects forgeries
                 injection

                          Audit trail on both sides.
                  Trust builds over time. Bad behavior = instant downgrade.
```

<details>
<summary><strong>Federation capabilities</strong></summary>

| | Capability | How it works |
|---|---|---|
| 🔒 | **Zero-trust federation** | Remote agents start untrusted. Identity proven via mTLS + ed25519 challenge-response. No API keys, no shared secrets. |
| 🛡️ | **PII-gated data flow** | 14-type detection pipeline scans every outbound message. Per-trust-level policies: BLOCK, REDACT, HASH, or PASS. Adaptive calibration reduces false positives. |
| 📊 | **Behavioral trust scoring** | Formula (`0.4×success + 0.2×uptime + 0.2×threat + 0.2×integrity`) continuously evaluates peers. Upgrades require history; downgrades are instant. |
| 📋 | **Compliance built-in** | HIPAA, SOC2, GDPR audit trails as compliance modes. Every federation event produces a structured record searchable via HNSW. |
| 🤝 | **9 MCP tools + 10 CLI commands** | Full lifecycle: `federation_init`, `federation_send`, `federation_trust`, `federation_audit`, and more. |

</details>

<details>
<summary><strong>Claude Code: With vs Without Ruflo</strong></summary>

| Capability | Claude Code Alone | + Ruflo |
|------------|-------------------|---------|
| Agent Collaboration | Isolated, no shared context | Swarms with shared memory and consensus |
| Coordination | Manual orchestration | Queen-led hierarchy (Raft, Byzantine, Gossip) |
| Memory | Session-only | HNSW vector memory with sub-ms retrieval |
| Learning | Static behavior | SONA self-learning with pattern matching |
| Task Routing | You decide | Intelligent routing (89% accuracy) |
| Background Workers | None | 12 auto-triggered workers |
| LLM Providers | Anthropic only | 5 providers with failover |
| Security | Standard | CVE-hardened with AIDefence |

</details>

<details>
<summary><strong>Architecture overview</strong></summary>

```
User --> Claude Code / CLI
          |
          v
    Orchestration Layer
    (MCP Server, Router, 27 Hooks)
          |
          v
    Swarm Coordination
    (Queen, Topology, Consensus)
          |
          v
    100+ Specialized Agents
    (coder, tester, reviewer, architect, security...)
          |
          v
    Memory & Learning
    (AgentDB, HNSW, SONA, ReasoningBank)
          |
          v
    LLM Providers
    (Claude, GPT, Gemini, Cohere, Ollama)
```

</details>

---

## License

MIT
