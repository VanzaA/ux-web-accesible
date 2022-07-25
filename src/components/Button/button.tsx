import "./index.css";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
  type: "button" | "submit";
  onClick?: () => void;
};

const Button = ({ children, type = "button", onClick }: ButtonProps) => (
  <button className="btn" type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
