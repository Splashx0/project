import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteMovie } from '../actions';

const MovieList = () => {
const movies = useSelector(state=>state.movies)
const search = useSelector(state=>state.search)
const dispatch = useDispatch()
console.log(movies)

const handleDelete=(id)=>{
    dispatch(DeleteMovie(id))
}
return (
    <div class="container d-flex justify-content-center mt-3 mb-3 gap-3 flex-wrap">
        {movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie)=>(   
            <div key={movie.title}>
                <div class="card h-100" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={movie.posterURL} alt="pho" style={{ height: "25rem" }} />
                <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <p>{movie.description}</p>
                    <div class='d-flex justify-content-center  gap-2'>
                        <div  class='btn btn-danger'>{movie.rating} </div>
                       <Link to={`/${movie.title}`} state={movie}>
                            <button class="btn btn-primary" >Edit</button>
                       </Link> 
                       <button type="button" class="btn btn-dark" onClick={()=>{handleDelete(movie.id)}}><span class="bi bi-trash"></span></button>
                      </div>
                </div>
                </div>
            </div>))}
    </div>
  );
};

export default MovieList;
