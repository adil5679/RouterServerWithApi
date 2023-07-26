
import express from 'express';
let router = express.Router()
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAHHNcIiJfVI2RxN2FBxROYPtv9oRmXpJU",
  authDomain: "faizan-socialapp.firebaseapp.com",
  projectId: "faizan-socialapp",
  storageBucket: "faizan-socialapp.appspot.com",
  messagingSenderId: "218792561325",
  appId: "1:218792561325:web:7bdf5924d8ef7fc7b3d424",
  measurementId: "G-XBH0G5BRV6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  

router.post('/login/:email', (req, res, next) => {
    console.log('this is login!', new Date());

    let password = req.body.password;
    let email = req.params.email;


    
  

  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  

  
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    //   localStorage.setItem('email', email);
      var successlogin = true;
      // ...
      // alert('Sign in Successful')
    //   location.href = './app.html'
    
    res.send({

        userLoggedIn: true,
        user: user,


    });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
    //   alert('Error: ' + errorMessage)
    //   location.href = './index.html'

    
    res.send({

        userLoggedIn: false,
        error: errorMessage,


    });
  
    });
  
  
    })








router.post('/signup/:email', (req, res, next) => {
    console.log('this is signup!', new Date());
   

    let password = req.body.password;
    let email = req.params.email;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...

      res.send({

        signUpSuccess: true,


    });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      // alert('Error:' + errorMessage)

      res.send({

        signUpSuccess: false,
        error: errorMessage,


    });


    });



})


export default router

