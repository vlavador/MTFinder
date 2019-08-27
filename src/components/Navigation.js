import React,{Fragment} from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <Fragment>
        <section className="section-nav">
          <Container className="zero-left zero-right">  
            <Navbar collapseOnSelect="true" expand="lg" bg="dark" variant="dark" style={{paddingRight:"0px",paddingLeft:"0px"}}>
                <Navbar.Brand  as={Link} to="/">MTFinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  
                    <Nav className="ml-auto">
                    <NavDropdown title="Television" id="collasible-nav-dropdown"  bg="dark">
               
                        
                      
               <NavDropdown.Item as={NavLink} to="/television/onair" >On Air</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/airing">Airing</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/toprated"> Top Rated</NavDropdown.Item>
               <NavDropdown.Item as={NavLink} to="/television/popular"> Popular</NavDropdown.Item>
           
       
           </NavDropdown>
                    <NavDropdown title="Movies" id="collasible-nav-dropdown" >
               
                        
                      
                        <NavDropdown.Item as={NavLink} to="/movies/upcoming" >UpComing</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movies/popular"> Popular</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movies/toprated"> Top Rated</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/movies/nowplaying"> nowplaying</NavDropdown.Item>
                    
                
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Container>
            </section>
            </Fragment>
    )
}

export default Navigation
