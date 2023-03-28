import { FaGithub } from "react-icons/fa";
import AddTask from "../../module/AddTask";
import ListToTasks from "../../module/ListToTasks";

export default function Home() {
  const redirectGitHub = () => {
    window.open("https://github.com/brunodassisf", "_blank");
  };

  return (
    <div className="relative container mx-auto h-full mt-4">
      <div className="grid grid-cols-4 divide-x-4 divide-green-200 h-full">
        <div className="col-span-4 lg:col-span-3">
          <ListToTasks />
        </div>
        <div className="hidden lg:block col-span-1">
          <AddTask />
        </div>
      </div>
      <div
        className="fixed right-5  bottom-5 cursor-pointer shadow-xl rounded-full"
        onClick={redirectGitHub}
      >
        <FaGithub size={48} className=" text-purple-900  z-0" />
        <span className="animate-ping absolute top-1 left-1 h-10 w-10 -z-10 rounded-full bg-purple-400 opacity-75"></span>
      </div>
    </div>
  );
}
