import React, { Component } from "react";
import './Logout.css';
import ThemeChange from "../ThemeChange/ThemeChange";
import { Redirect } from "react-router-dom";

class LogOut extends Component {

  state= {
    redirect: false
  }

  logout = () => {
    console.log("logout button");
    window.sessionStorage.clear();
    this.setState({ redirect: true });

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <ul className="nav align-items-center">
        {this.renderRedirect()}
        <li className="nav-item display-4">
          <a className="nav-link " href="/">Emu</a>
        </li>

        <li className="nav-item  ml-auto">
          <ThemeChange />
        </li>

        <li className="nav-item  mx-3" onClick={() => this.logout()}>
          <button
            type="button" className="btn btn-outline-primary" id="logout" >Log out </button>
        </li>

      </ul>)
  }
}


export default LogOut;