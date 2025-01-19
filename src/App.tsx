import { Input } from "./components/Input";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { useState } from "react";
import { TaskType } from "./assets/Types/TaskType";

export function App() {
  // Estou usando o useState para armazenar o valor do input e o array de tarefas
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [value, setValue] = useState<string>("");

  // Esta função é responsável por adicionar o texto no array de tarefas
  function handleTexts() {
    if (value.trim() === "") return; // Verifica se o valor do input não está vazio
    setTasks([...tasks, { id: tasks.length, text: value, isCompleted: false }]);
    setValue(""); // Limpa o input após adicionar a tarefa
  }

  // Esta função é responsável por atualizar o valor do input toda vez que ele é alterado. Para conseguir isso eu tive que criar uma propriedade no input chamada onChange que recebe a função handleInputChange, mas ela pode ter qualquer nome que eu quiser. Dentro do input eu chamo a função onChange e passo o evento como argumento. Dentro da função handleInputChange eu atualizo o estado value com o valor do input
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  // Esta função é responsável por atualizar o estado isCompleted da tarefa. Ela recebe o id da tarefa que foi clicada e verifica se o id da tarefa clicada é igual ao id da tarefa que está no array de tarefas. Se for, ela atualiza o estado isCompleted da tarefa clicada para o contrário do estado atual
  function handleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updatedTasks);
  }

  // Esta função é responsável por deletar a tarefa. Ela recebe o id da tarefa que foi clicada e filtra o array de tarefas para retornar todas as tarefas que não possuem o id da tarefa clicada
  function handleTaskDeletion(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {/* 
            O componente Input recebe quatro props: 
            - placeholder: texto que aparece no input
            - value: valor do input. Este vem do estado value, que é atualizado toda vez que o input é alterado
            - onChange: função que é chamada toda vez que o input é alterado
            - onKeyPress: função que é chamada toda vez que uma tecla é pressionada. Se a tecla pressionada for Enter, a função handleTexts é chamada
         */}
        <Input
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleTexts}
        />
        {/*
            O componente Button recebe duas props:
            - text: texto que aparece no botão
            - onClick: função que é chamada toda vez que o botão é clicado. Neste caso, a função handleTexts é chamada 
         */}
        <Button text="Criar" onClick={handleTexts} />

        {/* 
            O componente List recebe três props:
            - tasks: array de tarefas
            - onTaskCompletion: função que é chamada toda vez que uma tarefa é completada
            - onDelete: função que é chamada toda vez que uma tarefa é deletada
         */}
        <List
          tasks={tasks}
          onTaskCompletion={handleTaskCompletion}
          onDelete={handleTaskDeletion}
        />
      </div>
    </div>
  );
}
