import { Operator } from './Operator';
import { View } from './View';

export interface DataType {
  name: string;
}

export enum WidthUnit {
  PIXEL = 'px',
  PERCENTAGE = '%',
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
    viewCallback: (viewWidget: ViewWidget) => void,
    operatorCallback: (operatorWidget: OperatorWidget) => void
  }) {
    args.steps.forEach((step) => {
      step.columns.forEach((column) => {
        switch (column.type) {
          case WidgetType.VIEW:
            {
              args.viewCallback(column as ViewWidget);
            }
            break;
          case WidgetType.OPERATOR:
            {
              args.operatorCallback(column as OperatorWidget);
            }
            break;
        }
      });
    });
  }
}
