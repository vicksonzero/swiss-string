/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Operators =
  | "editor"
  | "editor-textarea"
  | "editor-list-string"
  | "editor-regex"
  | "regex-match-rename"
  | "add"
  | "subtract"
  | "regex-replace";

export interface IApp {
  _comments: string[];
  /**
   * title of app
   */
  title: string;
  /**
   * description of what the whole app does
   */
  description: string;
  stepCounter: number;
  nodeCounter: number;
  editorCounter: number;
  steps: IStep[];
  nodes: INodeInstance[];
  content?: unknown;
}
export interface IStep {
  stepID: number;
  title: string;
  description: string;
  inputProtection: boolean;
  columns: IColumn[];
}
export interface IColumn {
  nodeID: number;
  /**
   * Width in Flex ratios
   */
  width: number;
  /**
   * Height in pixels
   */
  height: number;
}
export interface INodeInstance {
  nodeID: number;
  title: string;
  editor?: any;
  nodeType: Operators | string;
  inputs: (EditorInputSocket | ILinkedInputSocket)[];
  outputs: (ISocket | ILinkedOutputSocket)[];
}
export interface EditorInputSocket {
  name: string;
  type: string;
  editor?: string;
}
export interface ILinkedInputSocket {
  name: string;
  type: string;
  source: {
    nodeID: number;
    outputName: string;
  };
}
export interface ISocket {
  name: string;
  type: string;
}
export interface ILinkedOutputSocket {
  name: string;
  type: string;
  destinations: {
    nodeID: number;
    inputName: string;
  }[];
}
