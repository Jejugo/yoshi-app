import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten'>JG</NavLink></li>
      </ul>
    );
}

export default SignedInLinks;