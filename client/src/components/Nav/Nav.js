import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Exercises from '../Exercises/Exercises'
import Home from '../Home/Home'

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/exercises">Exercises</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;