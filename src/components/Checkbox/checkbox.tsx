import "./index.css";

type CheckboxProps = {
  label: string;
  name: string;
  onChange: () => void;
  checked: boolean;
};

const Checkbox = ({ checked, label, name, onChange }: CheckboxProps) => (
  <div className="checkbox">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;
