import { movies} from "../Data"
const movieReducer = (state=movies,action) => {

    switch(action.type){

        case 'ADD_MOVIE': 
            return [...state,action.payload]

        case 'FILTER_MOVIE':
            return (state.filter((movie)=>
                movie.title.toLowerCase().includes(action.payload)
            ))

        default : 
            return state
    }

}

export default movieReducer