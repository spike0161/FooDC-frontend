import React from 'react'


const NavBar = () => {
  return(
    <div>
      <div className="ui menu">
    <button className="item"><img alt ="logo" src="/Users/jennifergomez/Desktop/MOD4-project/FooDC-frontend/src/images/logo.png"></img></button>
    <button href = "" className="item">Profile</button>
    <div className="right menu">
      <button href = "" className="item">Sign Up</button>
      <button href = "" className="item">Login</button>
    </div>
  </div>
    </div>
  )
}

export default NavBar
