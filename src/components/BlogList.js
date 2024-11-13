import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link">
          <div className="blog-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
