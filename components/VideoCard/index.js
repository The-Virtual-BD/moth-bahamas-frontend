import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const customStyle = {
  content: {
    width: "fit-content",
    height: "fit-content",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    overflow: "hidden",
  },
};

export default function VideoCard({ video }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="card w-100 border-0 card-shadow pb-2 cursor-pointer">
      {video ? (
        <div
          onClick={() => setShowModal(true)}
          className="overflow-hidden position-relative"
        >
          <img
            style={{ objectFit: "contain" }}
            height={300}
            width="100%"
            src={video.thumb}
          />
          <svg
            className="position-absolute top-50 start-50 translate-middle"
            height={60}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
            />
          </svg>
        </div>
      ) : (
        <Skeleton height={300} />
      )}

      <div className="mt-3 px-4 color-dark">
        <h6 className="fw-bold">{video?.title || <Skeleton height={20} />}</h6>
        <small>
          {video?.description || <Skeleton height={10} count={3} />}
        </small>
      </div>
      <Modal
        isOpen={showModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setShowModal(false)}
        style={customStyle}
      >
        <ReactPlayer playing={true} controls={true} url={video?.src} />
      </Modal>
    </div>
  );
}
