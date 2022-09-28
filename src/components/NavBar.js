import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
<nav className="navbar navbar-dark bg-primary">
  <Link to='/' className="navbar-brand px-2">Home</Link>
 <Link to='login'><button className="btn btn-dark mx-3" type="submit">Sign In</button></Link> 

 </nav>
    </div>
  )
}

export default NavBar