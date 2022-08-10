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
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import Toggle from './Toggle';
import '../App.css'


function Res() {  
    
  
const [count, setRandomCount] = useState(false);
const [count2, setRandomCount2] = useState(false);
function clickHandler(e) {
  setRandomCount(true);
  setb('');

}
function clickHandler2(e) {
    setRandomCount2(true);
    setb('');
  
  }
  const [b, setb] = useState('black');
  
  return (
    
    <div  style={{
      backgroundColor: b,
      minWidth:'100%',
  minHeight:'100vh'
    }}>
       
     
     
     {/* <Particle params={particlesConfig} className="App-particles__container" /> */}
       
      {/* {count?<></>:<></>} */}
      {count || count2 ? <></>:<Signout/>}
      {count || count2 ? <></>:<h1 style={{ color: 'white' }}>Select an option</h1>}
      <p>
      {count ? <Chat/>:<></> }
      </p>
      <p>
      {count2 ? 
    <MyComponent />:<h1></h1> }
      </p>
      <p>
    {count || count2? <h1></h1>:<button onClick={clickHandler}>  Anonymous Chat Service </button>}
    </p>
    <p>
    {count2 || count? <h1></h1>:<button onClick={clickHandler2}>  Hospitals/Clinics nearby </button>}
      </p>
      
      
    </div>

        
  );

  
}


// const root = ReactDOM.createRoot(document.getElementById('root')); 

// root.render(<Res count={false} />);
// root.render(<Chat count={true} />);

export default Res