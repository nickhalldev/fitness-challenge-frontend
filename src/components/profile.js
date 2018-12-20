import React from "react";


class Profile extends React.Component {
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
      <h1>
      Hiiiii!
      </h1>

      </div>
    );
  }
  
}

export default Profile
