import React from "react";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Header from './navigation/header'


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

  componentDidMount(){
    // console.log('users - ',this.props.users)
    // console.log('users - ',this.props.current_user)

      // this.authCheck()



  }

  authCheck = () => {
    if (localStorage.token) {
      // this.props.fetchingUser()
      // this.props.fetchingUsers()
      console.log('I have a token')
    } else {
      this.props.history.push('/login')
      console.log('I dont have a token')
    }
  }

  displayUser = () => {
    if (this.props.current_user) {
      return ( <div >

        <h3>Hey {this.props.current_user.firstname} {this.props.current_user.lastname} see your challenge below!</h3>


        </div>
      )
    }
  }



  render() {
    return (
      <div className="container-class">
        <Header />

      {this.displayUser()}

      </div>
    );
  }

}


const mapStateToProps = state => {
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile));
