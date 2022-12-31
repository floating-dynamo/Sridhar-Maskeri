import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "../../api";
import "./BlogList.css";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "../../utils";

const BlogList = () => {
  const [blogData, setBlogData] = useState({ status: "", feed: {}, items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        setBlogData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="bloglist">
      <h1>My Blogs</h1>
      <div className="bloglist-blogs">
        {blogData?.items.map((blog) => {
          return (
            <div
              key={blog.title}
              className="bloglist-blog"
              onClick={() => {
                const slug = generateSlug(blog.title);
                navigate(`/blog/${slug}`);
              }}
            >
              <div className="blog-thumbnail">
                <img src={blog.thumbnail} alt={blog.title} />
                <p className="pub-date">
                  Published on: {blog.pubDate.split(" ")[0]}
                </p>
              </div>
              <p className="title">{blog.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
