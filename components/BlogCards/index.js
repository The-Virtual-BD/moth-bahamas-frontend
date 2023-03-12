import axios from "apis/axios";
import BlogCard from "components/BlogCard";
import { useEffect, useState } from "react";

export default function BlogCards({ count }) {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get("/blogs?type=latest").then((res) => {
      setBlogs(res.data.splice(0, count));
    });
  }, []);

  return (
    <div>
      <h6 className="text-center bg-green py-2 shadow">Latest Blogs</h6>
      {blogs
        ? blogs.map((blog, index) => (
            <div className="mb-3" key={index}>
              <BlogCard key={index} blog={blog} />
            </div>
          ))
        : Array.from(Array(count)).map((_, index) => (
            <div className="mb-3" key={index}>
              <BlogCard key={index} blog={null} />
            </div>
          ))}
    </div>
  );
}
