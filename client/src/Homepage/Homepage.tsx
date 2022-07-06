import { useState } from "react";
import AddImageDialog from "../AddImageDialog/AddImageDialog";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import ImageList from "../ImageList/ImageList";
import "./Homepage.css";

const Homepage = () => {
  const [dialogBox, setDialogBox] = useState<boolean>(false);
  // const [datas, setDatas] = useState<{ label: string; url: string }[]>([]);

  return (
    <div>
      <div className="homepage-wrapper">
        <div className="homepage-topbar">
          <div className="topbar-left">
            <div className="logo-and-title-container">
              <span className="logo">📷</span>
              <div className="title">
                <p className="title-text">My Unsplash</p>
                <span className="title-website">acupofasmita.com</span>
              </div>
            </div>
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="search by name.."
                className="search-text"
              />
            </div>
          </div>
          <div className="topbar-right">
            <Button
              onClick={() => setDialogBox(true)}
              children="Add a photo"
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
        {dialogBox && (
          <Dialog
            setDialogBox={setDialogBox}
            dialogBox={dialogBox}
            title="Add a new Photo"
          >
            <AddImageDialog setDialogBox={setDialogBox} />
          </Dialog>
        )}
        <ImageList setDialogBox={setDialogBox} dialogBox={dialogBox} />
      </div>
    </div>
  );
};

export default Homepage;
