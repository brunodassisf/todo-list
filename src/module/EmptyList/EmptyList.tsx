import { BiTaskX } from "react-icons/bi";

import "./EmptyList.style.css";

export default function EmptyList() {
  return (
    <div className="empty_list">
      <div>
        <BiTaskX size={48} />
        <h3>Você não possui tarefas</h3>
      </div>
    </div>
  );
}
