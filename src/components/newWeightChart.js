import React from "react";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Header from './navigation/header'
import Chart from 'chart.js';
import moment from 'moment'
import { Line } from 'react-chartjs-2'


const MyChart = (props) => {
  let myDates = [];
  let myWeights =[];


    if (Object.entries(props.weights).length !== 0){
    // console.log('props.weights ',props.weights)
    myWeights = props.weights.map((e) => {
      // console.log(e.weight);
      // console.log(moment(weight.createdAt).format('MMMM'));
      return e.weight;


  });
}

// const myWeights = [];
if (Object.entries(props.weights).length !== 0){
  myDates = props.weights.map((e) => {
    // const arr_createdAt = e.createdAt;
    return e.date;
  });
}

    const data = {
    labels: myDates,
    datasets: [
      {
        label: 'Weights',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: myWeights
      }
    ]
  };




    return (
      <div className="weight-chart">
        <Line data={data}

          />

      </div>
    );
  }




const mapStateToProps = (state) => {
    return {
      current_user: state.users.current_user,
      weights: state.users.weights
    }
  }

export default withRouter(connect(mapStateToProps, actions)(MyChart));
