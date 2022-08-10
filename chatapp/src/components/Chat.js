import React, {useState, useEffect,useRef} from 'react'
import { db, auth } from '../firebase'
import Sendmessage from './Sendmessage'
import Signout from './Signout'
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import Toggle from './Toggle';


import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';

function Chat() {
  
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(
    ()=>{
      db.collection('message').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
  })
}, [])
  return (
    
    <div id = "chat">
      <Signout/>
      
      <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        {/* <center><b>Enable Dark mode</b></center> */}
        
      </>
    </ThemeProvider>
      <div className="msgs">
      {messages.map(({id,text,photoURL,uid})=>(
        <div>

        <div key={id} className={`msg ${uid == auth.currentUser.uid ?'sent':'received'}`}>
        <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle='Circle'
        {...generateRandomAvatarOptions() } />
          <p>{text}</p>
      </div>
      </div>
      ))}
      </div>
      <Sendmessage scroll />
      <div ref = {scroll}></div>
      </div>
  )
}

export default Chat