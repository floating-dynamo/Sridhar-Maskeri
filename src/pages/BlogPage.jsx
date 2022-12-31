import React from "react";
import BlogList from "../components/blog/BlogList";
import Navbar from "../components/home/Navbar";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogList />
    </div>
  );
};

export default BlogPage;
