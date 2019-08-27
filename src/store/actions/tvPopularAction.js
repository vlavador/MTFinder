import axios from 'axios';
import {api_key} from '../../keys'

export const getTvPopular = () =>{
    return(dispatch,getState) => {

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key='+api_key).then((res) => dispatch({type:'FETCH_TVPOPULAR',payload:res.data})).catch(err => console.log(err))

    }
}

export const getOtherTvShow = (requestpage) =>{
    return(dispatch,getState) => {
        console.log(requestpage)

        let page = requestpage
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key='+api_key+'&page='+page).then((res) => dispatch({type:'FETCH_OTHERTVSHOWS',payload:res.data})).catch(err => console.log(err))

    }
}