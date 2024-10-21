// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the React Learning Platform</h1>
        <p>Learn React with interactive courses and tutorials!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
