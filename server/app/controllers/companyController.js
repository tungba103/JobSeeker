var Company = require('../model/companyModel');

exports.getAllCompany = (req, res) => {
  Company.getAll((data) => {
    res.send(data);
  });
};
exports.getCompany = (req, res) => {
  Company.getByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteCompany = (req, res) => {
  Company.deleteByUsername(req.params.username);
  res.send('Deleted Company');
};
exports.createCompany = (req, res) => {
  Company.create(req.body, (data) => {
    res.send(data);
  });
};
exports.updateCompany = (req, res) => {
  Company.update(req.body, (data) => {
    res.send(data);
  });
};
