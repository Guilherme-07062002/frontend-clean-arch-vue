export enum ActionTypes {
  COUNT = 'COUNT'
};

export interface CountAction {
  type: ActionTypes.COUNT;
  info: 'Add +1 to counter'
};
