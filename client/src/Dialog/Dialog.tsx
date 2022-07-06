import "./Dialog.css";

type Props = {
  children: JSX.Element;
  dialogBox?: boolean;
  deleteDialogBox?: boolean;
  title: string;
};

const Dialog = ({ children, dialogBox, title, deleteDialogBox }: Props) => {
  return (
    <div>
      <div
        className={
          dialogBox || deleteDialogBox
            ? "dialog-wrapper-show"
            : "dialog-wrapper-hide"
        }
      >
        <span>{title}</span>
        <div className="dialogbox-content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
