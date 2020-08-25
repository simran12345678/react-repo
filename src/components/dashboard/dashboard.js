import React, { Component } from "react";
import Chart from "react-google-charts";
import Navbar from "../../components/navbar/navbar";

class Dashboard extends Component {
  render() {
    return (
            <React.Fragment>
            <Navbar></Navbar>
          <div >
              <div className="container">
                <div className="">
            <Chart
              width={"600px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["id", "week1", "week2", "week3", "week4", "week5", "week6"],
                ["clothing", 10, 20, 5, 6, 3, 17],
                ["electronics", 1, 8, 31, 11, 6, 3],
                ["furniture", 5, 9, 7, 15, 11, 2],
                ["household", 6, 10, 11, 6, 15, 3],
               
              ]}
              rootProps={{ "data-testid": "2" }}
            />
            </div> 
            <div>
            <Chart
             width={"600px"}
             height={"400px"}
             chartType="LineChart"
             loader={<div>Loading Chart</div>}
             data={[
               ["id", "clothing", "electronics", "furniture"],
               [1, 10, 20, 5],
               [2, 1, 8, 31],
               [3, 5, 9, 7],
               [4, 6, 10, 11],
              
             ]}
            />
          </div>
          </div>
          </div>
        </React.Fragment>
     
    );
  }
}

export default Dashboard;
