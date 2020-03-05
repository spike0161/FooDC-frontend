import React from 'react'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

const HomePage = props => {
  return (
    <div className = "welcome-background">
      <div className="welcome-box">
        <div>
          <img id="logo" style={{width: 495, height: 350}} src ={Logo} alt="logo"></img>
        </div>
        <h2>Click to view all DC restaurants</h2>
        <Link to="/restaurants">
          <button className="ui orange basic button">Restaurants</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
