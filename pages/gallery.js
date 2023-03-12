import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PhotoGallery from "components/PhotoGallery";
import VideoGallery from "components/VideoGallery";
import { useState } from "react";

const styles = {
  active: {
    color: "#00a388",
    borderBottom: "4px solid #00a388",
    padding: "8px 0",
    transition: "width ease .5s",
  },
};

export default function Gallery() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row bg-gradient py-5">
          <h3 className="text-center">Gallery</h3>
        </div>
        <div className="container mt-5">
          <div className="mb-5">
            <strong
              onClick={() => setCurrentTab(0)}
              className={`cursor-pointer`}
              style={currentTab == 0 ? styles.active : {}}
            >
              Image Gallery
            </strong>
            <strong
              onClick={() => setCurrentTab(1)}
              className={`ms-5 cursor-pointer`}
              style={currentTab == 1 ? styles.active : {}}
            >
              Video Gallery
            </strong>
          </div>
          {currentTab == 0 ? <PhotoGallery /> : <VideoGallery />}
        </div>
      </div>
      <Footer />
    </>
  );
}
