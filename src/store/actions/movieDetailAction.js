import axios from 'axios';
import {api_key} from '../../keys'

export const getMovieDetail = (id) =>{   
    return(dispatch) => {
        
   
        let movieid = id
        axios.get("https://api.themoviedb.org/3/movie/"+movieid+"?api_key="+api_key).then((res) => dispatch({type:'FETCH_MOVIEDETAIL',payload:res.data})).catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null})) 
    }
    
}

export const getMovieCredit = (id) =>{   
    return(dispatch) => {

   
        let movieid = id
        axios.get("https://api.themoviedb.org/3/movie/"+movieid+"/credits?api_key="+api_key).then(res => dispatch({type:'FETCH_MOVIECREDIT',payload:res.data})).catch(err => console.log(err))

    }
}
    

