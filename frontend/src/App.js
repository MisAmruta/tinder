import "./App.css";
import Header from "./Header";
import React from "react";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from "./LandingPage";
import User from "./User";
import Chats from './Chats'
import ChatScreen from './ChatScreen'

import { useDataLayerValue } from "./DataLayer";
function App() {
  const [{ user }, dispatch] = useDataLayerValue();

  // console.log(user)
  return (
    <>
      {user === null ? (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/user">
                <Header backButtonUser="present" />
                <User />
              </Route>

              <Route path="/home">
                <Header />
                <TinderCards />
                <SwipeButtons />
              </Route>

              <Route path="/chat/:person">
                <Header backButton="/chat" />
                <ChatScreen />
                
              </Route>

              <Route path="/chat">
                <Header backButton="/home" />
                <Chats />
              </Route>
              
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
