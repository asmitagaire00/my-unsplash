import { useEffect, useState } from "react";

import ImageItem from "../ImageItem/ImageItem";
import "./ImageList.css";

type imageProps = {
  setDialogBox: (dialog: boolean) => void;
  dialogBox: boolean;
};

const ImageList = ({ setDialogBox, dialogBox }: imageProps) => {
  const [imageList, setImageList] = useState<
    { id: string; label: string; url: string }[]
  >([]);

  useEffect(() => {
    fetch("/post")
      .then((response) => response.json())
      .then((imageDetails) => {
        setImageList(imageDetails);
      });
  }, []);

  const toDeleteImageItem = (deleteId: any) => {
    console.log("from imagelist", deleteId._id);
    fetch("/post/" + deleteId._id, { method: "DELETE" })
      .then((response) => response.json())
      .then((updatedImageInfo) => {
        setImageList([...imageList, updatedImageInfo]);
      })
      .catch((err) => {
        console.log("error occured in delete ", err);
      });
  };

  return (
    <div>
      <div>
        {imageList.map((imageInfo, index) => {
          return (
            <ImageItem
              imageInfo={imageInfo}
              key={index}
              toDeleteImageItem={toDeleteImageItem}
              setDialogBox={setDialogBox}
              dialogBox={dialogBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
