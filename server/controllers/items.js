import mongoose from 'mongoose';
import response from '../helpers/response';

const Item = mongoose.model('Item');

const getList = async(req, res) => {
  try {
    console.log(req.currentUserId);
    const user_id = req.currentUserId;
     const existing_user_data = await Item.find({user_id: user_id});
     if(!existing_user_data){
      res.json({items: []});
     }
     res.json({items:existing_user_data}); 
  } catch (error) {
    response.sendBadRequest(res, error);
  }

}

exports.list = async function(req, res) {
  await getList(req, res);
};

exports.create = async function(req, res) {
    try {
      req.body.user_id = req.currentUserId;
      const item = new Item(req.body);
      const result = await item.save()
      response.sendCreated(res, result);
    } catch (error) {
      response.sendBadRequest(res, error);
    }
    
};

exports.update = async function(req, res) {
  try {
    const result = await Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(result);
  } catch (error) {
    response.sendBadRequest(res, error);
  }
};

exports.delete = async function(req, res) {
  await Item.deleteOne({ _id: req.params.id });
  await getList(req, res);
};
