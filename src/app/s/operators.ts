declare function require(moduleName: string): any;

export type OperatorFunction = (args: { [x: string]: any }) => { [x: string]: any };

export interface OperatorDef {
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  run: OperatorFunction;
}

export const operators: { [x: string]: OperatorDef } = {
  'csv-split': require('./operators/csv-split').operator as OperatorDef,
  'handlebars-template': require('./operators/handlebars-template').operator as OperatorDef,
  'regex-match-rename': require('./operators/regex-match-rename').operator as OperatorDef,
};

