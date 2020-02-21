export interface StepConfig {
  id: number;
  title: string;
  type: string;
}

export class Step {
  id: number;
  title = 'New Step';
  type = 'Step';

  constructor(config: StepConfig) {
    this.id = config.id;
    this.title = config.title;
    this.type = config.type;
  }
}
