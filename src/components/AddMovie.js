import React from 'react'
import { useState } from 'react';
import { Add_Movie } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const AddMovie = () => {


const dispatch = useDispatch()
const isLogged = useSelector(state=>state.isLoggedReducer)

const [Add, setAdd] = useState({id:Math.random(),title: "",description: "",posterURL: "",rating: "",trailer:''});

const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
      };
const handleChange = (e) => {
    const value = e.target.value;
    setAdd({ ...Add, [e.target.name]: value });
    };
 const handleAddMovie=()=>{
        dispatch(Add_Movie(Add))
    }
return (
     <div> 
      {isLogged ?
            <div>
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="container d-flex justify-content-center gap-3">
                <input  type="text" className="form-control-sm"  placeholder="title"  name="title"onChange={handleChange}/>
                <input type="text" className="form-control-sm" placeholder="description" name="description"  onChange={handleChange}/>
                <input type="text" className="form-control-sm" placeholder="posterURL" name="posterURL"onChange={handleChange}/>
                <input type="text" className="form-control-sm" placeholder="rating" name="rating"onChange={handleChange}/>
                <input type="text" className="form-control-sm" placeholder="trailer" name="trailer"onChange={handleChange}/>
                <button className="btn btn-primary" onClick={handleAddMovie}>
                  Add
                </button>
              </div>
            </form>
          </div>  
    
 : <div class="alert alert-danger" role="alert">
 <h4>Login So You Can Create / Edit / Delete Movies ! </h4> 
</div>
    
    
    }

        </div>
  )
}

export default AddMovie