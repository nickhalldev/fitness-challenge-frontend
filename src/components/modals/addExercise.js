import React from "react";
import $ from 'jquery'
import Formsy from 'formsy-react'
import SimpleInput from "../functionalComponents/input.js";
import SimpleDatepicker from "../functionalComponents/datepicker.js";

import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index"
import { connect } from 'react-redux'
// import { Modal, Button } from 'react-bootstrap';

const url = "http://localhost:3001/api/v1/";

class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight:0,
      date: '',
      canSubmit: false,
      user_id: this.props.current_user.id,
    };
  }

  handleDateChange = (updatedState, date) => {
    this.setState({
      [updatedState]: date
    });

  }

  exerciseChoices = () => {
    if (Object.entries(this.props.exercises).length !== 0){
      let options = '<select>'
      this.props.exercises.map((e) => {
        console.log('e.name ', e.name)
        options += "<option value="
        options += e.name
        options += ">"
        options += e.name
        options += "</option>"
      })
      options += "</select>"
      console.log('options', options)

      return (
        options
      // )


      )
    }
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
    if (this.state.canSubmit === true) {
    // const headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json"
    // };
    // const body = this.state;
    // fetch(`${url}/users/${this.props.current_user.id}/weights`, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body)
    // }).then(res => {
    //   // this.props.history.push('/profile')
    //   this.setState({
    //     canSubmit: false,
    //     weight: 0,
    //     date: ''
    //   });
      this.props.close()
    // })
  } else {
    $(".validation-error-hidden").removeClass("validation-error-hidden")
  }
    ;
  };



  render() {
    return (
      <div id="add-exercise" className="overlay">
          <a className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
            <div className="modal-container add-exercise">
            <Formsy id="create-exercise" onValid={this.enableSubmit} onInvalid={this.disableSubmit}>



            {this.exerciseChoices()}

            <SimpleDatepicker
                  name="date"
                  onChange={this.handleChange}
                  label="date"
                  placeholder="Date"
                  className="add-exercise-input"
                  validationErrors={{
                    isDefaultRequiredValue: 'Date is required'
                  }}
                  handleDateChange={this.handleDateChange}
                  time="true"
                  future="false"
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
  console.log('state',state)
  return {
    current_user: state.users.current_user,
    exercises: state.users.exercises
  }
}

export default withRouter(connect(mapStateToProps, actions)(AddExercise))
