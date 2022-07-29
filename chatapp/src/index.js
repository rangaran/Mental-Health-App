import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Res from './components/Res';
import Chat from './components/Chat'

const {count} = require('./components/Res.js');
ReactDOM.render(
  <><App />

   {/* <Chat {...count == 'true'} />  */}
  </>,
  document.getElementById('root')
);
