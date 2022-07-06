import "./Dialog.css";

type Props = {
  children: JSX.Element;
  setDialogBox: (dialog: boolean) => void;
  dialogBox: boolean;
  title: string;
};

const Dialog = ({ children, setDialogBox, dialogBox, title }: Props) => {
  return (
    <div>
      <div
        className={dialogBox ? "dialog-wrapper-show" : "dialog-wrapper-hide"}
      >
        <span>{title}</span>
        <div className="dialogbox-content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
