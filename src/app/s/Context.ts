export interface Context {
  afterStepID: number;
  keys: string[];
  types: string[];
}
export interface ContextDef {
  afterStepID: number;
  keys: { name: string, fromID: number, toID: number | null, type: string | null, destStepIndex: number | null }[];
}
