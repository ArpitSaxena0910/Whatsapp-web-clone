import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* <Sidebar />
        <Chat /> */}
        <Router>
        <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
