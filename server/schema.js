const { gql } = require('apollo-server');

const typeDefs = gql`
  type Exercise {
    name: String
  }
  type Equipment {
    name: String
  }
  type Muscle {
    name: String
  }
  type Query {
    exercises: [Exercise]
    muscles: [Muscle]
    equipment: [Equipment]
  }
  type Mutation {
    createExercise: Exercise
    createMuscle: Muscle
    createEquipment: Equipment
  }
`;

module.exports = typeDefs;
