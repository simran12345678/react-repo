import React from "react";
import axios from "axios";
import Navbar from "../../navbar/navbar";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./addproduct.css";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: 0,
      productcategory: "",
      productimg: "",
      productquantity: 0,
    };
  }

  getName = (event) => {
    this.setState({ productname: event.target.value });
  };

  getPrice = (event) => {
    this.setState({ productprice: event.target.value });
  };

  getQuantity = (event) => {
    this.setState({ productquantity: event.target.value });
  };

  getCategory = (event) => {
    console.log(event.target.value);
    this.setState({ productcategory: event.target.value });
  };

  getImage = (event) => {
    console.log(event.target.value);
    this.setState({ productimg: event.target.value });
    console.log(this.state.productimg);
  };

  addproduct = (event) => {
    console.log("Add product via axios and post");
    let productRequestBody = {
      value: this.state.productname,
      Price: this.state.productprice,
      //   category_name: this.state.productcategory,
      img: this.state.productimg,
      //   product_quantity: this.state.productquantity,
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
        <div className="container_main">
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
                    type="text"
                    placeholder="Price"
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
