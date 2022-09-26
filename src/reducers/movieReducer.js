import { movies} from "../Data"
const movieReducer = (state=movies,action) => {

    switch(action.type){

        case 'ADD_MOVIE': 
            return [...state,action.payload]

        case 'FILTER_MOVIE':
            return (state.filter((movie)=>
                movie.title.toLowerCase().includes(action.payload)
            ))

        case 'EDIT_MOVIE':
            return (state.map((movie)=>
                
                    movie.id === action.payload.id ? action.payload: movie   
            ))
            
        default : 
            return state
    }

}

export default movieReducer