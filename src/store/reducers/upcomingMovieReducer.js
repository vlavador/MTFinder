const initState ={upcomingMovie:[],totalpages:null};
const upcomingMovieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_UPCOMINGMOVIES':
            let upcomingMovies = action.payload.results
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                upcomingMovie:upcomingMovies, 
                totalpages:totalpage
             }
             return state
            case'FETCH_OTHERMOVIES':
             let upcomingmovies = action.payload.results
         
             
             state = {
                 ...state,
                 upcomingMovie:upcomingmovies
              
              }
              return state
              case'CLEAR_MOVIE':
              let movieDetails = action.payload
              
              state = {
                  ...state,
                  upcomingMovie:movieDetails
               }
               return state

               default:
               return state;
            }
 
}
export default upcomingMovieReducer;