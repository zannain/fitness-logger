import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exercises from "../Exercises/Exercises";
import Home from "../Home/Home";
import Workouts from "../Workouts/Workouts";
import { Navbar, Nav } from "react-bootstrap";
import { faBook, faDumbbell, faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const NavStyles = styled.div`
  .navbar {
    display: flex;
    justify-content: space-around;
    margin: 10px;
    .fa-book, .fa-dumbbell, .fa-home  {
      font-size: 30px;
    }
  }
`
function Navigation() {
  return (
    <NavStyles>

    <Router>
      <Navbar bg="light" expand="lg">
        <Nav.Item>
            <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/exercises"><FontAwesomeIcon icon={faDumbbell} /></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/workouts"><FontAwesomeIcon icon={faBook} /></Link>
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
    </NavStyles>
  );
}

export default Navigation;
