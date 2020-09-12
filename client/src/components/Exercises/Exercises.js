import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import CreateExercise from "./CreateExercise";
import GetExercise from "./GetExercise";

const ExerciseContainer = styled.section`
  .exercises-nav {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    .exercise-nav-item {
      margin: 10px;
      width: 200px;
    }
  }
`;


const ExercisesRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
      </Route>
      <Route path={`${path}/create`}>
        <CreateExercise />
      </Route>
      <Route path={`${path}/get`}>
        <GetExercise />
      </Route>
    </Switch>
  );
}

const Exercises = () => {
  let { url } = useRouteMatch();
  return (
    <ExerciseContainer>
      <div className="exercises-nav">
        <Link to={`${url}/get`}>
          <Button className="exercise-nav-item">Get Exercises</Button>
        </Link>
        <Link to={`${url}/create`}>
          <Button className="exercise-nav-item" to={`${url}/create`}>
            Create Exercise
          </Button>
        </Link>
      </div>
      <ExercisesRouter />
    </ExerciseContainer>
  );
}

export default Exercises;
