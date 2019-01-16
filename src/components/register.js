import React from "react";
import SimpleInput from "./functionalComponents/input.js";
import $ from 'jquery'
import Formsy from 'formsy-react'
import { NavLink } from "react-router-dom";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const url = "http://localhost:3001/api/v1/";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      firstname: '',
      lastname: '',
      email: '',
      telephone: '',
      canSubmit: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  enableSubmit = () => {
    this.setState({ canSubmit: true });
  }
  disableSubmit = () => {
    this.setState({ canSubmit: false });
  }

  // handleSubmit = e => {
  //
  //   this.props.registeringUser(this.state).then(() => this.props.loginUser({
  //     email: this.state.email,
  //     password: this.state.password
  //   }, this.props.history))
  //   .then(() => this.props.history.push('/events'))
  // } else {
  //   $(".validation-error-hidden").removeClass("validation-error-hidden")
  // }
  // };

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.canSubmit === true) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = this.state;
    fetch(`${url}users`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      this.props.loginUser(this.state, this.props.history)
      // console.log('this is what response is for signin',res)
      this.props.fetchingAllUserData(this.props.user_id)
      this.props.history.push('/profile')
    })
  } else {
    $(".validation-error-hidden").removeClass("validation-error-hidden")
  }
    ;
  };

  render() {
    return (
      <div className="register">
        <div className="padding-100">
        <div className="signup-form">
        <h1>Sign up</h1>


        <Formsy id="register" onValid={this.enableSubmit} onInvalid={this.disableSubmit}>


          <SimpleInput
            name="firstname"
            onChange={this.handleChange}
            label="First Name"
            type="text"
            placeholder="First Name"
            validationErrors={{
                isDefaultRequiredValue: 'First Name is required'
              }}
              required
          />


        <SimpleInput
              name="lastname"
              onChange={this.handleChange}
              label="Last Name"
              type="text"
              placeholder="Last Name"
              validationErrors={{
                isDefaultRequiredValue: 'Last Name is required'
              }}
              required
            />


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


          <SimpleInput
              name="phone"
              onChange={this.handleChange}
              label="Phone"
              type="tel"
              placeholder="Phone"
              validations={{
                isNumeric:true,
                isLength:10}}
              validationErrors={{
                isDefaultRequiredValue: 'Phone is required'
              }}
              required
            />


          <button className='btn btn-submit'onClick={this.handleSubmit}>Submit</button>
          </Formsy>
          <p>Already a member? <NavLink to='/login'> Log in </NavLink></p>
          </div>


          </div>



      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Register));
