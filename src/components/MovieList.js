import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteMovie } from '../actions';

const MovieList = () => {
const movies = useSelector(state=>state.movies)
const search = useSelector(state=>state.search)
const dispatch = useDispatch()

const handleDelete=(id)=>{
    dispatch(DeleteMovie(id))
}
return (
    <div className="container d-flex justify-content-center mt-3 mb-3 gap-3 flex-wrap">
        {movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie)=>(   
            <div key={movie.title}>
                <div className="card h-100" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={movie.posterURL} alt="pho" style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p>{movie.description}</p>
                    <div className='d-flex justify-content-center  gap-2'>
                        <div  className='btn btn-danger'>{movie.rating} </div>
                       <Link to={`/${movie.title}`} state={movie}>
                            <button className="btn btn-primary" >Edit</button>
                       </Link> 
                       <button type="button" className="btn btn-dark" onClick={()=>{handleDelete(movie.id)}}><span className="bi bi-trash"></span></button>
                      </div>
                </div>
                </div>
            </div>))}
    </div>
  );
};

export default MovieList;
