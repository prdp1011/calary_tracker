import response from '../helpers/response';
import config from '../config';

const User = config.User;

exports.read = function(req, res) {
  const {email, password} = req.body;
  const existing = User.find(user => user.email === email && user.password === password) ;
  if (!existing) 
     return response.sendNotFound(res);
  res.json(existing);
};

exports.create = function(req, res) {
  const newUser = req.body;
  newUser._id = config.id('user');
  User.push(newUser); 
  response.sendCreated(res, newUser);

};






