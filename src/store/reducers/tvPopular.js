const initState ={popular:[],totalpages:null};
const tvPopularReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TVPOPULAR':
            let tvpopular = action.payload.results
            let totalpage = action.payload.total_pages
            state = {
                ...state,
                popular:tvpopular,
                totalpages:totalpage
             }
             return state
             case'FETCH_OTHERTVSHOWS':
             let tvpopulars = action.payload.results
            
             
             state = {
                 ...state,
                popular:tvpopulars
              }
              return state
              case'CLEAR_MOVIE':
              let movieDetails = action.payload
              
              state = {
                  ...state,
                  popular:movieDetails
               }
               return state

               default:
               return state;
            }
    
}
export default tvPopularReducer;