import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container fluid>
                            <Navbar.Brand href="#"><img src={logo} alt=""></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">Demos</Nav.Link>
                                    <Nav.Link href="#action1">About</Nav.Link>
                                    <Nav.Link href="#action1">Blog</Nav.Link>
                                    <Nav.Link href="#action1">Pages</Nav.Link>
                                    <Nav.Link href="#action1">Contact</Nav.Link>



                                </Nav>
                                <Nav.Link href="#action2">Login</Nav.Link>
                                <Button variant="danger">Get Started Free</Button>{' '}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>





                </Container>




            </Fragment>
        );
    }
}

export default NavBar;