import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Header from './components/Header'; // Import Header
import Banner from './components/Banner'; // Import Banner
import './App.css';
import  { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  const location = useLocation(); // Get the current location
  useEffect(() => {
    ReactGA.initialize('G-WSNWDRXH46'); // Replace with your actual ID
    ReactGA.send("pageview"); // Track initial page load
  }, []);

  return (
    <div className="App">
      <Header />  
      {/* Render Banner only on the homepage */}
      {location.pathname === '/' && <Banner />}
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
