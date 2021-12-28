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
import EventPage from "./components/EventPage/EventPage"
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EditEvent from "./components/EditEvent/EditEvent";
import UserRegistrations from "./components/UserRegistrations/UserRegistrations";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const event = useSelector(state => Object.values(state?.events))[0];
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

      <Route exact path='/events/:id'>
        <EventPage />
      </Route>

      <Route path='/events/manage/create'>
        <CreateEvent />
      </Route>

      <Route path='/events/manage/edit/:id'>
        <EditEvent event={event} />
      </Route>

      <Route path='/registrations/users/:id'>
        <UserRegistrations user={sessionUser}/>
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
