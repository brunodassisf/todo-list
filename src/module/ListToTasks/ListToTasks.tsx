import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

import { TaskContext } from "../../util/Context/task";
import EmptyList from "../EmptyList";

import { Types } from "../../util/Context/task/Task.interface";
import { IListTask } from "./ListToTasks.interface";
import { toast } from "react-toastify";
import Switch from "../../common/components/Switch";
import Modal from "../../common/components/Modal";

export default function ListToTasks() {
  const { tasks, dispatch } = useContext(TaskContext);

  const [clearingConfirm, setclearingConfirm] = useState<boolean>(false);

  const [list, setList] = useState<IListTask[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  const toogleStatus = () => setStatus(!status);
  const toogleModalClearingConfirm = () => setclearingConfirm(!clearingConfirm);

  useEffect(() => {
    setList(tasks);
  }, [tasks]);

  const actions = {
    initial: { opacity: 0 },
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const handleAction = (position?: number) => {
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

  const completeTask = (index: number, name: string): void => {
    dispatch({ type: Types.Complete, payload: { index } });
    toast.success(`${name} completada!`);
  };

  const countTasks = (st: boolean): string => {
    const count = list.filter((item) => item.complete === st).length;
    const text = status ? "Completadas" : "A fazer";
    return `${count} ${text} `;
  };

  const renderClearTasks = () => {
    return (
      <div className="flex">
        <h3 className="text-xl text-gray-500">Minhas Tarefas</h3>
        {tasks.length > 0 ? (
          <button
            type="button"
            className="ml-2 flex items-center text-red-600 border-red-600 border rounded-full px-3 py-1 cursor-pointer gap-1"
            onClick={toogleModalClearingConfirm}
          >
            <FaTimes />
            <h6>Limpar</h6>
          </button>
        ) : null}
      </div>
    );
  };

  const handleClearingTasks = () => {
    dispatch({ type: Types.Clear, payload: {} });
    toogleModalClearingConfirm();
  };

  const removeTask = (index: number, name: string): void => {
    dispatch({ type: Types.Delete, payload: { index } });
    toast.info(`${name} deletada`);
  };

  return (
    <>
      {list.length > 0 ? (
        <div className="mx-4 md:mr-3 md:mx-0 ">
          <div className="mb-4 pb-2 font-semibold border-b-2 flex justify-between items-start lg:items-center flex-col md:flex-row gap-4">
            {renderClearTasks()}
            <Switch
              check={status}
              toogle={toogleStatus}
              labelByTheChecked={() => countTasks(status)}
            />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {list
              .filter((item) => item.complete === status)
              .map((item, index) => (
                <li
                  key={`${item.name}${index}`}
                  className="relative w-full rounded border-green-500 border-2 p-4 mb-5 cursor-pointer"
                  onClick={() =>
                    item.complete === false ? handleAction(index) : undefined
                  }
                >
                  <div className="font-medium mb-2">{item.name}</div>
                  {item.observation ? (
                    <div className="border-t border-gray-500 text-start text-gray-600 text-base">
                      {item.observation}
                    </div>
                  ) : null}
                  {item.action ? (
                    <motion.div
                      variants={actions}
                      initial="initial"
                      animate={item.action ? "visible" : undefined}
                      className="absolute w-full -bottom-7 left-0 z-10 flex px-2"
                    >
                      <div
                        className="w-1/2 h-full bg-green-700/70 flex justify-center items-center rounded-l-md"
                        onClick={() => completeTask(index, item.name)}
                      >
                        <FaCheck size={22} className="text-white" />
                      </div>
                      <div
                        className="w-1/2 h-full bg-red-700/70 flex justify-center items-center rounded-r-md"
                        onClick={() => removeTask(index, item.name)}
                      >
                        <FaTimes size={22} className="text-white" />
                      </div>
                    </motion.div>
                  ) : null}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <EmptyList />
      )}
      <Modal open={clearingConfirm} onClose={toogleModalClearingConfirm}>
        <>
          <h3 className="text-center text-xl font-medium mb-5">
            Deseja limpar sua lista de tarefas?
          </h3>
          <button
            type="submit"
            className="w-full bg-green-400 rounded py-3 text-white hover:bg-green-500 transition-all"
            onClick={handleClearingTasks}
          >
            Limpar
          </button>
        </>
      </Modal>
    </>
  );
}
