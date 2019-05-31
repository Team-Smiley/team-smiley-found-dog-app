const firebase = require('firebase/app');
const config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.DOMAIN,
    databaseURL: process.env.DBURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

module.exports = {
    firebase,
    provider,
    auth
}