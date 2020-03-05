import React from 'react'
import ProfileCard from '../presentational/ProfileCard'
import {
  Link
} from "react-router-dom";

class UserProfile extends React.Component {

  state = {
    usersArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/users/19")
    .then(res => res.json())
    .then(data => this.setState({ usersArray: data }))
  }



  render(){
    let restaurants = this.state.usersArray.restaurants
    return(
      <div>
        <h2>{this.state.usersArray.username}'s Bookmarks</h2>
        <Link to="/restaurants">
          <button className="ui orange basic button">Search all restaurants</button>
        </Link>
        {restaurants ? restaurants.map(restObj => <ProfileCard key = {restObj.id} restaurant = {restObj} remove = {this.props.remove}/>) : null}

      </div>
    )
  }
}

export default UserProfile
