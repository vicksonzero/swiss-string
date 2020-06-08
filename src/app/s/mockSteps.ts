// import { Step, StepFactory } from './Step';
import { content, description, editorCounter, nodeCounter, nodes, stepCounter, steps, title, _comments } from './new-model/app1.json';
import { IApp } from './new-model/appDefinitions';

export const mockSteps: IApp = {
  _comments,
  title,
  description,
  stepCounter,
  nodeCounter,
  editorCounter,
  steps,
  nodes,
  content,
};
