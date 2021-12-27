import React from "react";
// import "./style.css";
import blogimg from "../../Assets/images/logo.jpg";
const Blog = () => {
  return (
    <div className="Blog">
      <img src={blogimg} alt="avatar" className="feed-img" />
      <h2>Teconico</h2>
      <p className="social">#Follow #like #share </p>
    </div>
  );
};

export default Blog;
