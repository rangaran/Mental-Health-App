import React from 'react'
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { View, StyleSheet, Text } from 'react-native';
import 'firebase/compat/firestore';
import {Button} from '@material-ui/core'
import { auth } from '../firebase.js'

import ReactiveButton from 'reactive-button';
function Signin() {

    // const particlesInit = async (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(main);
    //   };
    
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
      ,
  
  minWidth:'100%',
  minHeight:'100vh',
  
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat'

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
        
        
        {/* </div> */}
    </div>
  )
}

export default Signin