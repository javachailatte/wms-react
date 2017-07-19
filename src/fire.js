import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDoDySCiw7CQOIlwITmK5UAQvfeQXNe7gg",
    authDomain: "wheresmystuff-33c99.firebaseapp.com",
    databaseURL: "https://wheresmystuff-33c99.firebaseio.com",
    projectId: "wheresmystuff-33c99",
    storageBucket: "wheresmystuff-33c99.appspot.com",
    messagingSenderId: "624210519191"
};

const fire = firebase.initializeApp(config);
export default fire;