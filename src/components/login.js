import React from "react";
import $ from 'jquery'
import Formsy from 'formsy-react'
import SimpleInput from "./functionalComponents/input.js";
import { NavLink } from "react-router-dom";

import { withRouter, } from "react-router-dom";
import * as actions from "../actions/index"
import { connect } from 'react-redux'

const url = "http://localhost:3001/api/v1/";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  pushToProfile(){
    this.props.history.push('/profile')
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.canSubmit === true) {
      this.props.loginUser(this.state, this.props.history).then(() => {
      this.props.history.push('/profile')
      // this.pushToProfile()
      console.log('in here')
    })

  } else {
      $(".validation-error-hidden").removeClass("validation-error-hidden")
    }
  };

  enableSubmit = () => {
    this.setState({ canSubmit: true });
  }
  disableSubmit = () => {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <div className="login">
        <div className="padding-100">
          <div className="login-form">
        <h1>Log in</h1>
        <Formsy id="login" onValid={this.enableSubmit} onInvalid={this.disableSubmit}>

          <SimpleInput
              name="email"
              onChange={this.handleChange}
              label="Email"
              placeholder="Email"
              validations="isEmail"
              validationError="This is not a valid email"
              validationErrors={{
                isDefaultRequiredValue: 'Email is required'
              }}
              required
            />

            <SimpleInput
                name="password"
                onChange={this.handleChange}
                label="Password"
                type='password'
                placeholder="Password"
                validationErrors={{
                  isDefaultRequiredValue: 'Password is required'
                }}
                required
              />

            <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>
          </Formsy>
          <p>Not a member? <NavLink to='/register'> Sign up </NavLink></p>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.user
  }
}

export default withRouter(connect(mapStateToProps, actions)(Login))
