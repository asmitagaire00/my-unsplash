import { useEffect, useState } from "react";

import ImageItem from "../ImageItem/ImageItem";
import "./ImageList.css";

type imageProps = {
  searchShow: boolean;
  searchFieldValue: string;
};

const ImageList = ({ searchShow, searchFieldValue }: imageProps) => {
  const [imageList, setImageList] = useState<
    { id: string; label: string; url: string }[]
  >([]);

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
    console.log("from imagelist", deleteId._id);
    fetch("/post/" + deleteId._id, { method: "DELETE" })
      .then((response) => response.json())
      .then((updatedImageInfo) => {
        // setImageList([...imageList, updatedImageInfo]);
        console.log(updatedImageInfo);
      })
      .catch((err) => {
        console.log("error occured in delete ", err);
      });
  };

  if (searchShow) {
    filteredImageList = imageList.filter((imageItem) => {
      return imageItem.label.toLocaleLowerCase().includes(searchFieldValue);
    });
  }

  return (
    <div>
      <div>
        {filteredImageList.map((imageInfo, index) => {
          return (
            <ImageItem
              imageInfo={imageInfo}
              key={index}
              toDeleteImageItem={toDeleteImageItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
