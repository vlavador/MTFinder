import React,{Fragment} from 'react'
import {Col,Card,Row,Spinner} from 'react-bootstrap'

import noimage from '../../noimage.jpg'
import {Link} from 'react-router-dom'

const UpcomingList = (props) => {
    
    let {upcomingMovies} = props;
    let UpcomingMovieList = upcomingMovies === undefined ? 
    ( <Spinner animation="grow" />)
    :
    upcomingMovies.map(movie => {
             
      return(
        <Col xs={12} md={6} lg ={4} xl={3} key={movie.id}   className="card-padding" as={Link} to={'/movie/' +movie.id} >
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
                     <h3 className="movietitle">{movie.title}</h3>
                         <span style={{color: 'rgba(0,0,0,0.6)',
    lineHeight: '1em'}}><i className="fa fa-calendar" aria-hidden="true"></i> {movie.release_date}</span>
                  </div> 
                 
                      <span className="movieoverview">{movie.overview}</span>
                  
                   
                  </Col>

                 
              </Row>
  </Card>
              </Col>
              
      )
    })

    return (
        <Fragment>
  
            {UpcomingMovieList}
           
           
        </Fragment>
    )
}

export default UpcomingList