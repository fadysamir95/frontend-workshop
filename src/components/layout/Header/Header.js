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
          <Navbar.Brand href="#"><img src={companyLogo} alt="LinkDevelopment" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <Nav.Link href="#action3">News</Nav.Link>
              <Nav.Link href="#action4">Contact us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link href="#action5">Login</Nav.Link>
              <Button className="signup-btn">Sign up</Button>
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header