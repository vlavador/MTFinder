import React, { Component,Fragment } from 'react'

import {connect} from 'react-redux'
import {getTvOnAir,getOtherTvShow} from '../../store/actions/tvOnAirAction'
import {Row,Container,Col} from 'react-bootstrap'
import TvOnAirList from './TvOnAirList'
import Loader from 'react-loader-spinner'


 class TvOnAir extends Component {
     state = {
         activePage:1
     }
     componentWillMount(){
        window.scrollTo(0,0)
           }
    componentDidMount(){
        this.props.getOnAirTv();
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
        let tvonairinfo = (
            <Container style={{ 'marginTop': '20px' }}> 
                <Row>
                    <Col xs={6} className="zero-left">
                    <h3 className="header3">On Air Tv Shows</h3>
                    </Col>
                    <Col xs={6} className="text-right">
                   <span className="pagedesign">Page:</span> <span>{this.state.activePage}/{this.props.totalpage}</span>
                    </Col>

                </Row>
            </Container> 
        )
        let onairlist = this.props.onairtv.length === 0 ? (
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
                        <TvOnAirList onairtv={this.props.onairtv} />
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
                {tvonairinfo}
                {onairlist}
       
           </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        onairtv:state.tvonair.onairing,
        totalpage:state.tvonair.totalpages
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getOnAirTv: () => { dispatch(getTvOnAir())},
    getOthershows: (page) => {dispatch(getOtherTvShow(page))},
    clearmovie: () => { dispatch({type:'CLEAR_MOVIE',payload:[]})}
}
}

export default connect (mapStateToProps,mapDispatchToProps)(TvOnAir)
