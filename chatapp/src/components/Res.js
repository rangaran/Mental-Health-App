import React from 'react'
import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route, useNavigate} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Button} from '@material-ui/core'
import { auth } from '../firebase.js'
import Signin from './Signin';
import Signout from './Signout';
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './Chat'
import App from '../App'
import { render } from "react-dom";
import {Helmet} from "react-helmet";
import MyComponent from "./map"
import SearchBar from "./map";


function Res() {  
    
      
const [count, setRandomCount] = useState(false);
const [count2, setRandomCount2] = useState(false);
function clickHandler(e) {
  setRandomCount(true);

}
function clickHandler2(e) {
    setRandomCount2(true);
  
  }
 
  return (
    
    <div>
      
      {count? <h1>Start your chat below</h1>:<></>}
      {count || count2 ? <></>:<h1>Select an option</h1>}
      <p>
      {count ? <Chat/>:<h1></h1> }
      </p>
      <p>
      {count2 ? 
    <MyComponent />:<h1></h1> }
      </p>
      <p>
    {count || count2? <h1></h1>:<button onClick={clickHandler}> Chat </button>}
    </p>
    <p>
    {count2 || count? <h1></h1>:<button onClick={clickHandler2}> Services nearby </button>}
      </p>
      
    </div>


  );

  
}


// const root = ReactDOM.createRoot(document.getElementById('root')); 

// root.render(<Res count={false} />);
// root.render(<Chat count={true} />);

export default Res