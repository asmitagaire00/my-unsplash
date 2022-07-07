import "./Button.css";

type buttonProps = {
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  font: string;
  fontWeight: any;
  cursor: string;
  className: string;
  children: React.ReactNode;
  padding: string;
  onClick: () => void;
};

const Button = ({
  children,
  color,
  border,
  borderRadius,
  font,
  fontWeight,
  backgroundColor,
  cursor,
  className,
  padding,
  onClick,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        color: color,
        font: font,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: borderRadius,
        cursor: cursor,
        padding: padding,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
