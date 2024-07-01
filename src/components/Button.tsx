import { IconType } from "react-icons";

type ButtonProps = {
    label: string;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({label, icon: Icon}) => {
  return (
    <button className="button">{label}</button>
  )
}

export default Button