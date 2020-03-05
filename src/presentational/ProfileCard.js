import React from 'react'
import {
  Link
} from "react-router-dom";

const ProfileCard = (props) => {
  return(
    <div className="ui vertical segment">
    
      <h3>{props.restaurant.name}</h3>
      <img style={{width: 250, height: 200}} alt = {props.restaurant.name} src = {props.restaurant.img_url}></img><br></br>
      <button className="ui orange basic button" onClick = {()=> props.remove(props.restaurant.id)}>Remove bookmark</button>
      <Link to={`/restaurants/${props.restaurant.id}`}>
          <button className="ui orange basic button">Restaurant info</button>
      </Link>
    </div>
  )
}

export default ProfileCard
