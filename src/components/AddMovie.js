import React from 'react'
import { useState } from 'react';
import { Add_Movie } from '../actions';
import { useDispatch } from 'react-redux';

const AddMovie = () => {
const dispatch = useDispatch()
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
        <div>
          <form onSubmit={handleSubmit} class="mt-3">
            <div class="container d-flex justify-content-center gap-3">
              <input  type="text" class="form-control-sm"  placeholder="title"  name="title"onChange={handleChange}/>
              <input type="text" class="form-control-sm" placeholder="description" name="description"  onChange={handleChange}/>
              <input type="text" class="form-control-sm" placeholder="posterURL" name="posterURL"onChange={handleChange}/>
              <input type="text" class="form-control-sm" placeholder="rating" name="rating"onChange={handleChange}/>
              <input type="text" class="form-control-sm" placeholder="trailer" name="trailer"onChange={handleChange}/>
              <button class="btn btn-primary" onClick={handleAddMovie}>
                Add
              </button>
            </div>
          </form>
        </div></div>
  )
}

export default AddMovie