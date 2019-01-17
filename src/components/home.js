import React from "react";
import Header from "./navigation/header"
import Footer from "./navigation/footer"
import Terms from "./modals/terms"
import Privacy from "./modals/privacy"
import { NavLink } from "react-router-dom";



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // displayTerms: false,
      // displayPrivacy: false
    };
  }



  displayModal = e => {
    this.setState({
      [e.target.id]: true
    });
    console.log(this.state)
  }

  hideModal() {
    this.setState({
      displayTerms: false,
      displayPrivacy: false
    })
  }

  openSidenav = e => {
     console.log('e.target.id',e.target.id)
     document.getElementById("sideNav").style.width = "20%";
    }

  closeSidenav() {
    document.getElementById("sideNav").style.width = "0%";
  }
  openTerms = e => {
     document.getElementById("terms").style.width = "100%";
    }

  closeTerms() {
    document.getElementById("terms").style.width = "0%";
  }
  openPrivacy = e => {
     document.getElementById("privacy").style.width = "100%";
    }

  closePrivacy() {
    document.getElementById("privacy").style.width = "0%";
  }



  render() {
    return (
      <div className="container-class">
        <Header />
        <div className="center">
          <h1>
            Friendly Fitness Frenzy
          </h1>
          <h4>
            The best and only app to challenge my wife in exercise
          </h4>
        </div>
      <div className="width-50">
          <img src="/images/replace.jpg" alt="" className="replace float-center" />

      </div>
      <div className="width-50">
      <NavLink to='/register'><button className="home-button email-link signup"><i className="fas fa-envelope"></i>Use my email</button></NavLink>
      <button className="home-button facebook-link">Sign up with Facebook</button>
      <button className="home-button google-link signup">Sign up with Google</button>

        <p>By signing up for Fitness Challenge, you agree to the <span id="displayTerms" onClick={this.openTerms} className="clickable">Terms of Service.</span></p>
        <p>View our <span id="displayPrivacy" className="clickable" onClick={this.openPrivacy}>Privacy Policy</span></p>
        <p>Already a member? <NavLink to='/login'> Log in </NavLink></p>
        </div>


        <Terms close={this.closeTerms}/>
        <Privacy close={this.closePrivacy}/>



      </div>
    );
  }

}



export default Home
