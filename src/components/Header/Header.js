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
                <Navbar  expand="lg">
                    <Navbar.Brand  className="mr-3" href="/home"><img className="brand" src={logo} width="120" height="50" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="mr-4" variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="mr-auto">
                            <Nav.Link  className="mr-3" to="/home">News</Nav.Link>
                            <Nav.Link  className="mr-3" to="/destination">Destination</Nav.Link>
                            <Nav.Link  className="mr-3" to="/blog">Blog</Nav.Link>
                            <Nav.Link  className="mr-3" to="/contact">Contact</Nav.Link>
                            {
                                loggedInUser.name ?<Link className="mr-3">{loggedInUser.name}</Link> 
                                :<Link to="/login"> <Button variant="warning">Login</Button> </Link>
                            }
      
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;