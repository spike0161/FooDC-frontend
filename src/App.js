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
    loading: true,
    filteredRestaurants: [],
    category: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(data => this.setState({ restaurantsArray: data, loading: false}))
  }

  categoryHandler = (e) => {
      this.getFilteredRestaurants(e)
  }

  getFilteredRestaurants = (e) => {
    let filterResults = this.state.restaurantsArray.filter(restaurant => restaurant.category == e.target.value)
    this.setState({filteredRestaurants: filterResults, category: e.target.value})
  }



  render(){

  return (
    <div className="App">
      {!this.state.loading ?

      <Router>
        <NavBar profileBtn = {this.profileBtnHandler}/>


          <Route
            exact path='/'
            render={(props)=> <HomePage showAllRestaurants={this.showAllRestaurants}/>}
          />

          <Route
          exact
          path='/restaurants'
          render={(props)=>
            <RestaurantCollection
            restaurants = {this.state.filteredRestaurants}
            categoryHandler={this.categoryHandler}
            />}/>

          <Route path ='/restaurants/:id' render={(props) => {
            console.log(props)
            let id = parseInt(props.match.params.id)
            let restaurantObj = this.state.restaurantsArray.find(rest => rest.id === id)
            return <RestaurantProfile restaurant = {restaurantObj}/>
            }
          }/>


          <Route path='/users/:id' component={UserProfile}/>

        </Router>

      :

      "Loading!!!!!!"

      }

      </div>
    )
  }
}

export default App
