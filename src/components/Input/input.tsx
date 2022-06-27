import { ChangeEvent } from "react";
import "./index.css";
type InputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}: InputProps) => (
  <div className="input">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default Input;
