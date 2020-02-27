
export interface Operator {
  type: string;
  title: string;
  inputs: { [x: string]: OperatorConnectors };
  outputs: { [x: string]: OperatorConnectors };
}

export interface OperatorConnectors {
  id: number;
  contextName: string;
}
