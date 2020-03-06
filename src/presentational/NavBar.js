import React from 'react'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";


const NavBar = (props) => {
  return(
    <div>
      <div className="ui menu">
      <Link to = "/">
        <button className="item"><img alt ="logo" src={Logo} style={{width: 80, height: 50}}></img></button>
      </Link>
      
      <Link to="/users/:id">
        <button style={{width: 80, height: 70}} className="item">Profile</button>
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
