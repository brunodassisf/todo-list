import Doubt from "module/Doubt";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";

import Modal from "../../common/components/Modal";
import AddTask from "../../module/AddTask";

import ListToTasks from "../../module/ListToTasks";

import "./Home.style.css";

export default function Home() {
  const [doubt, setDoubt] = useState<boolean>(false);

  const toogleDoubt = () => setDoubt(!doubt);

  const redirectGitHub = () => {
    window.open("https://github.com/brunodassisf", "_blank");
  };

  return (
    <>
      <div className="container_home">
        <div className="container_home__grid">
          <div className="container_home__grid___tasks">
            <ListToTasks />
          </div>
          <div className="container_home__grid___add_task">
            <AddTask />
          </div>
        </div>
        <div className="container_home__float_github" onClick={redirectGitHub}>
          <FaGithub size={48} />
          <span />
        </div>

        <button
          type="button"
          className="container_home__float_doubt"
          onClick={toogleDoubt}
        >
          <MdOutlineQuestionMark size={28} />
        </button>
      </div>
      <Modal open={doubt} onClose={toogleDoubt}>
        <Doubt />
      </Modal>
    </>
  );
}
