const initState ={movieInformation:[]  ,movieCreditCast:[],movieCreditCrew:[]};
const movieDetailReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_MOVIEDETAIL':
            let movieDetail = action.payload
            console.log(movieDetail)
            state = {
                ...state,
                movieInformation:movieDetail
             }
             return state;
             case'FETCH_NULLMOVIEDETAIL':
            let nullmovieDetail = action.payload
             
            state = {
                ...state,
                movieInformation:nullmovieDetail
             }
            
             return state
             case'CLEAR_MOVIEDETAILS':
            let movieDetails = action.payload
            
            state = {
                ...state,
                movieInformation:movieDetails
             }
             return state
             case'FETCH_MOVIECREDIT':
            let moviecredit = action.payload
           
            state = {
                ...state,
                movieCreditCast:moviecredit.cast,
                movieCreditCrew:moviecredit.crew
             }
             return state

             default:
             return state;
            }

}
export default movieDetailReducer;