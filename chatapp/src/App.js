import React from "react";

import Res from './components/Res';
import Chat from './components/Chat';
import Signin from './components/Signin';
import './App.css';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import Router from './Router'
import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
const {count} = require("./components/Res");


function App() {
  const [user] = useAuthState(auth)
  
  return (
    
    <>
    
      {user ? 
      <Res/>: <Signin/>}
    </>
  );
}


export default App;
