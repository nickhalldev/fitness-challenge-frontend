import React from "react";


class Header extends React.Component {
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
      <div className="header">
      <img alt="" src="https://www.fillmurray.com/200/300"></img>




      </div>
    );
  }

}

export default Header
