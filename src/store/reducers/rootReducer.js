import {combineReducers} from 'redux'
import upcomingMovieReducer from './upcomingMovieReducer'
import movieDetailReducer from './movieDetailReducer'
import reviewReducer from './reviewReducer'
import nowplayingReducer from './nowplayingMovieReducer'
import popularReducer from './popularMovieReducer'
import topratedReducer from './topratedMovieReducer'
import tvtopratedReducer from './tvTopRated'
import tvpopularReducer from './tvPopular'
import tvairingReducer from './tvAiringReducer'
import tvonairReducer from './tvOnAirReducer'
import tvDetailReducer from './tvDetailReducer'
import LatestTvandMovieReducer from './LatestTvandMovieReducer'
const rootReducer = combineReducers({
    upcomingMovie:upcomingMovieReducer,
    movieDetail:movieDetailReducer,
    review:reviewReducer,
    nowplayingMovie:nowplayingReducer,
    popularMovie:popularReducer,
    topratedMovie:topratedReducer,
    tvairing:tvairingReducer,
    tvonair:tvonairReducer,
    tvpopular:tvpopularReducer,
    tvtoprated:tvtopratedReducer,
    tvdetail:tvDetailReducer,
    latestinfo:LatestTvandMovieReducer


})

export default rootReducer;