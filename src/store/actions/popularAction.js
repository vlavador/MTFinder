import axios from 'axios';
import {api_key} from '../../keys'

export const getPopularMovies = () =>{
    return(dispatch,getState) => {

       
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api_key).then((res) => dispatch({type:'FETCH_POPULARMOVIES',payload:res.data})).catch(err => console.log(err))

    }
}
export const getOtherMovies = (requestpage) =>{
    return(dispatch,getState) => {
        console.log(requestpage)

       
        let page = requestpage
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page='+page).then((res) => dispatch({type:'FETCH_OTHERMOVIES',payload:res.data})).catch(err => console.log(err))

    }
}