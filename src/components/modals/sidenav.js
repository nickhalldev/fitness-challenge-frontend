import React from "react";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index"
import { connect } from 'react-redux'
// import { Modal, Button } from 'react-bootstrap';


class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log('this.props', this.props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick(e) {
    console.log('this', this)
    console.log('e - ',e.target.id)
    if (e.target.id === 'logout'){
      this.props.logout()
      this.props.history.push('/')
    }
    else {
    this.props.history.push(e.target.id)
    }

      //   this.openAddChallenge()
      // } else{
      //   this.props.history.push(e.value)
      // }

  }




  render() {
    return (
      <div id="sideNav" className="overlay">
          <div className="closebtn" onClick={this.props.close}>&times;</div>
          <div className="overlay-content">
            <div onClick={this.handleClick} id="/profile">Profile</div>
            <div onClick={this.handleClick} id="logout">Logout</div>


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
export default withRouter(connect(mapStateToProps,actions)(Sidenav))
