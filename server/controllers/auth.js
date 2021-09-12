import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import config from '../config';
import response from '../helpers/response';
const User = mongoose.model('User');


const privateKey = config.key.privateKey;
const tokenExpireInMinutes = config.key.tokenExpireInMinutes;

exports.authenticate = async function(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        response.sendUnauthorized(res, 'Authentication failed.');
      } else {
        user.verifyPassword(req.body.password, function(err, isMatch) {
          if (isMatch) {
            const token = jwt.sign(user.getTokenData(), privateKey, {
              expiresIn: tokenExpireInMinutes
            });
            return res.cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            })
            .json({ message: "Logged in" });
          } else {
            response.sendUnauthorized(res, 'Authentication failed.');
          }
        });
      }
    } catch (error) {
      response.sendBadRequest(error, 'caught an Error');
    }
}

exports.verifyToken = function(req, res, next) {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, privateKey, function(err, decoded) {
      if (err) {
        response.sendUnauthorized(res, 'Failed to authenticate token.');
      } else {
        req.currentUserId = decoded.id;
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

