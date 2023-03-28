import { ITask } from "./Task.interface";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "CREATE_TASK",
  Complete = "COMPLETE_TASK",
  Clear = "CLEAR_TASKS",
  Delete = "DELETE_TASK",
}

type TaskPayload = {
  [Types.Create]: {
    name: string;
    observation: string;
  };
  [Types.Complete]: {
    id: number;
  };
  [Types.Clear]: {};
  [Types.Delete]: {
    id: number;
  };
};

export type TaskAction = ActionMap<TaskPayload>[keyof ActionMap<TaskPayload>];

export const taskReducer = (state: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case Types.Create:
      const count = state.length + 1;
      return [...state, { id: count, complete: false, ...action.payload }];
    case Types.Complete:
      const findAndUpdateTask = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: true };
        }
        return { ...item };
      });
      return findAndUpdateTask;
    case Types.Delete:
      const newState = state.filter((value, index, arr) => {
        if (value.id === action.payload.id) {
          arr.splice(index, 1);
          return true;
        }
        return false;
      });
      return newState;
    case Types.Clear:
      return [];
    default:
      return state;
  }
};
