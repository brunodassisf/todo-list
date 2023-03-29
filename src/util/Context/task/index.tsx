import React, { createContext, useReducer, Dispatch, useEffect } from "react";
import { getTasks } from "../../getTasks";
import { reducerTasks } from "./reducerTask";
import { ITask, TaskAction, TContextTask } from "./Task.interface";

export const TaskContext = createContext<{
  tasks: ITask[];
  dispatch: Dispatch<TaskAction>;
}>({
  tasks: getTasks(),
  dispatch: () => null,
});

export const TaskContextProvider = ({ children }: TContextTask) => {
  const [tasks, dispatch] = useReducer(reducerTasks, getTasks());

  useEffect(() => {
    localStorage.setItem("MY_TASK", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
