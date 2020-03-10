export interface Context {
  beforeStepID: number;
  keys: string[];
  types: string[];
}
export interface ContextDef {
  beforeStepID: number;
  keys: { name: string, fromID: number, toID: number, type: string | null, fromStepIndex: number }[];
}
