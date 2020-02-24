import { Step, StepFactory } from './Step';
import { steps } from './_mockSteps.json';

export const mockSteps: Step[] = (steps
  .map((v: any) => StepFactory.createStep(v))
);
