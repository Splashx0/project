import { movies} from "../Data"
const movieReducer = (state=movies,action) => {

    switch(action.type){
        case 'ADD_MOVIE': 
             return [...state,action.payload]
        default : 
            return state
    }

}

export default movieReducer