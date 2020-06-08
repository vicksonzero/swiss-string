import { IStep } from './new-model/appDefinitions';
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
  static createStep(config: Partial<IStep>, ): IStep {
    const a = {
      stepID: 0,
      title: 'Step',
      description: '',
      inputProtection: false,
      columns: [
      ],
    };
    return { ...a, ...config };
  }
}

