import React from 'react'
import { Container, Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap'
import companyLogo from '../../../assets/img/logo.png'
import './header.scss'

const Header = props => {
  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand><img src={companyLogo} alt="LinkDevelopment" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About us</Nav.Link>
              <Nav.Link>News</Nav.Link>
              <Nav.Link>Contact us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link>Login</Nav.Link>
              <Button className="signup-btn">Sign up</Button>
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item>ENGLISH</NavDropdown.Item>
                <NavDropdown.Item>ARABIC</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header