import React, {Component} from 'react';

import {Link} from "react-router-dom";

export default class Menu extends Component{
    render(){
        return(
            <nav id="Navbar">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/todo'>Todo</Link></li>
            </ul>
          </nav>
        )
    }
}