import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../../navbar/navbar";
import axios from "axios";
import "./editproduct.css";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    console.log(this.props.location);

    console.log(this.props.location.state);

    this.state = {
      name: "",
      Price: 0,
      id: 0,
      img: "",
    };
  }

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      axios
        .get(
          "http://localhost:3000/productlist/" + this.props.location.state.myid
        )

        .then(
          (response) => {
            console.log(response);

            this.setState({
              name: response.data.value,

              Price: response.data.Price,

              id: response.data.id,

              // img: response.data.img,
            });
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  getPrice = (event) => {
    this.setState({ Price: event.target.value });
  };

  getName = (event) => {
    this.setState({ name: event.target.value });
  };

  editProduct = () => {
    console.log("Edit Product via axios and put");

    let productRequestBody = {
      value: this.state.name,

      Price: this.state.Price,

      // img: this.state.img,
    };

    axios
      .patch(
        "http://localhost:3000/productlist/" + this.state.id,
        productRequestBody
      )

      .then(
        (response) => {
          console.log(response);

          this.props.history.push("/Home");
        },
        (error) => {
          console.error(error);
        }
      );
  };

  render() {
    if (this.props.location.state === undefined) {
      return (
        <div>
          <h1>Error in loading </h1>
        </div>
      );
    }

    return (

      <React.Fragment>
        <Navbar></Navbar>
        <div>
      
      <div className="container">
                  <div>
          <h3>Edit Product</h3>

          <Form>
            <Row>
              <Col>
              <Form.Group
              >
            <Form.Label>Id: </Form.Label>
            <Form.Control type="number" value={this.state.id} readOnly/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col>
              <Form.Group
              >
            <Form.Label>ProductName</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.getName}/>
            </Form.Group>
            </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group
              >
            <Form.Label>Price </Form.Label>
            <Form.Control type="number" value={this.state.Price} onChange={this.getPrice}/>
            </Form.Group>
            </Col>
            </Row>
            <Button type="button" onClick={this.editProduct} variant="outline-dark"  size="lg"
                  block>
              Edit Product
            </Button>
          </Form>
        </div>
      </div>
    </div>
      </React.Fragment>
    
    );
  }
}

export default EditProduct;
