import React from "react";
// import { Modal, Button } from 'react-bootstrap';


class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <div id="sideNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>
      </div>




    );
  }

}

export default Sidenav
