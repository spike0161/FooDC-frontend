import React from 'react'

const RestaurantCard = (props) => {
  return(
    <div className="ui card">
      
      <div className="image">
        <img alt = {props.restaurant.name} src = {props.restaurant.img_url}/>
        <div className="content">
        <a className= "header">{props.restaurant.name}</a>
        <div className="description">
          {props.restaurant.category}
          <p>Rating: {props.restaurant.rating}</p>
          <p>Price: {props.restaurant.price}</p>
          {props.restaurant.display_phone}
        </div>
          <button onClick = {() => props.more(props.restaurant)}>More info</button>
      </div>
      </div>
    </div>
  )
}

export default RestaurantCard
