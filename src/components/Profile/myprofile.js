import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import "./myprofile.css";

class myprofile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container_main">
          <div >
            <h1 className="heading">My Profile</h1>
          </div>
          <form
           
            onSubmit={this.submitSignUpRequest}
            noValidate
          >
            <Row>
              <Col>
                <Form.Group >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    onChange={this.handleFirstNameChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide First Name
                  </div>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={this.handleLastNameChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide Last Name
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={this.handleEmailChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group >
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    placeholder="Contact Number"
                    type="text"
                    pattern="[0-9]+"
                    required
                    onChange={this.handleMobileChange}
                  />
                  <div className="invalid-feedback">
                    Please enter your contact number
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="btn-signup"
                  size="lg"
                  block
                >
                  Sign Up
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  type="cancel"
                  className="btn-cancel"
                  size="lg"
                  block
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default myprofile;
