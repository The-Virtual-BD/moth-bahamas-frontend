import axios from "apis/axios";
import VideoCard from "components/VideoCard";
import { useEffect, useState } from "react";

export default function VideoGallery() {
  const [videos, setVideos] = useState(null);
  const [data, setData] = useState(null);

  const loadMore = async () => {
    data.next_page_url &&
      axios.get(data.next_page_url).then((res) => {
        setData(res.data);
        setVideos([...videos, ...res.data.data]);
      });
  };

  useEffect(() => {
    axios.get("/videos").then((res) => {
      setData(res.data);
      setVideos(res.data.data);
    });
  }, []);

  return (
    <div className="row">
      {videos ? (
        videos.length == 0 ? (
          <div className="col text-center">
            <h3 className="text-muted my-5 py-5">No Videos Found</h3>
          </div>
        ) : (
          videos.map((video) => (
            <div
              key={video.id}
              className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
            >
              <VideoCard video={video} />
            </div>
          ))
        )
      ) : (
        Array.from(Array(6)).map((video, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
          >
            <VideoCard video={video} />
          </div>
        ))
      )}
      {data?.next_page_url && (
        <div className="d-flex justify-content-center">
          <button onClick={loadMore} className="btn btn-green">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
