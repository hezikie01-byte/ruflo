/**
 * Type definitions for Ultron Agent
 */

export interface AgentConfig {
  name: string;
  role: string;
  model: string;
  memory?: {
    type: 'vector' | 'graph' | 'hybrid';
    size: number;
  };
  tools?: string[];
  timeout?: number;
}

export interface WorkflowStep {
  id: string;
  name: string;
  action: string;
  params?: Record<string, any>;
  retries?: number;
  timeout?: number;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  metadata?: Record<string, any>;
}

export interface MemoryRecord {
  id: string;
  content: string;
  embedding?: number[];
  timestamp: number;
  tags?: string[];
  metadata?: Record<string, any>;
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, any>;
  execute: (params: Record<string, any>) => Promise<any>;
}
