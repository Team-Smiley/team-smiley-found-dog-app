//require react
import React from 'react'
//require react dom
import ReactDOM from 'react-dom'
import Login from '../../components/Login.jsx'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../src/firebaseConfig.js';
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

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
   //handle signup
//    handleSignup() {
//     firebase.auth().signInWithPopup(providers).then(function(result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//       }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });
//    }
login() {
    // const providers = {
    //     googleProvider: new firebase.auth.GoogleAuthProvider(),
    // };
    firebase.auth().signInWithPopup({
        googleProvider: new firebase.auth.GoogleAuthProvider(),
    }).then((result) => {
      this.setState({
          user: result.user
      })
    })
  }
  logout() {
    firebase.auth().signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }
   //render html
   render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
       return (
           <div>
               <div>Hello Found Dog</div>
               <Login handleSignUp={this.login} user={user} signOut={this.logout} signInWithGoogle={signInWithGoogle}/>
           </div>
       )
   }
}




export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);
//render app component
ReactDOM.render(<App />, document.getElementById('app'));

