import "./Input.css";

type InputProps = {
  children: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({
  children,

  onChange,
  value,
}: InputProps) => {
  return (
    <input
      type="text"
      id="input"
      placeholder={children}
      onChange={onChange}
      value={value}
      className="cutomized-input"
    />
  );
};

export default Input;
