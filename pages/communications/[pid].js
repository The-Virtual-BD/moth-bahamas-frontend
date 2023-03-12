import axios from "apis/axios";
import BlogCards from "components/BlogCards";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "suneditor/src/assets/css/suneditor-contents.css";

export default function Blog() {
  const [blog, setBlog] = useState(null);

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    pid && axios.get(`/blogs/${pid}`).then((res) => setBlog(res.data));
  }, [pid]);
  return (
    <>
      <Navbar />
      <div className="bg-gradient py-5">
        <h3 className="text-center">Communication</h3>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="card card-shadow">
                <div className="card-body">
                  <div>
                    {blog ? (
                      <img
                        style={{ minHeight: 300 }}
                        className="img-fluid"
                        src={blog.photo.original}
                      />
                    ) : (
                      <Skeleton height={300} />
                    )}
                  </div>
                  <h4 className="mt-3">
                    {blog?.title || <Skeleton height={30} />}
                  </h4>
                  <small className="color-green">
                    {blog ? (
                      moment(blog.created_at).format("MMM DD, YYYY")
                    ) : (
                      <Skeleton height={15} width={100} />
                    )}
                  </small>
                  {blog ? (
                    <div
                      className="sun-editor-editable mt-4"
                      dangerouslySetInnerHTML={{ __html: blog.body }}
                    ></div>
                  ) : (
                    <div> </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <BlogCards count={3} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
