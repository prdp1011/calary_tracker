import express from 'express';
import items from '../../controllers/items';

const routes  = express.Router({ mergeParams: true });

routes.route('/')
  .get(items.list)
  .post(items.create);

routes.route('/:id')
  .put(items.update)
  .delete(items.delete);

module.exports = routes;
