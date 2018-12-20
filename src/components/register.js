import React from "react";

const url = "http://localhost:3001/api/v1/";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      phone: '',

    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = this.state;
    fetch(`${url}users`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      // console.log('this is what response is for signin',res)
      this.props.fetchingAllUserData(this.props.user_id)
      this.props.history.push('/login')
  })
    ;
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>


          <input
            name="firstname"
            onChange={this.handleChange}
            label="First Name"
            type="text"
            placeholder="First Name"
          />


            <input
              name="lastname"
              onChange={this.handleChange}
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />


            <input
              name="email"
              onChange={this.handleChange}
              label="Email"
              placeholder="Email"
            />


            <input
              name="password"
              onChange={this.handleChange}
              label="Password"
              type='password'
              placeholder="Password"
            />


            <input
              name="phone"
              onChange={this.handleChange}
              label="Phone"
              placeholder="Phone"
            />


          <button onClick={this.handleSubmit}>Submit</button>


      </div>
    );
  }
}

export default Register
