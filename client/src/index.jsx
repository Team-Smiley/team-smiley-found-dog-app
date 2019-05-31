//require react
import React from 'react'
//require react dom
import ReactDOM from 'react-dom'
import axios from 'axios';
import Dashboard from '../../components/Dashboard.jsx'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {auth, provider} from './firebaseConfig.js';

//create class app component
class App extends React.Component {
  //constructor
   constructor(props) {
       super(props);
       this.state = {
           user: null,
       }
    //    this.handleSignup = this.handleSignup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
   }
   
   //login function
  login() {
    //use firebase signinwithpopupmethod. takes google auth provider
    auth.signInWithPopup(provider).then((result) => {
      //reset state to current logged in user
      this.setState({
          user: result.user
      })
      axios.post('/login', {
        result
      }).then((res) => {
        console.log('this works');
      })
    })
  }
  logout() {
    //use firebase signout method.
    auth.signOut().then((result) => {
      //remove user from state
      this.setState({
        user: null
      })

    })
  }
  componentDidMount() {
    //call authListener
    this.authListener();
  }
  authListener() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user
        })
      }
    })
  }
   //render html
   render() {
     let authButton = this.state.user ? 
      <Dashboard logout={this.logout}/> : 
      <button onClick={this.login}>Log In</button>
     return (
       <div>
         {authButton}
       </div>
     ) 
   }
  //  render() {
  //     const {
  //       user,
  //       signOut,
  //       signInWithGoogle,
  //     } = this.props;
  //      return (
  //          <div>
  //              <div>Hello Found Dog</div>
  //              {user ? <Dashboard/> : <Login handleSignUp={this.login} user={user} signOut={this.logout} signInWithGoogle={signInWithGoogle}/>}
  //          </div>
  //      )
  //  }
}




// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
// })(App);
// //render app component
ReactDOM.render(<App />, document.getElementById('app'));

