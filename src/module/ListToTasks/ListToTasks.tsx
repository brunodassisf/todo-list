import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

import EmptyList from "../EmptyList";
import Switch from "../../common/components/Switch";
import Modal from "../../common/components/Modal";

import { Types } from "../../util/Context/task/Task.interface";
import { IListTask } from "./ListToTasks.interface";
import { TaskContext } from "../../util/Context/task";
import { actions_variant } from "./ListToTasks.constant";

import "./ListToTasks.style.css";

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

  const countTasks = (st: boolean): string => {
    const count = list.filter((item) => item.complete === st).length;
    const text = status ? "Completadas" : "A fazer";
    return `${count} ${text} `;
  };

  const renderTitle = () => {
    return (
      <div className="nav">
        <h3>Minhas Tarefas</h3>
        {tasks.length > 0 ? (
          <button
            type="button"
            className="nav_button"
            onClick={toogleModalClearingConfirm}
          >
            <FaTimes />
            <h6>Limpar</h6>
          </button>
        ) : null}
      </div>
    );
  };

  const handleSelectTask = (name: string) => {
    const newList = list.map((item) => {
      if (item.name === name) {
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

  const handleClearingTasks = () => {
    dispatch({ type: Types.Clear, payload: {} });
    toogleModalClearingConfirm();
  };

  const handleCompleteTask = (name: string): void => {
    dispatch({ type: Types.Complete, payload: { name } });
    toast.success(`${name} completada!`);
  };

  const handleRemoveTask = (name: string): void => {
    dispatch({ type: Types.Delete, payload: { name } });
    toast.info(`${name} deletada`);
  };

  return (
    <>
      {list.length > 0 ? (
        <div className="container_list_tasks">
          <div className="container_list_tasks__title">
            {renderTitle()}
            <Switch
              check={status}
              toogle={toogleStatus}
              labelByTheChecked={() => countTasks(status)}
            />
          </div>
          <ul>
            {list
              .filter((item) => item.complete === status)
              .map(({ name, observation, complete, action }, index) => (
                <li
                  key={index}
                  onClick={() =>
                    complete === false ? handleSelectTask(name) : undefined
                  }
                >
                  <h4>{name}</h4>
                  {observation ? <h5>{observation}</h5> : null}
                  {action ? (
                    <motion.div
                      variants={actions_variant}
                      initial="initial"
                      animate={action ? "visible" : undefined}
                      className="container_actions"
                    >
                      <div
                        className="container_actions__complete"
                        onClick={() => handleCompleteTask(name)}
                      >
                        <FaCheck size={22} className="text-white" />
                      </div>
                      <div
                        className="container_actions__remove"
                        onClick={() => handleRemoveTask(name)}
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
        <div className="container_modal_remove">
          <h3>Deseja limpar sua lista de tarefas?</h3>
          <button type="button" onClick={handleClearingTasks}>
            Limpar
          </button>
        </div>
      </Modal>
    </>
  );
}
