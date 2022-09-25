import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterMovie } from '../actions'

const Filter = () => {
    const [FilterTitle, setFilterTitle] = useState('')
    const movie = useSelector(state =>state)
    console.log(movie)
    const dispatch = useDispatch()

    const handleFilterTitle =(e)=>{
        setFilterTitle(e.target.value)
        dispatch(FilterMovie(FilterTitle))
    }
    console.log(FilterTitle)

  return (
    <div>
        <div class="container d-flex justify-content-center mt-3 gap-3">    
             <input type="text" class="form-control-sm" placeholder="type a film name" onChange={handleFilterTitle} />
        </div>
    </div>
  )
}

export default Filter