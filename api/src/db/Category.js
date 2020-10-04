const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const Category = mongoose.model('category', categorySchema);

module.exports = {
  Category
};
