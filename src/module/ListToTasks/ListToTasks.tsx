import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

import { TaskContext } from "../../util/Context/task";
import EmptyList from "../EmptyList";

import { Types } from "../../util/Context/task/reducerTask";
import { ITask } from "../../util/Context/task/Task.interface";

interface ITaskImplement extends ITask {
  action?: boolean;
}

export default function ListToTasks() {
  const { tasks, dispatch } = useContext(TaskContext);

  const [list, setList] = useState<ITaskImplement[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  const toogleStatus = () => setStatus(!status);

  useEffect(() => {
    setList(tasks);
  }, [tasks]);

  const actions = {
    initial: { opacity: 0 },
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const handleAction = (position: number) => {
    const newList = list.map((item, index) => {
      if (index === position) {
        const updatedItem = {
          ...item,
          action: !item.action,
        };
        return updatedItem;
      } else {
        return { ...item, action: false };
      }
    });
    setList(newList);
  };

  const completeTask = (id: number) => {
    dispatch({ type: Types.Complete, payload: { id } });
  };

  const countTasks = (st: boolean): number => {
    return list.filter((item) => item.complete === st).length;
  };

  return (
    <>
      {list.length > 0 ? (
        <div className="mr-3 mt-4">
          <h3 className="text-xl text-gray-500 mb-4 pb-2 font-semibold border-b-2 flex justify-between">
            Minhas Tarefas
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={status}
              />
              <div
                className="w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"
                onClick={toogleStatus}
              ></div>
              <span className="ml-3 w-28 text-sm font-medium text-gray-700">
                {status
                  ? `${countTasks(true)} Completadas`
                  : `${countTasks(false)} a fazer`}
              </span>
            </label>
          </h3>
          <ul className="grid grid-cols-4 gap-3">
            {list
              .filter((item) => item.complete === status)
              .map((item, index) => (
                <li
                  key={`${item.name}${index}`}
                  className="relative w-full rounded border-green-500 border-2 p-4 mb-5 cursor-pointer"
                  onClick={() => handleAction(index)}
                >
                  <div className="font-medium mb-2">{item.name}</div>
                  {item.observation ? (
                    <div className="border-t border-gray-500 text-start text-gray-600 text-base">
                      {item.observation}
                    </div>
                  ) : null}
                  <motion.div
                    variants={actions}
                    initial="initial"
                    animate={item.action ? "visible" : undefined}
                    className="absolute w-full -bottom-7 left-0 z-10 flex px-2"
                  >
                    <div
                      className="w-1/2 h-full bg-green-700/70 flex justify-center items-center rounded-l-md"
                      onClick={() => completeTask(item.id)}
                    >
                      <FaCheck size={22} className="text-white" />
                    </div>
                    <div className="w-1/2 h-full bg-red-700/70 flex justify-center items-center rounded-r-md">
                      <FaTimes size={22} className="text-white" />
                    </div>
                  </motion.div>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
