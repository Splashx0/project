import { movies} from "../Data"
const initialState= {
    movies :movies,
    search :''
}

const movieReducer = (state=initialState,action) => {

    switch(action.type){

        case 'ADD_MOVIE': 
            return {...state,movies: [...state.movies, action.payload]};

        case 'FILTER_MOVIE':
            return  {...state,search: action.payload};

        case 'EDIT_MOVIE':
            return {...state,movies:state.movies.map((movie)=>
                    movie.id === action.payload.id ? action.payload: movie   
            )}
        case 'DELETE_MOVIE':
            return {...state,movies:state.movies.filter((movie)=>
                    movie.id !== action.payload
                )}
        default : 
            return state
    }

}

export default movieReducer