import * as yup from "yup";

const required = "Nome da tarefa é obrigatório";

const validationSchema = yup.object({
  name: yup.string().required(required).min(3, "Nome muito curto"),
  observation: yup.string().max(150, "Observação muito grande."),
});

export default validationSchema;
