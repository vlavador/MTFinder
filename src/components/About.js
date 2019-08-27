import React,{Fragment} from 'react'
import {Col,Row} from 'react-bootstrap'
const  About = () => {
    return (
        <Fragment>
       
           
                    <h3 className="about-details">About The website</h3>
                    <Row>
                        <Col xs={12}>
                            <p className="about-details-content"> Hello Viewers, Here's my sample portfolio. The MTFinder helps you to find the latest,upcoming, now playing, top rated movies and onAir, Airing, popular and top rated Tv Shows. The technology I use creating this website are html,css,javascript,redux and the framework I use are react.js and reactbootstrap.</p>
                        </Col>
                    </Row>
           
       
        </Fragment>
    )
}

export default About