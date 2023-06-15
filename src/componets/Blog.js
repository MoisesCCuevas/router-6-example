import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const blogData = [
  { title: '¿Qué es Gribu?', slug: 'tibu-gribu', content: 'un tiburon pequeño y chistoso', author: 'krebs' },
  { title: '¿Qué es Tibu?', slug: 'tibu-tibu', content: 'un tiburon pequeño y chistoso', author: 'primezil' },
  { title: '¿Qué es Gibu?', slug: 'tibu-gibu', content: 'un tiburon pequeño y chistoso', author: 'primezil' }
];

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
      <ul>
        {blogData.map((post) => (
          <BlogLink key={post.title} post={post}/>
        ))}
      </ul>
    </>
  );
}

export default Blog;
