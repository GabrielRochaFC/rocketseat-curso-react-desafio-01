import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={styles.container} onClick={handleClick}>
      {text} <PlusCircle size={24} />
    </button>
  );
}
