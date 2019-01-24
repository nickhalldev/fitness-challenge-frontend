import React from "react";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Header from './navigation/header'
import SimpleDatepicker from './functionalComponents/datepicker.js'
import WeightChart from './weightChart.js'
import MyChart from './newWeightChart.js'
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2'


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    console.log('this.props', this.props)
  }

  handleChange = e => {
    // console.log('e.target',e.target)
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  displayUser = () => {
    if (this.props.current_user && this.props.weights) {
      // console.log('current user',this.props.current_user)
        // console.log('this.props.weights',typeof this.props.weights === 'object')
      //   if (typeof this.props.weights === 'object'){
      //     let lineChartPoints = [];
      //
      //     let newArray = Array.from(this.props.weights)
      //     newArray.forEach(function(element){
      //       lineChartPoints.push({
      //         x: element.weight,
      //         y: element.date
      //
      //     })
      //   })
      // }
      // let ctx = document.getElementById("myChart").getContext('2d')

        // let myLineChart = new Chart(ctx, {
        //   type: 'line',
        //   data: lineChartPoints,
        //   options: {
        // elements: {
        //     line: {
        //         tension: 0, // disables bezier curves
        //     }
        // }
        // }
        // });





      return ( <div >

        <h3>Hey {this.props.current_user.firstname} {this.props.current_user.lastname} see your challenge below!</h3>
        <br />



        </div>
      )
    }
  }



  render() {
    return (
      <div className="container-class">
        <Header />

      {this.displayUser()}
      <MyChart />


      </div>
    );
  }

}


const mapStateToProps = state => {
    return {
      current_user: state.users.current_user,
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile));
