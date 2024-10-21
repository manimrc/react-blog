import React from 'react';
import '../Banner.css'; // Use this path if Banner.css is in the src folder

function Banner() {
  return (
    <div className="banner">
      <img 
        src="https://via.placeholder.com/800x200" 
        alt="Banner"
        className="banner-image"
      />
      <h1 className="banner-heading">Welcome to Our Blog</h1>
    </div>
  );
}

export default Banner;
