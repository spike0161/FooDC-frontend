import React from 'react'
import RestaurantCard from '../presentational/RestaurantCard'

class RestaurantProfile extends React.Component {

  render(){
    return(
      <div>
        <h1>Restaurant Profile</h1>
      <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantProfile
