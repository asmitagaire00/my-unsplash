import "./Dialog.css";

type Props = {
  children: JSX.Element;
  dialogBox?: boolean;
  deleteDialogBox?: boolean;
  title: string;
};

const Dialog = ({ children, dialogBox, title, deleteDialogBox }: Props) => {
  return (
    <div className={dialogBox ? "dialog-wrapper " : "delete-dialog-wrapper"}>
      <div
        className={
          dialogBox ? "dialog-wrapper-item" : "delete-dialog-wrapper-item"
        }
      >
        <div
          className={
            dialogBox || deleteDialogBox
              ? "dialog-wrapper-show"
              : "dialog-wrapper-hide"
          }
        >
          <h3>{title}</h3>
          <div className="dialogbox-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
