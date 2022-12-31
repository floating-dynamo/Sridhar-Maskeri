import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import { generateSlug } from "../../utils";
import Tag from "./Tag";
import "./Blog.css";
import ReactHtmlParser from 'react-html-parser'; 

const Blog = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState({ title: "", categories: [] });

  useEffect(() => {
    axios.get("").then((res) => {
      const blogs = res.data.items;
      const currBlog = blogs.filter((blog) => {
        const slug = generateSlug(blog.title);
        return title === slug;
      });
      setBlog(currBlog[0]);
    });
  }, [title]);
  return (
    <div className="blog">
      <div style={{width:'max-content'}}>
        <h1 className="blog-title">{blog.title}</h1>
        <hr className="line" />
      </div>
      {blog?.categories.map((tag) => {
        return <Tag title={tag} key={tag}/>;
      })}
      <div>
        {ReactHtmlParser (blog.content)}
      </div>
    </div>
  );
};

export default Blog;
