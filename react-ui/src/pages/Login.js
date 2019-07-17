import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Navbar/Nav";
import About from "../components/About/About";
import Blockquote from "../components/Blockquote/Blockquote";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login/Login";
import Register from "../components/Register/Register";
import Typewriter from "../components/Typewriter/Typewriter";
import API from "../utils/API";
import App from "../App";


class Login extends Component {
  state = {
    userID: "",
    loginOpen: false,
    registerOpen: false,
    redirect: false
  }


  Loging = () => {
    // alert("Login");
    this.setState({ loginOpen: !this.state.loginOpen });
  }

  SignUp = () => {
    //alert("sign up");
    this.setState({ registerOpen: !this.state.registerOpen });
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />
    }
  }

  // RegisterNewUser = (userData) => {
  //   API.register(userData).then(res => {
  //     const data = res.data;
  //     if (data === "username taken") {
  //       alert("username taken");
  //     }
  //     else {
  //       this.LoginUser(userData);
  //       // window.sessionStorage.setItem("auth", true);
  //       // this.setState({ userID: res.data._id, redirect: true })

  //     }
  //   });
  // }

  RegisterNewUser = (userData) => {
    // console.log(userData);
    API.register(userData).then(res => {
      const data = res.data;
      console.log(data);
      if (data === "username taken") {
        alert("username taken");
      }
      else {
        this.LoginUser(userData);
        // window.sessionStorage.setItem("auth", true);
        // this.setState({ userID: res.data._id, redirect: true })

      }
    });
  }
  LoginUser = (userData) => {
    // console.log(userData);
    API.login(userData).then(res => {
      console.log(res);
      switch (res.data) {
        case "bad username":
          console.log("bad username");
          alert("user does not exist");
          break;
        case "bad password":
          alert("username and password do not match");
          break;
        default:
          const user = res.data.userInfo;
          window.sessionStorage.setItem("username",user.username);
          window.sessionStorage.setItem("userID", user._id);
          window.sessionStorage.setItem("token", res.data.token);
          this.setState({ redirect: true });
      }
    })
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}

        <Nav Login={this.Loging}  />

        {this.state.loginOpen ? 
          <LoginForm submitForm={this.LoginUser} Loging={this.Loging} /> : <></>}

        <Jumbotron SignUp={this.SignUp} />

        {this.state.registerOpen ? 
          <Register submitForm={this.RegisterNewUser} SignUp={this.SignUp} /> : <></>}
        <About />
        <Blockquote />
        <Footer />
      </div>

    )
  }
}

export default Login;

