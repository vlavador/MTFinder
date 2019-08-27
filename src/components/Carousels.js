import React,{Fragment} from 'react'
import {Carousel,Col,Row,Container,Card} from 'react-bootstrap'
function Carousels() {
    return (
        <Fragment>
        <Container>
            <Row>
                <Col xs={6}>
                <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={6}>
                        <Card className="bg-dark text-white" >
            <Card.Img src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
                        </Col>
                        <Col xs={6}>
                        <Card className="bg-dark text-white" >
            <Card.Img src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
                        </Col>
                        <Col xs={6}>
                        <Card className="bg-dark text-white" >
            <Card.Img src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
                        </Col>
                    
                        <Col xs={6}>
                        <Card className="bg-dark text-white">
            <Card.Img src="https://image.tmdb.org/t/p/w500_and_h282_face/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
                        </Col>
              
                    </Row>
                </Col>
            </Row>

            <Row>
             

               
            </Row>

        </Container>
     
        </Fragment>
    )
}

export default Carousels
