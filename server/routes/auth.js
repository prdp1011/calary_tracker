import express from 'express';

import auth from '../controllers/auth';

const routes = express.Router();

routes.post('/login', auth.authenticate);

routes.post('/logout', auth.verifyToken, auth.logout);


module.exports = routes;
