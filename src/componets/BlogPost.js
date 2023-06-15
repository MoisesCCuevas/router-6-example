import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from './Blog';
import useAuth from "../hooks/useAuth";

const BlogPost = () => {
  const { slug } =  useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const blogPost = blogData.find(p => p.slug === slug);

  const isAuthor = user?.name === blogPost.author;

  const onClickBack = () => {
    navigate('/blog');
  }

  return (
    <>
      <button onClick={onClickBack}>Volver</button>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <p>{blogPost.author}</p>
      {(user?.isAdmin || isAuthor) && (
        <>
          <button>Eliminar</button>
          <button>Editar</button>
        </>
      )}
    </>
  );
}

export default BlogPost;
