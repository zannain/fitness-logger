const { Exercises, MuscleGroup, Equipment, Category } = require('./db/index');

const resolvers = {
    Query: {
      categories: async (_source, _args, { dataSources }) => {
        let data = await dataSources.wger.getExerciseCategories();
        return data;
      },
      exercises: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllExercises();
      },
      muscles: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllMuscleGroups();
      },
      equipment: async (_source, _args, { dataSources }) => {
        return await dataSources.wger.getAllEquipment();
      },
      exercise: async (_source, {name}, { dataSources }) => {
        let response = await Exercises
          .findOne({name})
          .populate(['category', 'muscles'])
          .exec((err, ex) => {
            if (err) console.log(err);
            return ex;
          });
          console.log(await response);
          return await response;
      },
      equipmentById: async (_source, { id }, { dataSources }) => {
        return await dataSources.wger.getEquipment(id);
      },
      muscle: async (_source, { id }, { dataSources }) => {
        return await dataSources.wger.getMuscle(id);
      },
      categoryById: async(_source, {name}) => {
        try {
          let categoryId = await Category.findOne({name});
          console.log(categoryId._id);
        } catch(e) {
          return e.message;
        }
      }
    },
    Mutation: {
      createExercise: async (_source, { name, category, muscles }) => {
        try {
          let validCategory = await Category.findOne({name: 'Upper Body'});
          let validMuscle = await MuscleGroup.findOne({name: 'Biceps'});
          console.log(validMuscle, validCategory);
          if (validCategory && validMuscle) {
            var newExercise = new Exercises({
              name,
              category: validCategory._id,
              muscles: validMuscle._id,
            });
            newExercise.save(err => {
              if (err) console.log(err);
            });
          }
        } catch(e) {
          return e.message;
        }
      },
      createMuscle: async (_source, { name }) => {
        try {
          let response = await (await MuscleGroup.create({name})).save();
          return response;
        } catch(e) {
          return e.message;
        }
      },
      createEquipment: async (_source, { name }) => {
        try {
          let response = await (await Equipment.create({name})).save();
          return response;
        } catch(e) {
          return e.message;
        }
      },
      createCategory: async (_source, { name }) => {
        try {
          let response = await (await Category.create({name})).save();
          return response;
        } catch(e) {
          return e.message;
        }
      },
    }
  
  };

  module.exports = resolvers;