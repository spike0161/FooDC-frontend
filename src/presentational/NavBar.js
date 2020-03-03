import React from 'react'
import {
  Link
} from "react-router-dom";


const NavBar = (props) => {
  return(
    <div>
      <div className="ui menu">
      <Link to = "/">
        <button className="item">Logo Here</button>
      </Link>
      
      <Link to="/users/:id">
        <button className="item">Profile</button>
      </Link>
      

      <div className="right menu">
        <button href = "" className="item">Sign Up</button>
        <button href = "" className="item">Login</button>
      </div>
  </div>
    </div>
  )
}

export default NavBar
