import React from 'react';
import './App.css';
import NavBar from './presentational/NavBar'
import HomePage from './presentational/HomePage'
import RestaurantCollection from './containers/RestaurantCollection'
import RestaurantProfile from './containers/RestaurantProfile'
import UserProfile from './containers/UserProfile'

class App extends React.Component {

  state = {
    restaurantsArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then(data => this.setState({restaurantsArray: data}))
  }

  render(){
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <RestaurantCollection restaurants = {this.state.restaurantsArray}/>
      <RestaurantProfile />
      <UserProfile />

    </div>
  );
  }
}

export default App;
