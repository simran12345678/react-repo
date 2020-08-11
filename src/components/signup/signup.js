import React from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./signup.css";
import { Link, Redirect } from "react-router-dom";
import logo from "../../asset/logo.png";
import axios from "axios";
const SIGNUP_ERROR = "Please try again later.";

function passwordValidate(pass) {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})"
  );
  if (strongRegex.test(pass)) {
    return false;
  } else {
    return true;
  }
}

function validate(state) {
  const errors = [];
  if (state.firstName === "") {
    errors.push("First name is required");
  }

  if (state.lastName === "") {
    errors.push("Last name is required");
  }
  // if (state.dob === "") {
  //   errors.push("DOB is required");
  // }
  if (state.mobile === "") {
    errors.push("Mobile Number is required");
  }
  if (state.email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (state.email.split("").filter((x) => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (state.email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  if (state.password.length < 8 || passwordValidate(state.password)) {
    errors.push("Password should be at least 8 characters long");
  }

  return errors;
}
export default class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hiddenPassword: true,
      firstName: "",
      lastName: "",
      signupSuccess: false,
      signupError: false,
      // dob: "",
      mobile: "",
      LoggedIn: false,
    };
  }

  handleEmailChange = (eve) => {
    this.setState({ email: eve.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  // handleDobChange = (e) => {
  //   this.setState({ dob: e.target.value });
  // };
  handleMobileChange = (event) => {
    this.setState({ mobile: event.target.value });
  };

  submitSignUpRequest = (event) => {
    event.preventDefault();
    const state = this.state;
    const errors = validate(state);
    event.target.className += " was-validated";

    if (errors.length > 0) {
      console.log(errors);
      return;
    } else {
      var signupData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        mobile: this.state.mobile,
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post("http://localhost:3000/users", signupData)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            this.setState({
              signupSuccess: true,
              signupError: false,
              signupMessage: response.message,
            });
          }
        })
        .catch((err) => {
          var errorResponse = "";
          if (err.response) errorResponse = err.response.data.message;
          else errorResponse = SIGNUP_ERROR;

          this.setState({
            signupError: true,
            signupSuccess: false,
            errorMessage: errorResponse,
          });
        });
    }
  };

  render() {
    if (this.state.signupSuccess)
      return (
        <Redirect
          to={{
            pathname: "/Login",
          }}
        />
      );
    return (
      <React.Fragment>
        <div className="container_main">
          <div className="brand_logo_container">
            <img
              src={logo}
              alt="logo"
              className="brand_logo"
              style={{ height: "170px", width: "170px" }}
            />
          </div>
          <form
            className="signup-form"
            onSubmit={this.submitSignUpRequest}
            noValidate
            style={{ paddingTop: "120px" }}
          >
            <Row>
              <Col>
                <Form.Group controlId="formSignUpFirstName">
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
                <Form.Group controlId="formSignUpLastName">
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
                <Form.Group controlId="formSignUpEmail">
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
                <Form.Group controlId="formSignUpPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder="Password"
                      type={this.state.hiddenPassword ? "password" : "text"}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Password must be 6 characters long It should contain a
                      number and <br></br> contain , uppercase and lowercase
                      letter
                    </div>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <Form.Group controlId="formSignUpDob">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    placeholder=""
                    type="date"
                    onChange={this.handleDOBChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please select Date of Birth
                  </div>
                </Form.Group>
              </Col> */}

              <Col>
                <Form.Group controlId="formSignUpMobile">
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
                <br></br>
                <Row>
                  <Col>
                    <Link to="/Login">Already a member?SignIn</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
