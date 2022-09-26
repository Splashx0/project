import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { EditFilm } from '../actions'

const EditMovie = () => {
  const {state} = useLocation()
  const dispatch = useDispatch()
  const [SavedData,setSavedData] =useState({
    id:state.id,
    title:state.title,
    description:state.description ,
    posterURL: state.posterURL,
    rating: state.rating,
    trailer:state.trailer} )

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSavedData({ ...SavedData, [e.target.name]: value });
    };

  const handleSave =()=>{
    dispatch(EditFilm(SavedData))
    console.log(SavedData)
  }  
  return (
    <div>
    <div class="container d-flex justify-content-center mt-2 mb-3 gap-3 flex-wrap">
        {   
            <div>
                <form onSubmit={handleSubmit}>
                <div class="card h-80" style={{ width: "18rem" }}>
                    <img class="card-img-top mb-2" src={state.posterURL} alt="pho" style={{ height: "25rem" }} />

                    <div class="card-body d-flex flex-column gap-3">
                    <div>
                     <p class='form-label float-start' onChange={handleChange}>Image Link</p>
                      <input name='posterURL' class='form-control' type='text' defaultValue={state.posterURL} onChange={handleChange}/>
                    </div>   
                      <input name='title' class='form-control' type='text' defaultValue={state.title} onChange={handleChange}/>
                      <textarea name='description' class='form-control' rows={4} onChange={handleChange} defaultValue={state.description}></textarea>
                      <textarea name='trailer' class='form-control' rows={2} onChange={handleChange} defaultValue={state.trailer}></textarea>
                      <div class='d-flex justify-content-center gap-2'>
                            <input name='rating' class='form-control' type='text' defaultValue={state.rating} onChange={handleChange}/>
                            <button type='submit' class='btn btn-success' onClick={handleSave} >Save</button>
                      </div>
                    </div>
                </div>
                </form>
            </div>
            }
    </div>

    </div>
  )
}

export default EditMovie