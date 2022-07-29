import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function Signout() {
  return (
    <div>
        <Button onClick = {() => auth.signOut()}>
            Signout
        </Button>
    </div>
  )
}

export default Signout