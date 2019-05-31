const firebase = require('firebase/app');

const config = {
    apiKey: 'AIzaSyANFsNxSnbvx8JYla2srLVtIS2tIOGSPMA',
    authDomain: 'found-dog.firebaseapp.com',
    databaseURL: 'https://found-dog.firebaseio.com',
    projectId: 'found-dog',
    storageBucket: 'found-dog.appspot.com',
    messagingSenderId: '190867854845',
    appId: ':190867854845:web:c995c8b214fa6fe4'
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

module.exports = {
    firebase,
    provider,
    auth,
}