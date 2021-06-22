import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Room from "./containers/Room";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/room" component={Room} />
        <Route path="/" component={() => <Redirect to="/room" />} />
      </Switch>
    </Router>
  );
}

export default App;
