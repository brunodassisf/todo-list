import { FormikHelpers, useFormik } from "formik";
import { useContext } from "react";
import { toast } from "react-toastify";
import Input from "../../common/components/Input";
import Textarea from "../../common/components/Textarea";
import { TaskContext } from "../../util/Context/task";
import { Types } from "../../util/Context/task/reducerTask";
import validationSchema from "./AddTask.validation";

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
    <div className="p-4">
      <h3 className="text-xl mb-7 font-medium text-gray-600">
        Adicionar tarefa
      </h3>
      <form className="gap-7 grid" onSubmit={handleSubmit}>
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
          <ul className="list-disc ml-5">
            {Object.values(errors).map((item, index) => (
              <li key={index} className="text-red-600">
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <button
          type="submit"
          className="w-full bg-green-400 rounded py-3 text-white hover:bg-green-500 transition-all"
        >
          Criar
        </button>
      </form>
    </div>
  );
}
