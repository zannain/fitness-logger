const resolvers = {
    Query: {
      exercises: () => [],
      muscles: () => [],
      equipment: () => []
    },
    Mutation: {
      createExercise: (exercise) => [exercise],
      createMuscle: (muscle) => [muscle],
      createEquipment: (equipment) => [equipment]
    }
  
  };

  module.exports = resolvers;