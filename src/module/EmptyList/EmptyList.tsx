import { BiTaskX } from "react-icons/bi";

export default function EmptyList() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center text-gray-400">
        <BiTaskX size={48} />
        <h3 className="mt-2 font-medium">Você não possui tarefas</h3>
      </div>
    </div>
  );
}
