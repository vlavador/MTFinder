import React, { Component,Fragment } from 'react'

import {connect} from 'react-redux'
import {getUpComingMovies,getOtherMovies} from '../../store/actions/upComingAction'
import {Row,Container,Col} from 'react-bootstrap'
import UpcomingList from './UpcomingList'
import Loader from 'react-loader-spinner'




 class Upcoming extends Component {
     state = {
         activePage:1
     }
     componentWillMount(){
        window.scrollTo(0,0)
           }
    componentDidMount(){
        this.props.getUpComingMovies();
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
        let movieupcominginfo = (
            <Container style={{ 'marginTop': '20px' }}> 
                <Row>
                    <Col xs={6} className="zero-left">
                    <h3 className="header3">Upcoming Movies</h3>
                    </Col>
                    <Col xs={6} className="text-right">
                   <span className="pagedesign">Page:</span> <span>{this.state.activePage}/{this.props.totalpage}</span>
                    </Col>

                </Row>
            </Container> 
        )
        let upcominglist = this.props.upcomingmovies.length === 0 ? (
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
                        <UpcomingList upcomingMovies={this.props.upcomingmovies} />
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
     
console.log(this.props.totalpage)
console.log(this.props.upcomingmovies)
        return (
           <Fragment>
            {movieupcominginfo}
            {upcominglist}
               
       
           </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        upcomingmovies:state.upcomingMovie.upcomingMovie,
        totalpage:state.upcomingMovie.totalpages
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getUpComingMovies: () => { dispatch(getUpComingMovies())},
    getOtherMovies: (page) => {dispatch(getOtherMovies(page))},
    clearmovie: () => { dispatch({type:'CLEAR_MOVIE',payload:[]})}
}
}

export default connect (mapStateToProps,mapDispatchToProps)(Upcoming)
