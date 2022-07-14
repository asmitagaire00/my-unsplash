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
        <div className="delete-dialog-buttons__item">
          <Button onClick={handleDialogCancel} variant="default">
            Cancel
          </Button>
        </div>
        <div className="delete-dialog-buttons__item">
          <Button onClick={handleDeleteButton} variant="secondary">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialogBox;
