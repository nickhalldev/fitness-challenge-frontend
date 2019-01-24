import React from "react";
import $ from 'jquery'
import Formsy from 'formsy-react'
import moment from 'moment'
import SimpleInput from "../functionalComponents/input.js";
import SimpleDatepicker from "../functionalComponents/datepicker.js";

import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index"
import { connect } from 'react-redux'
// import { Modal, Button } from 'react-bootstrap';

const url = "http://localhost:3001/api/v1/";



class AddChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      participants:[],
      canSubmit: false,
      startDate: '',
      endDate: '',
      closeDate: ''
    };
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = (updatedState, date) =>{

    if (updatedState === 'startDate' && this.state.endDate === ''  && this.state.closeDate === ''){
      $("#endDate").value = moment(date).add(7, 'days')
      console.log('end date',$("#endDate").value)
      let date7 = moment(date).add(7, 'days')
      console.log('date + 7',date7)
      // console.log('date + 7',moment(date).add(7, 'days'))
      console.log('date ',moment(date))
    }
    this.setState({
      [updatedState]: date
    });


  }

  enableSubmit = () => {
    this.setState({ canSubmit: true });
  }
  disableSubmit = () => {
    this.setState({ canSubmit: false });
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('enable submit',this.state.canSubmit)
    console.log('this.props.current_user -' ,this.props.current_user.id)
    if (this.state.startDate === '' || this.state.endDate == '' || this.state.closeDate == ''){
      $(".date-validation").removeClass("validation-error-hidden")
    } else if (this.state.canSubmit === true) {
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
    console.log('Am I in remove class')
    $(".validation-error-hidden").removeClass("validation-error-hidden")
  }
    ;
  };



  render() {
    return (
      <div id="add-challenge" className="overlay">
          <a className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
            <div className="modal-container add-challenge">
              <span className="validation-error validation-error-hidden date-validation">Need alllll the dates!</span>
            <Formsy id="create-challenge" onValid={this.enableSubmit} onInvalid={this.disableSubmit}>


              <SimpleInput

                name="name"
                onChange={this.handleChange}
                label="Name"
                type="text"
                placeholder="Name"
                validationErrors={{
                  isDefaultRequiredValue: 'Name is required'
                }}
                className="add-challenge-input"
                required

              />


            <SimpleDatepicker

                  name="startDate"
                  onChange={this.handleChange}
                  label="Start Date"
                  placeholder="Start Date"
                  validationErrors={{
                    isDefaultRequiredValue: 'Start Date is required'
                  }}
                  required
                  className="add-challenge-input"
                  handleDateChange={this.handleDateChange}
                  time="true"
                />


              <SimpleDatepicker

                  name="endDate"
                  onChange={this.handleChange}
                  label="End Date"
                  placeholder="End Date"
                  validationErrors={{
                    isDefaultRequiredValue: 'End date is required'
                  }}
                  required
                  className="add-challenge-input"
                  handleDateChange={this.handleDateChange}
                  future="true"
                  time="true"
                />


              <SimpleDatepicker

                  name="closeDate"
                  onChange={this.handleChange}
                  label="closeDate"
                  placeholder="Close Date"
                  className="add-challenge-input"
                  handleDateChange={this.handleDateChange}
                  future="true"
                  time="true"
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
