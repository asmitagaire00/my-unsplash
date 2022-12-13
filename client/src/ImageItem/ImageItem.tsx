import "./ImageItem.css";

type imageItemProps = {
  imageInfo: any;
  toOpeneDeleteDialogBox: any;
  toDeleteImageItem: Function;
  toDownloadImageItem: Function;
  setDeleteDialogBox: (dialog: boolean) => void;
  deleteDialogBox: boolean;
  downloadImageInfo: any;
};

const ImageItem = ({
  imageInfo,
  toOpeneDeleteDialogBox,
  toDownloadImageItem,
  downloadImageInfo,
}: imageItemProps) => {
  const { _id, label, url } = imageInfo;

  //to get id of delete button cliked item
  const openDeleteDialogBox = () => {
    toOpeneDeleteDialogBox({ _id });
    console.log(_id);
  };

  //to get id of download button clicked item
  const handleDownloadImage = () => {
    toDownloadImageItem({ _id });
    console.log("id", _id);
  };

  //to download image item
  const toDataURL = (toDownloadUrl: string) => {
    return fetch(toDownloadUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  };

  const downloadItem = async () => {
    const a = document.createElement("a");
    a.href = await toDataURL(downloadImageInfo.url);
    a.download = downloadImageInfo.label + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
        <div className="image-item_bottom">
          <div className="image-item_label">{label}</div>
          <div className="image-item_download">
            <img
              src="assets/download-solid.svg"
              alt="download"
              style={{ height: "20px", fill: "#ffffff", cursor: "pointer" }}
              onClick={(e) => {
                handleDownloadImage();
                downloadItem();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
