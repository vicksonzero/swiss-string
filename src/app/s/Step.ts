import { Operator } from './Operator';
import { View } from './View';

export interface DataType {
  name: string;
}

export enum WidthUnit {
  PIXEL = 'px',
  PERCENTAGE = '%',
  flex = 'flex',
}

export interface WidgetConfig {
  id: number;
  width: number;
  widthUnit: WidthUnit | string;
  type: WidgetType;
}

export enum WidgetType {
  BASIC = 'basic',
  VIEW = 'view',
  OPERATOR = 'operator',
}

export interface Step {
  id: number;
  title: string;
  type: WidgetType;
  columns: WidgetConfig[];
}

export interface ViewWidget extends WidgetConfig {
  view: View;
}

export interface OperatorWidget extends WidgetConfig {
  operator: Operator;
}

export class StepUtils {
  static createStep(config: Partial<Step>): Step {
    let result: Step = {
      id: 0,
      title: 'Input',
      type: WidgetType.BASIC,
      columns: [
      ],
    };
    result = { ...result, ...config };

    return result;
  }

  static iterateOperators(args: {
    steps: Step[],
    viewCallback: (viewWidget: ViewWidget, stepID: number, stepIndex: number) => void,
    operatorCallback: (operatorWidget: OperatorWidget, stepID: number, stepIndex: number) => void
  }) {
    args.steps.forEach((step, stepIndex) => {
      const { columns, id: stepID } = step;
      columns.forEach((column) => {
        switch (column.type) {
          case WidgetType.VIEW:
            {
              args.viewCallback(column as ViewWidget, stepID, stepIndex);
            }
            break;
          case WidgetType.OPERATOR:
            {
              args.operatorCallback(column as OperatorWidget, stepID, stepIndex);
            }
            break;
        }
      });
    });
  }
  static iterateOperatorsOfStep(args: {
    step: Step, stepID: number, stepIndex: number,
    viewCallback: (viewWidget: ViewWidget, stepID: number, stepIndex: number) => void,
    operatorCallback: (operatorWidget: OperatorWidget, stepID: number, stepIndex: number) => void
  }) {
    const { step, stepID, stepIndex } = args;
    const { columns } = step;
    columns.forEach((column) => {
      switch (column.type) {
        case WidgetType.VIEW:
          {
            args.viewCallback(column as ViewWidget, stepID, stepIndex);
          }
          break;
        case WidgetType.OPERATOR:
          {
            args.operatorCallback(column as OperatorWidget, stepID, stepIndex);
          }
          break;
      }
    });
  }
}
