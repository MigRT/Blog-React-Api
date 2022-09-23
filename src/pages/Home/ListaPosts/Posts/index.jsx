import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Posts = ( obj ) => {
  const {blog: 
    { description, title, thumbImageAltText, thumbImage }} = obj
  const { id } = obj
  return (
    <div className="blogItem-wrap">
      <img src={`https://api-fake-blog.herokuapp.com${thumbImage}`} alt={thumbImageAltText} className="blogItem-cover" />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <Link className="blogItem-link" to={`/postagens/${id}`}>
          Ler mais
        </Link>
      </footer>
    </div>
  );
};

export default Posts;