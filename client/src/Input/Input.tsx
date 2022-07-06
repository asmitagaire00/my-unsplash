import "./Input.css";

type InputProps = {
  padding: string;
  font: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  borderRadius: string;
  children: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({
  padding,
  font,
  fontSize,
  fontWeight,
  color,
  borderRadius,
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
      style={{
        padding: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        font: font,
        color: color,
        borderRadius: borderRadius,
      }}
    />
  );
};

export default Input;
