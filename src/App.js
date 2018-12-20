import React, { Component } from 'react';
import './App.css';
import Register from './components/register'
import Login from './components/login'
// import Profile from './components/profile'
import Home from './components/home'
import { Route } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.authCheck()
  }

  authCheck = () => {
    if (localStorage.token) {
      // this.props.fetchingUser()
      // this.props.fetchingUsers()
    } else {
      // this.backToLogin()
    }
  }

  // signup = () => {
  //   this.props.history.push("/signup");
  // };
  //
  // backToLogin = () => {
  //   this.props.history.push("/login");
  // };

  render() {
    // console.log("APP PROPS", this.props)
    // <div className = "navbar"> {
    //     localStorage.token ? ( <Navbar /> ) : ( <
    //       LoginBar handleLogin = { this.handleLogin }
    //       location = { this.props.location.pathname }
    //       signup = { this.signup }
    //       backToLogin = { this.backToLogin }
    //       />
    //     )
    //   }
    return (

      <div className = "container-class">

      <
      Route exact path = "/register"
      component = {
        Register
      }
      />
      <
      Route exact path = "/"
      component = {
        Home
      }
      />
      <
      Route exact path = "/login"
      render = {
        () => < Login / >
      }
      />






    </div>
    );
  }

}

export default App;
