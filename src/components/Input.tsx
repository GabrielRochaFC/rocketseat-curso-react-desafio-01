import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: () => void;
}

export function Input({
  placeholder,
  value,
  onChange,
  onKeyPress,
}: InputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }
  return (
    <input
      className={styles.input}
      type="text"
      id="input"
      name="input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onKeyPress();
        }
      }}
    />
  );
}
