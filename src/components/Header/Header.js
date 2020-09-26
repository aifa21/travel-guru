import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../Image/Logo.png';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Container>
                <Navbar  expand="lg" sticky="top" >
                    <Navbar.Brand  className="mr-2" href="/home"><img className="brand" src={logo} width="120" height="50" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="mr-4" variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="ml-auto">
                            <Nav.Link  className="mr-2" to="/home">News</Nav.Link>
                            <Nav.Link  className="mr-2" to="/destination">Destination</Nav.Link>
                            <Nav.Link  className="mr-2" to="/blog">Blog</Nav.Link>
                            <Nav.Link  className="mr-2" to="/contact">Contact</Nav.Link>
                            
                            <Link to="/login"> <Button variant="warning">Login</Button> </Link>
                            
      
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;