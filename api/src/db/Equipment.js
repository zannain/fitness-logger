const mongoose = require('mongoose');
const { Schema } = mongoose;

const EquipmentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const Equipment = mongoose.model('equipment', EquipmentSchema);

module.exports = {
  Equipment,
};
