import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Res from './components/Res';
import Chat from './components/Chat'
import config from './components/aws-exports'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import reportWebVitals from './reportWebVitals';
const {count} = require('./components/Res.js');
Amplify.configure(config)
ReactDOM.render(
  <><App />

   {/* <Chat {...count == 'true'} />  */}
   </>,
  document.getElementById('root')
);
