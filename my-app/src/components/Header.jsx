import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

                <a class="navbar-brand mr-1" href="index.html">Risk Assessment</a>

                <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i class="fa fa-bars"></i>
                </button>

                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
              </div>
            </form>

                    <ul class="navbar-nav ml-auto ml-md-0">
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-bell fa-fw"></i>
                                <span class="badge badge-danger">0</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                               &nbsp;&nbsp;No Notification..
                            </div>
                        </li>
                       
                        <li class="nav-item nav-item1 dropdown no-arrow">
                         
                                <i class="fa fa-sign-out"></i><Link to="/login">
                           <span className="text-white">Logout</span> </Link>
                            
                        </li>
                    </ul>
        
          </nav>
                );
            }
        }
export default Header;