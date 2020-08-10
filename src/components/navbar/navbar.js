import React from "react";
import "./navbar.css";
import logo from "../../asset/logo.png";
import { Navbar, Nav } from "react-bootstrap";

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="brand_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="./Home"style={{color:'white',fontSize:'25px'}}>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="./Dashboard"style={{color:'white',fontSize:'25px'}}>Dashboard</Nav.Link>
              <Nav.Link href="./MyProfile"style={{color:'white',fontSize:'25px'}}>MyProfile</Nav.Link>
              <Nav.Link style={{color:'white',fontSize:'25px'}}>Contact US</Nav.Link>
              <Nav.Link>
                <button className="btn-logout">Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
