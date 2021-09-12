import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export class Header extends Component {
  render() {
    return (
        
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href='/'>Reading Books Lover</Navbar.Brand>
          <Navbar.Brand href='/profile'>Profile</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header