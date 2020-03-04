import React from 'react'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

const HomePage = props => {
  return (
    <div>
      <div>
        <h1 className = "home-page-h1">Welcome to</h1>
        <img id="logo" style={{width: 495, height: 350}} src ={Logo} alt="logo"></img>
      </div>
      <h2>Click to view all DC restaurants</h2>
      <Link to="/restaurants">
        <button className="ui orange basic button">Restaurants</button>
      </Link>
    </div>
  );
};

export default HomePage;
