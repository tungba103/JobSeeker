const db = require('../common/connect');
const Account = (account) => {};

Account.getAll = (result) => {
  db.query('SELECT * from account', (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    } else result(account);
  });
};

Account.getById = (id, result) => {
  db.query(`SELECT * from account where idAccount = ${id}`, (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + account);
      result(account);
    }
  });
};
Account.getByUsername = (username, result) => {
  db.query(`SELECT * from account where username = "${username}"`, (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + account);
      result(account);
    }
  });
};

Account.delete = (username, result) => {
  db.query(`Delete from account where username ='${username}'`, (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + account);
      result(account);
    }
  });
};

Account.create = (ac, result) => {
  db.query(`INSERT INTO account (username, password, role) VALUES ('${ac.username}', '${ac.password}', '${ac.role}')`, (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      result(account);
    }
  });
};

Account.update = (ac, result) => {
  db.query('UPDATE account SET password=?, role=? where username =?', [ac.password, ac.role, ac.username], (err, account) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      result(account);
    }
  });
};

module.exports = Account;
