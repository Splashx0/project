import React from 'react'
import { useLocation } from 'react-router-dom'

const EditMovie = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>
    <div class="container d-flex justify-content-center mt-3 gap-3 flex-wrap">
        {   
            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={state.posterURL} alt="pho" style={{ height: "25rem" }} />
                <div class="card-body">
                    <h5 class="card-title">{state.title}</h5>
                    <div class='d-flex justify-content-center gap-2'>
                        <div  class="btn btn-dark">{state.rating} </div>
                    </div>
                </div>
                </div>
            </div>}
    </div>

    </div>
  )
}

export default EditMovie