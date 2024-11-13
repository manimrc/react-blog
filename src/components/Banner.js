import React from 'react';
import '../Banner.css'; // Use this path if Banner.css is in the src folder
import pastel1 from '../assets/pastel1.jpeg'; // Importing the image


function Banner() {
  return (
    <div className="banner">
      <img 
        src={pastel1} 
        alt="Banner"
        className="banner-image"
      />
      <h1 className="banner-heading">Stay tuned...</h1>
    </div>
  );
}

export default Banner;
