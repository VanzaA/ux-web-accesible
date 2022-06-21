import "./index.css";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
  type: "button" | "submit";
};

const Button = ({ children, type = "button" }: ButtonProps) => (
  <button className="btn" type={type}>
    {children}
  </button>
);

export default Button;
