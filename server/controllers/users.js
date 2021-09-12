import mongoose from 'mongoose';
import {authenticate} from './auth';
import response from '../helpers/response';

const User = mongoose.model('User');


exports.create = async function(req, res) {
  try {
    const existed = await User.findOne({email: req.body.email});
    if(existed){
      return  response.sendBadRequest(res, 'Existing User');
    }
    const newUser = new User(req.body);
    await newUser.save();
    await authenticate(req, res);
  } catch (error) {
    response.sendBadRequest(res, error)
  }
};






