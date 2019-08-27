import React, { Component } from 'react'
import axios from 'axios'
import {Card,Carousel} from  'react-bootstrap'
import {Link} from 'react-router-dom'
export default class SimilarMovies extends Component {
    state = {
        similarMovies:null
    }
    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/movie/"+this.props.id+"/similar?api_key=76844ed5ec5c57b4b35836fb2faf0b90")
.then(res => this.setState({similarMovies:res.data.results.slice(0,2)})).catch(err => console.log(err))
    }
    render() {
  
        let similarmovie = this.state.similarMovies === null ? (<p>No Similar Movies Found</p>):(
            this.state.similarMovies.map(similarmovie => {
                return(
 <Link to={'/movie/' +similarmovie.id} >
 <Card key={similarmovie.id}>
  <Card.Img  className="img-fluid" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + similarmovie.poster_path}/>
  <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
</Card>
 </Link>
               
                )
            })
        )
        return (
            <div>
               {similarmovie}
            </div>
        )
    }
}
