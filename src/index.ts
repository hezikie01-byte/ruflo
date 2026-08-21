/**
 * Ultron Agent - Advanced Agent Meta-Harness
 * Main entry point for the Ultron agent system
 */

import { PluginRegistry } from './core/plugin-registry';
import { AgentOrchestrator } from './core/orchestrator';

export class UltronAgent {
  private registry: PluginRegistry;
  private orchestrator: AgentOrchestrator;

  constructor() {
    this.registry = new PluginRegistry();
    this.orchestrator = new AgentOrchestrator(this.registry);
  }

  async initialize(): Promise<void> {
    console.log('🤖 Initializing Ultron Agent...');
    await this.registry.loadPlugins();
    await this.orchestrator.setup();
    console.log('✅ Ultron Agent initialized successfully');
  }

  async run(): Promise<void> {
    console.log('🚀 Starting Ultron Agent...');
    await this.orchestrator.run();
  }

  getRegistry(): PluginRegistry {
    return this.registry;
  }

  getOrchestrator(): AgentOrchestrator {
    return this.orchestrator;
  }
}

// Main execution
if (require.main === module) {
  const agent = new UltronAgent();
  agent.initialize().then(() => agent.run()).catch(console.error);
}

export default UltronAgent;
