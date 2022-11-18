import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LandPage from './components/LandPage';
import OneSpot from "./components/Spot/index";
import EditSpot from "./components/EditSpot/index";
import CreateSpot from "./components/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <LandPage />
          </Route>
          <Route exact path='/spots/:spotId'>
            <OneSpot />
          </Route>
          <Route exact path='/spots/:spotId/edit'>
            <EditSpot />
          </Route>
          <Route exact path = '/createnewspot'>
            <CreateSpot />
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
