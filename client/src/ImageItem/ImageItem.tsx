import { useState } from "react";
import Button from "../Button/Button";
import DeleteDialogBox from "../DeleteDialogBox/DeleteDialogBox";
import Dialog from "../Dialog/Dialog";
import "./ImageItem.css";

type imageItemProps = {
  imageInfo: any;
  toDeleteImageItem: Function;
};

const ImageItem = ({ imageInfo, toDeleteImageItem }: imageItemProps) => {
  const [deleteDialogBox, setDeleteDialogBox] = useState<boolean>(false);
  const { label, url } = imageInfo;

  return (
    <div>
      <div className="image-item-wrapper">
        <Button
          onClick={() => setDeleteDialogBox(true)}
          children="Delete"
          border="1px solid #EB5757"
          backgroundColor=""
          width="100px"
          height="30px"
          borderRadius="12px"
          fontWeight="700"
          color="red"
          font="Noto Sans"
          cursor="pointer"
        />
        <img
          src={url}
          alt="imagep"
          style={{ width: "500px", height: "500px" }}
        />
        {/* todo: show label only on hover */}
        <span>{label}</span>
      </div>
      {deleteDialogBox && (
        <Dialog deleteDialogBox={deleteDialogBox} title="Are you Sure?">
          <DeleteDialogBox
            toDeleteImageItem={toDeleteImageItem}
            imageInfo={imageInfo}
            setDeleteDialogBox={setDeleteDialogBox}
          />
        </Dialog>
      )}
    </div>
  );
};

export default ImageItem;
