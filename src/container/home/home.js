import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Product from "../../components/Product/products";
import axios from "axios";
import "./home.css";
import {  Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      searchFriends: [],
      searchValue: "",
      myid: 0,
    };
  }

  componentWillMount() {
    this.getAllProducts();
  }

  componentDidMount() {
    console.log(this.props);
  }

  intializeState = () => {
    setTimeout(() => {
      this.setState({ deleteSuccess: false });
    }, 2000);
  };
  editProductWithId = (id) => {
    this.setState({ myid: id });
    console.log("Edit friend with id: " + id);
    this.props.history.push({
      pathname: "/editproduct",
      state: { myid: id },
    });
  };
  getAllProducts = () => {
    axios.get(" http://localhost:3000/productlist").then(
      (response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ productList: response.data });
        this.setState({ searchProducts: response.data });
        console.log(this.state.productList);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  openAddProduct = () => {
        this.props.history.push("/addProduct");
  };

 getSearch=(e)=>{
 
        let searchV=e.target.value
        console.log(searchV)
        if(searchV!==' ')
        {
        this.setState({searchValue:searchV})
        let searchP=this.state.searchProducts.filter(f=>{
            return f.product_name.toLowerCase().includes(searchV)
        })

        console.log(searchP)
        this.setState({productList:searchP})

    }else{
            this.getAllProducts()
        }
    }



  renderAllProducts = () => {
    return this.state.productList.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.value}
          price={product.price}
          image={product.img}
          deleteId={this.deleteProductWithId}
          editId={this.editProductWithId}
        ></Product>
      );
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          
            <Button type="button"
              onClick={this.openAddProduct}
               className="btn-add"
            >
              AddProduct
            </Button>
         
        </div>
        <br></br>
        <br></br>
        <div>{this.renderAllProducts()}</div>
      </div>
    );
  }
}

export default Home;
