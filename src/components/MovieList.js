import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MovieList = () => {
const movies = useSelector(state=>state)

return (
    <div class="container d-flex justify-content-center mt-3 gap-3 flex-wrap">
        {movies.map((movie)=>(   
            <div key={movie.title}>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src={movie.posterURL} alt="pho" style={{ height: "25rem" }} />
                <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <div class='d-flex justify-content-center gap-2'>
                        <div  class="btn btn-dark">{movie.rating} </div>
                       <Link to={`/${movie.title}`} state={movie}>
                            <button class="btn btn-primary" >Edit</button>
                       </Link> 
                    </div>
                </div>
                </div>
            </div>))}
    </div>
  );
};

export default MovieList;
