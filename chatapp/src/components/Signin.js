import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Button} from '@material-ui/core'
import { auth } from '../firebase.js'

function Signin() {

  

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
    <div>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  )
}

export default Signin