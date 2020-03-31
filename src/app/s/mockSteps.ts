import { Step, StepUtils } from './Step';
import { steps } from './_mockSteps.json'; // './_mockStepsSimple.json';

export const mockSteps: Step[] = (steps
  .map((v: any) => StepUtils.createStep(v))
);
