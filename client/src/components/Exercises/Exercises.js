import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_EXERCISES = gql`
  query GET_EXERCISES {
    exercises {
      name
    }
  }
`;
function Exercises() {
  const { loading, error, data } = useQuery(GET_EXERCISES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.exercises.map(({ name, id }) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ));
}

export default Exercises;
