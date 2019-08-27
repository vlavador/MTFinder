import React, { Component,Fragment } from 'react'

import {Card,Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getReview} from '../../store/actions/reviewAction'
class Reviews extends Component {
    
    componentWillMount(){
       this.props.getreviews(this.props.tvid)
    }

  

    render() {
        console.log(this.props.review)
      
       


        let reviewList = this.props.review.length === 0? 
        (
          <Col xs={12}> 
          <p>No review Found</p>
          </Col>
          ):(
            this.props.review.slice(0,2).map(review => {

                return(
                    <Col lg={6} style={{padding:"0px 2px"}} key={review.id}>
                    <Card key={review.id} style={{marginBottom:'20px',boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <Card.Body>
                            <p className="reviewauthor">A Review by {review.author}</p>
                            <p className="reviewcontent">{review.content}</p>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })          
           
            )
        
        return (
            <Fragment> 
          
            {reviewList}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
       review:state.review.review
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getreviews: (id) => { dispatch(getReview(id))}

}
}
export default connect(mapStateToProps,mapDispatchToProps)(Reviews)