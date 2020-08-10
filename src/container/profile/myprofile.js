import React, { Component } from 'react';
import Navbar from "../../components/navbar/navbar";
import Profile from "../../components/Profile/myprofile";
class myprofile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Profile/>
            </div>
         );
    }
}
 
export default myprofile;