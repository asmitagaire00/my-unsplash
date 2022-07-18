import { useEffect, useState } from "react";
import DeleteDialogBox from "../DeleteDialogBox/DeleteDialogBox";
import Dialog from "../Dialog/Dialog";

import ImageItem from "../ImageItem/ImageItem";
import "./ImageList.css";

type imageProps = {
  searchShow: boolean;
  searchFieldValue: string;
  setDeleteDialogBox: (dialog: boolean) => void;
  deleteDialogBox: boolean;
};

const ImageList = ({
  searchShow,
  searchFieldValue,
  setDeleteDialogBox,
  deleteDialogBox,
}: imageProps) => {
  const [imageList, setImageList] = useState<
    { _id: string; label: string; url: string }[]
  >([]);

  const [toDeleteImageItemId, setToDeleteImageItemId] = useState("");
  const [downloadImageInfo, setDownloadImageInfo] = useState("");

  let filteredImageList = imageList;

  useEffect(() => {
    fetch("/post")
      .then((response) => response.json())
      .then((imageDetails) => {
        const sortedImageDetails = imageDetails.sort((a: any, b: any) => {
          return (
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
          );
        });
        setImageList(sortedImageDetails);
      });
  }, []);

  const toDeleteImageItem = (deleteId: any) => {
    console.log("from imagelist", deleteId.toDeleteImageItemId);
    fetch("/post/" + deleteId.toDeleteImageItemId, { method: "DELETE" })
      .then((response) => response.json())
      .then((updatedImageInfo) => {
        console.log(updatedImageInfo);
      })
      .catch((err) => {
        console.log("error occured in delete ", err);
      });
    setDeleteDialogBox(false);
    window.location.reload();
  };

  if (searchShow) {
    filteredImageList = imageList.filter((imageItem) => {
      return imageItem.label.toLocaleLowerCase().includes(searchFieldValue);
    });
  }

  const toOpeneDeleteDialogBox = (toDeleteImage: any) => {
    setToDeleteImageItemId(toDeleteImage._id);

    const filteredImage = imageList.filter(
      (imageItem) => imageItem._id === toDeleteImage._id
    );
    console.log("filteredImage", filteredImage);
    filteredImageList = imageList.map((imageItem) => {
      if (filteredImage) {
        console.log("clicked");
        setDeleteDialogBox(true);
      } else {
        // setDeleteDialogBox(false);
      }
      return imageItem;
    });
  };

  const toDownloadImageItem = (imageId: any) => {
    fetch("/post/" + imageId._id)
      .then((response) => response.json())
      .then((imageItemInfo) => {
        setDownloadImageInfo(imageItemInfo.data);
      })
      .catch((error) => {
        console.log("error in image item info", error);
      });
  };

  return (
    <div className="image-list__wrapper">
      {deleteDialogBox && (
        <Dialog deleteDialogBox={deleteDialogBox} title="Are you Sure?">
          <DeleteDialogBox
            toDeleteImageItem={toDeleteImageItem}
            toDeleteImageItemId={toDeleteImageItemId}
            setDeleteDialogBox={setDeleteDialogBox}
          />
        </Dialog>
      )}
      <div>
        {filteredImageList.map((imageInfo, index) => {
          return (
            <ImageItem
              imageInfo={imageInfo}
              key={index}
              toDeleteImageItem={toDeleteImageItem}
              setDeleteDialogBox={setDeleteDialogBox}
              deleteDialogBox={deleteDialogBox}
              toOpeneDeleteDialogBox={toOpeneDeleteDialogBox}
              toDownloadImageItem={toDownloadImageItem}
              downloadImageInfo={downloadImageInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
