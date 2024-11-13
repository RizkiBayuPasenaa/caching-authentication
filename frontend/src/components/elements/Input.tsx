
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props : InputProps) => {
  const { type, placeholder, value, onChange, name } = props;
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      onChange={onChange} 
      value={value}
      name={name}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-slate-950 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  )
}

export default Input
