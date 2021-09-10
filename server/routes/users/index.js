import express from 'express';

import users from '../../controllers/users';
import auth from '../../controllers/auth';
import items from './items';

const routes  = express.Router();

routes.use('/items', auth.verifyToken , items);

routes.post('/', users.create);



module.exports = routes;
