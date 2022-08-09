import React from 'react'
import Box from '@material-ui/core/Box';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Particles from "react-tsparticles";
import { View, StyleSheet, Text } from 'react-native';
import 'firebase/compat/firestore';
import {Button} from '@material-ui/core'
import { auth } from '../firebase.js'
import {loadFull} from 'tsparticles';
function Signin() {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
    <div>
       {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
        {/* <div className='Signin'> */}
        <div style={{ 
      backgroundImage: "url(" + "https://raw.githubusercontent.com/rangaran/rangaran.github.io/main/images/ammu.png" + ")"
      ,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minWidth:'100%',
  minHeight:'120vh'

    }}> 
        
        <Box m={2} pt={3}>
        <Button onClick={signInWithGoogle}  variant="contained">Sign In With Google</Button>
        </Box>
        {/* </div> */}
    </div></div>
  )
}

export default Signin