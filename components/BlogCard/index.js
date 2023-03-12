import moment from "moment";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

export default function BlogCard({ blog }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/communications/${blog?.id}`)}
      className="card w-100 border-0 card-shadow pb-2 cursor-pointer"
    >
      {blog ? (
        <img
          style={{ objectFit: "cover" }}
          height={300}
          src={blog.photo.thumb}
        />
      ) : (
        <Skeleton height={300} />
      )}

      <div className="mt-3 px-4 color-dark">
        <small className="color-green">
          {moment(blog?.created_at).format("MMM DD, YYYY")}
        </small>
        <h6 className="fw-bold">{blog?.title || <Skeleton height={20} />}</h6>
      </div>
    </div>
  );
}
