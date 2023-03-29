import { FaGithub } from "react-icons/fa";
import AddTask from "../../module/AddTask";

import ListToTasks from "../../module/ListToTasks";

import "./Home.style.css";

export default function Home() {
  const redirectGitHub = () => {
    window.open("https://github.com/brunodassisf", "_blank");
  };

  return (
    <div className="container_home">
      <div className="container_home__grid">
        <div className="container_home__grid___tasks">
          <ListToTasks />
        </div>
        <div className="container_home__grid___add_task">
          <AddTask />
        </div>
      </div>
      <div className="container_home__float_button" onClick={redirectGitHub}>
        <FaGithub size={48} />
        <span />
      </div>
    </div>
  );
}
