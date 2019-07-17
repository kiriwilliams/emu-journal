import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import './Nav.css';

const Navbar = (props) => (
	<ul className="nav align-items-center">
  <li className="nav-item display-4">
    <a className="nav-link " href="/">Emu</a>
  </li>
  <li className="nav-item ml-auto">
    <Link to="/#about" className="nav">About</Link>
  </li>

  <li className="nav-item mr-3">
  <button onClick={props.Login} type="button" className="btn btn-outline-primary" id="Login">Log in</button>
  </li>
 
</ul>
);

export default Navbar;