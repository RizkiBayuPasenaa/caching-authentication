import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
  className: string;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, to = '/', className } = props;
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>

  )
}

export default Button;