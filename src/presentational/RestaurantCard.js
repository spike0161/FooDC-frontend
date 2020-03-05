import React from "react";
import {
  Link
} from "react-router-dom";
import { Rating } from 'semantic-ui-react'

const RestaurantCard = props => {
  return (

    <div id ="restaurant-cards" className="card">
      <h2>{props.restaurant.name}</h2>
      <div className="ui image">
        <img className ="rest-card-img" style={{width: 250, height: 200}} alt={props.restaurant.name} src={props.restaurant.img_url} />
      </div>
      <div className="content">
        <div className="description">
          {props.restaurant.category}<br></br>
            <Rating icon='star' defaultRating={props.restaurant.rating} maxRating={5} />
          <p>Price: {props.restaurant.price}</p>
        </div>
      </div>
        <Link to={`/restaurants/${props.restaurant.id}`}>
          <button id="rest-card-btn" className="ui orange basic button">More info</button>
        </Link>
      
    </div>
  );
};

export default RestaurantCard;
