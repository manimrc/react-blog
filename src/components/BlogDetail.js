import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data'; // Ensure this is the correct path

const BlogDetail = () => {
  const { id } = useParams();  // Get the blog post ID from the URL
  const navigate = useNavigate();

  // Find the post matching the ID from the URL
  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  // Handle the close button
  const handleClose = () => {
    localStorage.setItem('scrollPosition', window.scrollY);  // Save scroll position
    navigate('/');  // Navigate back to the blog list
  };

  // If no post is found with the given ID, show an error message
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="blog-detail">
      <button className="close-btn" onClick={handleClose}>
        &times; {/* "X" close button */}
      </button>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
