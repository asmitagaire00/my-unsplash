import Button from "../Button/Button";
import "./DeleteDialogBox.css";

type deleteDialogBoxProps = {
  toDeleteImageItemId: any;
  toDeleteImageItem: Function;
  setDeleteDialogBox: (dialog: boolean) => void;
};

const DeleteDialogBox = ({
  toDeleteImageItemId,
  toDeleteImageItem,
  setDeleteDialogBox,
}: deleteDialogBoxProps) => {
  const handleDialogCancel = () => {
    setDeleteDialogBox(false);
  };
  const handleDeleteButton = () => {
    toDeleteImageItem({ toDeleteImageItemId });
  };
  return (
    <div>
      <div className="delete-dialog-buttons">
        <Button
          onClick={handleDialogCancel}
          children="Cancel"
          border="none"
          backgroundColor=""
          padding="1rem 2rem"
          borderRadius="12px"
          fontWeight="700"
          color="#BDBDBD"
          font="Noto Sans"
          cursor="pointer"
          className="cancel-button"
        />
        <Button
          onClick={handleDeleteButton}
          children="Delete"
          border="none"
          backgroundColor="#EB5757"
          padding="1rem 2rem"
          borderRadius="12px"
          fontWeight="700"
          color="#FFFFFF"
          font="Noto Sans"
          cursor="pointer"
          className=""
        />
      </div>
    </div>
  );
};

export default DeleteDialogBox;
