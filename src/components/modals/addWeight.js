import React from "react";
import $ from 'jquery'
import Formsy from 'formsy-react'
import SimpleInput from "../functionalComponents/input.js";

import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index"
import { connect } from 'react-redux'
// import { Modal, Button } from 'react-bootstrap';

const url = "http://localhost:3001/api/v1/";



class AddChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight:0,
      date: Date.now(),
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

  handleSubmit = e => {
    e.preventDefault()
    console.log('this.props.current_user -' ,this.props.current_user.id)
    if (this.state.canSubmit === true) {
    // const headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json"
    // };
    // const body = this.state;
    // fetch(`${url}users`, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body)
    // }).then(res => {
    //   this.props.loginUser(this.state, this.props.history)
    //   // console.log('this is what response is for signin',res)
    //   this.props.fetchingAllUserData(this.props.user_id)
    //   this.props.history.push('/profile')
    // })
  } else {
    $(".validation-error-hidden").removeClass("validation-error-hidden")
  }
    ;
  };



  render() {
    return (
      <div id="add-weight" className="overlay">
          <a className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
            <div className="modal-container add-challenge">
            <Formsy id="create-weight" onValid={this.enableSubmit} onInvalid={this.disableSubmit}>


              <SimpleInput
                name="weight"
                onChange={this.handleChange}
                label="Weight"
                type="number"
                placeholder='0'

              />


            <SimpleInput
                  name="Date"
                  onChange={this.handleChange}
                  label="Start Date"
                  type="date"
                  placeholder={this.state.date}
                  validationErrors={{
                    isDefaultRequiredValue: 'Start Date is required'
                  }}
                  required
                />





              <button className='btn btn-submit'onClick={this.handleSubmit}>Submit</button>
              </Formsy>

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

export default withRouter(connect(mapStateToProps, actions)(AddChallenge))
