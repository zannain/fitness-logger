import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exercises from "../Exercises/Exercises";
import Home from "../Home/Home";
import Workouts from "../Workouts/Workouts";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Nav.Item>
            <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/exercises">Exercises</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/workouts">Workouts</Link>
        </Nav.Item>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
