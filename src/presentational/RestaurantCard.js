import React from "react";

const RestaurantCard = props => {
  console.log(props);


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
            {props.restaurant.display_phone}
          </div>
        </div>
          <button onClick = {() => props.more(props.restaurant)}>More info</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
