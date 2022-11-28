var Tag = require('../model/tagModel');

exports.getAllTag = (req, res) => {
  Tag.getAll((data) => {
    res.send({ result: data });
  });
};
exports.addTag = (req, res) => {
  Tag.create(req.params.name);
  res.send('Created Tag');
};
