import React, { createContext, useReducer, Dispatch, useEffect } from "react";
import { taskReducer } from "./reducerTask";
import { ITask, TaskAction } from "./Task.interface";

type TContextTask = {
  children: React.ReactNode;
};

const getTasks = (): ITask[] => {
  const item = localStorage.getItem("MY_TASK");
  if (item) {
    const tasks = JSON.parse(item);
    return tasks;
  }
  return [];
};

export const TaskContext = createContext<{
  tasks: ITask[];
  dispatch: Dispatch<TaskAction>;
}>({
  tasks: getTasks(),
  dispatch: () => null,
});

export const TaskContextProvider = ({ children }: TContextTask) => {
  const [tasks, dispatch] = useReducer(taskReducer, getTasks());

  useEffect(() => {
    localStorage.setItem("MY_TASK", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
