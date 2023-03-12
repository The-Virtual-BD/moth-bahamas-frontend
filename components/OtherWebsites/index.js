import WebsiteCard from "components/WebsiteCard";

export default function OtherWebsites() {
  const websites = [
    {
      title: "Post Office Bahamas",
      image: "/img/other-websites/post-bahamas.png",
      href: "/post-bahamas",
    },
    {
      title: "Department of Road Traffic",
      image: "/img/other-websites/road-traffic.png",
      href: "/road-traffic",
    },
    {
      title: "Department of Meteorology",
      image: "/img/other-websites/meteorology.png",
      href: "/meteorology",
    },
  ];
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center">
          <h3>Our Other Websites</h3>
          <p>Check out some of our websites.</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center mb-3 ">
            <WebsiteCard website={websites[0]} />
          </div>
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center  mb-3 ">
            <WebsiteCard website={websites[1]} />
          </div>
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center  mb-3 ">
            <WebsiteCard website={websites[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
