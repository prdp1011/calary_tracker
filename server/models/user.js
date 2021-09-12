import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.getTokenData = function() {
  return {
    id: this.id,
    email: this.email
  }
};

UserSchema.methods.verifyPassword = function(candidatePassword, callback) {
  if(candidatePassword === this.password)
       callback(null, true);
  return callback(false, false);
};
module.exports = mongoose.model('User', UserSchema);