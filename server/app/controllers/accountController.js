var Account = require('../model/accountModel');

exports.getAllAccount = (req, res) => {
  Account.getAll((data) => {
    res.send(data);
  });
};

exports.getAccountById = (req, res) => {
  const idCheck = req.params.id;
  console.log(idCheck);
  Account.getById(idCheck, (data) => {
    res.send(data);
  });
};
exports.getAccountByUsername = (req, res) => {
  const usernameCheck = req.params.username;
  console.log(usernameCheck);
  Account.getByUsername(usernameCheck, (data) => {
    res.send(data);
  });
};
exports.deleteAccount = (req, res) => {
  const usernameCheck = req.params.username;
  Account.delete(usernameCheck, (data) => {
    res.send(data);
  });
};

exports.createAccount = (req, res) => {
  var ac = req.body;
  Account.create(ac, (data) => {
    res.send(data);
  });
};
exports.updateAccount = (req, res) => {
  var ac = req.body;
  Account.update(ac, (data) => {
    res.send(data);
  });
};
