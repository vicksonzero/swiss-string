import { Observable } from 'rxjs';

export interface Context {
  name: string;
  fromID: number;
  toID: number;
  type: string | null;
  fromStepIndex: number;
}
export interface ContextDef {
  beforeStepID: number;
  keys: Context[];
}

export interface ContextHolder {
  [x: string]: { lastSeenColumnID: number, lastSeenStepIndex: number };
}

export interface ContextSubjectHolder {
  [x: string]: Observable<any>;
}
