const { gql } = require('apollo-server');

const typeDefs = gql`
  type Exercise {
    id: String
    name: String
  }
  type Equipment {
    id: Int!
    name: String
  }
  type Muscle {
    id: Int!
    name: String
  }
  type Query {
    exercises: [Exercise]
    muscles: [Muscle]
    equipment: [Equipment]
    exercise(id: ID): Exercise
    muscle(id: ID): Muscle
    equipmentById(id: ID): Equipment
  }
  type Mutation {
    createExercise: Exercise
    createMuscle: Muscle
    createEquipment: Equipment
  }
`;

module.exports = typeDefs;
