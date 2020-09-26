import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../../Image/pic1.png';
import pic2 from '../../Image/pic2.png';
import pic3 from '../../Image/pic3.png';

import Header from '../Header/Header';
import { Button,Card,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      
      
        <CardDeck>
  <Card>
    <Card.Img variant="top" src={pic1} width="232" height="200" />
    <Card.Body>
      <Card.Title>Cox's bazar</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/booking/1'><Button variant="outline-danger">Booking</Button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={pic2} width="232" height="200"  />
    <Card.Body>
      <Card.Title>Sreemangal</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/booking/2'><Button variant="outline-danger">Booking</Button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={pic3} width="232" height="200"  />
    <Card.Body>
      <Card.Title>Sundarbans</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/booking/3'><Button variant="outline-danger">Booking</Button></Link>
    </Card.Footer>
  </Card>
</CardDeck>

    );
};

export default Home;