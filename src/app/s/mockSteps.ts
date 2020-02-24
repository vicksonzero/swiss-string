import { Step, StepFactory } from './Step';

export const mockSteps: Step[] = [
  {
    id: 2,
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
  },
  {
    id: 1,
    title: 'Process',
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
  },
  {
    id: 3,
    title: 'Output',
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
  },
].map(v => StepFactory.createStep(v));
