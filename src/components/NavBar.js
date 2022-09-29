import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserLogin } from "../actions"

const NavBar = () => {

const dispatch=useDispatch()
const isLogged = useSelector(state=>state.isLoggedReducer)



  return (
    <div>
<nav className="navbar navbar-dark bg-primary">
 <Link to='/' className="navbar-brand mx-4">Home</Link>
{isLogged ?

<button className="btn btn-dark mx-3" onClick={()=>dispatch(UserLogin())}>Logout</button>

:<Link to='login'><button className="btn btn-dark mx-3" >Login</button></Link> }

 </nav>
    </div>
  )
}

export default NavBar