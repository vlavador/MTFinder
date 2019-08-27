const initState ={popularMovie:[],totalpages:null};
const popularMovieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_POPULARMOVIES':
            let popularMovies = action.payload.results
            let totalpage = action.payload.total_pages
            state = {
                ...state,
                popularMovie:popularMovies,
                totalpages:totalpage
             }
             return state;
             case'FETCH_OTHERMOVIES':
             let  popularmovie = action.payload.results
             state = {
                ...state,
                popularMovie:popularmovie
             
             }
             return state;
             
             case'CLEAR_MOVIE':
             let movieDetails = action.payload
             
             state = {
                 ...state,
                 popularMovie:movieDetails
              }
              return state
            
              default:
              return state;            
            
            }
  
}
export default popularMovieReducer;