import React, { Component } from 'react';
import './App.css';
import Register from './components/register'
import Login from './components/login'
import Header from './components/navigation/header'
import Profile from './components/profile'
import Home from './components/home'
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from "./actions/index"
import { withRouter } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.authCheck()
  }

  authCheck = () => {
    console.log('localStorage',localStorage)
    if (localStorage.token) {
      this.props.fetchingUser()
      this.props.fetchingUsers()
    } else {
      // this.backToLogin()
    }
  }

  signup = () => {
    this.props.history.push("/signup");
  };

  backToLogin = () => {
    this.props.history.push("/login");
  };

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
    // <Header />
    return (


      <div>



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
      Route exact path = "/profile"
      component = {
        Profile
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

const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
