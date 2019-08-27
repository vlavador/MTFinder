import axios from 'axios';
import {api_key} from '../../keys'

export const getTvAiring = () =>{
    return(dispatch,getState) => {

       
        axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key='+api_key).then((res) => dispatch({type:'FETCH_TVAIRING',payload:res.data})).catch(err => console.log(err))

    }
}
export const getOtherTvShow = (requestpage) =>{
    return(dispatch,getState) => {
        console.log(requestpage)

       
        let page = requestpage
        axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key='+api_key+'&page='+page).then((res) => dispatch({type:'FETCH_OTHERTVSHOWS',payload:res.data})).catch(err => console.log(err))

    }
}