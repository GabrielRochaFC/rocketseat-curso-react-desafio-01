import { TaskType } from "../assets/Types/TaskType";
import styles from "./List.module.css";
import { Task } from "./Task";
import { ClipboardText } from "phosphor-react";

type ListProps = {
  tasks: TaskType[];
  onTaskCompletion: (id: number) => void;
  onDelete: (id: number) => void;
};

export function List({ tasks, onTaskCompletion, onDelete }: ListProps) {
  const handleTaskCompletion = (id: number) => {
    onTaskCompletion(id);
  };

  const handleTaskDeletion = (id: number) => {
    onDelete(id);
  };

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.listContainer}>
      <header className={styles.listHeader}>
        <div className={styles.tasksCreated}>
          Tarefas criadas <span>{tasksCreated}</span>
        </div>
        <div className={styles.tasksCompleted}>
          Concluídas{" "}
          <span>
            {tasksCompleted} de {tasksCreated}
          </span>
        </div>
      </header>
      <div className={styles.tasksPlace}>
        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <ClipboardText size={64} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
              onChange={() => handleTaskCompletion(task.id)}
              onDelete={() => handleTaskDeletion(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
