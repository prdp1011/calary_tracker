import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  noOfCal: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_on: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  user_id: {
    type: String
  },
});

module.exports = mongoose.model('Item', ItemSchema);
