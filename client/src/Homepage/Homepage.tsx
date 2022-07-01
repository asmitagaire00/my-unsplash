import Button from "../Button/Button";
import ImageList from "../ImageList/ImageList";
import "./Homepage.css";

const Homepage = () => {
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
              onClick={() => console.log("button clicked")}
              children="Add a photo"
              border="none"
              backgroundColor="#3DB46D"
              width="100px"
              height="45px"
              borderRadius="12px"
              weight="700"
              color="#FFFFFF"
              font="Noto Sans"
              cursor="pointer"
            />
          </div>
        </div>
        <ImageList />
      </div>
    </div>
  );
};

export default Homepage;
