const initState ={toprated:[],totalpages:null};
const tvTopRatedReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TVTOPRATED':
            let tvtoprated = action.payload.results
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                toprated:tvtoprated,
                totalpages:totalpage
             }
             return state
             case'FETCH_OTHERTVSHOWS':
             let tvtoprateds = action.payload.results
            
             
             state = {
                 ...state,
                toprated:tvtoprateds
              } 
            return state
            case'CLEAR_MOVIE':
            let movieDetails = action.payload
            
            state = {
                ...state,
              toprated:movieDetails
             }
             return state

             default:
             return state;
            }

}
export default tvTopRatedReducer;