import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {console.log(user)}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="app__welcome">
                    <h1>Welcome to Chat App, <span>{user.displayName}</span></h1>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
