import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupPage/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import Main from "./components/Main/Main";
import EventPage from '../'
function App() {
  const sessionUser = useSelector(state => state.session.user);
  console.log("SESSION USER:", sessionUser)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if(sessionUser)
  return (
    <>
      <Switch />
      <Route exact path='/'>
        <Main />
      </Route>

      <Route exact path='/events/id'>
        <EventPage />
      </Route>
    </>
  )

  else return (
    <>
      <Switch />

      <Route exact path='/'>
        <LandingPage />
      </Route>

      <Route exact path='/login'>
        <LoginPage />
      </Route>

      <Route exact path='/signup'>
        <SignupPage />
      </Route>

      {/* <Route exact path='/'>
        <NotFoundPage />
      </Route> */}
    </>

  )
}

export default App;
