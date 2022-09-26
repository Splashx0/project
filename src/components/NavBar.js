import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
<nav class="navbar navbar-dark bg-primary">
  <Link to='/' class="navbar-brand px-2">Home</Link>
  <button class="btn btn-danger mx-3" type="submit">Sign In</button>

 </nav>
    </div>
  )
}

export default NavBar