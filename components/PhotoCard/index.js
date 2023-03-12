import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import Skeleton from "react-loading-skeleton";

export default function PhotoCard({ photo }) {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <>
      {showLightbox && (
        <Lightbox
          onClose={() => setShowLightbox(false)}
          image={photo.urls.original}
        />
      )}

      <div className="card w-100 border-0 card-shadow pb-2 cursor-pointer">
        {photo ? (
          <img
            style={{ objectFit: "contain" }}
            height={300}
            width="100%"
            src={photo.urls.original}
            onClick={() => setShowLightbox(true)}
          />
        ) : (
          <Skeleton height={300} />
        )}

        <div className="mt-3 px-4 color-dark">
          <h6 className="fw-bold">
            {photo?.title || <Skeleton height={20} />}
          </h6>
          <small>
            {photo?.description || <Skeleton height={10} count={3} />}
          </small>
        </div>
      </div>
    </>
  );
}
