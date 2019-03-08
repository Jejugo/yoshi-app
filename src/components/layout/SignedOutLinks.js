import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {
    return (
      <ul className="right">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
      </ul>
    );
}

export default SignedOutLinks;
