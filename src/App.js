import React from "react";
import "./App.css";
import NavBar from "./presentational/NavBar";
import HomePage from "./presentational/HomePage";
import RestaurantCollection from "./containers/RestaurantCollection";
import RestaurantProfile from "./containers/RestaurantProfile";
import UserProfile from "./containers/UserProfile";

class App extends React.Component {
  state = {
    restaurantsArray: [],
    displayPage: null,
    homeButton: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(data => this.setState({ restaurantsArray: data }));
  }

  moreInfoHandler = (restaurant) => {
    console.log('hi from App')

  }

  showAllRestaurants = () => {
    this.setState({ homeButton: true });
  };

  render(){
  return (
    <div className="App">
      <NavBar />
      {this.state.homeButton ? (
      <RestaurantCollection 
        restaurants = {this.state.restaurantsArray} 
        more={this.moreInfoHandler}/>) :
        <HomePage showAllRestaurants={this.showAllRestaurants}/>
      }
        <RestaurantProfile />
        <UserProfile />
      </div>
    )
  }
}

export default App
