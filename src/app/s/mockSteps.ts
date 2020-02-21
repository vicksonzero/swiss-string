import { Step } from './Step';

export const mockSteps: Step[] = [
  {
    id: 2,
    title: 'Step 1',
    type: 'Step',
  },
  {
    id: 1,
    title: 'Step 2',
    type: 'Step',
  },
].map(v => new Step(v));
