import { ChangeEvent } from "react";

type InputProps = {
    placeholder: string;
    type: string;
    onChange?: (e: any) => void
}

const Input: React.FC<InputProps> = ({ placeholder, type, onChange }) => {
  return (
    <input className="input" type={type} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input