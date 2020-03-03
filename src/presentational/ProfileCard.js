import React from 'react'
import {
  Link
} from "react-router-dom";

const ProfileCard = (props) => {
  return(
    <div>
      <h3>{props.restaurant.name}</h3>
      <img style={{width: 250, height: 200}} alt = {props.restaurant.name} src = {props.restaurant.img_url}></img>
      <button>Remove bookmark</button>
      <Link to={`/restaurants/${props.restaurant.id}`}>
          <button>Restaurant info</button>
      </Link>
    </div>
  )
}

export default ProfileCard
