import * as yup from "yup";

import { getTasks } from "../../util/getTasks";

const required = "Nome da tarefa é obrigatório";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(required)
    .min(3, "Nome muito curto")
    .test((value, ctx) => {
      const tasks = getTasks();
      if (tasks.length > 0) {
        const hasDuplicate = tasks.filter(
          (item) => item.name.toLowerCase() === value.toLowerCase()
        );
        if (hasDuplicate.length > 0) {
          return ctx.createError({ message: "Essa tarefa já existe" });
        }
        return true;
      }
      return true;
    }),

  observation: yup.string().max(150, "Observação muito grande."),
});

export default validationSchema;
