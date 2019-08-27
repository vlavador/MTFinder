import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'

import {Container,Col,Row,Card} from 'react-bootstrap'
import Reviews from './Reviews'
import {getMovieDetail,getMovieCredit} from '../../store/actions/movieDetailAction'
import noprofile from '../../noprofile.jpg'
import noimage from '../../noimage450.jpg'

import Loader from 'react-loader-spinner'

class MovieDetails extends Component {
   

  
    componentWillMount(){
        window.scrollTo(0,0);
        this.props.clearmoviedetails()
        this.props.getmoviedetails(this.props.match.params.id)
        this.props.getmoviecredits(this.props.match.params.id)
       


   }


    render() {
   console.log(this.props.movieInfo)
   let castList = this.props.movieCast === undefined?(
  null
):(
  this.props.movieCast.length === 0 ? (
      <p>No Cast Found</p>
  ):(
    this.props.movieCast.slice(0,6).map(cast => 
        <Col xs={6} sm={4} md={3} lg={2} xl={2}  key={cast.id}>
        <Card  style={{marginBottom:'30px',boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} className="custom-card-size">
        { cast.profile_path === null ?   (<Card.Img variant="top" src={noprofile} />) :(
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path} />
                )
                } 
            
            <Card.Body className="castdesign">
                <p>{cast.name}</p>
                <p>
                {cast.character}
                </p>
            
            </Card.Body>
            </Card>
        </Col>
  )
    
)
)

  let crew = this.props.movieCrew === undefined ? (
      null):( 
            
        <div className="moviedetailscolor">                 
                        <div className="overview-info">
                        <h3 dir="auto" style={{marginBottom:'20px'}}>Featured Crew</h3>
                        <Row>
            {this.props.movieCrew.slice(0,6).map((crew,index) => { return( 
                <Col xs={4} className="crewdesign" key={index}>  
                <p>{crew.name}</p>
                <p>{crew.job}</p>
                </Col>           
            )
          })}
          </Row>
          </div>            
        </div>
    
          )
  
      let otherdetails = this.props.movieInfo === null ? 
    ( null)
    :
  
     
      (
         
      
                <Fragment>
                <Col sm={6} md={12} lg={12}>
                <p>Homepage</p>
                {this.props.movieInfo.homepage === null ? (<span>No Homepage Found</span>):
                    
                <span style={{wordBreak:'break-all'}}><a href={this.props.movieInfo.homepage} >{this.props.movieInfo.homepage}</a></span>
                }
                </Col>
                <Col sm={6} md={12} lg={12}>
                <p>Status</p>
             
                {this.props.movieInfo.status === null ? (<span>No Status Found</span>):
                    
                    <span style={{wordBreak:'break-all'}}>{this.props.movieInfo.status}</span>
                    }
                    </Col>
                    <Col sm={6} md={12} lg={12}>
                <p>Release Date</p>
          
                {this.props.movieInfo.release_date === null ? (<span>No Release Date Found</span>):
                    
                    <span style={{wordBreak:'break-all'}}>{this.props.movieInfo.release_date}</span>
                    }
                    </Col>
                    <Col sm={6} md={12} lg={12}>
                <p>Runtime</p>
             
                {this.props.movieInfo.runtime === null ? (<span>No Runtime Found</span>):
                    
                    <span style={{wordBreak:'break-all'}}>{this.props.movieInfo.runtime}</span>
                    }
                    </Col>
                  <Col sm={6} md={12} lg={12}>
                <p>Revenue</p>
               
                {this.props.movieInfo.revenue === null ? (<span>No Revenue Found</span>):
                    
                    <span style={{wordBreak:'break-all'}}>{this.props.movieInfo.revenue}</span>
                    }
                    </Col>
                      <Col sm={6} md={12} lg={12}>
                <p>Production Companies</p>
                
               { this.props.movieInfo.production_companies === undefined ?
               (<p>No Production Company Found</p>):(
                this.props.movieInfo.production_companies.length === 0?(<span>No Production Company Found </span>):(
                    this.props.movieInfo.production_companies.map(companies => {
                return(
                        <p style={{fontWeight:'400',marginTop:'5px'}} key={companies.id}>{companies.name}</p>
                    
                )                    
                 
                })
                )

               ) }
               </Col>
               <Col sm={6} md={12} lg={12}>
                <p>Production Countries</p>
            { this.props.movieInfo.production_countries === undefined ?
               (null):(

            this.props.movieInfo.production_countries.length === 0?(<span>No Production Countries Found </span>):(
                this.props.movieInfo.production_countries.map((countries,index) => {
                    
                return(
                        <p style={{fontWeight:'400',marginTop:'5px'}} key={index}>{countries.name}</p>
                    
                )                    
                 
                }
                )
      )
            


               ) }

               
               </Col>


                

                </Fragment>
            
    
      )
      let moviedetails = this.props.movieInfo === null? 
    (   
        <Container className="height400">
          <Row>
              <Col xs="12 text-left " style={{paddingTop:'100px'}}>
                <h2>Oops!—We can't find the page you're looking for.</h2>
                <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
              </Col> 
          </Row>
      </Container>

    )
    :
     
     
      (
          this.props.movieInfo.length === 0 ? (      <Container className="height400">
          <Row>
              <Col xs="12 text-center padding200">

                 <Loader
   type="Oval"
   color="#343a40"
   height={100}
   width={100}
/>
              </Col> 
          </Row>
      </Container>): (
                <Fragment>
          <section className='show_bg_2' style={{backgroundImage:
  `radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.props.movieInfo.backdrop_path})`}}>
            <Container>
                <Row>
                    <Col md={5} lg={4}>
                    <div className="poster">

                        {
                            this.props.movieInfo.poster_path === null  ? 
                            (<img src={noimage}  alt="Lights"  />):
                            (<img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + this.props.movieInfo.poster_path}  alt="Lights"  />)
                        }

                    </div>
                    </Col>

                    <Col md={7} lg={8}>
                        <div className="moviedetailscolor">
                        <h2 className="moviedetailtitle">{this.props.movieInfo.title}</h2>
                        <div className="overview-info">
                        <h3 dir="auto">Overview</h3>
                        <p>{this.props.movieInfo.overview}</p>
                        </div>
                        
                        </div>
                    {crew}
           
                    </Col>
                </Row>
               
            </Container>
      </section>

<section className="reviewinfo">
<Container >
<Row>
<Col xs={12}>
 <h2 className="reviewhead">Review</h2>
  </Col>
</Row>
</Container>  
</section>

<section style={{marginBottom:'50px'}}>
<Container>
<Row>
<Col md={9}>
<Row style={{    borderBottom: '1px solid #d7d7d7'}}>
<Reviews movieid={this.props.match.params.id}/>
</Row>

<h2 className="reviewhead" >Cast</h2>
<Row>

  {castList}

   </Row>   
  
</Col>
<Col md={3}>
<div>
<Row>
<Col xs={12} className="otherdetails">
<h2 className="reviewhead" style={{padding:'0px'}}>Facts</h2>
<Row>
{otherdetails}
</Row>
</Col>

</Row>
</div>
</Col>
</Row>
</Container>   
</section>
</Fragment>
            )
        
      )
        

        return (
          <Fragment>
           
          



{moviedetails}
 


            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        movieInfo:state.movieDetail.movieInformation,
        movieCrew:state.movieDetail.movieCreditCrew,
        movieCast:state.movieDetail.movieCreditCast 
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getmoviedetails: (id) => { dispatch(getMovieDetail(id))},
    getmoviecredits: (id) => { dispatch(getMovieCredit(id))},
    clearmoviedetails: () => { dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails)