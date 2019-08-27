const initState ={topratedMovie:[],totalpages:null};
const topratedMovieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TOPRATEDMOVIES':
            let topratedMovies = action.payload.results
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                topratedMovie:topratedMovies,
                totalpages:totalpage
             }
             return state;
             case'CLEAR_MOVIE':
             let movieDetails = action.payload
             
             state = {
                 ...state,
                 topratedMovie:movieDetails
              }
              return state
             case'FETCH_OTHERMOVIES':
             let topratedmovies = action.payload.results
         
             
             state = {
                 ...state,
                 topratedMovie:topratedmovies
              
              }
              return state
              default:
              return state;           
            }
   
}
export default topratedMovieReducer;