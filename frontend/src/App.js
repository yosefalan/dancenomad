import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignupForm from "./components/SignupPage/SignupForm";
import * as sessionActions from "./store/session";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import Main from "./components/Main/Main";
import EventPage from "./components/EventPage/EventPage";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EditEvent from "./components/EditEvent/EditEvent";
import UserRegistrations from "./components/UserRegistrations/UserRegistrations";
import ManagedEvents from "./components/ManagedEvents/ManagedEvents";
import EventRegistrations from "./components/EventRegistrations/EventRegistrations";
import EventCreate from "./components/EventCreate/CreateEventForm new";


function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => Object.values(state?.events))[0];
  console.log("EVENT IN APP", event)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage sessionUser={sessionUser} />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <ProtectedRoute exact path="/main">
          <Main />
        </ProtectedRoute>
        <ProtectedRoute exact path="/events/:id">
          <EventPage />
        </ProtectedRoute>
        <ProtectedRoute path="/events/manage/create">
          <CreateEvent />
        </ProtectedRoute>
        <ProtectedRoute path="/events/manage/edit/:id">
          <EditEvent event={event} />
        </ProtectedRoute>
        <ProtectedRoute path="/events/manage/all">
          <ManagedEvents user={sessionUser}  />
        </ProtectedRoute>
        <ProtectedRoute path="/events/manage/:id/registrations">
          <EventRegistrations user={sessionUser} event={event} />
        </ProtectedRoute>
        <ProtectedRoute path="/registrations/users/:id">
          <UserRegistrations user={sessionUser} />
        </ProtectedRoute>

        <Route path="/event-create">
          <EventCreate />
        </Route>

      </Switch>
    </BrowserRouter>

    );
}

export default App;
