import React, { Component,Fragment } from 'react'

import {connect} from 'react-redux'
import {getTvPopular,getOtherTvShow} from '../../store/actions/tvPopularAction'
import PopularList from './PopularList'
import {Row,Container,Col} from 'react-bootstrap'
import Loader from 'react-loader-spinner'
 class Popular extends Component {
     state = {
         activePage:1
     }
     componentWillMount(){
        window.scrollTo(0,0)
           }
    componentDidMount(){
        this.props.getPopularTv();
    }
    
    previousPage = () =>{
        this.props.clearmovie()
        this.props.getOthershows(this.state.activePage-1)
        let newPage = this.state.activePage-1
        this.setState({
            activePage:newPage
        })
    }
   nextPage = () =>{
    this.props.clearmovie()
       this.props.getOthershows(this.state.activePage+1)
       let newPage = this.state.activePage +1
       this.setState({
           activePage:newPage
       })
       window.scrollTo(0,0);
   }
    render() {

        let tvpopularinfo = (
            <Container style={{ 'marginTop': '20px' }}> 
                <Row>
                    <Col xs={6} className="zero-left">
                    <h3 className="header3">Popular Tv Shows</h3>
                    </Col>
                    <Col xs={6} className="text-right">
                   <span className="pagedesign">Page:</span> <span>{this.state.activePage}/{this.props.totalpage}</span>
                    </Col>

                </Row>
            </Container> 
        )
        let popularlist = this.props.populartv.length === 0 ? (
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
                        <PopularList populartv={this.props.populartv} />
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

        console.log(this.props.populartv)
        return (
           <Fragment>
            {tvpopularinfo}
            {popularlist}
               
       
           </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        populartv:state.tvpopular.popular,
        totalpage:state.tvpopular.totalpages
      
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getPopularTv: () => { dispatch(getTvPopular())},
    getOthershows: (page) => {dispatch(getOtherTvShow(page))},
    clearmovie: () => { dispatch({type:'CLEAR_MOVIE',payload:[]})}
}
}

export default connect (mapStateToProps,mapDispatchToProps)(Popular)
