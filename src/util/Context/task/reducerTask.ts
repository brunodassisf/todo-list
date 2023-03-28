import { ITask, TaskAction, Types } from "./Task.interface";

export const taskReducer = (state: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case Types.Create:
      return [...state, { complete: false, ...action.payload }];
    case Types.Complete:
      const findAndUpdateTask = state.map((item, index) => {
        if (index === action.payload.index) {
          return { ...item, complete: true };
        }
        return { ...item };
      });
      return findAndUpdateTask;
    case Types.Delete:
      const newState = state.filter(
        (item, index) => index !== action.payload.index
      );
      return newState;
    case Types.Clear:
      return [];
    default:
      return state;
  }
};
