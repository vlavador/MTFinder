import React,{Fragment} from 'react'
import {Row,Container,Col} from 'react-bootstrap'
import About from './About'
import {Link} from  'react-router-dom'
function FooterNav() {
    return (
       <Fragment>
            <section className="footerbg">
                <Container>
                    <Row>
                     
                        <Col  lg={2} sm={6} xs={6} className="moviedetailscolor">
                            <h3>Movies</h3>
                            <ul className="footer-list">
                                <li><Link to="/movies/upcoming">Upcoming</Link></li>
                                <li><Link to="/movies/popular">Popular</Link></li>
                                <li><Link to="/movies/toprated">Top Rated</Link></li>
                                <li><Link to="/movies/nowplaying">Now Playing</Link></li>
                                
                            </ul>

                        </Col>
                        <Col  lg={2} sm={6} xs={6} className="moviedetailscolor">
                            <h3>Tv Shows</h3>
                            <ul className="footer-list">
                                <li><Link to="/television/onair">On Air</Link></li>
                                <li><Link to="/television/airing">Airing</Link></li>
                                <li><Link to="/television/toprated">Top Rated</Link></li>
                                <li><Link to="/television/popular">Popular</Link></li>
                                
                            </ul>

                        </Col>
                        <Col   lg={8} md={12} className="moviedetailscolor">
                        <About/>
                        </Col>
                    </Row>
                </Container>
             
            </section>
            
       </Fragment>
    )
}

export default FooterNav
