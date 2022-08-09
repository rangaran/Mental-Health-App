import React,{useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {db,auth} from '../firebase'
import {Input,Button} from '@material-ui/core'

function Sendmessage({scroll}) {
    const [msg,setMsg] = useState('')

async function sendMessage(e){
    e.preventDefault()
    const {uid,photoURL}=auth.currentUser

    await db.collection('message').add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg('')
    scroll.current.scrollIntoView({behaviour:'smooth'})
}
  return (
    <div>
        <form onSubmit={sendMessage}>
            <Input value={msg} onChange={(e)=>setMsg(e.target.value)}placeholder="Message..." color="#ff5c5c" />
            <Button type="submit"  color="#ff5c5c" >Send</Button>
        </form>
    </div>
  )
}

export default Sendmessage