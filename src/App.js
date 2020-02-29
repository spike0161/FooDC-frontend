import React from 'react';
import './App.css';
import NavBar from './presentational/NavBar'
import HomePage from './presentational/HomePage'
import RestaurantCollection from './containers/RestaurantCollection'
import RestaurantProfile from './containers/RestaurantProfile'
import UserProfile from './containers/UserProfile'

class App extends React.Component {

  state = {
    restaurantsArray: [],
    homeButton: null
  }

  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then(data => this.setState({restaurantsArray: data}))
  }

  showAllRestaurants = () => {
    this.setState({ homeButton: true})
  }

  render(){
  return (
    <div className="App">
      <NavBar />

      {this.state.homeButton ? <RestaurantCollection restaurants={this.state.restaurantsArray}/> :
      <HomePage showAllRestaurants={this.showAllRestaurants}/>
      }
      
      <RestaurantProfile />
      <UserProfile />

    </div>
  );
  }
}

export default App;
