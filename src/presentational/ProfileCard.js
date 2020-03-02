import React from 'react'

const ProfileCard = (props) => {
  return(
    <div>
      <h3>{props.restaurant.name}</h3>
      <img style={{width: 250, height: 200}} alt = {props.restaurant.name} src = {props.restaurant.img_url}></img>
    </div>
  )
}

export default ProfileCard
