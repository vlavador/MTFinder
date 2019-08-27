const initState ={onairing:[],totalpages:null};
const tvOnAiringReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TVONAIR':
            let tvonairing = action.payload.results
            let totalpage = action.payload.total_pages
            state = {
                ...state,
                onairing:tvonairing,
                totalpages:totalpage
             }
             return state
             case'FETCH_OTHERTVSHOWS':
             let onairings = action.payload.results
            
             
             state = {
                 ...state,
                onairing:onairings
              } 
              return state
              case'CLEAR_MOVIE':
              let movieDetails = action.payload
              
              state = {
                  ...state,
                  onairing:movieDetails
               }
               return state
            
               default:
               return state;
            }
 
}
export default tvOnAiringReducer;