import React from 'react'
import ProfileCard from '../presentational/ProfileCard'

class UserProfile extends React.Component {

  state = {
    usersArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/users/1")
    .then(res => res.json())
    .then(data => this.setState({ usersArray: data }))
  }

  render(){
    let restaurants = this.state.usersArray.restaurants
    return(
      <div>
        <h2>{this.state.usersArray.username}'s Bookmarks</h2>
        {restaurants ? restaurants.map(restObj => <ProfileCard key = {restObj.id} restaurant = {restObj}/>) : null}

      </div>
    )
  }
}

export default UserProfile
