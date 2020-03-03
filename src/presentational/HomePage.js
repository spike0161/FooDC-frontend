import React from 'react'
import {
  Link
} from "react-router-dom";

const HomePage = props => {
  return (
    <div>
      <div>
        <h1>Welcome to FooDC</h1>
      </div>
      <Link to="/restaurants">
        <button
          className="ui primary basic button"
          >Restaurants</button>
      </Link>
    </div>
  );
};

export default HomePage;
