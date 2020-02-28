import React from 'react'

const RestaurantCard = (props) => {
  console.log(props)
  return(
    <div className="ui card">
      
      <div className="image">
        <img alt = {props.restaurant.name} src = {props.restaurant.img_url}/>
        <div className="content">
        <a className= "header">{props.restaurant.name}</a>
        <div className="description">
          {props.restaurant.category}
          {props.restaurant.rating}
          {props.restaurant.price}
          {props.restaurant.display_phone}

        </div>
      </div>
      </div>
    </div>
  )
}

export default RestaurantCard
