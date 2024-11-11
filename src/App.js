import Data from "./Data";
import Header from "./Header"
import Sidebar from "./Sidebar";
import React, { useState } from 'react'
import firebase from 'firebase';
import { auth, provider } from './firebase';


function App() {

  const [user, setUser] = React.useState(null);

  const signIn = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(({user}) => {
      setUser(user)
    }).catch((error) => {
      alert(error.message)
    })
  }


  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
        <div className="App">
          <Sidebar/>
          <Data/>
        </div>
        </>
      ) : (
        <div className="loginWrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"/>
          <button onClick={signIn}>Login To Google Drive Clone</button>
          
        </div>
      )
    }
      
    </>
  );
}

export default App;
