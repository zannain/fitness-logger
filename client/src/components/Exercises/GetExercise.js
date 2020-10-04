import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 as uuidv4 } from 'uuid';
export const GET_EXERCISES = gql`
  query GET_EXERCISES {
    exercises {
      name
    }
  }
`;

function GetExercise() {
  const { loading, error, data } = useQuery(GET_EXERCISES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ListGroup>
      {data.exercises.map(({ name, id }) => <ListGroup.Item key={`${uuidv4()}`}>{name}</ListGroup.Item>)}
    </ListGroup>
  );
}

export default GetExercise;
