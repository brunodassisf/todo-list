import React, { useState } from "react";

import { RiFileList3Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

import Modal from "../Modal";
import AddTask from "../../../module/AddTask";

import "./Header.style.css";

export default function Header() {
  const [modalTask, setModalTasks] = useState<boolean>(false);

  const toogleModal = () => setModalTasks(!modalTask);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <span className="sr-only">To Do list</span>
            <RiFileList3Line size={36} />
            <h4>Lista de tarefas</h4>
          </div>

          <div className="mobile-add-button">
            <button type="button" onClick={toogleModal}>
              <FaPlus size={18} />
            </button>
          </div>
        </nav>
      </header>
      <Modal open={modalTask} onClose={toogleModal}>
        <AddTask onCLose={toogleModal} />
      </Modal>
    </>
  );
}
