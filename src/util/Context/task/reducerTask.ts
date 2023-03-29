import { ITask, TaskAction, Types } from "./Task.interface";

export const reducerTasks = (state: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case Types.Create:
      return [...state, { complete: false, ...action.payload }];
    case Types.Complete:
      const findAndUpdateTask = state.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, complete: true };
        }
        return { ...item };
      });
      return findAndUpdateTask;
    case Types.Delete:
      const newState = state.filter(
        (item) => item.name !== action.payload.name
      );
      return newState;
    case Types.Clear:
      return [];
    default:
      return state;
  }
};
