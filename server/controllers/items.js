import response from '../helpers/response';
import config from '../config';
const Item = config.Item;

exports.list = function(req, res) {
  console.log(req.currentUser);
  const user_id = req.params.user_id;
   const existing_user_data = Item.find(li => li.user_id === user_id);
   if(!existing_user_data){
    res.json([]);
   }
   res.json(existing_user_data);
};

exports.create = function(req, res) {
  console.log(req.currentUser);
    const user_id = req.body.user_id;
    req.body._id = config.id('item');

    const existing_user_data = Item.find(li => li.user_id === user_id);
    if(existing_user_data){
      req.body.record_id = existing_user_data.items.length + 1;
      existing_user_data.items.push(req.body);
    } else {
      req.body.record_id = 1;
      Item.push({user_id, items: [req.body] })
    }
    response.sendCreated(res, {result: req.body});
};

exports.read = function(req, res) {
  const id = req.params.id;
  const user_id = req.params.user_id;
  const existing_user_data = Item.find(li => li.user_id === user_id);
  const item = existing_user_data.items.find(li => li.id === id)
  if (!item) return response.sendNotFound(res);
  res.json(item);
};

exports.update = function(req, res) {
  const id = req.params.id;
  const user_id = req.params.user_id;
  const existing_user_data = Item.find(li => li.user_id === user_id);
  const idx = existing_user_data.items.findIndex(li => li.id === id)
  if (idx === -1) return response.sendBadRequest(res, 'Not Found');
  existing_user_data.items[idx] = req.body
  res.json(existing_user_data.items[idx]);
};

exports.delete = function(req, res) {
  const id = req.params.id;
  const user_id = req.params.user_id;
  const existing_user_data = Item.find(li => li.user_id === user_id);
  existing_user_data.items = existing_user_data.items.filter(li => li.id !== id)
  res.json(existing_user_data);
};
