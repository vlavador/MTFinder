import React,{Fragment,Component} from 'react'
import {Col,Container,Row,InputGroup,FormControl} from 'react-bootstrap'
import  { withRouter     } from 'react-router-dom'
class Search extends Component {
   
    componentDidMount(){
     
       
    }
    handleSubmit = (e) =>{
        this.props.history.push('/searchitem' ) 
        
     }
    
    render(){
       console.log(this.props.location.pathname.split('/')[1])
        let webtest = this.props.location.pathname.split('/')[1] === ('movies' || 'movie')  ? (<p>test1</p>):
        (
            this.props.location.pathname.split('/')[1] === ('tv' || 'television') ? (<p>test2</p>) :( <p>test3</p>)
        
        )
    return (
    
        <Fragment>
            <Container>
          
                <Row>
                    <Col xs={12}>
                    {webtest}
                    <form onSubmit={this.handleSubmit}   > 
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Username"
                        name="name" onChange={this.handleChange}
                        
                        />
                    </InputGroup>
                    </form>
                    </Col>          
                </Row> 
            </Container>
        </Fragment>
    )
}

}
export default withRouter(Search)
