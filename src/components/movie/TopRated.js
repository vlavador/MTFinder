import React, { Component,Fragment } from 'react'

import {connect} from 'react-redux'
import {getTopRatedMovies,getOtherMovies} from '../../store/actions/topRatedAction'
import {Row,Container,Col} from 'react-bootstrap'
import TopRatedList from './TopRatedList'
import Loader from 'react-loader-spinner'

 class TopRated extends Component {
    state = {
        activePage:1
    }
    componentWillMount(){
        window.scrollTo(0,0)
           }
    componentDidMount(){
        this.props.getTopRatedMovies();
    }
    previousPage = () =>{
        this.props.clearmovie()
        this.props.getOtherMovies(this.state.activePage-1)
        let newPage = this.state.activePage-1
        this.setState({
            activePage:newPage
        })
    }
   nextPage = () =>{
    this.props.clearmovie()
       this.props.getOtherMovies(this.state.activePage+1)
       let newPage = this.state.activePage +1
       this.setState({
           activePage:newPage
       })
       window.scrollTo(0,0);
   }
    render() {
        let movietopratedinfo = (
            <Container style={{ 'marginTop': '20px' }}> 
                <Row>
                    <Col xs={6} className="zero-left">
                    <h3 className="header3">Top Rated Movies</h3>
                    </Col>
                    <Col xs={6} className="text-right">
                   <span className="pagedesign">Page:</span> <span>{this.state.activePage}/{this.props.totalpage}</span>
                    </Col>

                </Row>
            </Container> 
        )
        let topratedlist = this.props.topratedmovies.length === 0 ? (
           <Container className="height400">
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
            </Container>
        
        ):(
                       <Container >  
                    <Row  >
                        <TopRatedList topRatedMovies={this.props.topratedmovies} />
                    </Row>
                    { this.props.totalpage === null ? (null):(
                        <Row style={{marginBottom:'20px'}}>
                            <Col xs={12} className="text-right">
                        {
                            this.state.activePage === 1? (null):
                        (
                        <span onClick={this.previousPage} className="btn-design">Previous</span>
                        )
                        

                        }
                         
                            {
                                this.state.activePage === this.props.totalpage ? (null):
                                (
                                    <span onClick={this.nextPage} className="btn-design">Next</span>
                                )

                            }
                            </Col>
                      </Row>  
                )
            }
                </Container>
                    )
     
       
        return (
           <Fragment>
               {movietopratedinfo}
               {topratedlist}
       
           </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        topratedmovies:state.topratedMovie.topratedMovie,
        totalpage:state.topratedMovie.totalpages
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getTopRatedMovies: () => { dispatch(getTopRatedMovies())},
    getOtherMovies: (page) => {dispatch(getOtherMovies(page))},
    clearmovie: () => { dispatch({type:'CLEAR_MOVIE',payload:[]})}
}
}

export default connect (mapStateToProps,mapDispatchToProps)(TopRated)
