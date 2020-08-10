import React, { Component } from 'react';
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../../components/DashBoard/dashboard"

class  dashboard extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Navbar/>
            <Dashboard/>
        </div> );
    }
}
 
export default dashboard;