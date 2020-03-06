import React from "react";
import RestaurantCard from "../presentational/RestaurantCard";

class RestaurantCollection extends React.Component {
  render() {
    return (
      <div>
        <h1>Restaurant Collection</h1>
        <h3>Search by cuisine:</h3>
      <select
          className="ui search dropdown"
          onChange={e => this.props.categoryHandler(e)}>
          <option value="">All Restaurant</option>
          <option value="American">American</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Greek">Greek</option>
          <option value="Bars">Bars</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Brazilian">Brazilian</option>
        </select>
        <div className="ui centered cards">
          {this.props.restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantCollection;
