import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
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
        <Link to='/' class="page-link" >
          <button class='float-start btn btn-dark mx-3'>Go Back</button>
        </Link>
    <div className="container d-flex justify-content-center mt-2 mb-3 gap-3 flex-wrap">
        {   
            <div>
                <form onSubmit={handleSubmit}>
                <div className="card h-80" style={{ width: "18rem" }}>
                    <img className="card-img-top mb-2" src={state.posterURL} alt="pho" style={{ height: "25rem" }} />

                    <div className="card-body d-flex flex-column gap-3">
                    <div>
                     <p className='form-label float-start' onChange={handleChange}>Image Link</p>
                      <input name='posterURL' className='form-control' type='text' defaultValue={state.posterURL} onChange={handleChange}/>
                    </div>   
                      <input name='title' className='form-control' type='text' defaultValue={state.title} onChange={handleChange}/>
                      <textarea name='description' className='form-control' rows={4} onChange={handleChange} defaultValue={state.description}></textarea>
                      <textarea name='trailer' className='form-control' rows={2} onChange={handleChange} defaultValue={state.trailer}></textarea>
                      <div className='d-flex justify-content-center gap-2'>
                            <input name='rating' className='form-control' type='text' defaultValue={state.rating} onChange={handleChange}/>
                            <button type='submit' className='btn btn-success' onClick={handleSave} >Save</button>
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