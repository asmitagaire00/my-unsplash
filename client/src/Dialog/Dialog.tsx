import "./Dialog.css";

type Props = {
  children: JSX.Element;
  setDialogBox: (dialog: boolean) => void;
  dialogBox: boolean;
  title: string;
};

const Dialog = ({ children, setDialogBox, dialogBox, title }: Props) => {
  const handleDialogClose = () => {
    setDialogBox(false);
  };
  return (
    <div>
      <div
        className={dialogBox ? "dialog-wrapper-show" : "dialog-wrapper-hide"}
      >
        <span>{title}</span>
        {/* <span onClick={handleDialogClose}>cancel</span> */}
        <div className="dialogbox-content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
