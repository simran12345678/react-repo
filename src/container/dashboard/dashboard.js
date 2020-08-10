import React, { Component } from 'react';
import axios from 'axios';
import Graph from "../../components/graph/graph";
import { Navbar } from 'react-bootstrap';
import "../dashboard/dashboard.css";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            product_name: '',
            week1: '',
            week2: '',
            week3: '',
            week4: '',
            week5: '',
            week6: ''
        }
    }

    componentDidMount() {
        if(this.props.location.state !== undefined){
            this.getStockInfo(this.props.location.state.myid)
        }

     
        
    }

    getStockInfo = (id) => {
        axios.get('http://localhost:3000/stocks/' + id)
            .then(
                response => {
                   
                    this.setState({
                        id: id,
                        product_name: response.data.product_name,
                        week1: response.data.week1,
                        week2: response.data.week2,
                        week3: response.data.week3,
                        week4: response.data.week4,
                        week5: response.data.week5,
                        week6: response.data.week6
                    })
               
                }, error => {
                    console.error(error);
                }
            )
    }
    render() {
        return (
            <React.Fragment>
               
                <div>
                <div className="container">
                    <Graph
                        key={this.state.id}
                        product_name={this.state.product_name}
                        week1={this.state.week1}
                        week2={this.state.week2}
                        week3={this.state.week3}
                        week4={this.state.week4}
                        week5={this.state.week5}
                        week6={this.state.week6}
                    ></Graph>
                </div>
                </div>
                </React.Fragment>
        );
    }
}
 
export default Dashboard;