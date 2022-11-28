const db = require('../common/connect');
const Company = (company) => {};

Company.getAll = (result) => {
  db.query('SELECT * from company', (err, company) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    } else result(company);
  });
};

Company.getByUsername = (username, result) => {
  db.query(`SELECT * from company where username = '${username}'`, (err, company) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + company);
      result(company);
    }
  });
};

Company.deleteByUsername = (username) => {
  db.query(`Delete from company where username ='${username}'`, (err, company) => {
    if (err) {
      console.log('error: ', err);
      return;
    } else {
      console.log('Deleted company');
    }
  });
};

Company.create = (ac, result) => {
  db.query(`INSERT INTO company (username) VALUES ('${ac.username}')`, (err, company) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      result(company);
    }
  });
};

Company.update = (ac, result) => {
  db.query(
    'UPDATE company SET name=?, image=?, email=?, location=?, jobsMain=?, contactInfo=?, intro=?, offeringJob =?, pendingCandidate=?, appliedCandidate=? where username =?',
    [ac.name, ac.image, ac.email, ac.location, ac.jobsMain, ac.contactInfo, ac.intro, ac.offeringJob, ac.appliedCandidate, ac.pendingCandidate, ac.username],
    (err, company) => {
      if (err) {
        console.log('error: ', err);
        result(null);
        return;
      } else {
        result(company);
      }
    },
  );
};

module.exports = Company;
