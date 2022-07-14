import { ChangeEvent, useState } from "react";
import AddImageDialog from "../AddImageDialog/AddImageDialog";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import ImageList from "../ImageList/ImageList";
import "./Homepage.css";

type homepageInput = {
  setDialogBox: (dialog: boolean) => void;
  dialogBox: boolean;
  setDeleteDialogBox: (dialog: boolean) => void;
  deleteDialogBox: boolean;
};

const Homepage = ({
  setDialogBox,
  dialogBox,
  setDeleteDialogBox,
  deleteDialogBox,
}: homepageInput) => {
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");
  const [searchShow, setSearchShow] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <div>
      <div
        className={
          deleteDialogBox ? "homepage-wrapper-height" : "homepage-wrapper"
        }
      >
        <div className="homepage-topbar">
          <div className="topbar-left">
            <div className="logo-and-title-container">
              <span className="logo">📷</span>
              <div className="title">
                <p className="title-text">My Unsplash</p>
                <span className="title-website">
                  <a
                    href="https://www.acupofasmita.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    acupofasmita.com
                  </a>
                </span>
              </div>
            </div>
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="search by name.."
                className="search-text"
                value={searchFieldValue}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="topbar-right">
            <Button onClick={() => setDialogBox(true)} variant="primary">
              Add a photo
            </Button>
          </div>
        </div>
        {dialogBox && (
          <Dialog dialogBox={dialogBox} title="Add a new Photo">
            <AddImageDialog setDialogBox={setDialogBox} />
          </Dialog>
        )}
        <ImageList
          searchShow={searchShow}
          searchFieldValue={searchFieldValue}
          setDeleteDialogBox={setDeleteDialogBox}
          deleteDialogBox={deleteDialogBox}
        />
      </div>
    </div>
  );
};

export default Homepage;
