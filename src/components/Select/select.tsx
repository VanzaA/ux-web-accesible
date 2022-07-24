import { ChangeEvent } from "react";
import "./index.css";

export type Option = {
  value: string;
  text: string;
};

type SelectProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  required?: boolean;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  options,
}: SelectProps) => (
  <div className="input">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      <option disabled value={""} hidden>
        {placeholder}
      </option>
      {options.map(({ value, text }) => (
        <option value={value} key={`select_options_${text}-${value}`}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
