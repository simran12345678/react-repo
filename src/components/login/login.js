import React from "react";
import "./login.css";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  } from "react-bootstrap";
import { Link,Redirect} from "react-router-dom";
import logo from "../../asset/logo.png";

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
export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hiddenPassword: true,
      loginSuccess: false,
      loginError: false,
      LoggedIn:false
    };
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
}
handlePasswordChange = (e) => {
  this.setState({ password: e.target.value });
}

submitLoginRequest = (event) => {
  event.preventDefault();
  const state = this.state;
  const errors = validate(state);
  event.target.className += " was-validated";

  if (errors.length > 0) {
    console.log(errors);
    return;
  } else {
    console.log("good to go");
      this.setState({
      LoggedIn:true});
  }
};

  render() {
  

    if (this.state.LoggedIn)
    return <Redirect to={{
        pathname: "/Home"
    }} />
    return (
      <React.Fragment>
        <div className="container_main">
          <div className="brand_logo_container">
            <img src={logo} alt="logo" className="brand_logo" style={{height:'170px', width:'170px'}}/>
          </div>
          <form
            className="login-form"
            onSubmit={this.submitLoginRequest}
            noValidate
          >
            <Row>
              <Col>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter UserName"
                    required
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                 
                  <div className="invalid-feedback">
                    Please provide a valid email
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder="Enter Password"
                      type={this.state.hiddenPassword ? "password" : "text"}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={this.state.password} onChange={this.handlePasswordChange}
                      required
                    />
                      </InputGroup>
                      <div className="invalid-feedback">Password must be 6 characters long  It should contain a number and <br></br> contain , uppercase and lowercase letter</div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="/">Forgot Password?</a>
              </Col>
            </Row>
            <br />
            
            <Row>
              <Col>
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="btn-signin"
                  size="lg"
                  block
                >
                  Sign In
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Link to="/signup">Already a member?SignUp</Link>
              </Col>
            </Row>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
