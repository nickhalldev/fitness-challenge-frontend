import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history)
    this.props.history.push('/profile')
  };

  render() {
    return (
      <div className="login">
        <h1>Log in</h1>

            <input
            name="email"
            onChange={this.handleChange}
            label="Email"
              />

            <input
              name="password"
              onChange={this.handleChange}
              label="Password"
              type="password"
            />
          <button onClick={this.handleSubmit}>Submit</button>

      </div>
    );
  }
}

export default Login
