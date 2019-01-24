import React from "react"
import $ from 'jquery'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import setHours from 'react-datepicker'
import setMinutes from 'react-datepicker'
import { withFormsy } from 'formsy-react';
import "react-datepicker/dist/react-datepicker.css";

class SimpleDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    };
  }

  handleChange = e => {

    let name = this.props.name
    this.setState({
      date: e
    });
    this.props.handleDateChange(this.props.name, e)
  };

  displayDatepicker = () => {

    if (this.props.future === "true" && this.props.time === "true"){
      return(      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        minDate={new Date()}
        name={this.props.name}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText={this.props.placeholder}
        autoComplete="off"
        showTimeSelect
        className={this.props.className}
        id={this.props.name}
        validations={this.props.validations}
        showDisabledMonthNavigation

      />
  )
    } else if (this.props.time === "true" && this.props.future === "false") {
          return (
          <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        maxDate={new Date()}
        name={this.props.name}
        placeholderText={this.props.placeholder}

        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        autoComplete="off"
        className={this.props.className}
        id={this.props.name}
        validations={this.props.validations}

        />
    )
        }
    else if (this.props.time === "false" ) {
      return (
      <DatePicker
    selected={this.state.date}
    onChange={this.handleChange}
    maxDate={new Date()}
    name={this.props.name}
    placeholderText={this.props.placeholder}
  dateFormat="MMMM d, yyyy "
    autoComplete="off"
    className={this.props.className}
    id={this.props.name}
    validations={this.props.validations}

    />
)
}
     else {
    return (  <DatePicker
    selected={this.state.date}
    onChange={this.handleChange}
    name={this.props.name}
    placeholderText={this.props.placeholder}
    showTimeSelect
    dateFormat="MMMM d, yyyy h:mm aa"
    autoComplete="off"
    className={this.props.className}
    id={this.props.name}
    validations={this.props.validations}
    />
    )
    }

  }
  // excludeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}

  render() {


    return (
<div>
  {this.displayDatepicker()}


</div>
)
}
}

export default SimpleDatepicker
