const db = require('../common/connect');
const Job = (job) => {};

Job.getAll = (result) => {
  db.query('SELECT * from job', (err, job) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    } else result(job);
  });
};

Job.getById = (idJob, result) => {
  db.query(`SELECT * from job where idJob = ${idJob}`, (err, job) => {
    if (err) {
      console.log('error: ', err);
      result(null);
      return;
    } else {
      console.log('hello: ' + job);
      result(job);
    }
  });
};

Job.delete = (idJob) => {
  db.query(`Delete from job where idJob = ${idJob}`, (err, job) => {
    if (err) {
      console.log('error: ', err);
      return;
    } else {
      console.log('hello: ' + job);
      return;
    }
  });
};

Job.create = (ac, result) => {
  db.query(
    `INSERT INTO job (name,salary,level, typeOfTime, typeOfWork, tags, location,time,description, fromCompany,status) VALUES ('${ac.name}', '${ac.salary}', '${ac.level}', '${ac.typeOfTime}','${ac.typeOfWork}','${ac.tags}','${ac.location}','${ac.time}','${ac.description}','${ac.fromCompany}','${ac.status}')`,
    (err, job) => {
      if (err) {
        console.log('error: ', err);
        result(null);
        return;
      } else {
        result(job);
      }
    },
  );
};

Job.update = (ac, result) => {
  db.query(
    'UPDATE job SET name=?, salary=?,level=?, typeOfTime=?, typeOfWork=?, tags=?, location=?,time=?,description=?, fromCompany=?,pendingCandidate =?, appliedCandidate=?, status=?  WHERE idJob =?',
    [ac.name, ac.salary, ac.level, ac.typeOfTime, ac.typeOfWork, ac.tags, ac.location, ac.time, ac.description, ac.fromCompany, ac.pendingCandidate, ac.appliedCandidate, ac.status, ac.idJob],
    (err, job) => {
      if (err) {
        console.log('error: ', err);
        result(null);
        return;
      } else {
        result(job);
      }
    },
  );
};

module.exports = Job;
