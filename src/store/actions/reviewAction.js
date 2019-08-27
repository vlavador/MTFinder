import axios from 'axios';
import {api_key} from '../../keys'

export const getReview = (id) =>{
    return(dispatch) => {
        let movieid=id
        

        axios.get("https://api.themoviedb.org/3/movie/"+movieid+"/reviews?api_key="+api_key).then(res =>  dispatch({type:'FETCH_REVIEW',payload:res.data.results})).catch(err => console.log(err))

       

    }
}