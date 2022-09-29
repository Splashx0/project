import { useState } from "react"
import React from 'react'
import { UserLogin } from "../actions"
import { useDispatch ,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {

const adminUser = 
    {
        username : 'admin',
        password : 'admin'
    }

const dispatch = useDispatch()
const navigate = useNavigate();
const isLogged = useSelector(state=>state.isLoggedReducer)

const [Username, setUsername] = useState('')
const [Password, setPassword] = useState('')
const [Error, setError] = useState('')


const handleUsername = (e) => {
  setUsername(e.target.value);
  };

const handlePassword = (e) => {
  setPassword(e.target.value);
    };
    console.log(isLogged)

 const handleLogin=()=>{
      if (adminUser.username==Username && adminUser.password==Password ) {
        dispatch(UserLogin());
        navigate('/');
      }   
      else 
        setError('Username or Password Are Wrong')
    }   
 const handleSubmit=(e)=>{
  e.preventDefault();
  handleLogin();
 }

 return (
    <div>
  <form onSubmit={handleSubmit} className='container w-50 d-flex justify-content-center mt-5 gap-3 flex-column'>
      <div className="form-group ">
              <p>Username</p>
              <input onChange={handleUsername} type="text" className="form-control "  placeholder="Enter Username"/>
      </div>
      <div className="form-group ">
              <p >Password</p>
              <input onChange={handlePassword} type="password" className="form-control" placeholder="Password"/>
      </div>
       <div>
             <button type="submit" className="btn btn-primary">Login</button>
             { Error ? <h5 class="mt-3">{Error}</h5>
             : ''
             }

      </div> 
  </form>
  </div>
  )
}

export default Login