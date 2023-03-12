import { useRouter } from "next/router";

export default function WebsiteCard({ website }) {
  const router = useRouter();
  return (
    <div style={{ width: 300 }} className="card card-shadow border-0">
      <div className="card-body card-shadow d-flex flex-column align-items-center position-relative z-index-1">
        <img width={100} height={100} src={website.image} alt="" />
        <h5 className="mt-5">{website.title}</h5>
      </div>
      <button
        onClick={() => router.push(website.href)}
        className="btn btn-green"
      >
        Read More
      </button>
    </div>
  );
}
