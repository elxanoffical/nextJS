import React from "react";
import { blogs } from "../page";

export default function BlogDetail({ params }) {
  const blog = blogs.find((blog) => blog.id == params.id);

  return (
    <div>
      <div className="container mx-auto">
        <div className="text-white">
        
          <h1>{blog.id}</h1>
          <img src={blog.img} alt="" />
          <h1>{blog.title}</h1>
          <h1>{blog.des}</h1>
        </div>
      </div>
    </div>
  );
}
