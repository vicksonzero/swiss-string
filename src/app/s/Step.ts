
export interface DataType {
  name: string;
}

export enum WidthUnit {
  PIXEL = 'px',
  PERCENTAGE = '%',
}

export interface ColumnConfig {
  width: number;
  widthUnit: WidthUnit | string;
}

// export enum StepType {
//   STEP = 'Step',
//   VIEW = 'View',
//   OPERATOR = 'Operator',
// }

export interface Step {
  id: number;
  title: string;
  type: 'Step';
  inputs: DataType[];
  outputs: DataType[];
  columns: ColumnConfig[];
}

export interface ViewStep extends Step {
  views: Array<any>;
}

export interface OperatorStep extends Step {
  operators: Array<any>;
}

export class StepFactory {
  static createStep(config: Partial<Step>): Step {
    const a = {
      id: 0,
      title: 'Input',
      type: 'Step' as 'Step',
      inputs: [
        { name: 'input' },
      ],
      outputs: [
        { name: 'output' },
      ],
      columns: [
        { width: 100, widthUnit: '%' }
      ],
    };
    return { ...a, ...config };
  }
}
