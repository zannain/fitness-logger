const mongoose = require('mongoose');
const { Schema } = mongoose;

const muscleGroupSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const MuscleGroup = mongoose.model('muscle_group', muscleGroupSchema);

module.exports = {
  MuscleGroup
};