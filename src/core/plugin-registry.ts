/**
 * Plugin Registry - Core plugin management system for Ultron
 */

export interface IPlugin {
  name: string;
  version: string;
  category: PluginCategory;
  enabled: boolean;
  execute(context: any): Promise<any>;
  validate(): Promise<boolean>;
}

export enum PluginCategory {
  CORE = 'core',
  ORCHESTRATION = 'orchestration',
  MEMORY = 'memory',
  INTELLIGENCE = 'intelligence',
  SECURITY = 'security',
  DEVOPS = 'devops',
  DOMAIN_SPECIFIC = 'domain_specific',
  EXTENSIBILITY = 'extensibility',
}

export class PluginRegistry {
  private plugins: Map<string, IPlugin> = new Map();
  private categories: Map<PluginCategory, IPlugin[]> = new Map();

  constructor() {
    // Initialize category map
    Object.values(PluginCategory).forEach(cat => {
      this.categories.set(cat, []);
    });
  }

  async loadPlugins(): Promise<void> {
    console.log('📦 Loading plugins...');
    // Plugins will be dynamically loaded
    await this.loadCorePlugins();
    await this.loadOrchestrationPlugins();
    await this.loadMemoryPlugins();
    await this.loadIntelligencePlugins();
    await this.loadSecurityPlugins();
    console.log(`✅ Loaded ${this.plugins.size} plugins`);
  }

  private async loadCorePlugins(): Promise<void> {
    // Core plugins will be loaded here
    console.log('  ↳ Loading Core plugins...');
  }

  private async loadOrchestrationPlugins(): Promise<void> {
    // Orchestration plugins
    console.log('  ↳ Loading Orchestration plugins...');
  }

  private async loadMemoryPlugins(): Promise<void> {
    // Memory plugins
    console.log('  ↳ Loading Memory plugins...');
  }

  private async loadIntelligencePlugins(): Promise<void> {
    // Intelligence plugins
    console.log('  ↳ Loading Intelligence plugins...');
  }

  private async loadSecurityPlugins(): Promise<void> {
    // Security plugins
    console.log('  ↳ Loading Security plugins...');
  }

  registerPlugin(plugin: IPlugin): void {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin '${plugin.name}' is already registered`);
    }
    this.plugins.set(plugin.name, plugin);
    const categoryPlugins = this.categories.get(plugin.category) || [];
    categoryPlugins.push(plugin);
    this.categories.set(plugin.category, categoryPlugins);
  }

  getPlugin(name: string): IPlugin | undefined {
    return this.plugins.get(name);
  }

  getPluginsByCategory(category: PluginCategory): IPlugin[] {
    return this.categories.get(category) || [];
  }

  getAllPlugins(): IPlugin[] {
    return Array.from(this.plugins.values());
  }

  getEnabledPlugins(): IPlugin[] {
    return Array.from(this.plugins.values()).filter(p => p.enabled);
  }

  disablePlugin(name: string): void {
    const plugin = this.plugins.get(name);
    if (plugin) {
      plugin.enabled = false;
    }
  }

  enablePlugin(name: string): void {
    const plugin = this.plugins.get(name);
    if (plugin) {
      plugin.enabled = true;
    }
  }
}
