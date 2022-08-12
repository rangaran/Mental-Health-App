import React, { useRef }  from 'react'
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { View, StyleSheet, Text } from 'react-native';
import 'firebase/compat/firestore';
import {Button} from '@material-ui/core'
import { auth } from '../firebase.js'
import ReactWordcloud from "react-wordcloud";
import ReactiveButton from 'reactive-button';
import words from "./words";
import { Resizable } from "re-resizable";
import "d3-transition";
import { select } from "d3-selection";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function Signin() {

    // const particlesInit = async (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(main);
    //   };
    
const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  
};
function getCallback(callback) {
  return function (word, event) {
    const isActive = callback !== "onWordMouseOut";
    const element = event.target;
    const text = select(element);
    text
      .on("click", () => {
        if (isActive) {
          window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
        }
      })
      .transition()
      .attr("background", "white")
      .attr("font-size", isActive ? "300%" : "100%")
      .attr("text-decoration", isActive ? "underline" : "none");
  };
}
const reference = useRef();
const callbacks = {
  getWordColor: (word) => (word.value > 50 ? "orange" : "lightblue"),
  getWordTooltip: (word) =>
    `The word "${word.text}" appears ${word.value} times.`,
  onWordClick: getCallback("onWordClick"),
  onWordMouseOut: getCallback("onWordMouseOut"),
  onWordMouseOver: getCallback("onWordMouseOver")
};
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      const [state, setState] = useState('idle');
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
    
        <div style={{ 
      backgroundImage: "url(" + "https://raw.githubusercontent.com/rangaran/rangaran.github.io/main/images/ammu.png" + ")"
      ,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight:'120vh',
      minWidth:'100vh',
        overflow:'hidden'
  
    }}> 
        
        <View >
      
      <ReactiveButton
            buttonState={state}
            onClick = {signInWithGoogle}
            color={'primary'}
            idleText={'Sign In'}
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
        />
        {/* <Button onClick = {() => auth.signOut()}>
            Signout
        </Button> */}
  
        </View>
        <h1>
          
        </h1>
        <center>
        
        <div style={{display: 'flex'}}>
        
        
        <ReactWordcloud  callbacks={callbacks}
          words={words}
          options={{
            tooltipOptions: {
              trigger: "click",
              triggerTarget: reference.current
            }
          }}/> 
          
      </div>

      </center>
        {/* </div> */}
    </div>
  )
}

export default Signin