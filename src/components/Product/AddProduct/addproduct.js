import React from "react";
import axios from "axios";
import Navbar from "../../navbar/navbar";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./addproduct.css";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      price: 0,
      img: "",
      category:"",
      quantity:0,
    };
  }

  getName = (event) => {
    this.setState({ value: event.target.value });
  };

  getPrice = (event) => {
    this.setState({ price: event.target.value });
  };

  getImage = (event) => {
    console.log(event.target.value);
    this.setState({ img: event.target.value });
    console.log(this.state.img);
  };
  getCategory=(event)=>{
    console.log(event.target.value);
    this.setState({category:event.target.value});
    console.log(this.state.category);
  };
  getQuantity=(event)=>{
    this.setState({quantity:event.target.value});
  }

  addproduct = (event) => {
    console.log("Add product via axios and post");
    let productRequestBody = {
      value: this.state.value,
      price: this.state.price,
      img: this.state.img,
      category:this.state.category,
      quantity:this.state.quantity,
         };
    axios.post("  http://localhost:3000/productlist", productRequestBody).then(
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
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container-main">
          <div>
            <h1 className="heading">Add Product</h1>
          </div>
          <form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Name"
                    onChange={this.getName}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="price"
                    onChange={this.getPrice}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="text" onChange={this.getImage} placeholder="ImageUrl" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="category"
                    onChange={this.getCategory}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    onChange={this.getQuantity}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="outline-dark"
                  type="button"
                  size="lg"
                  block
                  onClick={this.addproduct}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
