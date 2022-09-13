import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  './Navbar.css';

class Navbar extends Component {
    render(){
        return(
         
             <nav ClassName="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                 <div className="container">
  <Link ClassName="navbar-brand" to="#">Top navbar</Link>
  <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span ClassName="navbar-toggler-icon"></span>
  </button>
  <div ClassName="collapse navbar-collapse" id="navbarCollapse">
    <ul ClassName="navbar-nav ml-auto">
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/">Home </Link>
      </li>
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/About">About</Link>
      </li>
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/Form">Form</Link>
      </li>
     
    </ul>
         </div>
         </div>
         </nav>
        );
    }
}

export default Navbar;