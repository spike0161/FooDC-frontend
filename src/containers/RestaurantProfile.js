import React from 'react'
import {
  Link
} from "react-router-dom";
import { Rating } from 'semantic-ui-react'
import ReviewCard from "../presentational/ReviewCard"

class RestaurantProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      reviewsArray: [],
      currentUser: {id: 19}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){

    fetch(`http://localhost:3000/restaurants/${this.props.restaurant.id}`)
    .then(res => res.json())
    .then(data => this.setState({reviewsArray: data.reviews}))
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  //  debugger
    event.preventDefault();
    fetch("http://localhost:3000/reviews", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({user_id: this.state.currentUser.id, restaurant_id: this.props.restaurant.id, review: this.state.value})
    })
    .then(res => res.json())
    .then(review => this.setState({reviewsArray: [...this.state.reviewsArray, review]}), event.target.reset())
    alert('Review submitted: ' + this.state.value);
  }


  render(){  
    
    return(
      <div>
        <h1>{this.props.restaurant.name}</h1>
         <h3>Rating: <Rating icon='star' defaultRating={this.props.restaurant.rating} maxRating={5} /><br></br></h3>  
        <img style={{width: 350, height: 300}} alt={this.props.restaurant.name} src={this.props.restaurant.img_url}></img>
        <div id="profile-info-box"className="ui raised very padded text container segment">
          <h3>Address: {this.props.restaurant.display_address}, Washington D.C.</h3>
          <h3>Phone: {this.props.restaurant.display_phone}</h3>
          <a href={this.props.restaurant.url}>{this.props.restaurant.name}'s Website</a>
          <h4>Price: {this.props.restaurant.price}</h4>
          <h4>Cuisine: {this.props.restaurant.category}</h4>
          <h2>Reviews:</h2>
          {this.state.reviewsArray.map( review =>
              <ReviewCard key = {review.id} review={review}/>
          )}
        </div>

        <div id="submit-form" className="ui form ui raised very padded text container segment">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Leave a review: </h3>
            <textarea rows="4" cols="10" id="submit-area" value={this.state.value} onChange={this.handleChange} />
          </label><br></br>
          <input className = "review-submit-btn"type="submit" value="Submit" /><br></br>
        </form>
        </div>

        <button className="ui orange basic button" onClick = {()=>this.props.bookmark(this.props.restaurant)}>Bookmark</button>
        <Link to="/restaurants">
          <button id="profile-rest-btn"className="ui orange basic button">Back</button>
        </Link>
      </div>
    )
  }
}

export default RestaurantProfile
