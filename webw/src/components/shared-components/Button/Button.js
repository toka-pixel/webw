import './Button.scss';


const Button = (props) => {
  const { children, className ,onClick} = props;
  return <button onClick={onClick} className={`button ${className}`}>{children}</button>;
};

export default Button;
