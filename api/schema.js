const { gql } = require('apollo-server');
const typeDefs = gql`
  type Exercise {
    id: String
    name: String
    category: Category
    muscles: [Muscle!]
  }
  type Equipment {
    id: Int!
    name: String
  }
  type Muscle {
    id: Int!
    name: String
  }
  type Category {
    id: Int!
    name: String
  }
  type Query {
    exercises: [Exercise]
    muscles: [Muscle]
    equipment: [Equipment]
    exercise(name: String!): Exercise
    muscle(id: ID): Muscle
    equipmentById(id: ID): Equipment
    categories: [Category],
    categoryById(name: String!): Category,
  }
  type Mutation {
    createExercise(name: String!, category: String!, muscles: String!): Exercise
    createMuscle(name: String): Muscle
    createEquipment(name: String): Equipment
    createCategory(name: String): Category
  }
`;

module.exports = typeDefs;
