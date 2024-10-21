import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import '../Header.css'; // Import CSS

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value as needed
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubscribe = () => {
    const email = prompt('Enter your email to subscribe:');
    if (email) {
      // Handle email subscription logic here
      alert(`Thank you for subscribing! We will notify you at ${email}`);
    }
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-left">
        <a href="/" className="home-button">Home</a>
      </div>
      <div className="header-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </header>
  );
}

export default Header;
