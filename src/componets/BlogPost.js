import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from './Blog';

const BlogPost = () => {
  const { slug } =  useParams();
  const navigate = useNavigate();

  const blogPost = blogData.find(p => p.slug === slug);

  const onClickBack = () => {
    navigate('/blog');
  }

  return (
    <>
      <button onClick={onClickBack}>Volver</button>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <p>{blogPost.author}</p>
    </>
  );
}

export default BlogPost;
