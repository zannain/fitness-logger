const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  name: String,
  muscles: [{ type: Schema.Types.ObjectId, ref: 'muscle_group' }],
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }],
});

const Exercises = mongoose.model('exercises', ExerciseSchema);

module.exports = {
  Exercises
};
