import { useContext } from "react";

import { FormikHelpers, useFormik } from "formik";
import { toast } from "react-toastify";

import Input from "../../common/components/Input";
import Textarea from "../../common/components/Textarea";

import { TaskContext } from "../../util/Context/task";
import { Types } from "../../util/Context/task/Task.interface";
import validationSchema from "./AddTask.validation";

import "./AddTask.style.css";

interface IAddTask {
  onCLose?: () => void;
}

export default function AddTask({ onCLose }: IAddTask) {
  const { dispatch } = useContext(TaskContext);

  const initialValues = {
    name: "",
    observation: "",
  };

  const onSubmit = (values: any, formikHelpers: FormikHelpers<any>) => {
    dispatch({ type: Types.Create, payload: values });
    formikHelpers.resetForm({ values: initialValues });
    toast.success(`Tarefa ${values.name} criada.`);
    onCLose?.();
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container_add_task">
      <h3>Adicionar tarefa</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="search"
          name="name"
          value={values.name}
          placeholder="Nome da tarefa"
          onChange={handleChange}
          styleInput={touched.name && errors.name}
        />

        <Textarea
          rows={4}
          name="observation"
          value={values.observation}
          onChange={handleChange}
          placeholder="Observações"
        />

        {touched ? (
          <ul>
            {Object.values(errors).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}

        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
