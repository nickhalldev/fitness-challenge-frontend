import React from "react";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Header from './navigation/header'
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2'


class WeightChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
                  labels: [],
                  datasets: [{
                  label: "Weights",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [],
                  }]
                },
    chartOptions: {
  elements: {
      line: {
          tension: 0, // disables bezier curves
          }
      }
      }
        };
        console.log('this in weightdata-', this.state.chartData.labels)
    this.displayChart = this.displayChart.bind(this)
  }



  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayChart = () => {

    if (this.props.current_user && this.props.weights) {

        if (typeof this.props.weights === 'object'){
          console.log('this in beginning of displayChart 3',this)
          let lineChartPoints = [];
          let that = this

          let newArray = Array.from(this.props.weights)
          newArray.map(function(element){

            // that.setState({
            //   chartData.labels:
            // })
//
//             that.setState(prevState => ({
//   chartData.labels: [...prevState.chartData.labels, element.date]
// }))
            // .chartData.labels.push(element.date)
            // this.state.chartData.labels.data(element.weight)
            lineChartPoints.push(
               element.weight
          //
          //
          )
        })

        console.log('line chart points - ',lineChartPoints)

      }



        // let myLineChart = new Chart({
        //   type: 'line',
        //   data: data,
        //   options: {
        // elements: {
        //     line: {
        //         tension: 0, // disables bezier curves
        //     }
        // }
        // }
        // });





      return ( <div >

        <h3>Am I Displaying this</h3>
        <br />

        <Line
                  data={this.state.chartData}
                  options={this.state.chartOptions}
                  height={200}
                  width={300}

                  />
        </div>
      )
    }
  }



  render() {
    return (
      <div>
        {this.displayChart()}

      </div>
    );
  }

}


const mapStateToProps = state => {
    return {
      current_user: state.users.current_user,
      weights: state.users.weights
    }
  }

export default withRouter(connect(mapStateToProps, actions)(WeightChart));
