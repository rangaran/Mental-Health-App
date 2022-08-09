import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./components/Signin";
import Res from "./components/Res";
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'

const Router = () => (
    
  <div>
    <Route exact path="/" component={Res} />
    <Route exact path="/login" component={SignIn} />
  </div>
);

export default Router;