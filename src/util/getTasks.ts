import { ITask } from "./Context/task/Task.interface";

export const getTasks = (): ITask[] => {
  const item = localStorage.getItem("MY_TASK");
  if (item) {
    const tasks = JSON.parse(item);
    return tasks;
  }
  return [];
};
