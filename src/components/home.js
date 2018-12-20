import React from "react";
import Header from "./navigation/header"


class Home extends React.Component {
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
      <div>
      <Header />
      <h1>
      Hiiiii!
      </h1>

      </div>
    );
  }

}

export default Home
