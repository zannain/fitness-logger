
const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  muscles: [{ type: Schema.Types.ObjectId, ref: 'muscle_group' }],
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
});

const muscleGroupSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const equipmentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});
const Exercises = mongoose.model('exercises', exerciseSchema); 
const MuscleGroup = mongoose.model('muscle_group', muscleGroupSchema);
const Equipment = mongoose.model('equipment', equipmentSchema);
const Category = mongoose.model('category', categorySchema);
module.exports = {
  Exercises,
  MuscleGroup,
  Equipment,
  Category
};