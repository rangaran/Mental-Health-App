import React, {useState, useEffect,useRef} from 'react'
import { db, auth } from '../firebase'
import Sendmessage from './Sendmessage'
import Signout from './Signout'
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import Toggle from './Toggle';

import Res from './Res'

import ReactiveButton from 'reactive-button';

import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';

function Chat() {
  const [rr, setR] = useState(false);
  function clickHandler(e) {
    setR(true)
  
  }
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [state, setState] = useState('idle');
  const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(
    ()=>{
      db.collection('message').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
  })
}, [])
  return (
    
    <div >
      
      {rr ? <Res/>: <></>}
      {rr ? <></>:<Signout/>}
      {rr ? <></>:<ReactiveButton
            buttonState={state}
            onClick = {clickHandler}
            color={'secondary'}
            idleText={'Go back to services'}
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
        {rr ? <></>:<h1></h1>}
      {!rr &&<ThemeProvider theme={themeMode}>
      <>
      {rr ? <></>:<GlobalStyles />}
        {rr ? <></>:<Toggle theme={theme} toggleTheme={toggleTheme} />}
        {/* <center><b>Enable Dark mode</b></center> */}
        
      </>
    </ThemeProvider>}
    {!rr && <div className="msgs">
      {!rr && messages.map(({id,text,photoURL,uid})=>(
        <div>

<div key={id} className={`msg ${uid == auth.currentUser.uid && !rr ?'sent':'received'}`}>
{rr ? <></>:<Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle='Circle'
        {...generateRandomAvatarOptions() } />}
          <p>{text}</p>
      </div>
      </div>
      ))}
      </div>}
      {rr ? <></>:<Sendmessage scroll />}
      <div ref = {scroll}></div>
      </div>
  )
}

export default Chat