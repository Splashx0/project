export const Add_Movie =(newMovie)=>{
    return {
        type :'ADD_MOVIE',
        payload : newMovie
    };

}

export const FilterMovie = (FiltredTerm) =>{

        return {
            type : 'FILTER_MOVIE',
            payload : FiltredTerm
        }
}
