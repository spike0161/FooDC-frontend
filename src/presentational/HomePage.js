import React from "react";
import NavBar from "./NavBar";

const HomePage = props => {
  return (
    <div>
      <div>
        <h1>Welcome to FooDC</h1>
      </div>
      <button
        className="ui primary basic button"
        onClick={() => props.showAllRestaurants()}
      >
        Restaurants
      </button>
    </div>
  );
};

export default HomePage;
