import Button from "../Button/Button";
import "./DeleteDialogBox.css";

type deleteDialogBoxProps = {
  imageInfo: any;
  toDeleteImageItem: Function;
  setDeleteDialogBox: (dialog: boolean) => void;
};

const DeleteDialogBox = ({
  imageInfo,
  toDeleteImageItem,
  setDeleteDialogBox,
}: deleteDialogBoxProps) => {
  const { _id } = imageInfo;

  const handleDialogCancel = () => {
    setDeleteDialogBox(false);
  };
  const handleDeleteButton = () => {
    toDeleteImageItem({ _id });
  };
  return (
    <div>
      <div>
        <Button
          onClick={handleDialogCancel}
          children="Cancel"
          border="none"
          backgroundColor=""
          width="100px"
          height="45px"
          borderRadius="12px"
          fontWeight="700"
          color="#BDBDBD"
          font="Noto Sans"
          cursor="pointer"
        />
        <Button
          onClick={handleDeleteButton}
          children="Delete"
          border="none"
          backgroundColor="#EB5757"
          width="100px"
          height="45px"
          borderRadius="12px"
          fontWeight="700"
          color="#FFFFFF"
          font="Noto Sans"
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export default DeleteDialogBox;
