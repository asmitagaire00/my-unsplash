import "./Button.css";

type buttonProps = {
  backgroundColor: string;
  color: string;
  border: string;
  width: string;
  height: string;
  borderRadius: string;
  font: string;
  fontWeight: any;
  cursor: string;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({
  children,
  color,
  border,
  width,
  height,
  borderRadius,
  font,
  fontWeight,
  backgroundColor,
  cursor,
  onClick,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: color,
        font: font,
        backgroundColor: backgroundColor,
        border: border,
        height: height,
        width: width,
        borderRadius: borderRadius,
        cursor: cursor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
