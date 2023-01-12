import React from "react";
import BlogList from "../components/blog/BlogList";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
};

export default BlogPage;
