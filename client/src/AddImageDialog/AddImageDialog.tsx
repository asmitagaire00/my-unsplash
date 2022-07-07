import Button from "../Button/Button";
import Input from "../Input/Input";
import axios from "axios";

import "./AddImageDialog.css";
import { useState } from "react";

type addImageProps = {
  children?: string;
  setDialogBox: (dialog: boolean) => void;
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
    window.location.reload();
  };

  const handleDialogCancel = () => {
    setDialogBox(false);
  };

  return (
    <div className="add-image-dialog__wrapper">
      <div className="add-image-dialog-input-item">
        <label htmlFor="image-label" className="add-image-dialog-input-label">
          Label
        </label>
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
          width="100%"
          maxWidth=""
        />
      </div>
      <div className="add-image-dialog-input-item">
        <label htmlFor="image-label" className="add-image-dialog-input-label">
          Photo URL
        </label>
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
          width="100%"
          maxWidth=""
        />
      </div>
      <div className="add-image-dialog-button-wrapper">
        <Button
          onClick={handleDialogCancel}
          children="Cancel"
          border="none"
          backgroundColor="#cecece"
          padding="0.8rem 2.3rem"
          borderRadius="10px"
          fontWeight="700"
          color="#ffffff"
          font="Noto Sans"
          cursor="pointer"
          className="add-image-dialog-button-item"
        />
        <Button
          onClick={handleImageSubmit}
          children="Submit"
          border="none"
          backgroundColor="#3DB46D"
          padding="0.8rem 2.3rem"
          borderRadius="10px"
          fontWeight="700"
          color="#FFFFFF"
          font="Noto Sans"
          cursor="pointer"
          className="add-image-dialog-button-item"
        />
      </div>
    </div>
  );
};

export default AddImageDialog;
