import React, { Component } from 'react';
import { Link } from "react-router-dom"


class SideMenu extends Component{
    render(){
        return(
            <ul class="sidebar navbar-nav">
            <li class="profile1">     
          <i class="fa fa-fw fa-user profilei"></i>
         
         
      </li>
      <li class="profile2">     
          Hi Sandi..
         
         
      </li>

      <li class="nav-item active">
        <a class="nav-link">
          <i class="fa fa-angle-right"></i>
         
          <Link to="/newUser">
                           <span className="text-white">New Customer</span> </Link>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa fa-angle-right"></i>
         
          <Link to="/existingUser">
                           <span className="text-white">Existing Customer</span> </Link> </a>
      </li>
     
    </ul>
        );
    }
}
export default SideMenu;



	