const db = require('../common/connect');
const Tag = (tag) => {};

Tag.getAll = (result) => {
  db.query('SELECT * from tag', (err, tag) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    } else result(tag);
  });
};

Tag.create = (name) => {
  db.query(`INSERT INTO tag (name) VALUES ( '${name}')`, (err, tag) => {
    if (err) {
      console.log('error: ', err);
      return;
    } else {
      console.log('create tag');
    }
  });
};

module.exports = Tag;
