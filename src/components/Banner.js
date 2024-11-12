import React from 'react';
import '../Banner.css'; // Use this path if Banner.css is in the src folder
import hamImage from '../assets/ham.gif'; // Importing the image


function Banner() {
  return (
    <div className="banner">
      <img 
        src={hamImage} 
        alt="Banner"
        className="banner-image"
      />
      <h1 className="banner-heading">Test Test Test, built in react, little bit chatgpt for that, find source code at ...  </h1>
    </div>
  );
}

export default Banner;
