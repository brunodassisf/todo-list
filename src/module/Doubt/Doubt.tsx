import Lottie from "react-lottie";
import { FaCheck, FaTimes } from "react-icons/fa";

import Switch from "common/components/Switch";

import { defaultOptions } from "./Doubt.constant";
import "./Doubt.style.css";

export default function Doubt() {
  return (
    <div className="container_doubt">
      <div className="container_doubt__animate">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
      <div className="container_doubt__first">
        <h4>Como funciona?</h4>
        <p>
          Para criar uma tarefa, você precisa digitar o nome dela a uma
          observação (opcional). Caso a tarefa já tenha sido concluída, basta
          clicar em cima dela e no botão verde, para que a tarefa fique na
          <strong> lista de completadas</strong>
          <div className="btn_complete_task">
            <FaCheck size={16} />
          </div>
        </p>
      </div>
      <div className="container_doubt__second">
        <p>
          Você pode alternar em tarefas <strong>Completadas</strong> e
          <strong> A fazer</strong>.
          <div className="swith_example">
            <Switch
              check={false}
              toogle={() => {}}
              labelByTheChecked={() => "A fazer"}
            />
            <Switch
              check={true}
              toogle={() => {}}
              labelByTheChecked={() => "Completadas"}
            />
          </div>
        </p>
        <p>
          Caso deseje excluir uma tarefa que ainda não foi concluída, basta
          clicar em cima da tarefa e em seguida clicar no botão vermelho, assim
          a tarefa será excluída.
          <div className="btn_remove_task">
            <FaTimes size={22} className="text-white" />
          </div>
        </p>
        <p>
          Caso queira limpar todas a lista de tarefas, e so clicar no botão
          vermelho, onde todas as tarefas
          <strong> A fazer/Completas </strong>
          serão excluidas do seu dispositivo.
          <div className="btn_remove_tasks">
            <button type="button">
              <FaTimes />
              <h6>Limpar</h6>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}
