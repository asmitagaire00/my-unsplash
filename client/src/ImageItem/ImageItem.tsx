import Button from "../Button/Button";
import DeleteDialogBox from "../DeleteDialogBox/DeleteDialogBox";
import Dialog from "../Dialog/Dialog";
import "./ImageItem.css";

type imageItemProps = {
  imageInfo: any;
  toOpeneDeleteDialogBox: any;
  toDeleteImageItem: Function;
  setDeleteDialogBox: (dialog: boolean) => void;
  deleteDialogBox: boolean;
};

const ImageItem = ({
  imageInfo,
  toDeleteImageItem,
  setDeleteDialogBox,
  deleteDialogBox,
  toOpeneDeleteDialogBox,
}: imageItemProps) => {
  const { _id, label, url } = imageInfo;

  const openDeleteDialogBox = () => {
    toOpeneDeleteDialogBox({ _id });
    console.log(_id);
  };

  return (
    <div>
      <div className="image-item-wrapper">
        <Button
          onClick={openDeleteDialogBox}
          children="Delete"
          border="1px solid #EB5757"
          backgroundColor="rgba(0, 0, 0, 0.38)"
          padding="0.3rem 1.2rem"
          borderRadius="12px"
          fontWeight="700"
          color="red"
          font="Noto Sans"
          cursor="pointer"
          className="image-item_delete"
        />
        <img
          src={url}
          alt="imagep"
          style={{
            maxWidth: "100%",
            borderRadius: "16px",
            paddingTop: "4px",
          }}
        />
        <div className="image-item_label">{label}</div>
      </div>
    </div>
  );
};

export default ImageItem;
