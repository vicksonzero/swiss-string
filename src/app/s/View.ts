export enum ViewWidgetType {
  TEXTAREA = 'textarea',
  LIST = 'list',
  TUPLE_TEXT = 'tupleText',
  JSON = 'json',
}

export interface View {
  type: ViewWidgetType;
  title: string;
  name: string;
  default: any;
}

