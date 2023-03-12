import axios from "apis/axios";
import PhotoCard from "components/PhotoCard";
import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState(null);
  const [data, setData] = useState(null);

  const loadMore = async () => {
    data.next_page_url &&
      axios.get(data.next_page_url).then((res) => {
        setData(res.data);
        setPhotos([...photos, ...res.data.data]);
      });
  };

  useEffect(() => {
    axios.get("/photos").then((res) => {
      setData(res.data);
      setPhotos(res.data.data);
    });
  }, []);

  return (
    <div className="row">
      {photos ? (
        photos.length == 0 ? (
          <div className="col text-center">
            <h3 className="text-muted my-5 py-5">No Phots Found</h3>
          </div>
        ) : (
          photos.map((photo) => (
            <div
              key={photo.id}
              className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
            >
              <PhotoCard photo={photo} />
            </div>
          ))
        )
      ) : (
        Array.from(Array(6)).map((photo, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
          >
            <PhotoCard photo={photo} />
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
