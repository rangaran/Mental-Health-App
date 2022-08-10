import React, { useState } from 'react';
import { auth } from '../firebase.js'
// import { Button } from '@material-ui/core'
import { View, StyleSheet, Text } from 'react-native';
import ReactiveButton from 'reactive-button';

function Signout() {
  const [state, setState] = useState('idle');
  return (
    <div>
      <View >
      <ReactiveButton
            buttonState={state}
            onClick = {()=> {setState('loading');
            setTimeout(() => {
                setState('success');
            }, 2000);auth.signOut();}}
            color={'primary'}
            idleText={'Sign Out'}
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
        </View>
        <h1>

        </h1>
    </div>
  )
}

export default Signout