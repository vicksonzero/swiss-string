
export interface Operator {
  type: string;
  title: string;
  inputs: { [x: string]: string };
  outputs: { [x: string]: string };
}

