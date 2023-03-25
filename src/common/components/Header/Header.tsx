import React from "react";
import { RiFileList3Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-green-300 py-4 drop-shadow">
      <nav
        className="container flex justify-between mx-auto px-4 md:px-0"
        aria-label="Global"
      >
        <div className="flex items-center text-green-900">
          <span className="sr-only">To Do list</span>
          <RiFileList3Line size={36} />
          <h4 className="font-medium text-lg text-green-900 ml-3">
            Lista de tarefas
          </h4>
        </div>
        <div className="flex lg:hidden">
          <button className="text-green-800 font-semibold border-2 border-green-800 rounded-full p-2 flex items-center">
            <FaPlus size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
