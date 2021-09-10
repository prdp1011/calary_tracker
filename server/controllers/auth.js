import jwt from 'jsonwebtoken';
import config from '../config';
import response from '../helpers/response';

const User = config.User;

const privateKey = config.key.privateKey;
const tokenExpireInMinutes = config.key.tokenExpireInMinutes;

exports.authenticate = function(req, res) {
    const user = User.find(li => li.email === req.body.email);
    if (!user) {
      response.sendUnauthorized(res, 'Authentication failed.');
    } else {
      const {_id, email} = User.find(li => li.password === req.body.password);
        if (_id) {
          const token = jwt.sign({_id, email}, privateKey, {
            expiresIn: tokenExpireInMinutes
          });
          res.cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          }).json({
            success: true,
            message: "Logged in successfully"
          });
        } else {
          response.sendUnauthorized(res, 'Authentication failed.');
        }
    }
}

exports.verifyToken = function(req, res, next) {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, privateKey, function(err, decoded) {
      if (err) {
        response.sendUnauthorized(res, 'Failed to authenticate token.');
      } else {
        req.currentUserId = decoded._id;
        next();
      }
    });
  } else {
    response.sendUnauthorized(res, 'No token provided.');
  }
};

exports.logout = function(req, res, next) {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out"});
}

