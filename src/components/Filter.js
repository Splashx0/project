import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FilterMovie } from '../actions'

const Filter = () => {
    const [FilterTitle, setFilterTitle] = useState('')
    const dispatch = useDispatch()

    const handleFilterTitle =(e)=>{
        setFilterTitle(e.target.value)
        dispatch(FilterMovie(FilterTitle))
    }

  return (
    <div>
        <div className="container d-flex justify-content-center mt-3 gap-3">    
             <input type="text" className="form-control-sm" placeholder="type a film name"  onChange={handleFilterTitle} />
        </div>
    </div>
  )
}

export default Filter