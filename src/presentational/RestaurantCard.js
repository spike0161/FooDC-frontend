import React from "react";
import {
  Link
} from "react-router-dom";

const RestaurantCard = props => {
  return (

    <div className="ui card">
      <div className="image">
        <img style={{width: 250, height: 200}} alt={props.restaurant.name} src={props.restaurant.img_url} />
        <div className="content">
          <a className="header" href={props.restaurant.url}>{props.restaurant.name}</a>
          <div className="description">
            {props.restaurant.category}
            <p>Rating: {props.restaurant.rating}</p>
            <p>Price: {props.restaurant.price}</p>
          </div>
        </div>
        <Link to={`/restaurants/${props.restaurant.id}`}>
          <button>More info</button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
