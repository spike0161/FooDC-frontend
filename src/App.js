import React from "react";
import "./App.css";
import NavBar from "./presentational/NavBar";
import HomePage from "./presentational/HomePage";
import RestaurantCollection from "./containers/RestaurantCollection";
import RestaurantProfile from "./containers/RestaurantProfile";
import UserProfile from "./containers/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    restaurantsArray: [],
    displayPage: null,
    profileButton: null,
    restaurantShowPage: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(data => this.setState({ restaurantsArray: data }))
  }


  moreInfoHandler = (restaurant) => {
    console.log('hi from App')
    this.setState({restaurantShowPage: restaurant})

  }

  profileBtnHandler = () => {
    this.setState({ profileButton: true })
  }

  render(){
  return (
    <div className="App">
      <Router>
        <NavBar profileBtn = {this.profileBtnHandler}/>


          <Route
            exact path='/'
            render={(props)=> <HomePage showAllRestaurants={this.showAllRestaurants}/>}
          />
          
          <Route 
          path='/restaurants' 
          render={(props)=>
            <RestaurantCollection 
            restaurants = {this.state.restaurantsArray} 
            more={this.moreInfoHandler}/>}/> 
            
          <Route path='/restaurants/:id' component={RestaurantProfile}/>

          <Route path='/users/:id' component={UserProfile}/>

        </Router>
      </div>
    )
  }
}

export default App
