import Footer from "components/Footer";
import LatestBlogs from "components/LatestBlogs";
import Navbar from "components/Navbar";
import PopularBlogs from "components/PopularBlogs";

export default function Communications() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row bg-gradient py-5">
          <h3 className="text-center">Communications</h3>
        </div>
        <LatestBlogs />
        <PopularBlogs />
      </div>
      <Footer />
    </>
  );
}
