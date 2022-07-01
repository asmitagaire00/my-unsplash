import "./Dialog.css";

type props = {
  children: JSX.Element;
};

const Dialog = ({ children }: props) => {
  return (
    <div>
      <div className="dialog-wrapper">
        <input type="text" />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
