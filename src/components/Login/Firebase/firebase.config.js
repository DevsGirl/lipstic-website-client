console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
  export default firebaseConfig;


  // apiKey: "AIzaSyB5eI8qwQVzyA9A72yMlF5j9ctO0fSs-cA",
  // authDomain: "lipstic-website.firebaseapp.com",
  // projectId: "lipstic-website",
  // storageBucket: "lipstic-website.appspot.com",
  // messagingSenderId: "759219583754",
  // appId: "1:759219583754:web:ca46e8855344b1e8dcd8f3"