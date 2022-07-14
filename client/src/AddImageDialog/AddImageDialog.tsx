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
          children=""
          onChange={handleLabelInputChange}
          value={labelInput}
        />
      </div>
      <div className="add-image-dialog-input-item">
        <label htmlFor="image-label" className="add-image-dialog-input-label">
          Photo URL
        </label>
        <Input children="" onChange={handleUrlInputChange} value={urlInput} />
      </div>
      <div className="add-image-dialog-button-wrapper">
        <div className="add-image-dialog-button__item">
          <Button onClick={handleDialogCancel} variant="default">
            Cancel
          </Button>
        </div>
        <div className="add-image-dialog-button__item">
          <Button onClick={handleImageSubmit} variant="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddImageDialog;
