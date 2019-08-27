import React, { Component,Fragment } from 'react'
import {Container, Row, Col,Card }from 'react-bootstrap'
import {connect} from 'react-redux'
import {getNowPlayingMovies} from '../store/actions/nowPlayingAction'
import {getTvOnAir} from '../store/actions/tvOnAirAction'
import {getUpComingMovies} from '../store/actions/upComingAction'
import {Link} from 'react-router-dom'
import noimage from '../noimage.jpg'


 class Home extends Component {
     componentWillMount(){
         this.props.getNowPlayingMovie();
         this.props.getOnAir();
         this.props.getUpComingMovies();
     
     }
    render() {
        console.log(this.props.upcomingmovies)

 
   
        let latestmovie = this.props.homenowplaying.length === 0 ? (  <Container className="height400">
             
    </Container>):
        (  <Fragment>
          {  this.props.homenowplaying.slice(0,1).map(movie => 
        
              <Col xs={12} key={movie.id}>
               <Card className="bg-dark text-white custom-card" as={Link} to={'/movie/' +movie.id}>
        <Card.Img src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2"+movie.backdrop_path} alt="Card image" style={{borderRadius:'0px'}}  />
        <Card.ImgOverlay className="custom-overlay">
            
            <Card.Text>{movie.title}</Card.Text>
        </Card.ImgOverlay>
        </Card>
            </Col>
   
            
            )
        }
           { this.props.homenowplaying.slice(1,3).map(movie => 
           
              <Col xs={6} key={movie.id}>
               <Card className="bg-dark text-white custom-card" as={Link} to={'/movie/' +movie.id}>
        <Card.Img src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2"+movie.backdrop_path} alt="Card image" style={{borderRadius:'0px'}}/>
        <Card.ImgOverlay className="custom-overlay">

            <Card.Text>{movie.title}</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </Col>
       
        ) }
        </Fragment>
        )

        let onairshow = this.props.onair.length === 0 ? (
             <Container className="height400">
             
            </Container>
        ):
        (  <Fragment>
         
           { this.props.onair.slice(1,3).map(tvshow => 
           
              <Col xs={6} key={tvshow.id}>
               <Card className="bg-dark text-white custom-card" as={Link} to={'/tv/' +tvshow.id}>
        <Card.Img src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2"+tvshow.backdrop_path} alt="Card image" style={{borderRadius:'0px'}}/>
        <Card.ImgOverlay className="custom-overlay">
        
            <Card.Text>{tvshow.original_name}</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </Col>
       
        ) }

         {  this.props.onair.slice(0,1).map(tvshow => 
        
        <Col xs={12} key={tvshow.id}>
         <Card className="bg-dark text-white custom-card" as={Link} to={'/tv/' +tvshow.id} >
  <Card.Img src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2"+tvshow.backdrop_path} alt="Card image" style={{borderRadius:'0px'}}/>
  <Card.ImgOverlay className="custom-overlay">
      
      <Card.Text>{tvshow.original_name}</Card.Text>
  </Card.ImgOverlay>
  </Card>
      </Col>

      
      )
  }
        </Fragment>
        )

        let homeupcoming = this.props.upcomingmovies.length === 0 ? (null) : (
            this.props.upcomingmovies.slice(0,6).map(movie =>
                   
                      <Col xs={12} md={6} lg ={4} xl={2} key={movie.id}  className="card-padding" as={Link} to={'/movie/' +movie.id} >
                      <Card className="card-design">
                            <Row>
                                <Col xs={6} style={{paddingRight:'3px'}}>
                   
                     { movie.poster_path === null ?   (<Card.Img variant="top" src={noimage}  alt="Lights" style={{width: '134x',
                  height: '199px'} }  />) :(
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path}  alt="Lights"  />
                              )
                              }          
                                
                               
                                </Col>
                                <Col xs={6}  style={{paddingLeft:'3px'}}>
                              
                                <div style={{display:'inline-block'
                  }}>
                                   <h3 className="movietitle homeuptitle">{movie.title}</h3>
                                      
                                </div> 
                               
                                    <span className="movieoverview homeuptitle">{movie.overview}</span>
                                
                                 
                                </Col>
              
                               
                            </Row>
                </Card>
                            </Col>
                            
                    
                

            )
        )
        return (
            <Fragment>
            <section>
      
    
                <Container className="margin30">
                    <Row>
                        <Col lg={6} md={12}className="zero-right zero-left">
                        <h2 className="home-title">In Theaters</h2>
                      <Row className="movie-home">
                    {latestmovie}
                        </Row>
                        </Col>
                        <Col lg={6} md={12}className="zero-left zero-right">
                        <h2 className="home-title">On Tv</h2>
                        <Row className="tv-home">
                     {onairshow}
                        </Row>
                        </Col>
                    </Row>
                    <Row className="margintop30">
                    <Col xs={6} className="zero-left"><h2 className="home-title">Upcoming Movies</h2></Col>
                        <Col xs={6} className="zero-left text-right"><Link to='movies/upcoming'>See all</Link></Col>
                      
                        {homeupcoming}
                    
                       
                    
                    
                    </Row>
                </Container>   
            </section>
        
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        homenowplaying:state.nowplayingMovie.nowplayingMovie,
        onair:state.tvonair.onairing,
        upcomingmovies:state.upcomingMovie.upcomingMovie


    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getNowPlayingMovie: () => { dispatch(getNowPlayingMovies())},
    getOnAir: () => { dispatch(getTvOnAir())},
    getUpComingMovies: () => { dispatch(getUpComingMovies())}
 
}
}

export default connect (mapStateToProps,mapDispatchToProps)(Home)
