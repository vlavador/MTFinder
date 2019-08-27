const initState ={nowplayingMovie:[],totalpages:null};
const latestMovieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_NOWPLAYINGMOVIES':
            let nowplayingMovies = action.payload.results
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                nowplayingMovie:nowplayingMovies,
                totalpages:totalpage
             } 
             return state;
             case'FETCH_OTHERMOVIES':
             let nowplayingmovies = action.payload.results
         
             
             state = {
                 ...state,
                 nowplayingMovie:nowplayingmovies 
              
              }
              return state;
              case'CLEAR_MOVIE':
              let movieDetails = action.payload
              
              state = {
                  ...state,
                  nowplayingMovie:movieDetails
               }
               return state

               default:
               return state;           
            }
    
}
export default latestMovieReducer;