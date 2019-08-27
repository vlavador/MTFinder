const initState ={airing:[],totalpages:null};
const tvAiringReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TVAIRING':
            let tvairing = action.payload.results
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                airing:tvairing,
                totalpages:totalpage
             }
             return state
             case'CLEAR_MOVIE':
             let movieDetails = action.payload
             
             state = {
                 ...state,
                 airing:movieDetails
              }
              return state
             case'FETCH_OTHERTVSHOWS':
             let tvairings = action.payload.results
            
             
             state = {
                 ...state,
                airing:tvairings
              } 
            return state

            default:
            return state;
            }

}
export default tvAiringReducer;