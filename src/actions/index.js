export const Add_Movie =(newMovie)=>{
    return {
        type :'ADD_MOVIE',
        payload : newMovie
    };

}

export const FilterMovie = (title) =>{

        return {
            type : 'FILTER_MOVIE',
            payload : title
        }
}

export const EditFilm =(EditedMovie)=>{
    
    return {
        type:'EDIT_MOVIE',
        payload : EditedMovie
    }
}
export const DeleteMovie =(id)=>{
    
    return {
        type:'DELETE_MOVIE',
        payload : id
    }}
