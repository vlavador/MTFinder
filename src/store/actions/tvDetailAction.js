import axios from 'axios';
import {api_key} from '../../keys'

export const getTvDetail = (id) =>{   
    return(dispatch) => {

      
        let tvid = id
        axios.get("https://api.themoviedb.org/3/tv/"+tvid+"?api_key="+api_key).then((res) => dispatch({type:'FETCH_TVDETAIL',payload:res.data})).catch(err => dispatch({type:'FETCH_NULLTVDETAIL',payload:null})) 
    }
    
}

export const getTvCredit = (id) =>{   
    return(dispatch) => {

      
        let tvid = id
        axios.get("https://api.themoviedb.org/3/tv/"+tvid+"/credits?api_key="+api_key).then(res => dispatch({type:'FETCH_TVCREDIT',payload:res.data})).catch(err => console.log(err))

    }
}
    

