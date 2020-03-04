import React from 'react'
import {
  Link
} from "react-router-dom";
import ReviewCard from "../presentational/ReviewCard"

class RestaurantProfile extends React.Component {

  render(){
    
    return(
      <div>
        <h1>{this.props.restaurant.name}</h1>
        <h3>Rating: {this.props.restaurant.rating} of 5</h3>
        <img style={{width: 350, height: 300}} alt={this.props.restaurant.name} src={this.props.restaurant.img_url}></img>
        <h3>Address: {this.props.restaurant.display_address}, Washington D.C.</h3>
        <h3>Phone: {this.props.restaurant.display_phone}</h3>
        <a href={this.props.restaurant.url}>{this.props.restaurant.name}'s Website</a>
        <h4>Price: {this.props.restaurant.price}</h4>
        <h4>Cuisine: {this.props.restaurant.category}</h4>
        <div>
        <form>
            <label>Leave Review:</label>
            <input type="text" name="review"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div>
          {this.props.reviews.map(review => <ReviewCard key = {review.id} review = {review}/> )}
        </div>
        <button onClick = {()=>this.props.bookmark(this.props.restaurant)}>Bookmark</button>
        <Link to="/restaurants">
          <button>Back</button>
        </Link>
      </div>
    )
  }
}

export default RestaurantProfile
