import "./Button.css";

type buttonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "default";
  onClick: () => void;
};

const Button = ({ children, variant, onClick }: buttonProps) => {
  const getBackgroundColor = (variant: any) => {
    if (variant === "primary") {
      return "#3db46d";
    }
    if (variant === "secondary") {
      return "#eb5757";
    }

    if (variant === "default") {
      return "#cecece";
    }
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: getBackgroundColor(variant) }}
      className="button"
    >
      {children}
    </button>
  );
};

export default Button;
