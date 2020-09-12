
const resolvers = {
    Query: {
      exercises: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllExercises();
      },
      muscles: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllMuscleGroups();
      },
      equipment: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllEquipment();
      },
      exercise: async (_source, {id}, { dataSources }) => {
        return await dataSources.wger.getExercise(id);
      },
      equipmentById: async (_source, { id }, { dataSources }) => {
        return await dataSources.wger.getEquipment(id);
      },
      muscle: async (_source, { id }, { dataSources }) => {
        return await dataSources.wger.getMuscle(id);
      },
    },
    Mutation: {
      createExercise: (exercise) => [exercise],
      createMuscle: (muscle) => [muscle],
      createEquipment: (equipment) => [equipment]
    }
  
  };

  module.exports = resolvers;