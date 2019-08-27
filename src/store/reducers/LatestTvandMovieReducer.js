const initState ={TvLatest:[],MovieLatest:[]};
const LatestTvandMovieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_LATESTMOVIE':
            let latestmovie = action.payload
            
            state = {
                ...state,
                MovieLatest:latestmovie
            }
            return state
             case'FETCH_LATESTTV':
            let latesttv = action.payload
        
            state = {
                ...state,
                TvLatest:latesttv
             }
             return state 
            default:
            return state;
            }
    
}
export default LatestTvandMovieReducer;