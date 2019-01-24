import React from "react";
import { withRouter } from "react-router-dom"
import Sidenav from "../modals/sidenav"
import AddChallenge from "../modals/addChallenge"
import AddWeight from "../modals/addWeight"
import AddExercise from "../modals/addExercise"
import Select from 'react-select'

import { NavLink } from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: window.location.pathname.slice(1)
    };
    this.handleActivity = this.handleActivity.bind(this);
    console.log('this in Header', this)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  openSidenav = e => {
     document.getElementById("sideNav").style.width = "20%";
    }

  openAddChallenge = e => {
     document.getElementById("add-challenge").style.width = "400px";
    }
  openAddExercise = e => {
     document.getElementById("add-exercise").style.width = "400px";
    }
  openAddWeight = e => {
     document.getElementById("add-weight").style.width = "400px";
    }

  closeSidenav() {
    document.getElementById("sideNav").style.width = "0%";
  }

  closeAddChallenge() {
    document.getElementById("add-challenge").style.width = "0%";
  }
  closeAddExercise() {
    document.getElementById("add-exercise").style.width = "0%";
  }
  closeAddWeight() {
    document.getElementById("add-weight").style.width = "0%";
  }

  handleActivity(e) {
      if (e.value === '/challenge'){
        this.openAddChallenge()
      } else if(e.value === '/weight') {
        this.openAddWeight()
      } else if(e.value === '/exercise') {
        this.openAddExercise()
      } else{
        this.props.history.push(e.value)
      }

  }



  render() {
    return (
      <div className="header">
        <i className="fas fa-bars sidenav-hamburger" onClick={this.openSidenav}></i>
        <i className="fas fa-plus add-activity" onClick={this.openAddActivity}></i>
          <Select id="activity-dropdown" value={this.state.currentPage?this.state.currentPage:"Any"} selected={this.state.currentPage} options={[
          { value: '/exercise', label: 'Add Exercise Activity' },
          { value: '/weight', label: 'Add Weight' },
          { value: '/challenge', label: 'Create Challenge' }

        ]} onChange={this.handleActivity} style={{width: '90px'}} />


        <Sidenav close={this.closeSidenav}/>
        <AddChallenge close={this.closeAddChallenge}/>
        <AddWeight close={this.closeAddWeight}/>
        <AddExercise close={this.closeAddExercise}/>

      </div>
    );
  }

}

export default Header
