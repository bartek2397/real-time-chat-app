type InputProps = {
    placeholder: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input className="input" type={type} placeholder={placeholder} />
  )
}

export default Input