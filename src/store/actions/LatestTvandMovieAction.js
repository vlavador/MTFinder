import axios from 'axios';
import {api_key} from '../../keys'
export const getLatestMovie = () =>{   
    return(dispatch) => {

       

        axios.get("https://api.themoviedb.org/3/movie/latest?api_key="+api_key).then((res) => dispatch({type:'FETCH_LATESTMOVIE',payload:res.data})).catch(err => console.log(err)) 
    }
    
}

export const getLatestTv = (id) =>{   
    return(dispatch) => {

       

        axios.get("https://api.themoviedb.org/3/tv/latest?api_key="+api_key).then(res => dispatch({type:'FETCH_LATESTTV',payload:res.data})).catch(err => console.log(err))

    }
}
    

