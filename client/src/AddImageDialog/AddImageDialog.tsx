import Button from "../Button/Button";
import Input from "../Input/Input";
import axios from "axios";

import "./AddImageDialog.css";
import { useState } from "react";

type addImageProps = {
  children?: string;
  setDialogBox: (dialog: boolean) => void;
  // setDatas: (data: { label: string; url: string }[]) => void;
  // datas: { label: string; url: string }[];
};

const AddImageDialog = ({ setDialogBox }: addImageProps) => {
  const [labelInput, setLabelInput] = useState<string>("");
  const [urlInput, setUrlInput] = useState<string>("");

  const handleLabelInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLabelInput(e.target.value);
  };

  const handleUrlInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUrlInput(e.target.value);
  };

  const handleImageSubmit = () => {
    axios
      .post("/post", { labelInput, urlInput })
      .then(({ data }) => {
        console.log("succesfully posted", data);
        setLabelInput("");
        setUrlInput("");
        setDialogBox(false);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  const handleDialogCancel = () => {
    setDialogBox(false);
  };

  return (
    <div>
      <div>
        <label htmlFor="image-label">Label</label>
        <Input
          padding="1rem"
          font="Noto Sans"
          fontSize="14px"
          fontWeight="500"
          color="#807d7d"
          borderRadius="12px"
          children=""
          onChange={handleLabelInputChange}
          value={labelInput}
        />
      </div>
      <div>
        <label htmlFor="image-label">Photo URL</label>
        <Input
          padding="1rem"
          font="Noto Sans"
          fontSize="14px"
          fontWeight="500"
          color="#807d7d"
          borderRadius="12px"
          children=""
          onChange={handleUrlInputChange}
          value={urlInput}
        />
      </div>
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
          onClick={handleImageSubmit}
          children="Submit"
          border="none"
          backgroundColor="#3DB46D"
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

export default AddImageDialog;
