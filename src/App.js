import React from 'react';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';
import Navigation from './components/Navigation'


import FooterNav from './components/FooterNav'
import MovieUpcoming from './components/movie/Upcoming'
import {BrowserRouter,Route} from 'react-router-dom'
import MovieDetails from './components/movie/MovieDetails'
import  NowPlaying from './components/movie/NowPlaying'
import TopRated from './components/movie/TopRated'
import Popular from './components/movie/Popular'
import TvOnAir from './components/television/TvOnAir'
import TvAiring from './components/television/TvAiring'
import TvPopular from './components/television/Popular'
import TvTopRated from './components/television/TopRated'
import TvDetails from './components/television/TvDetails'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/movies/upcoming' component={MovieUpcoming} />
      <Route path='/movies/nowplaying' component={NowPlaying} />
      <Route path='/movies/toprated' component={TopRated} />
      <Route path='/movies/popular' component={Popular} />
     
      <Route path='/television/airing' component={TvAiring} />
      <Route path='/television/onair' component={TvOnAir} />
      <Route path='/television/popular' component={TvPopular} />
      <Route path='/television/toprated' component={TvTopRated} />
      

  
      <Route path='/movie/:id' component={MovieDetails} />
      <Route path='/tv/:id' component={TvDetails} />
      <FooterNav />

    </div>
    </BrowserRouter>
  );
}

export default App;
