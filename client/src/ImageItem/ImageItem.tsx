import "./ImageItem.css";

type imageItemProps = {
  imageInfo: any;
  toOpeneDeleteDialogBox: any;
  toDeleteImageItem: Function;
  setDeleteDialogBox: (dialog: boolean) => void;
  deleteDialogBox: boolean;
};

const ImageItem = ({ imageInfo, toOpeneDeleteDialogBox }: imageItemProps) => {
  const { _id, label, url } = imageInfo;

  const openDeleteDialogBox = () => {
    toOpeneDeleteDialogBox({ _id });
    console.log(_id);
  };

  return (
    <div>
      <div className="image-item-wrapper">
        <div className="image-item_button-item">
          <button onClick={openDeleteDialogBox} className="image-item_button">
            Delete
          </button>
        </div>
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
