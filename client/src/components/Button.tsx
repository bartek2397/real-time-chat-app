import { IconType } from "react-icons";

type ButtonProps = {
    label: string;
    icon?: IconType;
    type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({label, icon: Icon, type}) => {
  return (
    <button className="button" type={type}>{label}</button>
  )
}

export default Button