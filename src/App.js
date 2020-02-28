import React from 'react';
import './App.css';
import NavBar from './presentational/NavBar'
import HomePage from './presentational/HomePage'
import RestaurantCollection from './containers/RestaurantCollection'
import RestaurantProfile from './containers/RestaurantProfile'
import UserProfile from './containers/UserProfile'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <RestaurantCollection />
      <RestaurantProfile />
      <UserProfile />

    </div>
  );
}

export default App;
