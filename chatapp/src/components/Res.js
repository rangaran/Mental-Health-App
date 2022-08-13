import React from 'react'
import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route, useNavigate} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Button, Hidden} from '@material-ui/core'
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
import ReactiveButton from 'reactive-button';
import Blog from './Blog'
function Res() {  
    
  const [state, setState] = useState('idle');
const [count, setRandomCount] = useState(false);
const [count2, setRandomCount2] = useState(false);
const [count3, setRandomCount3] = useState(false);
function clickHandler(e) {
  setRandomCount(true);
  setb('');

}
function clickHandler2(e) {
    setRandomCount2(true);
    setb('');
  
  }
  function clickHandler3(e) {
    setRandomCount3(true);
    setb('');
  
  }
  const [b, setb] = useState("url(" + "https://static.vecteezy.com/system/resources/previews/003/066/808/original/abstract-minimalist-hand-drawn-background-free-vector.jpg" + ")");
  
  return (
    <div>
    <div style={{ 
      backgroundImage: b
      ,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight:'120vh',
      minWidth:'100vh',
        overflow:'hidden'
  
    }}> 
    {/* <div  style={{
      
    minHeight:'100vh'
    }}> */}
       
     
     
     {/* <Particle params={particlesConfig} className="App-particles__container" /> */}
       
      {/* {count?<></>:<></>} */}
      {count || count2 || count3 ? <></>:<Signout/>}
      {count || count2 || count3? <></>:<h1 >Select an option</h1>}
      <p>
      {count ? <Chat/>:<></> }
      {count3 ? <Blog/>:<></> }
      </p>
      <p>
      {count2 ? 
    <MyComponent />:<></> }
      </p>
      <center>
      {count || count2 || count3 ? <h1></h1>: <ReactiveButton
            buttonState={state}
            onClick = {clickHandler}
            color={'secondary'}
            idleText={'Anonymous Chat Service'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px'}}
            outline={false}
            shadow={false}
            rounded={false}
            size={'large'}
            block={false}
            messageDuration={2000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
        />}
   
    <p></p>
    {count || count2 ||count3? <h1></h1>: <ReactiveButton
            buttonState={state}
            onClick = {clickHandler2}
            color={'secondary'}
            idleText={'Professional Services Nearby'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px'}}
            outline={false}
            shadow={false}
            rounded={false}
            size={'large'}
            block={false}
            messageDuration={2000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
        />}
<p></p>
{count || count2 || count3? <h1></h1>: <ReactiveButton
            buttonState={state}
            onClick = {clickHandler3}
            color={'secondary'}
            idleText={'Motivational Blog'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px'}}
            outline={false}
            shadow={false}
            rounded={false}
            size={'large'}
            block={false}
            messageDuration={2000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
        />}
      </center>
      
      
    </div>
    </div>

        
  );

  
}


// const root = ReactDOM.createRoot(document.getElementById('root')); 

// root.render(<Res count={false} />);
// root.render(<Chat count={true} />);

export default Res