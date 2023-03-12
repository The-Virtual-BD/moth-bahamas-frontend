import axios from "apis/axios";
import BlogCard from "components/BlogCard";
import { useEffect, useState } from "react";

export default function PopularBlogs() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get("/blogs?type=popular").then((res) => setBlogs(res.data.data));
  }, []);
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <h3>Popular</h3>
      </div>
      <div className="row">
        {blogs ? (
          blogs.length == 0 ? (
            <div className="col text-center">
              <h3 className="text-muted my-5 py-5">Nothing to show</h3>
            </div>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
              >
                <BlogCard blog={blog} />
              </div>
            ))
          )
        ) : (
          Array.from(Array(3)).map((blog, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4 pb-5 d-flex justify-content-center d-md-block"
            >
              <BlogCard blog={blog} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
