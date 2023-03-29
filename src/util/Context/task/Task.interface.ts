export type TContextTask = {
  children: React.ReactNode;
};

export type ITask = {
  name: string;
  observation: string;
  complete: boolean;
};

export type ActionMap<M extends { [index: string]: any }> = {
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
    name: string;
  };
  [Types.Clear]: {};
  [Types.Delete]: {
    name: string;
  };
};

export type TaskAction = ActionMap<TaskPayload>[keyof ActionMap<TaskPayload>];
