import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  text: string;
  isCompleted: boolean;
  onChange: () => void;
  onDelete: () => void;
}

export function Task({ text, isCompleted, onChange, onDelete }: TaskProps) {
  function handleChange() {
    onChange();
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        onChange={handleChange}
        defaultChecked={isCompleted}
      />
      {isCompleted ? <p className={styles.completed}>{text}</p> : <p>{text}</p>}
      <button className={styles.deleteButton} onClick={handleDelete}>
        <Trash size={20} />
      </button>
    </div>
  );
}
