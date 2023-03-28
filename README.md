# ToDo list (Lista de tarefas)

Uma _to do list_ é uma lista de tarefas, de coisas que precisam ser feitas. Essa _to do list_ tem as seguintes ações:

- [x] Criar uma tarefa
- [x] Marca uma tarefa como completa
- [x] Listar as tarefas a fazer e completadas
- [x] Excluir uma tarefa a fazer
- [x] Excluir todas as tarefas, tanto a fazer quanto as completas

## Como foi desenvolvido

### Setup e noções

Ao desenvolver uma aplicação ReactJS, percebemos o qual facil é criar componentes de UI que podem ser bem dividos e organizados, além de trazer um maior conforto para melhorias e mudanças para adicionar novas `features`. Usando o setup ReactJS com `Function Components`, juntamente com `Typescript`, temos um ganho grande de produtividades com o uso dos `Hooks`. Isso deixa nosso codigo mais legível e dando a possibilidade de isolar funcionalidades, como por exemplo o uso de `Context`, que da ao nosso codigo poder de compartilhar dados com cada componente sem que estejam sendo passados por `props`. Assim grande parte das ações são executadas em diferentes componentes e os dados são alterados e compartilhados entre eles.

Foi usado a CLI com `create-react-app` para criar o setup inicial do nosso projeto. Ao logo dele foram usados bibliotecas que ajudam na maior eficiência do processo de desenvolvimento :

- Tailwindcss (Estilização de componentes).
- Formik (Manipular melhor os formulários).
- Yup (Validar campos dos formulários, fácil integrar com Formik).
- React-toastify (Exibição de mensagens para o usuário).
- Framer-motion (Criar efeitos de transições de acordo com a necessidade dos componentes ReactJS).
- React-icons (Icones desenvolvidos para ReactJS).

## Links

- [Projeto - toDo list](https://todo-list-black-eight.vercel.app)
- [Formik](https://formik.org/docs/overview)
- [Yup](https://github.com/jquense/yup)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Framer-motion](https://www.framer.com/motion/)

## Screen

### Desktop

![image](https://user-images.githubusercontent.com/33126607/228323808-bd0fe60c-e25f-4531-96b3-744da3e65be4.png)

![image](https://user-images.githubusercontent.com/33126607/228324047-2077a859-af5e-43f2-b164-36a63e44442e.png)

### Mobile

![image](https://user-images.githubusercontent.com/33126607/228324343-769eec58-fbe0-46e7-841c-bfb2272ebe22.png)

![image](https://user-images.githubusercontent.com/33126607/228324165-7932d57d-451d-4549-aee0-fd93815a4c4b.png)

