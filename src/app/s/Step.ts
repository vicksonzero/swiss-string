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

export class StepFactory {
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
}
