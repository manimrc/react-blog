import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const post = blogPosts.find((p) => p.id === parseInt(id));

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
