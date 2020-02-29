import React from 'react'
import RestaurantCard from "../presentational/RestaurantCard"

class RestaurantCollection extends React.Component {


  render(){
    return(
      <div>
        <h1>Restaurant Collection</h1>
      {this.props.restaurants.map( restaurant =>
        <RestaurantCard
          key = {restaurant.id}
          restaurant = {restaurant}
        />
      )}

      </div>
    )
  }
}

export default RestaurantCollection
