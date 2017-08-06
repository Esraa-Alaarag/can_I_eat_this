import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <a href="/can_I_eat_this"><img src="/can_I_eat_this/images/logo.png" alt="Logo" /></a>
        </div>
    	  <nav>
    	     <ul>
    	       <li className="navLi"><Link to="/can_I_eat_this">Home</Link></li>
    	       <li className="navLi"><NavLink to="/can_I_eat_this/profile">Profile</NavLink></li>
    	       <li className="navLi"><NavLink to="/can_I_eat_this/history">History</NavLink></li>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Navigation;
