import React from 'react';
import log from '../img/wcqbuilding.jpg';
import './Home.css';
const Home = () => {
  return (
    <div className="container">
      <img src={log} alt="Responsive" className="rounded mx-auto d-block" />
      <div className="text-center mt-2 display-3">Welcome</div>
    </div>
  );
};

export default Home;
