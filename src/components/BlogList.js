import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
