const initState ={tvInformation:[],tvCreditCast:[],tvCreditCrew:[]};
const tvDetailReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_TVDETAIL':
            let tvDetail = action.payload
            
            state = {
                ...state,
                tvInformation:tvDetail,
                tvCreditCrew:tvDetail.created_by
             }   
              return state;

              case'FETCH_NULLTVDETAIL':
              let nulltvDetail = action.payload
               
              state = {
                  ...state,
                  tvInformation:nulltvDetail,
                  tvCreditCrew:[]
               }
              
               return state
            

             case'CLEAR_TVDETAILS':
            let tvDetails = action.payload
            
            state = {
                ...state,
                tvInformation:tvDetails
             }
             return state;

             case'FETCH_TVCREDIT':
            let tvcredit = action.payload
        
            state = {
                ...state,
                tvCreditCast:tvcredit.cast
             }
             return state;

             default:
             return state;
            }

}
export default tvDetailReducer;