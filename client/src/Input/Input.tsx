import { Children, ReactNode } from "react";
import "./Input.css";

type Props = {
  padding: string;
  font: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  borderRadius: string;
  children: string;
};

const Input = ({
  padding,
  font,
  fontSize,
  fontWeight,
  color,
  borderRadius,
  children,
}: Props) => {
  return (
    <input
      type="text"
      id="input"
      placeholder={children}
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
