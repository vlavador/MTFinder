const initState ={review:[]};
const reviewReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_REVIEW':
            let movieReview = action.payload
            
            state = {
                ...state,
                review:movieReview
             }
             return state;
             default:
             return state;            
            }

}
export default reviewReducer;